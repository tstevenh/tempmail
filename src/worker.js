// Temp Mail — Worker backend (HTML, API, email handler, cron)
// =====================================================================
// Features:
//   - Auto-forward to Gmail/Outlook (message.forward by rule)
//   - Fast engine (get/put/delete only, no KV list())
//   - Multi-domain & subdomain (env domains + dynamic domains from dashboard)
//   - Security: rate limit, banned IP, blocked sender, live traffic log
//   - Bot integration: generic webhook + Telegram + API key (REST /api/v1)
//   - Admin dashboard (all settings via /api/admin/settings)
//   - Optional PIN/password lock + private portal mode
//   - Scheduled (cron) and manual auto-cleanup
//   - SEO: server-rendered pages, robots.txt, sitemap.xml, ads.txt, KV-backed blog
//
// D1 storage:
//   mailboxes         -> known addresses and receive timestamps
//   messages          -> one row per received email
//   traffic_events    -> the 250 most recent admin-visible events
//
// KV storage (intentionally retained only for settings, blog content, and the
// seven-day mailbox recovery archive used during the D1 cutover):
//   inbox:<address>  -> legacy JSON array of messages
//   addrs            -> legacy JSON address index
//   settings:v1      -> JSON runtime config (managed from the dashboard)
//   post:<slug>      -> JSON blog post; posts:index -> JSON list of post metas
// =====================================================================
import PostalMime from "postal-mime";
import PAGE from "../public/app.html";
import INBOX from "../public/inbox.html";
import DASHBOARD from "../public/dashboard.html";
import { STATIC_PAGES, layout, blogIndexPage, blogPostPage, notFoundPage } from "./content.js";
import { LANDING_PAGES } from "./content-landing.js";
import { PLATFORM_LANDING_PATHS } from "./platform-landing-pages.js";
import { parseLocale, LIVE_LOCALES, localizedPath, hreflangLinks, localeStrings, switcherItems, LOCALE_HREFLANG } from "./i18n.js";
import { homepageLocale, localizedBlogPost, localizedBlogPosts } from "./localized-content.js";
import { englishBlogPost, englishBlogPosts } from "./blog-posts-en.js";
import { canonicalProductionUrl } from "./canonical-url.mjs";
import { OG_PNG_B64 } from "./og-image.js";

const FAVICON_SVG = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" role="img" aria-label="Temp Mail"><rect width="64" height="64" rx="14" fill="#d6452c"/><g fill="none" stroke="#fdf6ee" stroke-width="3.4" stroke-linejoin="round" stroke-linecap="round"><rect x="13" y="20" width="38" height="26" rx="3"/><path d="M14.5 22.5 32 35l17.5-12.5"/></g><g stroke="#fdf6ee" stroke-width="2.2" stroke-linecap="round" opacity="0.92"><path d="M40 12.5h14M40 16.5h11M40 8.5h9"/></g></svg>`;

const INBOX_PREFIX = "inbox:";
const ADDR_INDEX_KEY = "addrs";
const SETTINGS_KEY = "settings:v1";
const MAX_PER_INBOX = 300;
const MAX_TRAFFIC = 250;
const DEFAULT_RETENTION_DAYS = 7;
const D1_BATCH_SIZE = 50;
const LEGACY_RECOVERY_TTL_SECONDS = 7 * 24 * 60 * 60;
const KEY_SEP = "::";

// ---------------------------------------------------------------------
// Default settings (dipakai bila KV belum punya settings)
// ---------------------------------------------------------------------
function defaultSettings(env) {
  return {
    appearance: {
      siteName: "Open Temp Mail",
      tagline: "Free temporary & disposable email — no sign-up.",
      logoUrl: env.LOGO_URL || "https://i.imgur.com/XiiKJXd.png",
      primaryColor: "#0b0b0b",
      accentColor: "#0b0b0b",
      language: "id",
    },
    access: {
      sitePin: "134326",
      requirePin: false, // public temp-mail: no PIN wall (toggle on in dashboard for private mode)
      portalMode: false,
      portalNote: "Private access — khusus member.",
    },
    seo: {
      siteUrl: env.SITE_URL || "https://example.com", // canonical base; set SITE_URL in wrangler.toml
      adsensePubId: env.ADSENSE_PUB_ID || "", // e.g. pub-1234567890123456 (without "ca-")
    },
    domains: [], // domain tambahan (selain env MAIL_DOMAINS)
    forwarding: {
      enabled: false,
      rules: [], // { match: "all"|"domain"|"address", value: "", to: "tujuan@gmail.com" }
    },
    webhooks: [], // { id, label, url, enabled }
    telegram: { enabled: false, botToken: "", chatId: "" },
    apiKeys: [], // { key, label, createdAt }
    security: {
      bannedIps: [],
      blockedSenders: [],
    },
    cleanup: { enabled: true, days: DEFAULT_RETENTION_DAYS, maxPerInbox: MAX_PER_INBOX },
  };
}

function mergeSettings(base, saved) {
  if (!saved || typeof saved !== "object") return base;
  const out = { ...base };
  for (const k of Object.keys(base)) {
    if (saved[k] === undefined) continue;
    if (Array.isArray(base[k])) out[k] = Array.isArray(saved[k]) ? saved[k] : base[k];
    else if (base[k] && typeof base[k] === "object") out[k] = { ...base[k], ...saved[k] };
    else out[k] = saved[k];
  }
  return out;
}

async function getSettings(env) {
  const base = defaultSettings(env);
  try {
    const raw = await env.TEMPMAIL_KV.get(SETTINGS_KEY);
    if (!raw) return base;
    return mergeSettings(base, JSON.parse(raw));
  } catch {
    return base;
  }
}

async function saveSettings(env, settings) {
  await env.TEMPMAIL_KV.put(SETTINGS_KEY, JSON.stringify(settings));
}

// ---------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------
function json(data, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: {
      "content-type": "application/json; charset=utf-8",
      "cache-control": "no-store",
      "access-control-allow-origin": "*",
      "access-control-allow-methods": "GET, POST, DELETE, OPTIONS",
      "access-control-allow-headers": "Content-Type, x-api-key",
    },
  });
}

function envDomains(env) {
  const raw = env.MAIL_DOMAINS || env.MAIL_DOMAIN || "example.com";
  return raw.split(",").map((d) => d.trim().toLowerCase()).filter(Boolean);
}

function allDomains(env, settings) {
  const extra = (settings.domains || []).map((d) => String(d).trim().toLowerCase()).filter(Boolean);
  return [...new Set([...envDomains(env), ...extra])];
}

// Supports domains & subdomains: an address matches if it ends with @domain.
function isAllowedAddress(address, domains) {
  return domains.some((domain) => address.endsWith("@" + domain));
}

function normalizeAddress(input) {
  let s = String(input || "").trim().toLowerCase();
  const m = s.match(/<([^>]+)>/);
  if (m) s = m[1].trim();
  return s;
}

function dashboardPassword(env) {
  return String(env.DASHBOARD_PASSWORD || "190620").trim();
}

function logoUrl(env, settings) {
  // env.LOGO_URL diprioritaskan agar logo dari wrangler.toml selalu menang,
  // walau KV lama masih menyimpan logoUrl versi sebelumnya.
  return env.LOGO_URL || (settings && settings.appearance && settings.appearance.logoUrl) || "https://i.imgur.com/XiiKJXd.png";
}

function isOwner(url, env) {
  const pw = (url.searchParams.get("pw") || "").trim();
  return pw === dashboardPassword(env);
}

function clientIp(request) {
  return (request.headers.get("cf-connecting-ip") || request.headers.get("x-real-ip") || "").trim();
}

// ---- Mailbox storage ----
// MAIL_STORAGE_MODE=kv exists only for the migration release. D1 is the
// authoritative default and legacy inbox values are never deleted by Worker
// code, giving the owner a seven-day recovery archive after cutover.
function isLegacyMailboxMode(env) {
  return String(env.MAIL_STORAGE_MODE || "d1").trim().toLowerCase() === "kv";
}

function requireD1(env) {
  if (!env.TEMPMAIL_DB) throw new Error("TEMPMAIL_DB binding is missing");
  return env.TEMPMAIL_DB;
}

function messageRow(row) {
  return {
    id: row.id,
    to: row.address,
    from: row.sender,
    fromName: row.sender_name || "",
    subject: row.subject || "(no subject)",
    text: row.body_text || "",
    html: row.body_html || "",
    date: row.received_at,
  };
}

async function readLegacyInbox(env, address) {
  const raw = await env.TEMPMAIL_KV.get(INBOX_PREFIX + address);
  if (!raw) return [];
  try { const a = JSON.parse(raw); return Array.isArray(a) ? a : []; } catch { return []; }
}

async function writeLegacyInbox(env, address, messages, cap) {
  const key = INBOX_PREFIX + address;
  if (!messages || !messages.length) { await env.TEMPMAIL_KV.delete(key); return; }
  let list = messages;
  const max = cap || MAX_PER_INBOX;
  if (list.length > max) list = list.slice(list.length - max);
  await env.TEMPMAIL_KV.put(key, JSON.stringify(list));
}

async function getLegacyAddressIndex(env) {
  const raw = await env.TEMPMAIL_KV.get(ADDR_INDEX_KEY);
  if (!raw) return [];
  try { const a = JSON.parse(raw); return Array.isArray(a) ? a : []; } catch { return []; }
}

async function addAddressToLegacyIndex(env, address) {
  const idx = await getLegacyAddressIndex(env);
  if (!idx.includes(address)) {
    idx.push(address);
    await env.TEMPMAIL_KV.put(ADDR_INDEX_KEY, JSON.stringify(idx));
  }
}

async function removeAddressFromLegacyIndex(env, address) {
  const idx = await getLegacyAddressIndex(env);
  const next = idx.filter((a) => a !== address);
  if (next.length !== idx.length) await env.TEMPMAIL_KV.put(ADDR_INDEX_KEY, JSON.stringify(next));
}

async function readD1Inbox(env, address) {
  const { results = [] } = await requireD1(env)
    .prepare("SELECT id, address, sender, sender_name, subject, body_text, body_html, received_at FROM messages WHERE address = ? ORDER BY received_at DESC")
    .bind(address)
    .all();
  return results.map(messageRow);
}

async function readInbox(env, address) {
  return isLegacyMailboxMode(env) ? readLegacyInbox(env, address) : readD1Inbox(env, address);
}

async function getD1AddressIndex(env) {
  const { results = [] } = await requireD1(env)
    .prepare("SELECT address FROM mailboxes ORDER BY COALESCE(last_received_at, created_at) DESC")
    .all();
  return results.map((row) => row.address);
}

async function getAddressIndex(env) {
  return isLegacyMailboxMode(env) ? getLegacyAddressIndex(env) : getD1AddressIndex(env);
}

async function countD1Messages(env, address) {
  const row = await requireD1(env).prepare("SELECT COUNT(*) AS total FROM messages WHERE address = ?").bind(address).first();
  return Number(row?.total || 0);
}

async function storeD1Message(env, record, maxPerInbox = MAX_PER_INBOX) {
  const db = requireD1(env);
  const receivedAt = record.date || new Date().toISOString();
  await db.batch([
    db.prepare("INSERT INTO mailboxes (address, created_at, last_received_at) VALUES (?, ?, ?) ON CONFLICT(address) DO UPDATE SET last_received_at = MAX(COALESCE(mailboxes.last_received_at, ''), excluded.last_received_at)")
      .bind(record.to, receivedAt, receivedAt),
    db.prepare("INSERT OR IGNORE INTO messages (id, address, sender, sender_name, subject, body_text, body_html, received_at) VALUES (?, ?, ?, ?, ?, ?, ?, ?)")
      .bind(record.id, record.to, record.from || "", record.fromName || "", record.subject || "(no subject)", record.text || "", record.html || "", receivedAt),
  ]);
  const cap = Math.max(1, Number(maxPerInbox) || MAX_PER_INBOX);
  await db.prepare("DELETE FROM messages WHERE id IN (SELECT id FROM messages WHERE address = ? ORDER BY received_at DESC LIMIT -1 OFFSET ?)")
    .bind(record.to, cap)
    .run();
}

async function storeMessage(env, record, maxPerInbox) {
  if (isLegacyMailboxMode(env)) {
    const inbox = await readLegacyInbox(env, record.to);
    inbox.push(record);
    await writeLegacyInbox(env, record.to, inbox, maxPerInbox);
    await addAddressToLegacyIndex(env, record.to);
    return;
  }
  await storeD1Message(env, record, maxPerInbox);
}

async function deleteStoredMessage(env, address, id, maxPerInbox) {
  if (isLegacyMailboxMode(env)) {
    const inbox = await readLegacyInbox(env, address);
    await writeLegacyInbox(env, address, inbox.filter((message) => message.id !== id), maxPerInbox);
    return;
  }
  await requireD1(env).prepare("DELETE FROM messages WHERE address = ? AND id = ?").bind(address, id).run();
}

async function clearStoredMailbox(env, address) {
  if (isLegacyMailboxMode(env)) {
    await env.TEMPMAIL_KV.delete(INBOX_PREFIX + address);
    await removeAddressFromLegacyIndex(env, address);
    return;
  }
  const db = requireD1(env);
  await db.batch([
    db.prepare("DELETE FROM messages WHERE address = ?").bind(address),
    db.prepare("DELETE FROM mailboxes WHERE address = ?").bind(address),
  ]);
}

async function readAllMessages(env) {
  if (isLegacyMailboxMode(env)) {
    const messages = [];
    for (const address of await getLegacyAddressIndex(env)) {
      for (const message of await readLegacyInbox(env, address)) messages.push(withKey(message, address));
    }
    return messages.sort((a, b) => new Date(b.date) - new Date(a.date));
  }
  const { results = [] } = await requireD1(env)
    .prepare("SELECT id, address, sender, sender_name, subject, body_text, body_html, received_at FROM messages ORDER BY received_at DESC")
    .all();
  return results.map((row) => withKey(messageRow(row), row.address));
}

async function clearAllStoredMail(env) {
  if (isLegacyMailboxMode(env)) {
    let deleted = 0;
    for (const address of await getLegacyAddressIndex(env)) {
      deleted += (await readLegacyInbox(env, address)).length;
      await env.TEMPMAIL_KV.delete(INBOX_PREFIX + address);
    }
    await env.TEMPMAIL_KV.delete(ADDR_INDEX_KEY);
    return deleted;
  }
  const result = await requireD1(env).prepare("DELETE FROM messages").run();
  await requireD1(env).prepare("DELETE FROM mailboxes").run();
  return Number(result.meta?.changes || 0);
}

function withKey(message, address) {
  return { ...message, to: message.to || address, _key: (message.to || address) + KEY_SEP + message.id };
}

function parseKey(key) {
  const i = String(key || "").indexOf(KEY_SEP);
  if (i < 0) return { address: "", id: String(key || "") };
  return { address: key.slice(0, i), id: key.slice(i + KEY_SEP.length) };
}

// ---- Live traffic log (D1, capped at 250 rows) ----
async function logTraffic(env, entry) {
  try {
    const db = requireD1(env);
    await db.batch([
      db.prepare("INSERT INTO traffic_events (occurred_at, type, ip, detail) VALUES (?, ?, ?, ?)")
        .bind(new Date().toISOString(), String(entry.type || "event"), entry.ip || null, String(entry.detail || "")),
      db.prepare(`DELETE FROM traffic_events WHERE id NOT IN (SELECT id FROM traffic_events ORDER BY id DESC LIMIT ${MAX_TRAFFIC})`),
    ]);
  } catch { /* abaikan */ }
}

// ---- Security checks ----
function isBannedIp(settings, ip) {
  if (!ip) return false;
  return (settings.security.bannedIps || []).map((x) => String(x).trim()).includes(ip);
}

function isBlockedSender(settings, from) {
  const f = String(from || "").toLowerCase();
  if (!f) return false;
  return (settings.security.blockedSenders || []).some((b) => {
    b = String(b).trim().toLowerCase();
    if (!b) return false;
    if (b.startsWith("@")) return f.endsWith(b); // block seluruh domain
    return f === b;
  });
}

function checkApiKey(url, request, settings) {
  const key = (url.searchParams.get("apikey") || request.headers.get("x-api-key") || "").trim();
  if (!key) return false;
  return (settings.apiKeys || []).some((k) => k && k.key === key);
}

// ---- Browser inbox session (Turnstile + signed session cookie) ----
const INBOX_SESSION_COOKIE = "__Host-inbox_session";

function base64Url(bytes) {
  let binary = "";
  for (const byte of bytes) binary += String.fromCharCode(byte);
  return btoa(binary).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/g, "");
}

function base64UrlBytes(value) {
  const padded = String(value || "").replace(/-/g, "+").replace(/_/g, "/") + "===".slice((String(value || "").length + 3) % 4);
  const binary = atob(padded);
  return Uint8Array.from(binary, (char) => char.charCodeAt(0));
}

function requestCookie(request, name) {
  const pairs = String(request.headers.get("cookie") || "").split(";");
  for (const pair of pairs) {
    const index = pair.indexOf("=");
    if (index < 0) continue;
    if (pair.slice(0, index).trim() === name) return pair.slice(index + 1).trim();
  }
  return "";
}

async function inboxSessionKey(env) {
  const secret = String(env.INBOX_SESSION_SECRET || "");
  if (!secret) throw new Error("INBOX_SESSION_SECRET is missing");
  return crypto.subtle.importKey("raw", new TextEncoder().encode(secret), { name: "HMAC", hash: "SHA-256" }, false, ["sign", "verify"]);
}

async function createInboxSession(env) {
  const payload = base64Url(new TextEncoder().encode(JSON.stringify({ issuedAt: Date.now(), nonce: crypto.randomUUID() })));
  const unsigned = `v1.${payload}`;
  const signature = await crypto.subtle.sign("HMAC", await inboxSessionKey(env), new TextEncoder().encode(unsigned));
  return `${unsigned}.${base64Url(new Uint8Array(signature))}`;
}

async function hasInboxSession(request, env) {
  try {
    const value = requestCookie(request, INBOX_SESSION_COOKIE);
    const parts = value.split(".");
    if (parts.length !== 3 || parts[0] !== "v1") return false;
    const unsigned = `${parts[0]}.${parts[1]}`;
    const valid = await crypto.subtle.verify("HMAC", await inboxSessionKey(env), base64UrlBytes(parts[2]), new TextEncoder().encode(unsigned));
    if (!valid) return false;
    const payload = JSON.parse(new TextDecoder().decode(base64UrlBytes(parts[1])));
    return Number.isFinite(payload.issuedAt) && payload.issuedAt <= Date.now() + 5 * 60 * 1000;
  } catch {
    return false;
  }
}

async function verifyTurnstile(env, token, remoteIp) {
  const secret = String(env.TURNSTILE_SECRET || "");
  if (!secret) return { ok: false, error: "Turnstile is not configured" };
  if (!token) return { ok: false, error: "Turnstile token is required" };
  try {
    const body = new URLSearchParams({ secret, response: token });
    if (remoteIp) body.set("remoteip", remoteIp);
    const response = await fetch(env.TURNSTILE_VERIFY_URL || "https://challenges.cloudflare.com/turnstile/v0/siteverify", {
      method: "POST",
      headers: { "content-type": "application/x-www-form-urlencoded" },
      body,
    });
    const result = await response.json();
    const requiredHostname = String(env.TURNSTILE_EXPECTED_HOSTNAME || "").trim().toLowerCase();
    if (!result.success || (requiredHostname && String(result.hostname || "").toLowerCase() !== requiredHostname)) {
      return { ok: false, error: "Turnstile verification failed" };
    }
    return { ok: true };
  } catch {
    return { ok: false, error: "Turnstile verification unavailable" };
  }
}

function inboxSessionCookie(value) {
  return `${INBOX_SESSION_COOKIE}=${value}; Path=/; HttpOnly; Secure; SameSite=Lax`;
}

function jsonWithCookie(data, cookie, status = 200) {
  const response = json(data, status);
  response.headers.set("set-cookie", cookie);
  return response;
}

// ---- Durable Object mailbox notification hub ----
export class InboxHub {
  constructor(state) {
    this.state = state;
  }

  async fetch(request) {
    const url = new URL(request.url);
    if (request.method === "POST" && url.pathname === "/notify") {
      const payload = JSON.stringify({ type: "inbox-updated" });
      for (const socket of this.state.getWebSockets()) {
        try { socket.send(payload); } catch { socket.close(1011, "Unable to notify client"); }
      }
      return new Response(null, { status: 204 });
    }
    if (request.headers.get("Upgrade") !== "websocket") return new Response("Expected WebSocket upgrade", { status: 426 });
    const pair = new WebSocketPair();
    const [client, server] = Object.values(pair);
    this.state.acceptWebSocket(server);
    return new Response(null, { status: 101, webSocket: client });
  }

  webSocketMessage() {}
  webSocketClose() {}
  webSocketError() {}
}

async function publishInboxUpdate(env, address) {
  if (!env.INBOX_HUB) return;
  const stub = env.INBOX_HUB.get(env.INBOX_HUB.idFromName(address));
  const response = await stub.fetch("https://inbox-hub/notify", { method: "POST" });
  if (!response.ok) throw new Error(`Inbox hub notification failed (${response.status})`);
}

// ---- Notifikasi bot (webhook generic + Telegram) ----
async function notify(env, settings, record) {
  const payload = {
    id: record.id, to: record.to, from: record.from, fromName: record.fromName,
    subject: record.subject, text: record.text, html: record.html, date: record.date,
  };
  for (const w of settings.webhooks || []) {
    if (!w || !w.enabled || !w.url) continue;
    try {
      await fetch(w.url, { method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify(payload) });
    } catch (e) { console.error("webhook error", e); }
  }
  const tg = settings.telegram;
  if (tg && tg.enabled && tg.botToken && tg.chatId) {
    const text = `\uD83D\uDCE9 *${settings.appearance.siteName || "Open Temp Mail"}*\n*To:* ${record.to}\n*From:* ${record.from}\n*Subject:* ${record.subject}\n\n${(record.text || "").slice(0, 600)}`;
    try {
      await fetch("https://api.telegram.org/bot" + tg.botToken + "/sendMessage", {
        method: "POST", headers: { "content-type": "application/json" },
        body: JSON.stringify({ chat_id: tg.chatId, text, parse_mode: "Markdown", disable_web_page_preview: true }),
      });
    } catch (e) { console.error("telegram error", e); }
  }
}

// ---- Auto-forward ke Gmail/Outlook/dll ----
async function handleForward(env, message, settings, to) {
  const f = settings.forwarding;
  if (!f || !f.enabled || !Array.isArray(f.rules)) return;
  const targets = new Set();
  for (const r of f.rules) {
    if (!r || !r.to) continue;
    const match = r.match || "all";
    const val = String(r.value || "").toLowerCase();
    if (match === "all") targets.add(r.to);
    else if (match === "domain" && to.endsWith("@" + val)) targets.add(r.to);
    else if (match === "address" && to === val) targets.add(r.to);
  }
  for (const t of targets) {
    try {
      await message.forward(t);
      await logTraffic(env, { type: "forward", detail: `Forwarded ${to} → ${t}` });
    } catch (e) {
      await logTraffic(env, { type: "error", detail: `Forward failed to ${t} (destination must be verified in Cloudflare Email Routing)` });
    }
  }
}

async function streamToArrayBuffer(stream, size) {
  const reader = stream.getReader();
  const chunks = [];
  let received = 0;
  while (true) {
    const { done, value } = await reader.read();
    if (done) break;
    chunks.push(value);
    received += value.length;
  }
  const out = new Uint8Array(size || received);
  let offset = 0;
  for (const chunk of chunks) { out.set(chunk, offset); offset += chunk.length; }
  return out.buffer;
}

// ---- Auto cleanup (terjadwal & manual) ----
async function runCleanup(env, settingsArg) {
  const settings = settingsArg || (await getSettings(env));
  const c = settings.cleanup || {};
  if (!c.enabled) return { ran: false, removed: 0 };
  const days = Math.max(1, Number(c.days) || DEFAULT_RETENTION_DAYS);
  const cutoff = new Date(Date.now() - days * 86400000).toISOString();
  const cap = Math.max(1, Number(c.maxPerInbox) || MAX_PER_INBOX);
  let removed = 0;
  if (isLegacyMailboxMode(env)) {
    for (const address of await getLegacyAddressIndex(env)) {
      const inbox = await readLegacyInbox(env, address);
      const kept = inbox.filter((message) => String(message.date || "") >= cutoff);
      if (kept.length !== inbox.length) {
        removed += inbox.length - kept.length;
        await writeLegacyInbox(env, address, kept, cap);
        if (!kept.length) await removeAddressFromLegacyIndex(env, address);
      }
    }
  } else {
    const db = requireD1(env);
    const expired = await db.prepare("DELETE FROM messages WHERE received_at < ?").bind(cutoff).run();
    const overflow = await db.prepare("DELETE FROM messages WHERE id IN (SELECT id FROM (SELECT id, ROW_NUMBER() OVER (PARTITION BY address ORDER BY received_at DESC) AS row_number FROM messages) WHERE row_number > ?)")
      .bind(cap)
      .run();
    await db.prepare("DELETE FROM mailboxes WHERE NOT EXISTS (SELECT 1 FROM messages WHERE messages.address = mailboxes.address)").run();
    removed = Number(expired.meta?.changes || 0) + Number(overflow.meta?.changes || 0);
  }
  if (removed) await logTraffic(env, { type: "cleanup", detail: `Auto-cleanup removed ${removed} old emails (> ${days} days)` });
  return { ran: true, removed };
}

// ---- Idempotent KV → D1 mailbox migration ----
async function executeD1InChunks(db, statements) {
  for (let start = 0; start < statements.length; start += D1_BATCH_SIZE) {
    await db.batch(statements.slice(start, start + D1_BATCH_SIZE));
  }
}

async function migrateLegacyMailbox(env, address) {
  const inbox = await readLegacyInbox(env, address);
  const db = requireD1(env);
  const firstDate = inbox
    .map((message) => String(message.date || ""))
    .filter(Boolean)
    .sort()[0] || new Date().toISOString();
  const lastDate = inbox
    .map((message) => String(message.date || ""))
    .filter(Boolean)
    .sort()
    .at(-1) || firstDate;
  const statements = [
    db.prepare("INSERT INTO mailboxes (address, created_at, last_received_at) VALUES (?, ?, ?) ON CONFLICT(address) DO UPDATE SET last_received_at = MAX(COALESCE(mailboxes.last_received_at, ''), excluded.last_received_at)")
      .bind(address, firstDate, lastDate),
  ];
  inbox.forEach((message, index) => {
    statements.push(
      db.prepare("INSERT OR IGNORE INTO messages (id, address, sender, sender_name, subject, body_text, body_html, received_at) VALUES (?, ?, ?, ?, ?, ?, ?, ?)")
        .bind(
          String(message.id || `${address}:legacy:${index}`),
          address,
          String(message.from || ""),
          String(message.fromName || ""),
          String(message.subject || "(no subject)"),
          String(message.text || ""),
          String(message.html || ""),
          String(message.date || firstDate),
        ),
    );
  });
  await executeD1InChunks(db, statements);
  // During the final D1-mode replay, refresh every old inbox key with a
  // seven-day TTL. This gives the owner a recovery window while ensuring KV
  // returns to settings/blog-only storage afterwards.
  if (!isLegacyMailboxMode(env) && inbox.length) {
    await env.TEMPMAIL_KV.put(INBOX_PREFIX + address, JSON.stringify(inbox), { expirationTtl: LEGACY_RECOVERY_TTL_SECONDS });
  }
  return { sourceMessages: inbox.length, d1Messages: await countD1Messages(env, address) };
}

async function migrateLegacyBatch(env, cursorInput, limitInput) {
  const addresses = [...new Set((await getLegacyAddressIndex(env)).map(normalizeAddress).filter(Boolean))];
  const cursor = Math.max(0, Math.min(addresses.length, Number.parseInt(cursorInput, 10) || 0));
  const limit = Math.max(1, Math.min(20, Number.parseInt(limitInput, 10) || 10));
  const batch = addresses.slice(cursor, cursor + limit);
  const mismatches = [];
  let sourceMessages = 0;
  let d1Messages = 0;
  for (const address of batch) {
    const result = await migrateLegacyMailbox(env, address);
    sourceMessages += result.sourceMessages;
    d1Messages += result.d1Messages;
    // A current delivery may arrive in D1 while this batch is running, so a
    // higher D1 count is valid; a lower one is the only migration failure.
    if (result.d1Messages < result.sourceMessages) {
      mismatches.push({ address, legacyMessages: result.sourceMessages, d1Messages: result.d1Messages });
    }
  }
  const nextCursor = cursor + batch.length;
  return {
    ok: mismatches.length === 0,
    totalAddresses: addresses.length,
    cursor,
    processedAddresses: batch.length,
    nextCursor: nextCursor < addresses.length ? nextCursor : null,
    complete: nextCursor >= addresses.length,
    sourceMessages,
    d1Messages,
    verifiedAddresses: batch.length - mismatches.length,
    recoveryArchiveExpiresAt: !isLegacyMailboxMode(env) && batch.length ? new Date(Date.now() + LEGACY_RECOVERY_TTL_SECONDS * 1000).toISOString() : null,
    mismatches,
  };
}

// ---- Konfigurasi publik (dipakai frontend untuk tema/PIN/portal) ----
function publicConfig(env, settings, domains) {
  return {
    siteName: settings.appearance.siteName,
    tagline: settings.appearance.tagline,
    logoUrl: logoUrl(env, settings),
    primaryColor: settings.appearance.primaryColor,
    accentColor: settings.appearance.accentColor,
    language: settings.appearance.language,
    domains,
    requirePin: !!settings.access.requirePin,
    portalMode: !!settings.access.portalMode,
    portalNote: settings.access.portalNote || "",
    siteUrl: (settings.seo && settings.seo.siteUrl) || env.SITE_URL || "",
    adsensePubId: (settings.seo && settings.seo.adsensePubId) || env.ADSENSE_PUB_ID || "",
    turnstileSiteKey: env.TURNSTILE_SITE_KEY || "",
  };
}

// ---- Server-side template render (fills SEO + config placeholders, crawler-visible) ----
function adsenseHead(cfg) {
  if (!cfg.adsensePubId) return "";
  return `<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-${cfg.adsensePubId}" crossorigin="anonymous"></script>`;
}
function turnstileHead(cfg) {
  if (!cfg.turnstileSiteKey) return "";
  return `<script src="https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit" async defer></script>`;
}
function googleTagHead() {
  return `<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-27294R66K5"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-27294R66K5');
</script>`;
}
function renderPage(tpl, env, settings, domains, extra = {}) {
  const cfg = publicConfig(env, settings, domains);
  const siteUrl = String(cfg.siteUrl || "").replace(/\/+$/, "");
  return tpl
    .replace(/__SITE_CONFIG__/g, JSON.stringify(cfg))
    .replace(/__MAIL_DOMAINS__/g, JSON.stringify(domains))
    .replace(/__MAIL_DOMAIN__/g, domains[0] || "example.com")
    .replace(/__SITE_URL__/g, siteUrl)
    .replace(/__ADSENSE_PUB__/g, cfg.adsensePubId || "")
    .replace(/__ADSENSE_HEAD__/g, adsenseHead(cfg))
    .replace(/__TURNSTILE_HEAD__/g, turnstileHead(cfg))
    .replace(/__GOOGLE_TAG__/g, googleTagHead())
    .replace(/__API_BASE__/g, "")
    .replace(/__DEMO_MODE__/g, "false");
}

function htmlEsc(s) {
  return String(s == null ? "" : s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
}

function languageDetails(rest, locale) {
  const items = switcherItems(rest || "/", locale);
  const current = items.find((item) => item.current) || items[0];
  return `<details class="lang-switch"><summary aria-label="Language">${htmlEsc(current.label)}</summary><nav class="lang-menu" aria-label="Language">${items.map((item) => `<a href="${htmlEsc(item.href)}" hreflang="${htmlEsc(LOCALE_HREFLANG[item.code] || item.code)}"${item.current ? " aria-current='true'" : ""}>${htmlEsc(item.label)}</a>`).join("")}</nav></details>`;
}

function renderHomePage(tpl, env, settings, domains, locale, rest) {
  const cfg = publicConfig(env, settings, domains);
  const data = homepageLocale(locale);
  let html = tpl;
  const path = localizedPath(locale, rest || "/");
  html = html
    .replace(/<html lang="en">/, `<html lang="${locale}">`)
    .replace(/<title>[^<]*<\/title>/, `<title>${data ? data.title : "Temp Mail — Free Temporary &amp; Disposable Email Address"}</title>`)
    .replace(/<meta name="description" content="[^"]*" \/>/, `<meta name="description" content="${data ? data.desc : "Free temporary email — get a disposable temp mail address instantly, no sign-up. Receive verification emails and OTP codes in real time, then throw it away. Protect your real inbox from spam."}" />`)
    .replace(/<link rel="canonical" href="__SITE_URL__\/" \/>/, `<link rel="canonical" href="__SITE_URL__${path}" />`)
    .replace(/<link rel="alternate" hreflang="en" href="__SITE_URL__\/" \/>\n<link rel="alternate" hreflang="x-default" href="__SITE_URL__\/" \/>/, hreflangLinks("/", "__SITE_URL__"))
    .replace(/<meta property="og:title" content="[^"]*" \/>/, `<meta property="og:title" content="${data ? data.title : "Temp Mail — Free Temporary &amp; Disposable Email Address"}" />`)
    .replace(/<meta property="og:description" content="[^"]*" \/>/, `<meta property="og:description" content="${data ? data.ogDesc : "Get a free disposable temp mail address instantly. No sign-up. Receive OTP &amp; verification emails in real time and keep your real inbox spam-free."}" />`)
    .replace(/<meta property="og:url" content="__SITE_URL__\/" \/>/, `<meta property="og:url" content="__SITE_URL__${path}" />`)
    .replace(/<meta name="twitter:title" content="[^"]*" \/>/, `<meta name="twitter:title" content="${data ? data.title : "Temp Mail — Free Temporary &amp; Disposable Email Address"}" />`)
    .replace(/<meta name="twitter:description" content="[^"]*" \/>/, `<meta name="twitter:description" content="${data ? data.desc : "Free disposable temp mail, no sign-up. Receive OTP &amp; verification emails instantly."}" />`);
  if (locale !== "en" && data) {
    const ui = data.ui;
    const nav = localeStrings(locale);
    html = html
      .replace(/<a class="brand" href="\/">/g, `<a class="brand" href="${localizedPath(locale, "/")}">`)
      .replace(/<a href="\/disposable-email" class="nav-hide">Disposable<\/a>/, `<a href="${localizedPath(locale, "/disposable-email")}" class="nav-hide">${nav.nav.disposable}</a>`)
      .replace(/<a href="\/blog" class="nav-hide">Blog<\/a>/, `<a href="${localizedPath(locale, "/blog")}" class="nav-hide">${nav.nav.blog}</a>`)
      .replace(/<a href="\/about" class="nav-hide">About<\/a>/, `<a href="${localizedPath(locale, "/about")}" class="nav-hide">${nav.nav.about}</a>`)
      .replace(/<details class="lang-switch">[\s\S]*?<\/details>/, languageDetails("/", locale))
      .replace("No sign-up · Real-time", data.eyebrow)
      .replace("Disposable email,<br /><em>receive-only.</em>", data.h1)
      .replace("A throwaway address, live the moment this page loads. Paste it anywhere — we catch the code for you.", data.lead)
      .replace("Your dispatch address", ui.addressLabel)
      .replace(/Copy address/g, ui.copyAddress)
      .replace(/New address(\s*<\/button>)/, `${ui.newAddress}$1`)
      .replace("<summary>Customize address</summary>", `<summary>${ui.customize}</summary>`)
      .replace("choose a name", ui.chooseName)
      .replace("Incoming Manifest <span", `${ui.inbox} <span`)
      .replace("Waiting…", ui.waiting)
      .replace("Monitoring incoming dispatch", ui.emptyTitle)
      .replace("Send a message to your address above — verification codes and links land here automatically, within seconds.", ui.emptyText)
      .replace(/<div class="content">[\s\S]*?<\/div>\n<\/main>/, `${data.content}\n</main>`)
      .replace(/<a href="\/about">About<\/a><a href="\/blog">Blog<\/a><a href="\/temp-mail-for">Temp mail for apps<\/a><a href="\/privacy">Privacy<\/a><a href="\/terms">Terms<\/a><a href="\/contact">Contact<\/a><a href="\/disclaimer">Disclaimer<\/a>/, `<a href="${localizedPath(locale, "/about")}">${nav.footer.about}</a><a href="${localizedPath(locale, "/blog")}">${nav.footer.blog}</a><a href="${localizedPath(locale, "/temp-mail-for")}">Temp mail for apps</a><a href="${localizedPath(locale, "/privacy")}">${nav.footer.privacy}</a><a href="${localizedPath(locale, "/terms")}">${nav.footer.terms}</a><a href="${localizedPath(locale, "/contact")}">${nav.footer.contact}</a><a href="${localizedPath(locale, "/disclaimer")}">${nav.footer.disclaimer}</a>`)
      .replace("Temp Mail — Free temporary &amp; disposable email · Printed on the edge, dispatched in real time.", ui.footerCopy);
  }
  return renderPage(html, env, settings, domains);
}

function renderInboxPage(tpl, env, settings, domains, locale) {
  const ui = localeStrings(locale);
  let html = tpl;
  if (locale !== "en") {
    html = html
      .replace(/<html lang="en">/, `<html lang="${locale}">`)
      .replace(/<a class="brand" href="\/">/g, `<a class="brand" href="${localizedPath(locale, "/")}">`)
      .replace(/<a href="\/">Temp Mail<\/a>/, `<a href="${localizedPath(locale, "/")}">${ui.nav.tempMail}</a>`)
      .replace(/<a href="\/disposable-email">Disposable<\/a>/, `<a href="${localizedPath(locale, "/disposable-email")}">${ui.nav.disposable}</a>`)
      .replace(/<a href="\/blog">Blog<\/a>/, `<a href="${localizedPath(locale, "/blog")}">${ui.nav.blog}</a>`)
      .replace(/<a href="\/about">About<\/a>/, `<a href="${localizedPath(locale, "/about")}">${ui.nav.about}</a>`)
      .replace(/<details class="lang-switch">[\s\S]*?<\/details>/, languageDetails("/inbox", locale))
      .replace(/<a href="\/about">About<\/a><a href="\/blog">Blog<\/a><a href="\/temp-mail-for">Temp mail for apps<\/a><a href="\/privacy">Privacy<\/a><a href="\/terms">Terms<\/a><a href="\/contact">Contact<\/a><a href="\/disclaimer">Disclaimer<\/a>/, `<a href="${localizedPath(locale, "/about")}">${ui.footer.about}</a><a href="${localizedPath(locale, "/blog")}">${ui.footer.blog}</a><a href="${localizedPath(locale, "/temp-mail-for")}">Temp mail for apps</a><a href="${localizedPath(locale, "/privacy")}">${ui.footer.privacy}</a><a href="${localizedPath(locale, "/terms")}">${ui.footer.terms}</a><a href="${localizedPath(locale, "/contact")}">${ui.footer.contact}</a><a href="${localizedPath(locale, "/disclaimer")}">${ui.footer.disclaimer}</a>`)
      .replace("Temp Mail — Free Temporary &amp; Disposable Email Service", ui.footer.copy);
  }
  return renderPage(html, env, settings, domains);
}

// ---- Blog posts (KV-backed) ----
const POST_PREFIX = "post:";
const POSTS_INDEX = "posts:index";
function slugify(s) {
  return String(s || "").toLowerCase().trim().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "").slice(0, 80);
}
function postKey(locale, slug) {
  return locale === "en" ? POST_PREFIX + slug : `${POST_PREFIX}${locale}:${slug}`;
}
function postsIndexKey(locale) {
  return locale === "en" ? POSTS_INDEX : `${POSTS_INDEX}:${locale}`;
}
async function getPostsIndex(env, locale = "en") {
  const fallback = locale === "en"
    ? englishBlogPosts()
    : localizedBlogPosts(locale).map((p) => ({ slug: p.slug, title: p.title, desc: p.desc, date: p.date }));
  try {
    const raw = await env.TEMPMAIL_KV.get(postsIndexKey(locale));
    const stored = raw ? JSON.parse(raw) : [];
    if (Array.isArray(stored) && stored.length) {
      const storedSlugs = new Set(stored.map((p) => typeof p === "string" ? p : p.slug).filter(Boolean));
      return [...stored, ...fallback.filter((p) => !storedSlugs.has(p.slug))];
    }
  } catch {}
  return fallback;
}
async function getPost(env, slug, locale = "en") {
  try {
    const raw = await env.TEMPMAIL_KV.get(postKey(locale, slug));
    if (raw) return JSON.parse(raw);
  } catch {}
  return locale === "en" ? englishBlogPost(slug) : localizedBlogPost(locale, slug);
}
async function savePost(env, post, locale = "en") {
  const slug = slugify(post.slug || post.title);
  if (!slug) throw new Error("missing slug/title");
  const record = {
    slug, title: post.title || slug, h1: post.h1 || post.title || slug,
    desc: post.desc || "", bodyHtml: post.bodyHtml || "",
    date: post.date || new Date().toISOString(), updated: new Date().toISOString(),
  };
  await env.TEMPMAIL_KV.put(postKey(locale, slug), JSON.stringify(record));
  const idx = await getPostsIndex(env, locale);
  const meta = { slug, title: record.title, desc: record.desc, date: record.date };
  const next = [meta, ...idx.filter((p) => (p.slug || p) !== slug)];
  await env.TEMPMAIL_KV.put(postsIndexKey(locale), JSON.stringify(next));
  return record;
}
async function deletePost(env, slug, locale = "en") {
  await env.TEMPMAIL_KV.delete(postKey(locale, slug));
  const idx = await getPostsIndex(env, locale);
  await env.TEMPMAIL_KV.put(postsIndexKey(locale), JSON.stringify(idx.filter((p) => (p.slug || p) !== slug)));
}

// ---- "Access blocked" page shown to banned IPs ----
function bannedPageHtml(settings, ip) {
  const esc = (s) => String(s == null ? "" : s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  const site = esc((settings.appearance && settings.appearance.siteName) || "Temp Mail");
  const ipText = esc(ip || "unknown");
  return `<!DOCTYPE html>
<html lang="en"><head><meta charset="utf-8"/>
<meta name="viewport" content="width=device-width, initial-scale=1"/>
<meta name="robots" content="noindex"/>
<title>Access blocked \u2014 ${site}</title>
<style>
*{box-sizing:border-box;margin:0;padding:0}
body{min-height:100vh;display:flex;align-items:center;justify-content:center;padding:24px;font-family:Inter,system-ui,-apple-system,Segoe UI,Arial,sans-serif;background:#ffffff;color:#15171a}
.card{width:min(460px,100%);text-align:center;background:#fafafa;border:1px solid #e7e7ea;border-radius:14px;padding:46px 34px;box-shadow:0 12px 34px rgba(20,22,28,.10)}
h1{font-weight:800;font-size:26px;letter-spacing:-.01em;margin-bottom:14px}
p{color:#646a73;line-height:1.7;font-size:15px;margin-bottom:18px}
.ip{display:inline-block;font-family:ui-monospace,monospace;border:1px solid #d7d7db;border-radius:8px;padding:10px 16px;color:#15171a;font-weight:600;margin-bottom:22px;letter-spacing:.3px}
.note{font-size:13.5px;color:#646a73;border:1px solid #e7e7ea;border-radius:8px;padding:14px 16px;line-height:1.6}
.brand{margin-top:26px;color:#9aa0a8;font:600 12px ui-monospace,monospace;letter-spacing:.14em}
</style></head>
<body>
<div class="card">
  <h1>Access Blocked</h1>
  <p>Your access to this website has been <b>blocked</b> by the site owner.</p>
  <div class="ip">Your IP: ${ipText}</div>
  <div class="note">If you believe this is a mistake, please <b>contact the site owner</b> to request that your IP be unblocked.</div>
  <div class="brand">${site}</div>
</div>
</body></html>`;
}

export default {
  // =================================================================
  // Email handler — receives incoming email
  // =================================================================
  async email(message, env, ctx) {
    try {
      const settings = await getSettings(env);
      const domains = allDomains(env, settings);
      const to = normalizeAddress(message.to);
      const from = normalizeAddress(message.from);

      if (!isAllowedAddress(to, domains)) {
        console.error("TempMail: email DITOLAK, domain tidak terdaftar.", { to, allowed: domains });
        return;
      }

      // Security: block sender
      if (isBlockedSender(settings, from)) {
        await logTraffic(env, { type: "blocked", detail: `Sender blocked: ${from} → ${to}` });
        return;
      }

      const raw = await streamToArrayBuffer(message.raw, message.rawSize);
      const email = await new PostalMime().parse(raw);

      const record = {
        id: crypto.randomUUID(),
        to,
        from: email.from?.address || from,
        fromName: email.from?.name || "",
        subject: email.subject || "(no subject)",
        text: email.text || "",
        html: email.html || "",
        date: new Date().toISOString(),
      };

      await storeMessage(env, record, settings.cleanup?.maxPerInbox);
      await logTraffic(env, { type: "mail", detail: `${record.from} → ${to}: ${record.subject}` });

      // Forwarding, bot notifications, and live signals never delay durable
      // storage. The client fetches D1 after receiving the small hub event.
      const after = (async () => {
        await Promise.all([
          handleForward(env, message, settings, to),
          notify(env, settings, record),
          publishInboxUpdate(env, to),
        ]);
      })();
      if (ctx && ctx.waitUntil) ctx.waitUntil(after); else await after;
    } catch (err) {
      console.error("TempMail email handler error", err);
    }
  },

  // =================================================================
  // Cron — auto cleanup terjadwal
  // =================================================================
  async scheduled(event, env, ctx) {
    const job = runCleanup(env);
    if (ctx && ctx.waitUntil) ctx.waitUntil(job); else await job;
  },

  // =================================================================
  // HTTP handler
  // =================================================================
  async fetch(request, env, ctx) {
    try {
      const url = new URL(request.url);
      const canonical = canonicalProductionUrl(url);
      if (canonical) return Response.redirect(canonical.toString(), 308);
      const { locale, rest } = parseLocale(url.pathname);
      const ip = clientIp(request);
      const settings = await getSettings(env);
      const domains = allDomains(env, settings);
      // PUBLIC_SITE="off" => domain ini jadi BACKEND temp mail saja:
      // halaman website publik tidak disajikan (404), tapi email + /api/* tetap jalan.
      const publicSite = String(env.PUBLIC_SITE ?? "on").trim().toLowerCase() !== "off";

      if (request.method === "OPTIONS") return json({ ok: true });
      if (locale !== "en" && !LIVE_LOCALES.includes(locale)) {
        const html = renderPage(notFoundPage({ locale }), env, settings, domains);
        return new Response(html, { status: 404, headers: { "content-type": "text/html; charset=utf-8", "cache-control": "no-store", "x-robots-tag": "noindex" } });
      }

      // ---- Banned IP gate (all /api except admin, which is password-protected) ----
      if (url.pathname.startsWith("/api/") && !url.pathname.startsWith("/api/admin/")) {
        if (isBannedIp(settings, ip)) {
          await logTraffic(env, { type: "banned", detail: `Blocked IP access: ${ip}` });
          return json({ ok: false, error: "Your IP is banned" }, 403);
        }
      }

      // ---- Public config (tema / domain / portal) ----
      if (url.pathname === "/api/config") {
        return json(publicConfig(env, settings, domains));
      }

      if (url.pathname === "/api/domains") {
        return json({ domains });
      }

      if (url.pathname === "/api/session") {
        if (request.method === "GET") return json({ ok: await hasInboxSession(request, env) });
        if (request.method !== "POST") return json({ ok: false, error: "Method not allowed" }, 405);
        let body = {};
        try { body = await request.json(); } catch { return json({ ok: false, error: "Invalid JSON" }, 400); }
        const verification = await verifyTurnstile(env, String(body.token || ""), ip);
        if (!verification.ok) {
          await logTraffic(env, { type: "turnstile", ip, detail: `Inbox verification failed: ${verification.error}` });
          return json({ ok: false, error: verification.error }, 403);
        }
        return jsonWithCookie({ ok: true }, inboxSessionCookie(await createInboxSession(env)));
      }

      // ---- Unlock website access (server-side, PIN never leaks into the HTML) ----
      if (url.pathname === "/api/unlock") {
        const pin = (url.searchParams.get("pin") || "").trim();
        const ok = !settings.access.requirePin || pin === String(settings.access.sitePin || "").trim();
        if (!ok) {
          await logTraffic(env, { type: "auth", ip, detail: `Wrong PIN from ${ip || "unknown"}` });
        }
        return json({ ok });
      }

      // ---- Owner-only diagnostics ----
      if (url.pathname === "/api/debug") {
        if (!isOwner(url, env)) return json({ ok: false, error: "Unauthorized" }, 401);
        let total = 0, storageError = null, addrs = [];
        try {
          addrs = await getAddressIndex(env);
          for (const a of addrs) total += (await readInbox(env, a)).length;
        } catch (e) { storageError = e.message; }
        return json({
          ok: true, version: "4.0-d1", domains, kvBound: !!env.TEMPMAIL_KV, d1Bound: !!env.TEMPMAIL_DB,
          mailboxStorage: isLegacyMailboxMode(env) ? "kv" : "d1", storageError, totalMessages: total, knownAddresses: addrs.slice(-10),
          dashboardPasswordLength: dashboardPassword(env).length,
        });
      }

      // ---- Browser inbox reads (verified browser session required) ----
      if (url.pathname === "/api/messages") {
        if (!(await hasInboxSession(request, env))) return json({ messages: [], error: "Inbox verification required" }, 401);
        const address = normalizeAddress(url.searchParams.get("address"));
        if (!address || !isAllowedAddress(address, domains)) return json({ messages: [] });
        try {
          const messages = (await readInbox(env, address)).map((m) => withKey(m, address));
          messages.sort((a, b) => new Date(b.date) - new Date(a.date));
          return json({ messages });
        } catch (storageError) {
          return json({ messages: [], error: storageError.message }, 500);
        }
      }

      // Each address has one hibernating Durable Object hub. The endpoint is
      // session protected before the Worker proxies the upgrade to that hub.
      if (url.pathname === "/api/live") {
        if (!(await hasInboxSession(request, env))) return json({ ok: false, error: "Inbox verification required" }, 401);
        const address = normalizeAddress(url.searchParams.get("address"));
        if (!address || !isAllowedAddress(address, domains)) return json({ ok: false, error: "Invalid address" }, 400);
        if (request.headers.get("Upgrade") !== "websocket") return json({ ok: false, error: "WebSocket upgrade required" }, 426);
        if (!env.INBOX_HUB) return json({ ok: false, error: "Inbox live service unavailable" }, 503);
        return env.INBOX_HUB.get(env.INBOX_HUB.idFromName(address)).fetch(request);
      }

      if (url.pathname === "/api/delete") {
        if (request.method !== "DELETE" && request.method !== "GET") return json({ ok: false, error: "Method not allowed" }, 405);
        if (!(await hasInboxSession(request, env))) return json({ ok: false, error: "Inbox verification required" }, 401);
        const key = url.searchParams.get("key");
        const address = normalizeAddress(url.searchParams.get("address"));
        if (!key || !address || !isAllowedAddress(address, domains)) return json({ ok: false, error: "Invalid params" }, 400);
        const { address: keyAddr, id } = parseKey(key);
        if (keyAddr !== address) return json({ ok: false, error: "Forbidden" }, 403);
        await deleteStoredMessage(env, address, id, settings.cleanup?.maxPerInbox);
        return json({ ok: true });
      }

      if (url.pathname === "/api/clear") {
        if (request.method !== "DELETE" && request.method !== "GET") return json({ ok: false, error: "Method not allowed" }, 405);
        if (!(await hasInboxSession(request, env))) return json({ ok: false, error: "Inbox verification required" }, 401);
        const address = normalizeAddress(url.searchParams.get("address"));
        if (!address || !isAllowedAddress(address, domains)) return json({ ok: false, error: "Invalid params" }, 400);
        await clearStoredMailbox(env, address);
        return json({ ok: true });
      }

      // =============================================================
      // REST API untuk bot (API key) — /api/v1/*
      // =============================================================
      if (url.pathname.startsWith("/api/v1/")) {
        if (!checkApiKey(url, request, settings)) return json({ ok: false, error: "Invalid or missing API key" }, 401);

        if (url.pathname === "/api/v1/inboxes") {
          return json({ ok: true, inboxes: await getAddressIndex(env) });
        }
        if (url.pathname === "/api/v1/messages" || url.pathname === "/api/v1/latest") {
          const address = normalizeAddress(url.searchParams.get("address"));
          if (!address || !isAllowedAddress(address, domains)) return json({ ok: false, error: "Invalid address" }, 400);
          const messages = (await readInbox(env, address)).map((m) => withKey(m, address));
          messages.sort((a, b) => new Date(b.date) - new Date(a.date));
          if (url.pathname === "/api/v1/latest") return json({ ok: true, message: messages[0] || null });
          return json({ ok: true, total: messages.length, messages });
        }
        return json({ ok: false, error: "Unknown endpoint" }, 404);
      }

      // =============================================================
      // Owner dashboard API (password protected)
      // =============================================================
      // Verifikasi password owner (dipakai website untuk menampilkan tombol Dashboard)
      if (url.pathname === "/api/admin/verify") {
        return json({ ok: isOwner(url, env) });
      }

      if (url.pathname === "/api/admin/messages") {
        if (!isOwner(url, env)) return json({ ok: false, error: "Unauthorized" }, 401);
        try {
          const messages = await readAllMessages(env);
          return json({ ok: true, total: messages.length, messages });
        } catch (storageError) {
          return json({ ok: false, messages: [], error: storageError.message }, 500);
        }
      }

      if (url.pathname === "/api/admin/delete") {
        if (!isOwner(url, env)) return json({ ok: false, error: "Unauthorized" }, 401);
        const key = url.searchParams.get("key");
        const { address, id } = parseKey(key);
        if (!key || !address) return json({ ok: false, error: "Invalid key" }, 400);
        await deleteStoredMessage(env, address, id, settings.cleanup?.maxPerInbox);
        return json({ ok: true });
      }

      if (url.pathname === "/api/admin/clear") {
        if (!isOwner(url, env)) return json({ ok: false, error: "Unauthorized" }, 401);
        return json({ ok: true, deleted: await clearAllStoredMail(env) });
      }

      // ---- Settings: GET (read) / POST (save) ----
      if (url.pathname === "/api/admin/settings") {
        if (!isOwner(url, env)) return json({ ok: false, error: "Unauthorized" }, 401);
        if (request.method === "POST") {
          let body;
          try { body = await request.json(); } catch { return json({ ok: false, error: "Invalid JSON" }, 400); }
          const merged = mergeSettings(defaultSettings(env), body);
          await saveSettings(env, merged);
          await logTraffic(env, { type: "admin", detail: "Settings updated by owner" });
          return json({ ok: true, settings: merged });
        }
        return json({ ok: true, settings });
      }

      // ---- Live traffic log ----
      if (url.pathname === "/api/admin/traffic") {
        if (!isOwner(url, env)) return json({ ok: false, error: "Unauthorized" }, 401);
        const db = requireD1(env);
        if (request.method === "DELETE") { await db.prepare("DELETE FROM traffic_events").run(); return json({ ok: true }); }
        const { results = [] } = await db.prepare("SELECT occurred_at AS t, type, ip, detail FROM traffic_events ORDER BY id DESC LIMIT ?").bind(MAX_TRAFFIC).all();
        return json({ ok: true, traffic: results });
      }

      // Owner-run, repeatable batches for the KV → D1 cutover. Replaying the
      // final batches after MAIL_STORAGE_MODE=d1 arms seven-day TTLs on the
      // legacy inbox keys; no normal D1-mode request reads or writes them.
      if (url.pathname === "/api/admin/migrate-kv") {
        if (!isOwner(url, env)) return json({ ok: false, error: "Unauthorized" }, 401);
        if (request.method !== "POST") return json({ ok: false, error: "Method not allowed" }, 405);
        let body = {};
        try { body = await request.json(); } catch {}
        const result = await migrateLegacyBatch(env, body.cursor ?? url.searchParams.get("cursor"), body.limit ?? url.searchParams.get("limit"));
        await logTraffic(env, {
          type: "migration",
          detail: `KV→D1 batch ${result.cursor}: ${result.processedAddresses} addresses, ${result.verifiedAddresses} verified${result.complete ? " (complete)" : ""}`,
        });
        return json(result, result.ok ? 200 : 409);
      }

      // ---- Manual cleanup ----
      if (url.pathname === "/api/admin/cleanup") {
        if (!isOwner(url, env)) return json({ ok: false, error: "Unauthorized" }, 401);
        const res = await runCleanup(env, { ...settings, cleanup: { ...settings.cleanup, enabled: true } });
        return json({ ok: true, ...res });
      }

      // ---- Test webhook / telegram ----
      if (url.pathname === "/api/admin/test-notify") {
        if (!isOwner(url, env)) return json({ ok: false, error: "Unauthorized" }, 401);
        const sample = {
          id: "test-" + Date.now(), to: domains[0] ? "test@" + domains[0] : "test@example.com",
          from: "noreply@opentempmail.com", fromName: "Open Temp Mail Test",
          subject: "Temp Mail test notification", text: "This is a test message from the dashboard.", html: "",
          date: new Date().toISOString(),
        };
        await notify(env, settings, sample);
        return json({ ok: true });
      }

      // ---- Test inbound: inject a fake email into an inbox (same path as the email handler) ----
      // Lets the owner verify the inbox UI, storage, and realtime WebSocket without sending real mail.
      if (url.pathname === "/api/admin/test-inbound") {
        if (!isOwner(url, env)) return json({ ok: false, error: "Unauthorized" }, 401);
        let body = {};
        try { body = await request.json(); } catch {}
        const to = normalizeAddress(body.address || (domains[0] ? "test@" + domains[0] : ""));
        if (!to || !isAllowedAddress(to, domains)) {
          return json({ ok: false, error: "address must end with one of your domains: " + domains.join(", ") }, 400);
        }
        const record = {
          id: crypto.randomUUID(),
          to,
          from: body.from || "noreply@temp-mail-test.dev",
          fromName: body.fromName || "Temp Mail Test",
          subject: body.subject || "Your verification code is 123456",
          text: body.text || "This is a test email. Your one-time code is 123456. If you can read this in the inbox, receiving works.",
          html: body.html || "",
          date: body.date || new Date().toISOString(),
        };
        await storeMessage(env, record, settings.cleanup?.maxPerInbox);
        await logTraffic(env, { type: "mail", detail: `TEST inbound ${record.from} → ${to}: ${record.subject}` });
        const update = publishInboxUpdate(env, to);
        if (ctx && ctx.waitUntil) ctx.waitUntil(update); else await update;
        return json({ ok: true, address: to, record });
      }

      // ---- Favicon (inline SVG brand mark) ----
      if (["/favicon.svg", "/favicon.ico", "/favicon.png", "/apple-touch-icon.png"].includes(url.pathname)) {
        return new Response(FAVICON_SVG, {
          headers: { "content-type": "image/svg+xml; charset=utf-8", "cache-control": "public, max-age=86400" },
        });
      }
      // ---- OG image (self-hosted 1200x630 Dispatch banner, used for social previews) ----
      if (url.pathname === "/og.png") {
        const bytes = Uint8Array.from(atob(OG_PNG_B64), (c) => c.charCodeAt(0));
        return new Response(bytes, {
          headers: { "content-type": "image/png", "cache-control": "public, max-age=86400, immutable" },
        });
      }
      // ---- Logo (proxied from logoUrl, used for notification icon) ----
      if (["/logo.png", "/logo"].includes(url.pathname)) {
        try {
          const upstream = await fetch(logoUrl(env, settings), { cf: { cacheTtl: 86400, cacheEverything: true } });
          if (upstream && upstream.ok) {
            return new Response(upstream.body, {
              headers: {
                "content-type": upstream.headers.get("content-type") || "image/png",
                "cache-control": "public, max-age=86400, immutable",
              },
            });
          }
        } catch (e) { console.error("logo fetch error", e); }
        return Response.redirect(logoUrl(env, settings), 302);
      }

      // ---- SEO: robots.txt / sitemap.xml / ads.txt ----
      const seoBase = String(publicConfig(env, settings, domains).siteUrl || `${url.protocol}//${url.host}`).replace(/\/+$/, "");
      if (url.pathname === "/robots.txt") {
        // All crawlers — including AI assistants & answer engines (GPTBot, ClaudeBot,
        // PerplexityBot, Google-Extended, OAI-SearchBot, etc.) — are welcome on public pages.
        // Curated map for LLMs: /llms.txt
        const body = `# Open Temp Mail — robots.txt\n# AI assistants & answer engines welcome. LLM-friendly site map: ${seoBase}/llms.txt\n\nUser-agent: *\nAllow: /\nDisallow: /dashboard\nDisallow: /admin\nDisallow: /inbox\nDisallow: /inbox.html\nDisallow: /api/\n\nSitemap: ${seoBase}/sitemap.xml\n`;
        return new Response(body, { headers: { "content-type": "text/plain; charset=utf-8", "cache-control": "public, max-age=86400" } });
      }
      if (url.pathname === "/llms.txt") {
        let posts = [];
        try { posts = await getPostsIndex(env, "en"); } catch {}
        const guides = (posts || []).map((p) => `- [${p.title}](${seoBase}/blog/${p.slug})${p.desc ? `: ${p.desc}` : ""}`).join("\n") || `- [Temp Mail blog](${seoBase}/blog): Guides on temporary email, OTP codes, and privacy.`;
        const body = `# Open Temp Mail

> Free temporary & disposable email. Get an instant, no-sign-up inbox to receive verification emails and one-time passcodes (OTP), then throw it away. Receive-only — the verification code is auto-detected for one-tap copy.

Open Temp Mail is a free temp-mail web app running on Cloudflare. A disposable address is live the moment the page loads, incoming mail arrives in real time, and inboxes are cleared periodically. It is receive-only (it cannot send email), is not tied to your identity, and must not be used for banking, work, account recovery, or anything sensitive or long-term. The website and brand live on opentempmail.com; disposable addresses are issued on the life-ware.com mail domain.

## Main pages
- [Open Temp Mail — home & live inbox](${seoBase}/): Generate a disposable address and receive verification emails / OTP codes in real time.
- [Disposable email address](${seoBase}/disposable-email): What a disposable email is, when to use it, and how it shields your real inbox from spam.
- [Temp mail generator](${seoBase}/temp-mail-generator): Create a custom throwaway email address instantly.
- [10 minute mail](${seoBase}/10-minute-mail): A quick, self-expiring inbox for one-off sign-ups and codes.
- [Fake email generator](${seoBase}/fake-email-generator): A real, working address that simply isn't your personal one.
- [Temporary email service](${seoBase}/temporary-email-service): Real-time, no-sign-up temp mail with multiple domains.
- [Burner email](${seoBase}/burner-email): A use-once-then-discard address, like a burner phone.
- [Anonymous email](${seoBase}/anonymous-email): An inbox not tied to your name or identity.

## Guides
${guides}

## Temp mail for popular apps
- [Temp mail for apps — hub](${seoBase}/temp-mail-for): Honest, per-app guidance on whether disposable email works and when to use a real inbox instead.
- [Temp mail for Discord](${seoBase}/temp-mail-for-discord)
- [Temp mail for Netflix](${seoBase}/temp-mail-for-netflix)
- [Temp mail for Instagram](${seoBase}/temp-mail-for-instagram)
- [Temp mail for ChatGPT / OpenAI](${seoBase}/temp-mail-for-chatgpt-openai)
- [Temp mail for Reddit](${seoBase}/temp-mail-for-reddit)

## About & policies
- [About](${seoBase}/about): What Open Temp Mail is and who it's for.
- [Privacy policy](${seoBase}/privacy)
- [Terms of service](${seoBase}/terms)
- [Contact](${seoBase}/contact): tim@opentempmail.com

## Notes for AI assistants
- Receive-only: it catches verification/OTP codes and confirmation links; it cannot send mail.
- Not private or permanent: inboxes are addressable by anyone who knows the address and are cleared on a schedule — never recommend it for sensitive, financial, or recovery-critical accounts.
- Free, no registration, no app. Available in English, German, French, Spanish, Dutch, and Italian.
- Complete URL list: ${seoBase}/sitemap.xml
`;
        return new Response(body, { headers: { "content-type": "text/plain; charset=utf-8", "cache-control": "public, max-age=3600" } });
      }
      if (url.pathname === "/llms-full.txt") {
        const strip = (html) => String(html || "")
          .replace(/\[\[(?:CTA|AD)\]\]/g, "")
          .replace(/<h2[^>]*>/gi, "\n\n## ").replace(/<h3[^>]*>/gi, "\n\n### ")
          .replace(/<li[^>]*>/gi, "\n- ")
          .replace(/<\/(?:p|div|section|ul|ol|h2|h3|li|tr)>/gi, "\n")
          .replace(/<[^>]+>/g, " ")
          .replace(/&amp;/g, "&").replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&quot;/g, '"').replace(/&#39;/g, "'").replace(/&nbsp;/g, " ")
          .replace(/[ \t]+/g, " ").replace(/ *\n */g, "\n").replace(/\n{3,}/g, "\n\n").trim();
        const out = [`# Open Temp Mail — full content

> Free temporary & disposable email. A no-sign-up, receive-only inbox for verification emails and one-time passcodes (OTP). This file concatenates the main pages for LLM ingestion. Canonical site: ${seoBase}/ · curated map: ${seoBase}/llms.txt`];
        const landingOrder = ["/disposable-email", "/temp-mail-generator", "/10-minute-mail", "/fake-email-generator", "/temporary-email-service", "/burner-email", "/temp-gmail", "/anonymous-email", "/alternatives/guerrilla-mail", "/alternatives/mailinator"];
        for (const p of landingOrder) {
          const page = LANDING_PAGES[p] || STATIC_PAGES[p];
          if (page) out.push(`# ${page.title}\nURL: ${seoBase}${p}\n\n${strip(page.body)}`);
        }
        let idx = [];
        try { idx = await getPostsIndex(env, "en"); } catch {}
        for (const meta of (idx || [])) {
          let post = null;
          try { post = await getPost(env, meta.slug, "en"); } catch {}
          if (post) out.push(`# ${post.title}\nURL: ${seoBase}/blog/${post.slug}\n\n${strip(post.bodyHtml || "")}`);
        }
        for (const p of ["/about", "/privacy", "/terms", "/contact", "/disclaimer"]) {
          const page = STATIC_PAGES[p];
          if (page) out.push(`# ${page.title}\nURL: ${seoBase}${p}\n\n${strip(page.body)}`);
        }
        out.push(`# Per-app guides\nHonest, app-specific guidance lives under ${seoBase}/temp-mail-for (Discord, Netflix, Instagram, ChatGPT, Reddit, and ~50 more). Full URL list: ${seoBase}/sitemap.xml`);
        return new Response(out.join("\n\n---\n\n") + "\n", { headers: { "content-type": "text/plain; charset=utf-8", "cache-control": "public, max-age=3600" } });
      }
      if (url.pathname === "/ads.txt") {
        const pub = publicConfig(env, settings, domains).adsensePubId;
        const body = pub ? `google.com, ${pub}, DIRECT, f08c47fec0942fa0\n` : `# Set ADSENSE_PUB_ID (pub-XXXX) in wrangler.toml or dashboard to activate ads.txt\n`;
        return new Response(body, { headers: { "content-type": "text/plain; charset=utf-8", "cache-control": "public, max-age=3600" } });
      }
      if (url.pathname === "/sitemap.xml") {
        // Paths that have localized versions in every LIVE locale (multiplied by locale below).
        const localizedPaths = ["/", "/temp-mail-generator", "/disposable-email", "/10-minute-mail", "/fake-email-generator", "/temporary-email-service", "/burner-email", "/temp-gmail", "/anonymous-email", "/alternatives/guerrilla-mail", "/alternatives/mailinator", "/blog", "/about", "/privacy", "/terms", "/contact", "/disclaimer"];
        const blogPathsByLocale = await Promise.all(LIVE_LOCALES.map(async (loc) => {
          const posts = await getPostsIndex(env, loc);
          const slugs = [...new Set(posts.map((p) => typeof p === "string" ? p : p.slug).filter(Boolean))];
          const resolved = await Promise.all(slugs.map(async (slug) => await getPost(env, slug, loc) ? localizedPath(loc, `/blog/${slug}`) : null));
          return resolved.filter(Boolean);
        }));
        const localizedPlatformUrls = LIVE_LOCALES
          .flatMap((loc) => PLATFORM_LANDING_PATHS.map((p) => localizedPath(loc, p)))
          .filter((p) => LANDING_PAGES[p]);
        // Localized pages × live locales, plus platform pages for locales whose content exists.
        const urls = [...new Set([
          ...LIVE_LOCALES.flatMap((loc) => localizedPaths.map((p) => localizedPath(loc, p))),
          ...blogPathsByLocale.flat(),
          ...PLATFORM_LANDING_PATHS,
          ...localizedPlatformUrls,
        ])];
        const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
          urls.map((p) => `  <url><loc>${seoBase}${p}</loc></url>`).join("\n") + `\n</urlset>\n`;
        return new Response(xml, { headers: { "content-type": "application/xml; charset=utf-8", "cache-control": "public, max-age=3600" } });
      }

      // ---- Static landing + legal pages (generated 1000+ word landing pages take precedence) ----
      if (publicSite && (LANDING_PAGES[url.pathname] || LANDING_PAGES[localizedPath(locale, rest)] || STATIC_PAGES[rest])) {
        const p = LANDING_PAGES[url.pathname] || LANDING_PAGES[localizedPath(locale, rest)] || STATIC_PAGES[rest];
        const html = renderPage(layout({ path: localizedPath(locale, rest), rest, locale, title: p.title, desc: p.desc, bodyHtml: p.body }), env, settings, domains);
        return new Response(html, { headers: { "content-type": "text/html; charset=utf-8", "cache-control": "public, max-age=600" } });
      }

      // ---- Blog index ----
      if (publicSite && (rest === "/blog" || rest === "/blog/")) {
        const posts = await getPostsIndex(env, locale);
        const html = renderPage(blogIndexPage(posts, { locale }), env, settings, domains);
        return new Response(html, { headers: { "content-type": "text/html; charset=utf-8", "cache-control": "public, max-age=300" } });
      }

      // ---- Blog post ----
      if (publicSite && rest.startsWith("/blog/")) {
        const slug = slugify(rest.slice("/blog/".length));
        const post = slug ? await getPost(env, slug, locale) : null;
        if (post) {
          const html = renderPage(blogPostPage(post, { locale, posts: await getPostsIndex(env, locale) }), env, settings, domains);
          return new Response(html, { headers: { "content-type": "text/html; charset=utf-8", "cache-control": "public, max-age=300" } });
        }
      }

      // ---- Admin: blog posts CRUD (owner only) ----
      if (url.pathname === "/api/admin/posts") {
        if (!isOwner(url, env)) return json({ ok: false, error: "unauthorized" }, 401);
        const adminLocale = LIVE_LOCALES.includes(url.searchParams.get("locale") || "") ? url.searchParams.get("locale") : "en";
        if (request.method === "GET") {
          const slug = url.searchParams.get("slug");
          if (slug) return json({ ok: true, post: await getPost(env, slugify(slug), adminLocale) });
          return json({ ok: true, posts: await getPostsIndex(env, adminLocale) });
        }
        if (request.method === "POST") {
          let body = {};
          try { body = await request.json(); } catch { return json({ ok: false, error: "invalid json" }, 400); }
          const bodyLocale = LIVE_LOCALES.includes(body.locale || "") ? body.locale : adminLocale;
          try { const rec = await savePost(env, body, bodyLocale); return json({ ok: true, post: rec }); }
          catch (e) { return json({ ok: false, error: e.message }, 400); }
        }
        if (request.method === "DELETE") {
          const slug = slugify(url.searchParams.get("slug") || "");
          if (!slug) return json({ ok: false, error: "missing slug" }, 400);
          await deletePost(env, slug, adminLocale);
          return json({ ok: true });
        }
        return json({ ok: false, error: "method not allowed" }, 405);
      }

      // ---- Halaman inbox (terpisah dari halaman pembuatan mail) ----
      if (publicSite && ["/inbox", "/inbox.html"].includes(rest)) {
        if (isBannedIp(settings, ip)) {
          return new Response(bannedPageHtml(settings, ip), {
            status: 403,
            headers: { "content-type": "text/html; charset=utf-8", "cache-control": "no-store" },
          });
        }
        const html = renderInboxPage(INBOX, env, settings, domains, locale);
        return new Response(html, { headers: { "content-type": "text/html; charset=utf-8", "cache-control": "no-store", "x-robots-tag": "noindex, follow" } });
      }

      // ---- Owner dashboard page ----
      if (["/dashboard", "/dashboard.html", "/admin"].includes(url.pathname)) {
        const html = DASHBOARD
          .replace(/__API_BASE__/g, "")
          .replace(/__MAIL_DOMAINS__/g, JSON.stringify(domains))
          .replace(/__MAIL_DOMAIN__/g, domains[0] || "example.com");
        return new Response(html, { headers: { "content-type": "text/html; charset=utf-8", "cache-control": "no-store", "x-robots-tag": "noindex, nofollow" } });
      }

      // ---- Main website (bisa dimatikan via PUBLIC_SITE="off") ----
      if (publicSite && (rest === "/" || rest === "/index.html")) {
        // Banned IP → show the "Access Blocked" page instead of the normal website
        if (isBannedIp(settings, ip)) {
          await logTraffic(env, { type: "banned", ip, detail: `Blocked IP tried to open site: ${ip || "unknown"}` });
          return new Response(bannedPageHtml(settings, ip), {
            status: 403,
            headers: { "content-type": "text/html; charset=utf-8", "cache-control": "no-store" },
          });
        }
        const html = renderHomePage(PAGE, env, settings, domains, locale, "/");
        return new Response(html, { headers: { "content-type": "text/html; charset=utf-8", "cache-control": "public, max-age=300" } });
      }

      if (publicSite) {
        const html = renderPage(notFoundPage({ locale }), env, settings, domains);
        return new Response(html, { status: 404, headers: { "content-type": "text/html; charset=utf-8", "cache-control": "no-store", "x-robots-tag": "noindex" } });
      }
      return new Response("Not found", { status: 404 });
    } catch (err) {
      console.error("TempMail fetch handler error", err);
      return new Response("Internal Error: " + err.message, { status: 500 });
    }
  },
};
