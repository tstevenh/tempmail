import assert from "node:assert/strict";
import { execFile } from "node:child_process";
import { createServer } from "node:http";
import test, { after, before } from "node:test";
import { mkdtemp, readFile, rm } from "node:fs/promises";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { promisify } from "node:util";
import { unstable_dev } from "wrangler";
import WebSocket from "ws";
import { canonicalProductionUrl } from "../src/canonical-url.mjs";

const OWNER_PASSWORD = "test-owner-password";
const TEST_SITE_URL = "https://example.test";
let verificationServer;
let worker;
let stateDirectory;
const execFileAsync = promisify(execFile);

const RESTORED_POSTS = [
  "best-temp-mail",
  "how-to-create-a-temporary-email",
  "is-temp-mail-safe",
  "temp-mail-for-otp-verification-codes",
  "what-is-a-disposable-email-address",
];
const LOCALIZED_PREFIXES = ["de", "fr", "es", "nl", "it"];

function jsonLd(html) {
  return [...String(html).matchAll(/<script\b[^>]*type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi)]
    .map((match) => JSON.parse(match[1]));
}

function visibleWordCount(html) {
  const main = String(html).match(/<main[^>]*>([\s\S]*?)<\/main>/i)?.[1] || "";
  const text = main
    .replace(/<script[\s\S]*?<\/script>/gi, " ")
    .replace(/<style[\s\S]*?<\/style>/gi, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/&[a-z0-9#]+;/gi, " ")
    .replace(/\s+/g, " ")
    .trim();
  return text ? text.split(" ").length : 0;
}

async function migrateLocalDatabase(config, database, persistTo) {
  await execFileAsync("npx", ["wrangler", "d1", "migrations", "apply", database, "--local", "--config", config, "--persist-to", persistTo], {
    cwd: process.cwd(),
  });
}

function ownerPath(path) {
  const url = new URL(path, "http://worker.local");
  url.searchParams.set("pw", OWNER_PASSWORD);
  return url.pathname + url.search;
}

async function ownerJson(path, init = {}) {
  const response = await worker.fetch(ownerPath(path), init);
  return { response, body: await response.json() };
}

async function inboxSession() {
  const response = await worker.fetch("/api/session", {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({ token: "local-turnstile-token" }),
  });
  assert.equal(response.status, 200);
  const cookie = response.headers.get("set-cookie");
  assert.match(cookie || "", /__Host-inbox_session=.*HttpOnly.*Secure.*SameSite=Lax/);
  return cookie.split(";", 1)[0];
}

async function inboxJson(path, cookie, init = {}) {
  const headers = new Headers(init.headers || {});
  headers.set("cookie", cookie);
  const response = await worker.fetch(path, { ...init, headers });
  return { response, body: await response.json() };
}

async function createMessage(address, body = {}) {
  const { response, body: payload } = await ownerJson("/api/admin/test-inbound", {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({ address, ...body }),
  });
  assert.equal(response.status, 200);
  return payload.record;
}

before(async () => {
  verificationServer = createServer((request, response) => {
    response.writeHead(200, { "content-type": "application/json" });
    response.end(JSON.stringify({ success: request.url === "/turnstile" }));
  });
  await new Promise((resolve) => verificationServer.listen(8788, "127.0.0.1", resolve));
  stateDirectory = await mkdtemp(join(tmpdir(), "tempmail-worker-test-"));
  await migrateLocalDatabase("test/wrangler.test.toml", "tempmail-integration-test", stateDirectory);
  worker = await unstable_dev("src/worker.js", {
    config: "test/wrangler.test.toml",
    local: true,
    persistTo: stateDirectory,
    experimental: { disableExperimentalWarning: true },
  });
});

after(async () => {
  await worker?.stop();
  await new Promise((resolve) => verificationServer?.close(resolve));
  await rm(stateDirectory, { recursive: true, force: true });
});

test("protects browser mailbox routes while API-key routes remain Turnstile-free", { concurrency: false }, async () => {
  const address = "protected@example.test";
  const denied = await worker.fetch(`/api/messages?address=${address}`);
  assert.equal(denied.status, 401);

  const session = await inboxSession();
  const sessionState = await worker.fetch("/api/session", { headers: { cookie: session } });
  assert.deepEqual(await sessionState.json(), { ok: true });

  const { body: settingsResult } = await ownerJson("/api/admin/settings");
  settingsResult.settings.apiKeys = [{ key: "test-api-key", label: "test", createdAt: new Date().toISOString() }];
  const { response: save } = await ownerJson("/api/admin/settings", {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(settingsResult.settings),
  });
  assert.equal(save.status, 200);

  const api = await worker.fetch(`/api/v1/messages?address=${address}&apikey=test-api-key`);
  assert.equal(api.status, 200);
  assert.equal((await api.json()).ok, true);
});

test("stores, reads, deletes, clears, and seven-day-cleans D1 mailbox rows", { concurrency: false }, async () => {
  const address = "crud@example.test";
  const session = await inboxSession();
  const current = await createMessage(address, { subject: "Current message" });
  const old = await createMessage(address, { subject: "Old message", date: new Date(Date.now() - 8 * 86400000).toISOString() });

  let inbox = await inboxJson(`/api/messages?address=${address}`, session);
  assert.equal(inbox.response.status, 200);
  assert.equal(inbox.body.messages.length, 2);

  const deleted = await inboxJson(`/api/delete?address=${address}&key=${encodeURIComponent(`${address}::${current.id}`)}`, session, { method: "DELETE" });
  assert.equal(deleted.response.status, 200);
  inbox = await inboxJson(`/api/messages?address=${address}`, session);
  assert.equal(inbox.body.messages.length, 1);

  const cleanup = await ownerJson("/api/admin/cleanup");
  assert.equal(cleanup.response.status, 200);
  assert.equal(cleanup.body.removed, 1);
  inbox = await inboxJson(`/api/messages?address=${address}`, session);
  assert.equal(inbox.body.messages.length, 0);

  await createMessage(address, { subject: "Clear this" });
  const cleared = await inboxJson(`/api/clear?address=${address}`, session, { method: "DELETE" });
  assert.equal(cleared.response.status, 200);
  inbox = await inboxJson(`/api/messages?address=${address}`, session);
  assert.deepEqual(inbox.body.messages, []);
  assert.ok(old.id);
});

test("copies legacy KV inboxes to D1 idempotently and reports verified counts", { concurrency: false }, async () => {
  const legacyStateDirectory = await mkdtemp(join(tmpdir(), "tempmail-legacy-test-"));
  await migrateLocalDatabase("test/wrangler.legacy.test.toml", "tempmail-legacy-migration-test", legacyStateDirectory);
  const legacyWorker = await unstable_dev("src/worker.js", { config: "test/wrangler.legacy.test.toml", local: true, persistTo: legacyStateDirectory, experimental: { disableExperimentalWarning: true } });
  const address = "legacy@example.test";
  const owner = (path) => ownerPath(path);
  try {
    const inbound = await legacyWorker.fetch(owner("/api/admin/test-inbound"), {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ address, subject: "Migrated" }),
    });
    assert.equal(inbound.status, 200);

    const migrate = async () => {
      const response = await legacyWorker.fetch(owner("/api/admin/migrate-kv"), { method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify({ cursor: 0, limit: 10 }) });
      return { response, body: await response.json() };
    };
    const first = await migrate();
    assert.equal(first.response.status, 200);
    assert.equal(first.body.complete, true);
    assert.equal(first.body.sourceMessages, 1);
    assert.equal(first.body.d1Messages, 1);
    assert.equal(first.body.verifiedAddresses, 1);

    const second = await migrate();
    assert.equal(second.response.status, 200);
    assert.equal(second.body.sourceMessages, 1);
    assert.equal(second.body.d1Messages, 1);
    assert.equal(second.body.verifiedAddresses, 1);
  } finally {
    await legacyWorker.stop();
    await rm(legacyStateDirectory, { recursive: true, force: true });
  }
});

test("broadcasts an inbox update through the local Durable Object hub", { concurrency: false }, async () => {
  const address = "live@example.test";
  const session = await inboxSession();
  const socket = new WebSocket(`ws://127.0.0.1:${worker.port}/api/live?address=${address}`, { headers: { cookie: session } });
  const notification = new Promise((resolve, reject) => {
    const timeout = setTimeout(() => reject(new Error("timed out waiting for inbox update")), 5000);
    socket.onmessage = (event) => { clearTimeout(timeout); resolve(JSON.parse(event.data)); };
    socket.onerror = () => { clearTimeout(timeout); reject(new Error("WebSocket error")); };
  });
  await new Promise((resolve) => { socket.onopen = resolve; });
  await createMessage(address, { subject: "Live update" });
  assert.deepEqual(await notification, { type: "inbox-updated" });
  socket.close();
});

test("serves every restored English article as indexable long-form content", { concurrency: false }, async () => {
  const sitemapResponse = await worker.fetch("/sitemap.xml");
  assert.equal(sitemapResponse.status, 200);
  const sitemap = await sitemapResponse.text();

  for (const slug of RESTORED_POSTS) {
    const path = `/blog/${slug}`;
    assert.equal((sitemap.match(new RegExp(`<loc>${TEST_SITE_URL.replace(".", "\\.")}${path}</loc>`, "g")) || []).length, 1);

    const response = await worker.fetch(path);
    assert.equal(response.status, 200);
    assert.doesNotMatch(response.headers.get("x-robots-tag") || "", /noindex/i);
    const html = await response.text();
    assert.match(html, /<meta name="robots" content="index, follow, max-image-preview:large"/i);
    assert.match(html, new RegExp(`<link rel="canonical" href="${TEST_SITE_URL.replace(".", "\\.")}${path}"`));
    assert.match(html, /"@type":"Article"/);
    assert.match(html, /"@type":"FAQPage"/);
    assert.match(html, /<meta property="og:type" content="article"/i);
    const article = jsonLd(html).find((item) => item["@type"] === "Article");
    assert.equal(article.mainEntityOfPage, `${TEST_SITE_URL}${path}`);
    assert.ok(article.datePublished);
    assert.ok(article.dateModified);
    assert.equal(article.author.name, "Open Temp Mail");
    assert.ok(visibleWordCount(html) >= 800, `${path} must contain at least 800 visible words`);

    for (const locale of LOCALIZED_PREFIXES) {
      const localizedPath = `/${locale}${path}`;
      assert.equal((sitemap.match(new RegExp(`<loc>${TEST_SITE_URL.replace(".", "\\.")}${localizedPath}</loc>`, "g")) || []).length, 1);
    }
  }
});

test("keeps custom blog posts within their saved locale", { concurrency: false }, async () => {
  const englishSlug = "english-only-regression-post";
  const germanSlug = "deutscher-regression-beitrag";
  const makePost = (slug, locale, marker) => ({
    locale,
    slug,
    title: marker,
    h1: marker,
    desc: `${marker} description for sitemap locale regression coverage.`,
    date: "2026-07-01",
    bodyHtml: `<p>${marker}</p><p><a href="/${locale === "en" ? "" : `${locale}/`}">Home</a></p>`,
  });
  for (const post of [makePost(englishSlug, "en", "English-only marker"), makePost(germanSlug, "de", "Deutsch-only marker")]) {
    const { response } = await ownerJson("/api/admin/posts", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(post),
    });
    assert.equal(response.status, 200);
  }

  const sitemap = await (await worker.fetch("/sitemap.xml")).text();
  assert.match(sitemap, new RegExp(`<loc>${TEST_SITE_URL.replace(".", "\\.")}/blog/${englishSlug}</loc>`));
  for (const locale of LOCALIZED_PREFIXES) {
    assert.doesNotMatch(sitemap, new RegExp(`<loc>${TEST_SITE_URL.replace(".", "\\.")}/${locale}/blog/${englishSlug}</loc>`));
  }
  assert.match(sitemap, new RegExp(`<loc>${TEST_SITE_URL.replace(".", "\\.")}/de/blog/${germanSlug}</loc>`));
  const localized = await worker.fetch(`/de/blog/${germanSlug}`);
  assert.equal(localized.status, 200);
  assert.match(await localized.text(), /Deutsch-only marker/);
});

test("permanently redirects production HTTP and www URLs to the HTTPS apex", { concurrency: false }, async () => {
  const cases = [
    ["http://opentempmail.com/blog/is-temp-mail-safe?src=gsc", "https://opentempmail.com/blog/is-temp-mail-safe?src=gsc"],
    ["https://www.opentempmail.com/temp-mail-generator?ref=www", "https://opentempmail.com/temp-mail-generator?ref=www"],
    ["http://www.opentempmail.com/?a=1", "https://opentempmail.com/?a=1"],
  ];
  for (const [source, target] of cases) {
    const response = await worker.fetch(source, { redirect: "manual" });
    assert.equal(response.status, 308);
    assert.equal(response.headers.get("location"), target);
  }

  const local = await worker.fetch("http://worker.local/about", { redirect: "manual" });
  assert.equal(local.status, 200);

  assert.equal(canonicalProductionUrl(new URL("https://opentempmail.com/about?canonical=1")), null);
});

test("browser clients verify inline only after explicit inbox access", async () => {
  const [home, inbox] = await Promise.all([
    readFile("public/app.html", "utf8"),
    readFile("public/inbox.html", "utf8"),
  ]);
  for (const html of [home, inbox]) {
    assert.doesNotMatch(html, /class="verify[^\"]*"[^>]*role="dialog"/);
    assert.doesNotMatch(html, /aria-modal="true"/);
    assert.match(html, /id="inboxVerify"/);
    assert.match(html, /id="verifyInboxBtn"/);
    assert.match(html, /verifyInboxBtn[\s\S]*addEventListener\(['"]click['"]/);
    assert.match(html, /async function checkInboxSession\(/);
    assert.match(html, /button\.disabled\|\|verificationAttempt/);
    assert.match(html, /window\.turnstile\.remove\(/);
    assert.match(html, /verificationGeneration/);
    assert.match(html, /r\.status===401/);
    assert.match(html, /if\(!r\.ok\)throw new Error/);
    assert.match(html, /if\(!\(await fetchMessages\(false,address,myToken\)\)\)/);
    assert.match(html, /new WebSocket\(/);
    assert.match(html, /setInterval\([^\n]*60000/);
    assert.doesNotMatch(html, /\/api\/poll/);
  }

  const homeInit = home.match(/\(function init\(\)\{[\s\S]*?\}\)\(\);/)?.[0] || "";
  assert.ok(homeInit);
  assert.doesNotMatch(homeInit, /ensureInboxSession|mountTurnstile|startRealtime/);
});
