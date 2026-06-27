const base = process.argv[2] || "http://127.0.0.1:5051";
const sitemap = await (await fetch(base + "/sitemap.xml")).text();
const urls = [...sitemap.matchAll(/<loc>(.*?)<\/loc>/g)].map((m) => m[1]);
const englishPhrases = [
  "what is temp mail",
  "how temporary email works",
  "get an address",
  "use it anywhere",
  "read incoming mail",
  "frequently asked questions",
  "everyday workflow",
  "how it compares",
  "responsible use",
  "daily habit",
  "practical guidance",
  "more practical context",
  "temp mail works best",
  "for verification codes",
  "think of temp mail",
  "for repeated work",
  "a practical way to decide",
  "sometimes, but not always",
  "server test",
  "account recovery",
  "saved content",
  "payments",
  "temporary domains may",
  "receive-only temporary inbox",
];

const bad = [];
const leaks = [];
const linkBad = [];
const noContext = [];

function linksFrom(fragment) {
  return [...fragment.matchAll(/<a\b[^>]*>/g)]
    .map((tag) => tag[0].match(/\shref=(["'])(.*?)\1/))
    .filter(Boolean)
    .map((m) => m[2])
    .filter((href) => href.startsWith("/"));
}

for (const url of urls) {
  const path = new URL(url).pathname;
  const response = await fetch(base + path);
  if (response.status !== 200) {
    bad.push([path, response.status]);
    continue;
  }
  const html = await response.text();
  const main = (html.match(/<main[\s\S]*?<\/main>/) || [""])[0];
  const locale = (path.match(/^\/(de|fr|es|nl|it)(?:\/|$)/) || [])[1];
  if (locale) {
    const text = main.replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").toLowerCase();
    const hits = englishPhrases.filter((phrase) => text.includes(phrase));
    if (hits.length) leaks.push([path, hits]);
  }
  const documentLinks = linksFrom(html);
  const mainLinks = linksFrom(main);
  if (locale && !path.includes("/inbox") && mainLinks.length < 4) noContext.push([path, mainLinks.length]);
  for (const href of documentLinks) {
    if (href.startsWith("/api") || href.startsWith("/dashboard") || href.startsWith("/inbox")) {
      linkBad.push([path, href, "forbidden"]);
    }
  }
  for (const href of mainLinks.slice(0, 8)) {
    const linked = await fetch(base + href);
    if (linked.status !== 200) linkBad.push([path, href, linked.status]);
    const hrefLocale = (href.match(/^\/(de|fr|es|nl|it)(?:\/|$)/) || [])[1];
    if (locale && hrefLocale !== locale) linkBad.push([path, href, "wrong-locale"]);
  }
}

console.log(JSON.stringify({
  total: urls.length,
  unique: new Set(urls).size,
  badCount: bad.length,
  leakCount: leaks.length,
  lowContextCount: noContext.length,
  linkBadCount: linkBad.length,
  bad: bad.slice(0, 10),
  leaks: leaks.slice(0, 10),
  noContext: noContext.slice(0, 20),
  linkBad: linkBad.slice(0, 20),
}, null, 2));
