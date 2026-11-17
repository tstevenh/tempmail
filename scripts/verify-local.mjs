const base = new URL(process.argv[2] || "http://127.0.0.1:5051");
const concurrency = 10;
const googlebot =
  "Mozilla/5.0 (Linux; Android 6.0.1; Nexus 5X Build/MMB29P) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Mobile Safari/537.36 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)";
const restoredPosts = new Set([
  "/blog/best-temp-mail",
  "/blog/how-to-create-a-temporary-email",
  "/blog/is-temp-mail-safe",
  "/blog/temp-mail-for-otp-verification-codes",
  "/blog/what-is-a-disposable-email-address",
]);
const englishPhrases = [
  "what is temp mail", "how temporary email works", "get an address", "use it anywhere",
  "read incoming mail", "frequently asked questions", "everyday workflow", "how it compares",
  "responsible use", "daily habit", "practical guidance", "more practical context",
  "temp mail works best", "for verification codes", "think of temp mail", "for repeated work",
  "a practical way to decide", "sometimes, but not always", "server test", "account recovery",
  "saved content", "payments", "temporary domains may", "receive-only temporary inbox",
];

function endpointFor(publicUrl) {
  const { pathname, search } = new URL(publicUrl);
  return new URL(pathname + search, base);
}

function attribute(tag, name) {
  return tag.match(new RegExp(`\\s${name}\\s*=\\s*(["'])(.*?)\\1`, "i"))?.[2];
}

function visibleWordCount(html) {
  const main = html.match(/<main\b[^>]*>([\s\S]*?)<\/main>/i)?.[1] || "";
  const text = main
    .replace(/<(script|style)\b[\s\S]*?<\/\1>/gi, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/&(?:#\d+|#x[\da-f]+|[a-z][\w-]*);/gi, " ")
    .replace(/\s+/g, " ")
    .trim();
  return text ? text.split(" ").length : 0;
}

function schemaTypes(html) {
  const types = new Set();
  const visit = (value) => {
    if (!value || typeof value !== "object") return;
    if (Array.isArray(value)) return value.forEach(visit);
    const type = value["@type"];
    for (const item of Array.isArray(type) ? type : [type]) {
      if (typeof item === "string") types.add(item);
    }
    Object.values(value).forEach(visit);
  };
  for (const match of html.matchAll(/<script\b[^>]*type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi)) {
    try {
      visit(JSON.parse(match[1]));
    } catch {
      // A malformed block cannot satisfy either required schema type.
    }
  }
  return types;
}

function internalLinks(fragment) {
  return [...fragment.matchAll(/<a\b[^>]*>/gi)]
    .map((match) => attribute(match[0], "href"))
    .filter((href) => href?.startsWith("/"));
}

function pathLocale(pathname) {
  return pathname.match(/^\/(de|fr|es|nl|it)(?:\/|$)/)?.[1] || null;
}

async function mapConcurrent(items, limit, callback) {
  const results = new Array(items.length);
  let next = 0;
  async function worker() {
    while (next < items.length) {
      const index = next++;
      results[index] = await callback(items[index], index);
    }
  }
  await Promise.all(Array.from({ length: Math.min(limit, items.length) }, worker));
  return results;
}

const headers = { "user-agent": googlebot };
const sitemapResponse = await fetch(new URL("/sitemap.xml", base), { headers, redirect: "manual" });
if (sitemapResponse.status !== 200) {
  throw new Error(`sitemap: expected 200, received ${sitemapResponse.status}`);
}
const sitemap = await sitemapResponse.text();
const urls = [...sitemap.matchAll(/<loc>\s*([^<]+?)\s*<\/loc>/gi)].map((match) => match[1]);
if (!urls.length) throw new Error("sitemap: no URLs found");
if (new Set(urls).size !== urls.length) throw new Error("sitemap: duplicate URLs found");

const issues = [];
const restoredCounts = new Map([...restoredPosts].map((path) => [path, 0]));
const restoredWordCounts = new Map();

await mapConcurrent(urls, concurrency, async (url) => {
  let publicUrl;
  try {
    publicUrl = new URL(url);
  } catch {
    issues.push(`${url}: invalid sitemap URL`);
    return;
  }

  if (restoredPosts.has(publicUrl.pathname)) {
    restoredCounts.set(publicUrl.pathname, restoredCounts.get(publicUrl.pathname) + 1);
  }

  try {
    const response = await fetch(endpointFor(url), { headers, redirect: "manual" });
    if (response.status !== 200) {
      issues.push(`${url}: expected 200, received ${response.status}`);
      return;
    }
    const html = await response.text();
    const main = html.match(/<main\b[^>]*>[\s\S]*?<\/main>/i)?.[0] || "";
    const locale = pathLocale(publicUrl.pathname);
    if (/noindex/i.test(response.headers.get("x-robots-tag") || "")) {
      issues.push(`${url}: x-robots-tag contains noindex`);
    }
    const robotsTags = [...html.matchAll(/<meta\b[^>]*>/gi)].filter(
      (match) => attribute(match[0], "name")?.toLowerCase() === "robots",
    );
    if (robotsTags.some((match) => /noindex/i.test(attribute(match[0], "content") || ""))) {
      issues.push(`${url}: meta robots contains noindex`);
    }
    const canonicalTag = [...html.matchAll(/<link\b[^>]*>/gi)].find(
      (match) => attribute(match[0], "rel")?.toLowerCase().split(/\s+/).includes("canonical"),
    );
    const canonical = canonicalTag && attribute(canonicalTag[0], "href");
    if (canonical !== url) issues.push(`${url}: canonical is ${canonical || "missing"}`);

    if (locale) {
      const mainText = main.replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").toLowerCase();
      const leaks = englishPhrases.filter((phrase) => mainText.includes(phrase));
      if (leaks.length) issues.push(`${url}: localized content contains English phrases: ${leaks.join(", ")}`);
    }

    const documentLinks = internalLinks(html);
    const mainLinks = internalLinks(main);
    for (const href of documentLinks) {
      if (href.startsWith("/api") || href.startsWith("/dashboard") || href.startsWith("/inbox")) {
        issues.push(`${url}: contains forbidden internal link ${href}`);
      }
    }
    if (locale && !publicUrl.pathname.includes("/inbox") && mainLinks.length < 4) {
      issues.push(`${url}: expected at least 4 contextual links, found ${mainLinks.length}`);
    }
    for (const href of mainLinks.slice(0, 8)) {
      const linked = await fetch(new URL(href, base), { headers, redirect: "manual" });
      if (linked.status !== 200) issues.push(`${url}: internal link ${href} returned ${linked.status}`);
      if (locale && pathLocale(new URL(href, base).pathname) !== locale) {
        issues.push(`${url}: internal link ${href} leaves locale ${locale}`);
      }
    }

    if (restoredPosts.has(publicUrl.pathname)) {
      const words = visibleWordCount(html);
      restoredWordCounts.set(publicUrl.pathname, words);
      if (words < 800) issues.push(`${url}: expected at least 800 visible words, received ${words}`);
      const types = schemaTypes(html);
      if (!types.has("Article")) issues.push(`${url}: missing Article schema`);
      if (!types.has("FAQPage")) issues.push(`${url}: missing FAQPage schema`);
    }
  } catch (error) {
    issues.push(`${url}: fetch failed: ${error.message}`);
  }
});

for (const [path, count] of restoredCounts) {
  if (count !== 1) issues.push(`${path}: expected once in sitemap, found ${count}`);
}

if (issues.length) {
  throw new Error(`SEO verification failed (${issues.length} issue${issues.length === 1 ? "" : "s"}):\n- ${issues.join("\n- ")}`);
}

console.log(
  JSON.stringify(
    {
      base: base.origin,
      sitemapUrls: urls.length,
      uniqueUrls: new Set(urls).size,
      concurrency,
      restoredArticles: [...restoredWordCounts].map(([path, visibleWords]) => ({ path, visibleWords })),
    },
    null,
    2,
  ),
);
