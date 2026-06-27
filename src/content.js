// content.js — shared layout + static landing/legal pages + blog renderers.
// All pages are server-rendered (crawler-visible). SEO placeholders (__SITE_URL__,
// __ADSENSE_HEAD__, __MAIL_DOMAIN__) are filled by renderPage() in worker.js.
import { hreflangLinks, localizedPath, localeStrings, switcherItems, LOCALE_HREFLANG } from "./i18n.js";

const SHARED_CSS = `
*{box-sizing:border-box;margin:0;padding:0}
:root{
  --bg:oklch(0.993 0.002 274);--surface:oklch(0.979 0.004 274);--border:oklch(0.918 0.006 274);--border-strong:oklch(0.86 0.009 274);
  --ink:oklch(0.265 0.024 274);--muted:oklch(0.515 0.021 274);--soft:oklch(0.63 0.018 274);
  --accent:oklch(0.55 0.205 274);--accent-hover:oklch(0.49 0.215 274);--accent-weak:oklch(0.955 0.028 274);--accent-ink:oklch(0.46 0.2 274);
  --shadow-sm:0 1px 2px oklch(0.3 0.05 274/.07);--shadow-lg:0 4px 10px oklch(0.3 0.05 274/.06),0 24px 50px oklch(0.4 0.13 274/.16);
}
html{scroll-behavior:smooth}html,body{min-height:100%}
body{font-family:Inter,system-ui,-apple-system,sans-serif;background:var(--bg);color:var(--ink);line-height:1.6;-webkit-font-smoothing:antialiased;overflow-x:hidden}
a{color:inherit}::selection{background:var(--accent);color:#fff}
.wrap{max-width:780px;margin:0 auto;padding:0 22px;width:100%}
.masthead{position:sticky;top:0;z-index:20;background:oklch(0.993 0.002 274/.85);backdrop-filter:saturate(1.4) blur(10px);border-bottom:1px solid var(--border)}
.mast-row{display:flex;align-items:center;justify-content:space-between;gap:16px;height:62px}
.brand{display:flex;align-items:center;gap:10px;font-weight:700;font-size:17px;letter-spacing:-.02em;text-decoration:none;color:var(--ink)}
.brand .mark{width:26px;height:26px;border-radius:7px;box-shadow:var(--shadow-sm)}
.nav-right{display:flex;align-items:center;gap:4px}
.nav-right a{font-size:13.5px;font-weight:500;color:var(--muted);text-decoration:none;padding:7px 10px;border-radius:7px;transition:.15s}
.nav-right a:hover{color:var(--ink);background:var(--surface)}
.lang-switch{display:flex;justify-content:center;gap:7px;flex-wrap:wrap;margin:24px 0 0}
.lang-switch a{font-size:12.5px;color:var(--muted);text-decoration:none;border:1px solid var(--border);border-radius:999px;padding:5px 9px;background:var(--surface)}
.lang-switch a[aria-current='true']{color:#fff;background:var(--accent);border-color:var(--accent)}
main.page a.cta{display:inline-flex;align-items:center;gap:8px;border:1px solid transparent;background:var(--accent);color:#fff;font-weight:600;font-size:14px;padding:12px 20px;border-radius:9px;text-decoration:none;margin:8px 0 4px;box-shadow:0 4px 14px oklch(0.5 0.2 274/.3);transition:.15s}
main.page a.cta:hover{background:var(--accent-hover)}
main.page{max-width:720px;margin:0 auto;padding:48px 22px 64px}
main.page h1{font-weight:800;font-size:clamp(30px,5vw,44px);line-height:1.07;letter-spacing:-.03em;margin-bottom:14px;text-wrap:balance}
main.page .lead{font-size:clamp(16px,2vw,19px);color:var(--muted);margin-bottom:26px;text-wrap:pretty}
main.page h2{font-weight:700;font-size:clamp(20px,3vw,27px);letter-spacing:-.02em;margin:34px 0 10px}
main.page h3{font-weight:600;font-size:16px;margin:22px 0 8px}
main.page p{color:var(--muted);margin-bottom:14px;font-size:15.5px;max-width:68ch}
main.page ul,main.page ol{color:var(--muted);margin:0 0 16px 22px;font-size:15.5px}
main.page li{margin-bottom:8px}
main.page a{color:var(--accent-ink);text-decoration:none;font-weight:500;border-bottom:1px solid oklch(0.55 0.205 274/.3)}
main.page a.cta{border-bottom:0}
main.page a:hover{border-bottom-color:var(--accent)}
main.page strong{color:var(--ink);font-weight:600}
.posts{list-style:none;margin:20px 0 0;padding:0}
.posts li{border-top:1px solid var(--border);padding:20px 0;transition:.15s}
.posts a{font-weight:700;font-size:19px;text-decoration:none;letter-spacing:-.01em;border-bottom:0}
.posts a:hover{color:var(--accent-ink)}
.posts p{margin:5px 0 0;color:var(--muted)}
.meta{font-family:"IBM Plex Mono",monospace;font-size:12px;color:var(--soft);margin-bottom:16px}
.ad-slot{margin:28px 0;text-align:center}.ad-slot:empty{display:none}
.footer{border-top:1px solid var(--border);padding:26px 22px;text-align:center}
.footer a{color:var(--muted);text-decoration:none;margin:0 11px;font-size:13.5px;transition:.15s}.footer a:hover{color:var(--accent-ink)}
.footer .copy{display:block;margin-top:12px;color:var(--soft);font-size:12.5px}
@media (prefers-reduced-motion:reduce){*{transition-duration:.001ms!important;scroll-behavior:auto!important}}
`;

function esc(s){return String(s==null?"":s).replace(/[&<>"]/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));}

// ---- Structured data (JSON-LD) helpers ----
function ldClean(s){return String(s==null?"":s).replace(/<[^>]+>/g," ").replace(/&amp;/g,"&").replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&quot;/g,'"').replace(/&#39;/g,"'").replace(/\s+/g," ").trim();}
function ldScript(obj){return `<script type="application/ld+json">${JSON.stringify(obj).replace(/</g,"\\u003c")}</script>`;}
function faqSchemaFromBody(body){
  const items=[]; let m;
  const reD=/<details[^>]*>\s*<summary[^>]*>(.*?)<\/summary>\s*<p[^>]*>(.*?)<\/p>/gis;
  while((m=reD.exec(body))){const q=ldClean(m[1]),a=ldClean(m[2]);if(q&&a)items.push({"@type":"Question",name:q,acceptedAnswer:{"@type":"Answer",text:a}});}
  const reH=/<h3[^>]*>([^<]*\?)<\/h3>\s*<p[^>]*>(.*?)<\/p>/gis;
  while((m=reH.exec(body))){const q=ldClean(m[1]),a=ldClean(m[2]);if(q&&a)items.push({"@type":"Question",name:q,acceptedAnswer:{"@type":"Answer",text:a}});}
  if(items.length<2)return "";
  return ldScript({"@context":"https://schema.org","@type":"FAQPage",mainEntity:items});
}
function breadcrumbSchema(rest,locale,title){
  if(!rest||rest==="/"||rest==="/404")return "";
  const u=(p)=>"__SITE_URL__"+localizedPath(locale,p);
  const ui=localeStrings(locale);
  const items=[{"@type":"ListItem",position:1,name:ldClean(ui.nav.tempMail||"Temp Mail"),item:u("/")}];
  let pos=2;
  if(rest.startsWith("/blog/"))items.push({"@type":"ListItem",position:pos++,name:ldClean(ui.nav.blog||"Blog"),item:u("/blog")});
  else if(rest.startsWith("/temp-mail-for-"))items.push({"@type":"ListItem",position:pos++,name:"Temp Mail for apps",item:u("/temp-mail-for")});
  items.push({"@type":"ListItem",position:pos,name:ldClean(title),item:u(rest)});
  return ldScript({"@context":"https://schema.org","@type":"BreadcrumbList",itemListElement:items});
}
function articleSchema(rest,locale,title,desc,datePublished){
  const u="__SITE_URL__"+localizedPath(locale,rest);
  const d=datePublished||"2026-01-01";
  return ldScript({"@context":"https://schema.org","@type":"Article",headline:ldClean(title),description:ldClean(desc),inLanguage:(LOCALE_HREFLANG[locale]||locale),datePublished:d,dateModified:d,mainEntityOfPage:u,image:"__SITE_URL__/logo.png",author:{"@type":"Organization",name:"Temp Mail"},publisher:{"@type":"Organization",name:"Temp Mail",logo:{"@type":"ImageObject",url:"__SITE_URL__/logo.png"}}});
}

function languageSwitcher(rest, locale) {
  return `<nav class="lang-switch" aria-label="Language">${switcherItems(rest, locale).map((item) =>
    `<a href="${esc(item.href)}" hreflang="${esc(LOCALE_HREFLANG[item.code] || item.code)}" aria-current="${item.current ? "true" : "false"}">${esc(item.label)}</a>`
  ).join("")}</nav>`;
}

// Full-page HTML template. `path` is the concrete URL path for canonical/OG.
export function layout({ path, title, desc, bodyHtml, noindex, locale = "en", rest = path, type, datePublished }) {
  const robots = noindex ? "noindex, follow" : "index, follow, max-image-preview:large";
  const ui = localeStrings(locale);
  const home = localizedPath(locale, "/");
  const concretePath = localizedPath(locale, rest || path || "/");
  const schema = noindex ? "" : [
    type === "blog" ? articleSchema(rest || path || "/", locale, title, desc, datePublished) : "",
    breadcrumbSchema(rest || path || "/", locale, title),
    faqSchemaFromBody(bodyHtml || ""),
  ].filter(Boolean).join("\n");
  return `<!DOCTYPE html>
<html lang="${esc(LOCALE_HREFLANG[locale] || locale)}">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<title>${esc(title)}</title>
<meta name="description" content="${esc(desc)}" />
<meta name="robots" content="${robots}" />
<link rel="canonical" href="__SITE_URL__${concretePath}" />
__HREFLANG_LINKS__
<meta property="og:type" content="website" />
<meta property="og:site_name" content="Temp Mail" />
<meta property="og:title" content="${esc(title)}" />
<meta property="og:description" content="${esc(desc)}" />
<meta property="og:url" content="__SITE_URL__${concretePath}" />
<meta property="og:image" content="__SITE_URL__/logo.png" />
<meta name="twitter:card" content="summary_large_image" />
<meta name="theme-color" content="#5046E5" />
<link rel="icon" type="image/svg+xml" href="/favicon.svg" />
<link rel="apple-touch-icon" href="/favicon.svg" />
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500;600&family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
${schema}
__ADSENSE_HEAD__
<style>${SHARED_CSS}</style>
</head>
<body>
<header class="masthead"><div class="wrap"><div class="mast-row">
  <a class="brand" href="${esc(home)}"><img class="mark" src="/favicon.svg" alt="" width="26" height="26" />Temp Mail</a>
  <nav class="nav-right">
    <a href="${esc(localizedPath(locale, "/"))}">${esc(ui.nav.tempMail)}</a><a href="${esc(localizedPath(locale, "/disposable-email"))}">${esc(ui.nav.disposable)}</a><a href="${esc(localizedPath(locale, "/blog"))}">${esc(ui.nav.blog)}</a><a href="${esc(localizedPath(locale, "/about"))}">${esc(ui.nav.about)}</a>
  </nav>
</div></div></header>
<main class="page">
${bodyHtml}
${languageSwitcher(rest || path || "/", locale)}
</main>
<footer class="footer">
  <nav><a href="${esc(localizedPath(locale, "/about"))}">${esc(ui.footer.about)}</a><a href="${esc(localizedPath(locale, "/blog"))}">${esc(ui.footer.blog)}</a><a href="${esc(localizedPath(locale, "/temp-mail-for"))}">Temp mail for apps</a><a href="${esc(localizedPath(locale, "/privacy"))}">${esc(ui.footer.privacy)}</a><a href="${esc(localizedPath(locale, "/terms"))}">${esc(ui.footer.terms)}</a><a href="${esc(localizedPath(locale, "/contact"))}">${esc(ui.footer.contact)}</a><a href="${esc(localizedPath(locale, "/disclaimer"))}">${esc(ui.footer.disclaimer)}</a></nav>
  <span class="copy">${ui.footer.copy}</span>
</footer>
<script>
(function(){if(!window.__PUB__)return;document.querySelectorAll('.ad-slot').forEach(function(s){var i=document.createElement('ins');i.className='adsbygoogle';i.style.display='block';i.setAttribute('data-ad-client','ca-'+window.__PUB__);i.setAttribute('data-ad-format','auto');i.setAttribute('data-full-width-responsive','true');s.appendChild(i);try{(window.adsbygoogle=window.adsbygoogle||[]).push({});}catch(e){}});})();
</script>
<script>window.__PUB__="__ADSENSE_PUB__"||"";</script>
</body>
</html>`.replace(/__HREFLANG_LINKS__/g, hreflangLinks(rest || path || "/", "__SITE_URL__"));
}

const CTA = `<a class="cta" href="/">→ Get your free temp mail address</a>`;
const AD = `<div class="ad-slot"></div>`;

// ---- Static landing + legal pages, keyed by path ----
export const STATIC_PAGES = {
  "/temp-mail-generator": {
    title: "Temp Mail Generator — Free Disposable Email Generator",
    desc: "Free temp mail generator. Instantly generate a disposable email address to receive verification emails and OTP codes — no sign-up, no password.",
    body: `<h1>Temp Mail Generator</h1>
<p class="lead">Generate a free disposable email address in one click and start receiving messages in real time — no registration, no password, no app.</p>
${CTA}
${AD}
<h2>Generate a temporary email instantly</h2>
<p>Our <strong>temp mail generator</strong> creates a working, throwaway email address the moment you need one. Whether you're signing up for a website, claiming a free trial, downloading a file, or grabbing a one-time verification code, you can do it without ever exposing your real inbox. Every generated address runs on real mail infrastructure, so verification links and OTP codes show up within seconds of being sent.</p>
<p>Unlike a "fake" address that bounces, an address from this <strong>disposable email generator</strong> is a genuine, live mailbox — it just isn't tied to your identity and disappears when you're done. You can generate as many as you want, as often as you want, completely free.</p>
<h2>Why generate a disposable email address?</h2>
<ul>
<li><strong>Zero setup.</strong> No account to create, no password to remember, nothing to install.</li>
<li><strong>Spam stays out.</strong> Marketing blasts and newsletters land on the disposable address, never your real inbox.</li>
<li><strong>Privacy by default.</strong> The address isn't linked to your name, so sign-ups can't build a profile on you.</li>
<li><strong>Breach protection.</strong> If a site you used leaks its data, your real email and accounts stay safe.</li>
<li><strong>Endless addresses.</strong> Generate a fresh one for every site, so a leak on one never affects another.</li>
</ul>
<h2>How the temp mail generator works</h2>
<ol>
<li><strong>Get an address.</strong> One is generated for you automatically — or open "Customize address" on the home page to choose your own name and domain.</li>
<li><strong>Copy and paste it.</strong> Drop the address into any sign-up form, paywall, or download gate.</li>
<li><strong>Read incoming mail.</strong> Open your inbox to watch verification emails and OTP codes arrive live, then click to read them.</li>
</ol>
<h2>Generate a new address anytime</h2>
<p>Need a clean inbox? Hit "New address" to generate a fresh temporary email instantly. Because it's free and unlimited, you can use a different address for every service — the cleanest way to keep your real identity private.</p>
<p>Want to learn more? Read about <a href="/disposable-email">disposable email addresses</a>, try the auto-expiring <a href="/10-minute-mail">10 minute mail</a>, or see our guide on <a href="/blog/how-to-create-a-temporary-email">how to create a temporary email</a>.</p>
${CTA}` },

  "/disposable-email": {
    title: "Disposable Email — Free Disposable Email Address",
    desc: "Get a free disposable email address with no sign-up. Receive verification emails and OTP codes, then throw the address away. Keep your real inbox spam-free.",
    body: `<h1>Disposable Email Address</h1>
<p class="lead">A free disposable email address you can use once and discard — perfect for sign-ups, downloads, and one-time verification codes.</p>
${CTA}
${AD}
<h2>What is a disposable email address?</h2>
<p>A <strong>disposable email</strong> (also known as temp mail, throwaway email, or a DEA — disposable email address) is a temporary inbox that works just like a normal one but is meant to be thrown away. It receives real messages instantly, requires no sign-up, and isn't tied to your identity. When you're finished, you simply stop using it — there's nothing to delete and no account to close.</p>
<p>The whole point is separation: your real inbox stays for people and accounts that matter, while a disposable address absorbs the spam, newsletters, and tracking that come with random sign-ups. If a site you used leaks its database, your disposable address is all that's exposed — never your real email or the accounts attached to it.</p>
<h2>When to use a disposable email</h2>
<ul>
<li><strong>Untrusted sign-ups.</strong> Any site you don't fully trust with your real address.</li>
<li><strong>Free downloads, trials, and coupons.</strong> Get the file or code without joining a mailing list.</li>
<li><strong>One-time verification.</strong> Receive an OTP or confirmation link, then move on.</li>
<li><strong>App and email testing.</strong> Developers use disposable inboxes to test registration and OTP flows.</li>
<li><strong>Public wifi and forums.</strong> Quick access without handing over your identity.</li>
</ul>
<h2>Disposable email vs. your real inbox</h2>
<p>Use your real email only for things you'll need long-term — banking, work, government, and accounts you must recover. Use a disposable address for everything throwaway. Building that one habit dramatically cuts the spam and data exposure most people accept by default.</p>
<h2>How to get a disposable email</h2>
<p>You already have one — an address is generated for you on the <a href="/">home page</a> the moment it loads. Copy it, use it, and hit "New address" whenever you want a fresh one. You can also <a href="/temp-mail-generator">generate a custom disposable email</a> or learn whether <a href="/blog/is-temp-mail-safe">temp mail is safe</a>.</p>
${CTA}` },

  "/10-minute-mail": {
    title: "10 Minute Mail — Free Temporary Email That Self-Destructs",
    desc: "10 minute mail: a free temporary email address for quick sign-ups and OTP codes. Use it briefly, then let it go. No registration required.",
    body: `<h1>10 Minute Mail</h1>
<p class="lead">Need an email for just a minute? Grab a temporary address, receive your code, and move on — no sign-up, no clutter.</p>
${CTA}
${AD}
<h2>Email for the moment you need it</h2>
<p><strong>10 minute mail</strong> is the fastest way to receive a verification email or OTP without giving out your real address. The idea is in the name: you only need the inbox for a few minutes — long enough to confirm a sign-up or copy a code — and then it's gone. Open the page, copy your address, and your inbox is live immediately.</p>
<p>It's the same disposable email concept stripped down to its quickest form. There's no account, no password, and nothing to clean up. When you're done, just close the tab; the address is throwaway by design.</p>
<h2>Perfect for quick, one-off tasks</h2>
<ul>
<li><strong>One-time confirmation links.</strong> Verify an account you'll use once.</li>
<li><strong>OTP and 2FA codes.</strong> Receive a one-time password in seconds.</li>
<li><strong>Throwaway sign-ups.</strong> Forums, downloads, and wifi portals you'll never return to.</li>
<li><strong>Quick testing.</strong> Check that your own app's emails actually send.</li>
</ul>
<h2>Does the address really expire in 10 minutes?</h2>
<p>Think of "10 minutes" as a mindset rather than a hard timer — it captures how briefly you actually need a throwaway inbox. Here, your address stays usable for your whole session, and inboxes are cleared periodically, so treat every message as temporary and copy any codes promptly. Want one that sticks around a little longer for a single task? Just keep the tab open.</p>
<p>Prefer to pick your own name? Use the <a href="/temp-mail-generator">temp mail generator</a>, or read more about <a href="/disposable-email">disposable email addresses</a>.</p>
${CTA}` },

  "/fake-email-generator": {
    title: "Fake Email Generator — Free Temporary Email Address",
    desc: "Free fake email generator. Create a working temporary email address that actually receives messages and OTP codes — no sign-up. Protect your real inbox.",
    body: `<h1>Fake Email Generator</h1>
<p class="lead">Create a real, working email address for sign-ups — without using your personal one. Free, instant, no registration.</p>
${CTA}
${AD}
<h2>A "fake" email that really works</h2>
<p>This <strong>fake email generator</strong> doesn't hand you a dead, made-up address that bounces — it gives you a live temporary inbox that genuinely receives mail. "Fake" just means it isn't <em>your</em> real address: the mailbox itself is real, so verification messages and OTP codes arrive in real time. Use it anywhere a site demands an email but you'd rather not give out your own.</p>
<p>That distinction matters. A randomly typed fake address (like <em>asdf@asdf.com</em>) can't receive the confirmation link most sites send, so the sign-up fails. An address from this generator passes that step every time, because it's a working <a href="/disposable-email">disposable email address</a> — it just disappears when you're done.</p>
<h2>Why use a fake email address?</h2>
<ul>
<li><strong>Keep your identity private.</strong> The address isn't connected to your name or real inbox.</li>
<li><strong>Dodge spam.</strong> Promotional mail goes to the throwaway address, not to you.</li>
<li><strong>Pass "verify your email" gates.</strong> Receive the OTP or link and finish the sign-up.</li>
<li><strong>Use a fresh one every time.</strong> Generate unlimited addresses for free.</li>
</ul>
<h2>Fake email vs. your real inbox</h2>
<p>Your real inbox is for people and accounts that matter. A generated fake email is for everything else: forums, free downloads, trials, and one-off registrations. Keeping the two separate is the simplest privacy habit you can build — and it only takes one click here. For anything important or long-term, use your real address.</p>
<p>Ready to try it? Grab an address on the <a href="/">home page</a>, or learn <a href="/blog/how-to-create-a-temporary-email">how to create a temporary email</a> step by step.</p>
${CTA}` },

  "/temporary-email-service": {
    title: "Temporary Email Service — Free Temp Mail Service",
    desc: "A free temporary email service with real-time delivery and no sign-up. Receive verification emails and OTP codes on a disposable address in seconds.",
    body: `<h1>Temporary Email Service</h1>
<p class="lead">A fast, free temp mail service that delivers your messages in real time — built for privacy and convenience.</p>
${CTA}
${AD}
<h2>A temp mail service built for speed</h2>
<p>Our <strong>temporary email service</strong> runs on real mail-server infrastructure, so messages land in your disposable inbox within seconds — not minutes. There's no registration, no password, no app, and no limit on how many addresses you create. Open the page and your inbox is already live.</p>
<p>It's designed to do one job perfectly: catch the verification emails and one-time codes that stand between you and the thing you actually came to do, while keeping your real address private.</p>
<h2>What you get</h2>
<ul>
<li><strong>Instant, real-time inbox.</strong> Long-polling delivers new mail the moment it arrives.</li>
<li><strong>Multiple domains.</strong> Choose from several, so you can switch if a site blocks one.</li>
<li><strong>No sign-up, no tracking.</strong> No account and no personal data required to use it.</li>
<li><strong>Unlimited addresses.</strong> Generate a fresh one for every service, free.</li>
<li><strong>Reads OTP, links, and HTML email.</strong> Click any message to view it in full.</li>
</ul>
<h2>How our temp mail service compares</h2>
<p>Many disposable email services bury the inbox under ads or make you wait for delivery. This one keeps the address and live inbox front and center, delivers in real time, and stays free. Whether you call it temp mail, a <a href="/disposable-email">disposable email</a>, or a <a href="/fake-email-generator">fake email generator</a>, the experience is the same: fast, private, and effortless.</p>
<h2>Start using it now</h2>
<p>Head to the <a href="/">home page</a> to get your address, or explore the <a href="/temp-mail-generator">temp mail generator</a> to pick a custom name and domain.</p>
${CTA}` },

  "/about": {
    title: "About — Temp Mail Free Temporary Email",
    desc: "Learn about Temp Mail, a free disposable email service that helps you protect your real inbox from spam while receiving verification emails and OTP codes.",
    body: `<h1>About Temp Mail</h1>
<p class="lead">Temp Mail is a free temporary email service that puts your privacy first.</p>
<p>We built Temp Mail so anyone can get a disposable email address in seconds — no account, no password, no tracking. Whether you're signing up for a one-off service, testing an app, or just trying to keep your real inbox clean, a temporary address is the simplest tool for the job.</p>
<p>Messages arrive in real time on real mail infrastructure, and disposable inboxes are cleared periodically so nothing lingers. Read more about safe usage in our <a href="/blog">blog</a>, or review how we handle data in our <a href="/privacy">privacy policy</a>.</p>
${CTA}` },

  "/privacy": {
    title: "Privacy Policy — Temp Mail",
    desc: "Privacy policy for Temp Mail, the free temporary email service. Learn what data we collect, how disposable inboxes are handled, and how advertising cookies work.",
    body: `<h1>Privacy Policy</h1>
<p class="meta">Last updated: 2026</p>
<p>This Privacy Policy explains how Temp Mail ("we", "us") handles information when you use our free temporary email service.</p>
<h2>Information we handle</h2>
<p>Temp Mail is designed to require no account and no personal information. Disposable email addresses you create are temporary, and any messages received are stored only briefly before being cleared. Do not use disposable inboxes for sensitive or personal communication.</p>
<h2>Cookies and advertising</h2>
<p>We may use cookies for basic functionality and analytics. Third-party vendors, including Google, may use cookies to serve ads based on prior visits to this and other websites. Google's use of advertising cookies enables it and its partners to serve ads to you based on your visit to our site. You can opt out of personalized advertising via Google's Ads Settings.</p>
<h2>Data retention</h2>
<p>Temporary inboxes and their messages are automatically deleted on a recurring schedule. We do not sell personal data.</p>
<h2>Contact</h2>
<p>Questions? See our <a href="/contact">contact page</a>.</p>` },

  "/terms": {
    title: "Terms of Service — Temp Mail",
    desc: "Terms of service for Temp Mail, the free temporary email service. Acceptable use, disclaimers, and limitations of liability.",
    body: `<h1>Terms of Service</h1>
<p class="meta">Last updated: 2026</p>
<p>By using Temp Mail you agree to these terms.</p>
<h2>Acceptable use</h2>
<p>Temp Mail is provided for lawful purposes only. You agree not to use the service for fraud, harassment, spam, or any illegal activity. Disposable inboxes are public by nature — do not use them for confidential, financial, or personal information.</p>
<h2>No warranty</h2>
<p>The service is provided "as is" without warranties of any kind. We do not guarantee message delivery, uptime, or that inboxes will remain private to you.</p>
<h2>Limitation of liability</h2>
<p>We are not liable for any damages arising from your use of, or inability to use, the service.</p>
<h2>Changes</h2>
<p>We may update these terms at any time. Continued use constitutes acceptance of the updated terms.</p>` },

  "/contact": {
    title: "Contact — Temp Mail",
    desc: "Contact the Temp Mail team with questions, feedback, or abuse reports about our free temporary email service.",
    body: `<h1>Contact</h1>
<p class="lead">We'd love to hear from you — questions, feedback, and reports are all welcome.</p>
<p>Temp Mail is a free temporary email service, and we keep it simple, fast, and private. If something isn't working, you have an idea to improve it, or you'd like to get in touch about a partnership, the fastest way to reach us is by email.</p>
<h2>Email us</h2>
<p>For general questions, feedback, feature requests, partnership enquiries, or abuse reports, email <a href="mailto:hello@example.com">hello@example.com</a> (replace this with your real address before launch). We read every message and aim to reply within a few business days.</p>
<h2>Reporting abuse</h2>
<p>Temp Mail is meant for privacy and convenience — receiving verification codes, avoiding spam, and one-off sign-ups. It is not for fraud, harassment, or anything illegal. If you believe an address on our service is being misused, email us with the details and we'll look into it.</p>
<h2>Privacy &amp; data requests</h2>
<p>For anything related to data or privacy — including how disposable inboxes are stored and cleared — please read our <a href="/privacy">privacy policy</a> first, as it answers most questions. If you still need help, email us and we'll respond.</p>
<h2>Before you write</h2>
<p>Many common questions are already answered on the home page and in our <a href="/blog">blog</a> and <a href="/about">about</a> pages — for example how long an inbox lasts, whether you can receive OTP codes, and why a site might reject a disposable address. A quick look there is often the fastest answer.</p>` },

  "/disclaimer": {
    title: "Disclaimer — Temp Mail",
    desc: "Disclaimer for Temp Mail, the free temporary email service. Use disposable inboxes responsibly.",
    body: `<h1>Disclaimer</h1>
<p class="meta">Last updated: 2026</p>
<p>Temp Mail provides disposable email addresses for convenience and privacy. Inboxes are temporary and are not private to a single user — anyone who knows or guesses an address may be able to read its messages. Never use Temp Mail to receive sensitive information such as banking details, passwords for important accounts, or private correspondence.</p>
<p>The service is provided for legitimate, lawful use only. We are not responsible for how addresses are used by visitors.</p>
${CTA}` },
};

// ---- Blog renderers (KV-backed posts) ----
export function blogIndexPage(posts, opts = {}) {
  const locale = opts.locale || "en";
  const ui = localeStrings(locale);
  const items = (posts || []).map(p =>
    `<li><a href="${esc(localizedPath(locale, `/blog/${p.slug}`))}">${esc(p.title)}</a><p>${esc(p.desc || "")}</p></li>`).join("\n");
  const body = `<h1>${esc(ui.blog.h1)}</h1>
<p class="lead">${esc(ui.blog.lead)}</p>
${posts && posts.length ? `<ul class="posts">${items}</ul>` : `<p>${esc(ui.blog.empty)}</p>`}`;
  return layout({ path: localizedPath(locale, "/blog"), rest: "/blog", locale, title: ui.blog.title, desc: ui.blog.desc, bodyHtml: body });
}

export function blogPostPage(post, opts = {}) {
  const locale = opts.locale || "en";
  const rest = `/blog/${post.slug}`;
  const date = post.date ? `<p class="meta">${esc(String(post.date).slice(0,10))}</p>` : "";
  const body = `<h1>${esc(post.h1 || post.title)}</h1>
${date}
${AD}
${post.bodyHtml || ""}
${CTA}`;
  return layout({ path: localizedPath(locale, rest), rest, locale, title: post.title, desc: post.desc || "", bodyHtml: body, type: "blog", datePublished: post.date });
}

export function notFoundPage(opts = {}) {
  const locale = opts.locale || "en";
  const ui = localeStrings(locale).notFound;
  return layout({ path: localizedPath(locale, "/404"), rest: "/404", locale, noindex: true, title: ui.title,
    desc: ui.desc,
    bodyHtml: `<h1>${esc(ui.h1)}</h1><p class="lead">${esc(ui.lead)}</p><a class="cta" href="${esc(localizedPath(locale, "/"))}">${esc(ui.cta)}</a>` });
}
