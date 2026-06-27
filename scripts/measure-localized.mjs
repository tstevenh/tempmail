import { localizedLandingPages, localizedBlogPosts, homepageLocale } from "../src/localized-content.js";

const locales = ["de", "fr", "es", "nl", "it"];
const pages = localizedLandingPages();

function wordCount(html) {
  return html.replace(/<[^>]+>/g, " ").trim().split(/\s+/).filter(Boolean).length;
}

for (const locale of locales) {
  let quoteBodies = 0;
  let minLanding = Infinity;
  let minBlog = Infinity;
  let minPlatform = Infinity;
  const home = homepageLocale(locale).content;
  if (home.includes('"')) quoteBodies++;
  const homeWords = wordCount(home);

  for (const [path, page] of Object.entries(pages)) {
    if (!path.startsWith(`/${locale}/`)) continue;
    if (page.body.includes('"')) quoteBodies++;
    const words = wordCount(page.body);
    if (path.includes("/temp-mail-for")) minPlatform = Math.min(minPlatform, words);
    else if (!["/about", "/privacy", "/terms", "/contact", "/disclaimer"].some((suffix) => path.endsWith(suffix))) {
      minLanding = Math.min(minLanding, words);
    }
  }

  for (const post of localizedBlogPosts(locale)) {
    if (post.bodyHtml.includes('"')) quoteBodies++;
    minBlog = Math.min(minBlog, wordCount(post.bodyHtml));
  }

  console.log(locale, JSON.stringify({
    homeWords,
    minLanding,
    minBlog,
    minPlatform,
    quoteBodies,
  }));
}
