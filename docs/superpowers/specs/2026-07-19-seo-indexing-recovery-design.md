# SEO Indexing Recovery Design

## Objective

Improve the crawl and rendered-page quality of Open Temp Mail without weakening inbox abuse protection. The change will remove the automatic Turnstile interstitial, restore the five English blog URLs currently returning 404, consolidate all public traffic on the HTTPS apex hostname, and define a Cloudflare Security Events audit for verified search crawlers.

## Scope

The implementation covers four bounded areas:

1. Change the homepage inbox verification experience.
2. Research, write, and publish five English SEO articles.
3. Add permanent canonical-host redirects.
4. Document and perform a read-only Cloudflare bot-event review.

It does not change D1 storage, Durable Object behavior, API-key routes, email routing, mailbox retention, or the existing signed inbox-session model.

## Turnstile Experience

The homepage must continue generating and displaying a disposable address immediately. It must not request a Turnstile session or show a verification overlay during the initial page load.

For a browser without a valid inbox session, the inbox panel will show an inline verification control. Clicking that control is the explicit action that mounts Turnstile. After successful verification, the client fetches messages and opens the existing WebSocket. A browser that already has a valid signed session may reconnect to its inbox silently without displaying Turnstile.

Turnstile remains mandatory for browser message reads, deletion, clearing, and live WebSocket access. The backend `/api/session` validation and signed `HttpOnly` cookie remain unchanged. Failure, expiry, and loading messages appear inside the inbox panel instead of in a full-screen modal.

## Restored English Articles

The following canonical routes will become durable source-backed posts:

- `/blog/best-temp-mail`
- `/blog/how-to-create-a-temporary-email`
- `/blog/is-temp-mail-safe`
- `/blog/temp-mail-for-otp-verification-codes`
- `/blog/what-is-a-disposable-email-address`

English source-backed posts will act as fallbacks when KV does not contain an English post. KV content may override a source-backed post with the same slug so the dashboard editing workflow remains useful. The blog index, individual route, sitemap, `llms.txt`, and related-post navigation must all use the same merged post registry.

Before drafting, keyword candidates will be validated with DataForSEO for the United States, English, and Google desktop. Credentials must be supplied through `DATAFORSEO_LOGIN` and `DATAFORSEO_PASSWORD` and must never be written to repository files. Research will record the primary keyword, related keywords, intent, volume, competition, CPC, relevant SERP patterns, and duplicate-topic checks for each article.

Each article must:

- contain at least 800 words of reader-facing prose;
- answer the primary intent within the opening paragraph;
- use a unique title under 60 characters and a useful meta description under 160 characters;
- contain a logical H2/H3 structure and a concise FAQ section;
- include four to eight relevant internal links and authoritative external citations where factual claims require support;
- explain limitations and responsible uses of temporary email without presenting it as suitable for banking, work, medical, recovery-critical, or other sensitive accounts;
- avoid keyword stuffing, unsupported performance claims, fabricated experience, and repetitive AI-style filler;
- produce Article and FAQ structured data through the existing rendering system.

The five articles must have distinct intent and avoid cannibalization:

- `best-temp-mail`: evaluation criteria and an honest service-selection framework.
- `how-to-create-a-temporary-email`: task-oriented creation and usage instructions.
- `is-temp-mail-safe`: threat model, appropriate uses, risks, and safer alternatives.
- `temp-mail-for-otp-verification-codes`: OTP workflow, delivery troubleshooting, and account-safety boundaries.
- `what-is-a-disposable-email-address`: definition, operating model, aliases versus disposable inboxes, and decision guidance.

## Canonical Redirects

The Worker will normalize public requests before application routing. Any HTTP request or request using `www.opentempmail.com` will receive a `308 Permanent Redirect` to `https://opentempmail.com`, preserving the pathname and query string. Requests already using the canonical scheme and hostname will continue normally.

This logic must avoid redirecting local Wrangler hosts and test hosts. It applies only to the configured production apex and `www` hostnames.

## Cloudflare Security Review

The implementation handoff will include a read-only dashboard procedure covering July 10, 2026 onward:

1. Open Security Analytics or Security Events for `opentempmail.com`.
2. Filter the hostname to `opentempmail.com`.
3. Filter bot classification to verified bots and inspect Googlebot records.
4. Filter actions to Block, Managed Challenge, and JS Challenge.
5. Record matching rule IDs, paths, timestamps, and actions.
6. If verified Googlebot was challenged or blocked, adjust only the responsible rule to skip verified bots on public HTML routes while retaining API rate limits and Turnstile protections.

No Cloudflare security rule will be changed without event evidence identifying the responsible rule.

## Testing and Acceptance Criteria

Automated tests will verify:

- a new anonymous homepage load does not automatically mount or display Turnstile;
- explicit inbox access starts verification, while an existing valid session reconnects without a challenge;
- browser mailbox API routes remain session protected;
- all five English article routes return 200, are indexable, self-canonical, and contain at least 800 words;
- all sitemap URLs return 200 and the restored routes appear exactly once;
- HTTP and `www` production URLs redirect with status 308 while preserving path and query;
- canonical production requests and local test requests do not redirect;
- the complete existing integration suite passes and Wrangler dry-run succeeds.

Production verification will repeat Googlebot desktop/mobile fetches for the homepage, restored posts, `robots.txt`, and `sitemap.xml`. Google Search Console Live URL Inspection should then be run for the homepage and one restored article before requesting indexing.

## Rollout

Research artifacts and article drafts are reviewed before publication. Code and content are deployed together so the sitemap never advertises an unpublished route. After deployment, purge cached HTML and sitemap responses, run the production checks, complete the Cloudflare event review, and submit the refreshed sitemap in Search Console.
