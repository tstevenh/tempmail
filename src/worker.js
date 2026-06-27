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
// KV storage:
//   inbox:<address>  -> JSON array of messages for one address
//   addrs            -> JSON array of all known addresses
//   settings:v1      -> JSON runtime config (managed from the dashboard)
//   traffic:v1       -> JSON live-traffic log (email + security events)
//   post:<slug>      -> JSON blog post; posts:index -> JSON list of post metas
//   rl:<ip>:<bucket> -> rate-limit counter (with TTL)
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

const FAVICON_SVG = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" role="img" aria-label="Temp Mail"><rect width="64" height="64" rx="15" fill="#5046E5"/><path d="M17 23.5h30a2.5 2.5 0 0 1 2.5 2.5v15a2.5 2.5 0 0 1-2.5 2.5H17A2.5 2.5 0 0 1 14.5 41V26a2.5 2.5 0 0 1 2.5-2.5z" fill="none" stroke="#fff" stroke-width="3.2" stroke-linejoin="round"/><path d="M15.5 25.5 32 37l16.5-11.5" fill="none" stroke="#fff" stroke-width="3.2" stroke-linecap="round" stroke-linejoin="round"/></svg>`;

const INBOX_PREFIX = "inbox:";
const ADDR_INDEX_KEY = "addrs";
const SETTINGS_KEY = "settings:v1";
const TRAFFIC_KEY = "traffic:v1";
const MAX_PER_INBOX = 300;
const MAX_TRAFFIC = 250;
const KEY_SEP = "::";

// ---------------------------------------------------------------------
// Default settings (dipakai bila KV belum punya settings)
// ---------------------------------------------------------------------
function defaultSettings(env) {
  return {
    appearance: {
      siteName: "Temp Mail",
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
      rateLimit: { enabled: false, max: 120, windowSec: 60 },
      bannedIps: [],
      blockedSenders: [],
    },
    cleanup: { enabled: false, days: 30, maxPerInbox: MAX_PER_INBOX },
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

// ---- Storage helpers (get/put/delete saja) ----
async function readInbox(env, address) {
  const raw = await env.TEMPMAIL_KV.get(INBOX_PREFIX + address);
  if (!raw) return [];
  try { const a = JSON.parse(raw); return Array.isArray(a) ? a : []; } catch { return []; }
}

async function writeInbox(env, address, messages, cap) {
  const key = INBOX_PREFIX + address;
  if (!messages || !messages.length) { await env.TEMPMAIL_KV.delete(key); return; }
  let list = messages;
  const max = cap || MAX_PER_INBOX;
  if (list.length > max) list = list.slice(list.length - max);
  await env.TEMPMAIL_KV.put(key, JSON.stringify(list));
}

async function getAddressIndex(env) {
  const raw = await env.TEMPMAIL_KV.get(ADDR_INDEX_KEY);
  if (!raw) return [];
  try { const a = JSON.parse(raw); return Array.isArray(a) ? a : []; } catch { return []; }
}

async function addAddressToIndex(env, address) {
  const idx = await getAddressIndex(env);
  if (!idx.includes(address)) {
    idx.push(address);
    await env.TEMPMAIL_KV.put(ADDR_INDEX_KEY, JSON.stringify(idx));
  }
}

async function removeAddressFromIndex(env, address) {
  const idx = await getAddressIndex(env);
  const next = idx.filter((a) => a !== address);
  if (next.length !== idx.length) await env.TEMPMAIL_KV.put(ADDR_INDEX_KEY, JSON.stringify(next));
}

function withKey(message, address) {
  return { ...message, to: message.to || address, _key: (message.to || address) + KEY_SEP + message.id };
}

function parseKey(key) {
  const i = String(key || "").indexOf(KEY_SEP);
  if (i < 0) return { address: "", id: String(key || "") };
  return { address: key.slice(0, i), id: key.slice(i + KEY_SEP.length) };
}

// ---- Live traffic log ----
async function logTraffic(env, entry) {
  try {
    const raw = await env.TEMPMAIL_KV.get(TRAFFIC_KEY);
    let arr = raw ? JSON.parse(raw) : [];
    if (!Array.isArray(arr)) arr = [];
    arr.unshift({ t: new Date().toISOString(), ...entry });
    if (arr.length > MAX_TRAFFIC) arr = arr.slice(0, MAX_TRAFFIC);
    await env.TEMPMAIL_KV.put(TRAFFIC_KEY, JSON.stringify(arr));
  } catch { /* abaikan */ }
}

// ---- Log kunjungan IP ke website (dedup per-IP via TTL agar log tidak banjir) ----
const VISIT_PREFIX = "vis:";
const VISIT_TTL = 900; // 15 menit: 1 IP dicatat sekali per window ini
async function logVisit(env, ip, country, opts = {}) {
  if (!ip) return;
  const prefix = opts.prefix || VISIT_PREFIX;
  try {
    const seen = await env.TEMPMAIL_KV.get(prefix + ip);
    if (seen) return; // sudah tercatat baru-baru ini, jangan banjiri console
    await env.TEMPMAIL_KV.put(prefix + ip, "1", { expirationTtl: opts.ttl || VISIT_TTL });
  } catch { /* abaikan error dedup, tetap lanjut catat */ }
  const detail = opts.detail || `IP visited site: ${ip}${country ? " (" + country + ")" : ""}`;
  await logTraffic(env, { type: opts.type || "visit", ip, detail });
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

async function checkRateLimit(env, settings, ip) {
  const rl = settings.security.rateLimit;
  if (!rl || !rl.enabled || !ip) return { ok: true };
  const win = Math.max(60, rl.windowSec || 60); // KV TTL minimal 60 dtk
  const bucket = Math.floor(Date.now() / 1000 / win);
  const key = `rl:${ip}:${bucket}`;
  let n = 0;
  try { n = parseInt((await env.TEMPMAIL_KV.get(key)) || "0", 10) || 0; } catch {}
  n++;
  try { await env.TEMPMAIL_KV.put(key, String(n), { expirationTtl: win + 10 }); } catch {}
  return { ok: n <= (rl.max || 120), count: n };
}

function checkApiKey(url, request, settings) {
  const key = (url.searchParams.get("apikey") || request.headers.get("x-api-key") || "").trim();
  if (!key) return false;
  return (settings.apiKeys || []).some((k) => k && k.key === key);
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
    const text = `\uD83D\uDCE9 *${settings.appearance.siteName || "LAW MAIL"}*\n*To:* ${record.to}\n*From:* ${record.from}\n*Subject:* ${record.subject}\n\n${(record.text || "").slice(0, 600)}`;
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
  const days = Math.max(1, c.days || 30);
  const cutoff = Date.now() - days * 86400000;
  const addrs = await getAddressIndex(env);
  let removed = 0;
  for (const a of addrs) {
    const inbox = await readInbox(env, a);
    const kept = inbox.filter((m) => new Date(m.date).getTime() >= cutoff);
    if (kept.length !== inbox.length) {
      removed += inbox.length - kept.length;
      await writeInbox(env, a, kept, c.maxPerInbox);
      if (!kept.length) await removeAddressFromIndex(env, a);
    }
  }
  if (removed) await logTraffic(env, { type: "cleanup", detail: `Auto-cleanup removed ${removed} old emails (> ${days} days)` });
  return { ran: true, removed };
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
  };
}

// ---- Server-side template render (fills SEO + config placeholders, crawler-visible) ----
function adsenseHead(cfg) {
  if (!cfg.adsensePubId) return "";
  return `<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-${cfg.adsensePubId}" crossorigin="anonymous"></script>`;
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
      .replace(/<a href="\/">Temp Mail<\/a>/, `<a href="${localizedPath(locale, "/")}">${nav.nav.tempMail}</a>`)
      .replace(/<a href="\/disposable-email">Disposable<\/a>/, `<a href="${localizedPath(locale, "/disposable-email")}">${nav.nav.disposable}</a>`)
      .replace(/<a href="\/blog">Blog<\/a>/, `<a href="${localizedPath(locale, "/blog")}">${nav.nav.blog}</a>`)
      .replace(/<a href="\/about">About<\/a>/, `<a href="${localizedPath(locale, "/about")}">${nav.nav.about}</a>`)
      .replace(/<details class="lang-switch">[\s\S]*?<\/details>/, languageDetails("/", locale))
      .replace("No sign-up · Real-time inbox", data.eyebrow)
      .replace("Your Temporary Email Address", data.h1)
      .replace("Free, disposable, and instant. Receive verification emails and OTP codes in real time — then throw it away and keep your real inbox spam-free.", data.lead)
      .replace("Your address", ui.addressLabel)
      .replace(">Active</span>", `>${ui.active}</span>`)
      .replace(/Copy address/g, ui.copyAddress)
      .replace(/New address/g, ui.newAddress)
      .replace("Customize address", ui.customize)
      .replace("choose a name", ui.chooseName)
      .replace("Inbox <span", `${ui.inbox} <span`)
      .replace("Waiting…", ui.waiting)
      .replace("Waiting for incoming email", ui.emptyTitle)
      .replace("Send a message to your address above — it appears here automatically, within seconds.", ui.emptyText)
      .replace(/<div class="content">[\s\S]*?<\/div>\n<\/main>/, `${data.content}\n</main>`)
      .replace(/<a href="\/about">About<\/a><a href="\/blog">Blog<\/a><a href="\/temp-mail-for">Temp mail for apps<\/a><a href="\/privacy">Privacy<\/a><a href="\/terms">Terms<\/a><a href="\/contact">Contact<\/a><a href="\/disclaimer">Disclaimer<\/a>/, `<a href="${localizedPath(locale, "/about")}">${nav.footer.about}</a><a href="${localizedPath(locale, "/blog")}">${nav.footer.blog}</a><a href="${localizedPath(locale, "/temp-mail-for")}">Temp mail for apps</a><a href="${localizedPath(locale, "/privacy")}">${nav.footer.privacy}</a><a href="${localizedPath(locale, "/terms")}">${nav.footer.terms}</a><a href="${localizedPath(locale, "/contact")}">${nav.footer.contact}</a><a href="${localizedPath(locale, "/disclaimer")}">${nav.footer.disclaimer}</a>`)
      .replace("Temp Mail — Free Temporary &amp; Disposable Email Service", ui.footerCopy);
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
  try {
    const raw = await env.TEMPMAIL_KV.get(postsIndexKey(locale));
    const a = raw ? JSON.parse(raw) : [];
    if (Array.isArray(a) && a.length) return a;
  } catch {}
  return locale === "en" ? [] : localizedBlogPosts(locale).map((p) => ({ slug: p.slug, title: p.title, desc: p.desc, date: p.date }));
}
async function getPost(env, slug, locale = "en") {
  if (locale !== "en") return localizedBlogPost(locale, slug);
  try {
    const raw = await env.TEMPMAIL_KV.get(postKey(locale, slug));
    if (raw) return JSON.parse(raw);
  } catch {}
  return null;
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
        console.error("LawMail: email DITOLAK, domain tidak terdaftar.", { to, allowed: domains });
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

      const inbox = await readInbox(env, to);
      inbox.push(record);
      await writeInbox(env, to, inbox, settings.cleanup?.maxPerInbox);
      await addAddressToIndex(env, to);
      await logTraffic(env, { type: "mail", detail: `${record.from} → ${to}: ${record.subject}` });

      // Auto-forward + notifikasi bot (jangan blokir penyimpanan)
      const after = (async () => {
        await handleForward(env, message, settings, to);
        await notify(env, settings, record);
      })();
      if (ctx && ctx.waitUntil) ctx.waitUntil(after); else await after;
    } catch (err) {
      console.error("LawMail email handler error", err);
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

      // ---- Unlock website access (server-side, PIN never leaks into the HTML) ----
      if (url.pathname === "/api/unlock") {
        const pin = (url.searchParams.get("pin") || "").trim();
        const ok = !settings.access.requirePin || pin === String(settings.access.sitePin || "").trim();
        if (!ok) {
          await logTraffic(env, { type: "auth", detail: `Wrong PIN from ${ip || "unknown"}` });
        } else {
          // Correct PIN on the entry screen → log the new IP that successfully entered the site
          const country = request.cf && request.cf.country;
          await logVisit(env, ip, country, {
            prefix: "unlk:",
            detail: `New IP entered site (correct PIN): ${ip || "unknown"}${country ? " (" + country + ")" : ""}`,
          });
        }
        return json({ ok });
      }

      // ---- Diagnostik ----
      if (url.pathname === "/api/debug") {
        let total = 0, kvError = null, addrs = [];
        try {
          addrs = await getAddressIndex(env);
          for (const a of addrs) total += (await readInbox(env, a)).length;
        } catch (e) { kvError = e.message; }
        return json({
          ok: true, version: "3.0-premium", domains, kvBound: !!env.TEMPMAIL_KV,
          kvError, totalMessages: total, knownAddresses: addrs.slice(-10),
          dashboardPasswordLength: dashboardPassword(env).length,
        });
      }

      // ---- Rate limit untuk inbox publik ----
      if (url.pathname === "/api/messages") {
        const rl = await checkRateLimit(env, settings, ip);
        if (!rl.ok) {
          await logTraffic(env, { type: "ratelimit", detail: `Rate limit ${ip} (${rl.count} req)` });
          return json({ messages: [], error: "Rate limit exceeded" }, 429);
        }
        const address = normalizeAddress(url.searchParams.get("address"));
        if (!address || !isAllowedAddress(address, domains)) return json({ messages: [] });
        try {
          const messages = (await readInbox(env, address)).map((m) => withKey(m, address));
          messages.sort((a, b) => new Date(b.date) - new Date(a.date));
          return json({ messages });
        } catch (kvErr) {
          return json({ messages: [], error: kvErr.message }, 200);
        }
      }

      // ---- Realtime long-poll: balas SEKETIKA saat ada email baru ----
      if (url.pathname === "/api/poll") {
        const address = normalizeAddress(url.searchParams.get("address"));
        if (!address || !isAllowedAddress(address, domains)) return json({ messages: [], count: 0, changed: false });
        const sinceRaw = parseInt(url.searchParams.get("since") || "0", 10);
        const baseline = Number.isFinite(sinceRaw) ? sinceRaw : 0;
        const deadline = Date.now() + 25000; // tahan koneksi maksimal 25 dtk
        const pack = (inbox) => {
          const list = inbox.map((m) => withKey(m, address));
          list.sort((a, b) => new Date(b.date) - new Date(a.date));
          return list;
        };
        while (true) {
          const inbox = await readInbox(env, address);
          if (inbox.length !== baseline || Date.now() >= deadline) {
            return json({ messages: pack(inbox), count: inbox.length, changed: inbox.length !== baseline });
          }
          await new Promise((r) => setTimeout(r, 900));
        }
      }

      if (url.pathname === "/api/delete") {
        if (request.method !== "DELETE" && request.method !== "GET") return json({ ok: false, error: "Method not allowed" }, 405);
        const key = url.searchParams.get("key");
        const address = normalizeAddress(url.searchParams.get("address"));
        if (!key || !address || !isAllowedAddress(address, domains)) return json({ ok: false, error: "Invalid params" }, 400);
        const { address: keyAddr, id } = parseKey(key);
        if (keyAddr !== address) return json({ ok: false, error: "Forbidden" }, 403);
        const inbox = await readInbox(env, address);
        await writeInbox(env, address, inbox.filter((m) => m.id !== id), settings.cleanup?.maxPerInbox);
        return json({ ok: true });
      }

      if (url.pathname === "/api/clear") {
        if (request.method !== "DELETE" && request.method !== "GET") return json({ ok: false, error: "Method not allowed" }, 405);
        const address = normalizeAddress(url.searchParams.get("address"));
        if (!address || !isAllowedAddress(address, domains)) return json({ ok: false, error: "Invalid params" }, 400);
        await env.TEMPMAIL_KV.delete(INBOX_PREFIX + address);
        await removeAddressFromIndex(env, address);
        return json({ ok: true });
      }

      // =============================================================
      // REST API untuk bot (API key) — /api/v1/*
      // =============================================================
      if (url.pathname.startsWith("/api/v1/")) {
        if (!checkApiKey(url, request, settings)) return json({ ok: false, error: "Invalid or missing API key" }, 401);
        const rl = await checkRateLimit(env, settings, ip);
        if (!rl.ok) return json({ ok: false, error: "Rate limit exceeded" }, 429);

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
          const addrs = await getAddressIndex(env);
          const messages = [];
          for (const a of addrs) for (const m of await readInbox(env, a)) messages.push(withKey(m, a));
          messages.sort((a, b) => new Date(b.date) - new Date(a.date));
          return json({ ok: true, total: messages.length, messages });
        } catch (kvErr) {
          return json({ ok: false, messages: [], error: kvErr.message }, 500);
        }
      }

      if (url.pathname === "/api/admin/delete") {
        if (!isOwner(url, env)) return json({ ok: false, error: "Unauthorized" }, 401);
        const key = url.searchParams.get("key");
        const { address, id } = parseKey(key);
        if (!key || !address) return json({ ok: false, error: "Invalid key" }, 400);
        const inbox = await readInbox(env, address);
        await writeInbox(env, address, inbox.filter((m) => m.id !== id), settings.cleanup?.maxPerInbox);
        return json({ ok: true });
      }

      if (url.pathname === "/api/admin/clear") {
        if (!isOwner(url, env)) return json({ ok: false, error: "Unauthorized" }, 401);
        const addrs = await getAddressIndex(env);
        let deleted = 0;
        for (const a of addrs) { deleted += (await readInbox(env, a)).length; await env.TEMPMAIL_KV.delete(INBOX_PREFIX + a); }
        await env.TEMPMAIL_KV.delete(ADDR_INDEX_KEY);
        return json({ ok: true, deleted });
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
        if (request.method === "DELETE") { await env.TEMPMAIL_KV.delete(TRAFFIC_KEY); return json({ ok: true }); }
        let arr = [];
        try { arr = JSON.parse((await env.TEMPMAIL_KV.get(TRAFFIC_KEY)) || "[]"); } catch {}
        return json({ ok: true, traffic: Array.isArray(arr) ? arr : [] });
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
          from: "noreply@lawmail.dev", fromName: "LAW MAIL Test",
          subject: "Temp Mail test notification", text: "This is a test message from the dashboard.", html: "",
          date: new Date().toISOString(),
        };
        await notify(env, settings, sample);
        return json({ ok: true });
      }

      // ---- Test inbound: inject a fake email into an inbox (same path as the email handler) ----
      // Lets the owner verify the inbox UI, storage, and realtime polling without sending real mail.
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
          date: new Date().toISOString(),
        };
        const inbox = await readInbox(env, to);
        inbox.push(record);
        await writeInbox(env, to, inbox, settings.cleanup?.maxPerInbox);
        await addAddressToIndex(env, to);
        await logTraffic(env, { type: "mail", detail: `TEST inbound ${record.from} → ${to}: ${record.subject}` });
        return json({ ok: true, address: to, record });
      }

      // ---- Favicon (inline SVG brand mark) ----
      if (["/favicon.svg", "/favicon.ico", "/favicon.png", "/apple-touch-icon.png"].includes(url.pathname)) {
        return new Response(FAVICON_SVG, {
          headers: { "content-type": "image/svg+xml; charset=utf-8", "cache-control": "public, max-age=86400" },
        });
      }
      // ---- Logo (proxied from logoUrl, used for OG image) ----
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
        const body = `User-agent: *\nAllow: /$\nAllow: /blog/\nDisallow: /dashboard\nDisallow: /admin\nDisallow: /inbox\nDisallow: /inbox.html\nDisallow: /api/\n\nSitemap: ${seoBase}/sitemap.xml\n`;
        return new Response(body, { headers: { "content-type": "text/plain; charset=utf-8", "cache-control": "public, max-age=86400" } });
      }
      if (url.pathname === "/ads.txt") {
        const pub = publicConfig(env, settings, domains).adsensePubId;
        const body = pub ? `google.com, ${pub}, DIRECT, f08c47fec0942fa0\n` : `# Set ADSENSE_PUB_ID (pub-XXXX) in wrangler.toml or dashboard to activate ads.txt\n`;
        return new Response(body, { headers: { "content-type": "text/plain; charset=utf-8", "cache-control": "public, max-age=3600" } });
      }
      if (url.pathname === "/sitemap.xml") {
        // Paths that have localized versions in every LIVE locale (multiplied by locale below).
        const localizedPaths = ["/", "/temp-mail-generator", "/disposable-email", "/10-minute-mail", "/fake-email-generator", "/temporary-email-service", "/burner-email", "/temp-gmail", "/anonymous-email", "/alternatives/guerrilla-mail", "/alternatives/mailinator", "/blog", "/about", "/privacy", "/terms", "/contact", "/disclaimer"];
        let slugs = [];
        try { const raw = await env.TEMPMAIL_KV.get("posts:index"); if (raw) { const idx = JSON.parse(raw); if (Array.isArray(idx)) slugs = idx.map((p) => (typeof p === "string" ? p : p && p.slug)).filter(Boolean); } } catch {}
        const fallbackSlugs = localizedBlogPosts("de").map((p) => p.slug);
        slugs = [...new Set([...slugs, ...fallbackSlugs])];
        const localizedPlatformUrls = LIVE_LOCALES
          .flatMap((loc) => PLATFORM_LANDING_PATHS.map((p) => localizedPath(loc, p)))
          .filter((p) => LANDING_PAGES[p]);
        // Localized pages × live locales, plus platform pages for locales whose content exists.
        const urls = [...new Set([
          ...LIVE_LOCALES.flatMap((loc) => [...localizedPaths, ...slugs.map((s) => `/blog/${s}`)].map((p) => localizedPath(loc, p))),
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
          await logVisit(env, ip, request.cf && request.cf.country, {
            prefix: "banpg:",
            type: "banned",
            detail: `Blocked IP tried to open site: ${ip || "unknown"}`,
          });
          return new Response(bannedPageHtml(settings, ip), {
            status: 403,
            headers: { "content-type": "text/html; charset=utf-8", "cache-control": "no-store" },
          });
        }
        // Catat kunjungan IP ke Live Traffic console admin (non-blocking)
        const visitJob = logVisit(env, ip, request.cf && request.cf.country);
        if (ctx && ctx.waitUntil) ctx.waitUntil(visitJob); else await visitJob;
        const html = renderHomePage(PAGE, env, settings, domains, locale, "/");
        return new Response(html, { headers: { "content-type": "text/html; charset=utf-8", "cache-control": "public, max-age=300" } });
      }

      if (publicSite) {
        const html = renderPage(notFoundPage({ locale }), env, settings, domains);
        return new Response(html, { status: 404, headers: { "content-type": "text/html; charset=utf-8", "cache-control": "no-store", "x-robots-tag": "noindex" } });
      }
      return new Response("Not found", { status: 404 });
    } catch (err) {
      console.error("LawMail fetch handler error", err);
      return new Response("Internal Error: " + err.message, { status: 500 });
    }
  },
};
