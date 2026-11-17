export function canonicalProductionUrl(url) {
  const host = url.hostname.toLowerCase();
  if (host !== "opentempmail.com" && host !== "www.opentempmail.com") return null;
  if (url.protocol === "https:" && host === "opentempmail.com") return null;
  const canonical = new URL(url.toString());
  canonical.protocol = "https:";
  canonical.hostname = "opentempmail.com";
  canonical.port = "";
  return canonical;
}
