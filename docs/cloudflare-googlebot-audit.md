# Cloudflare Googlebot Security Audit

## Current status

**Dashboard audit pending as of 2026-07-19 20:55:46 WIB (UTC+07:00).** No controllable authenticated Cloudflare dashboard session or Cloudflare API token is available in the current environment. Therefore, Cloudflare Security Events have not yet been queried and this record does **not** claim that there are no matching events.

The public HTTP probes below confirm what an unauthenticated client received from the site. They do not establish Cloudflare's internal verified-bot classification and are not evidence that a WAF, bot-management, or challenge rule never acted on other Googlebot requests.

## Required Security Events queries

Open the Cloudflare dashboard for `opentempmail.com`, then open **Security > Events**. Set the dashboard timezone or interpret timestamps using `Asia/Jakarta` before applying the range.

Run the primary query with these exact filters:

```text
Date range: 2026-07-10 00:00 Asia/Jakarta through present
Hostname: equals opentempmail.com
Bot classification: Verified bot
User agent: contains Googlebot
Action: equals Block OR Managed Challenge OR JS Challenge
```

Export or inspect every matching event. If the interface does not support `OR` values in one filter, run one query per action (`Block`, `Managed Challenge`, and `JS Challenge`) while keeping all other conditions unchanged.

Then run a secondary query to avoid hiding a managed-bot classification mismatch:

```text
Date range: 2026-07-10 00:00 Asia/Jakarta through present
Hostname: equals opentempmail.com
Action: equals Block OR Managed Challenge OR JS Challenge
```

For the secondary results, inspect the user agent, bot classification, source IP/ASN, rule ID, and rule name. Record any Googlebot-looking request, but do not treat the user-agent string alone as proof that the request was genuine Googlebot. Validate suspicious source addresses using Google's published verification method before changing a rule.

## Security Events results

The table is intentionally marked pending. Replace the pending row with one row per event after both authenticated queries are completed. If a completed query has zero results, write `No matching events`, including the query name and audit timestamp; absence of requests must not be described as proof that Cloudflare allowed Googlebot.

| Timestamp | Path | Source IP/ASN | Verified bot | User agent | Action | Rule ID | Rule name |
|---|---|---|---|---|---|---|---|
| Audit pending — not an event | — | — | Not verified | — | Security Events not queried | — | — |

## Decision rule

1. If both authenticated queries show no blocked or challenged verified-Googlebot events, make no WAF change. Record `No matching events` with the audit timestamp for each query.
2. If an event identifies a blocking or challenge rule, verify that the source is genuine Googlebot and identify the exact rule ID and expression.
3. Change only the evidenced rule. Scope any bypass so verified bots skip challenges only on public HTML paths. Keep API rate limits and Turnstile-protected endpoints enforced.
4. Before saving any dashboard change, record the rule ID, rule name, original expression, proposed expression, affected public paths, and excluded protected paths below. After saving, record the final expression and change timestamp.
5. Repeat both Security Events queries after the change and confirm with a fresh live URL test in Google Search Console.

### Rule-change record

No Cloudflare setting has been changed. Complete this section only if Security Events evidence justifies a narrowly scoped change.

| Field | Value |
|---|---|
| Rule ID | Pending evidence |
| Rule name | Pending evidence |
| Before expression | Pending evidence |
| Proposed/after expression | Pending evidence |
| Public HTML paths included | Pending evidence |
| API/Turnstile paths explicitly excluded | Pending evidence |
| Change timestamp | Not changed |

## Public endpoint probe evidence

At 2026-07-19 20:55 WIB (UTC+07:00), read-only requests against production returned:

| Probe | Result | Interpretation |
|---|---|---|
| `GET https://opentempmail.com/` with a standard curl user agent | `200`, 72,377-byte HTML body | Public homepage was reachable for this request. |
| `GET https://opentempmail.com/` with `Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)` | `200`, 72,377-byte HTML body | A Googlebot-labeled request was reachable; a user-agent label does not prove verified-bot treatment. |
| Comparison of the two homepage bodies | Application HTML was identical; the only diff was Cloudflare's per-request `__CF$cv$params` ray/timestamp values | No content cloaking was observed in this two-request sample. This does not prove WAF behavior over time. |
| `GET https://opentempmail.com/robots.txt` | `200`, with `User-agent: *`, `Allow: /`, and the sitemap URL | The public robots file was accessible and allowed public paths in this request. |
| `GET https://opentempmail.com/sitemap.xml` | `200`, XML response | The public sitemap was accessible in this request. |

These probes are deliberately separate from the Security Events results. Only the authenticated Cloudflare audit can show whether Cloudflare classified requests as verified bots or whether a specific security rule blocked or challenged them.

## Recovery deployment verification

Cloudflare deployed Worker version `c44979fa-43dd-46ec-992d-0321ea47059c` on 2026-07-19. After route activation:

- `http://opentempmail.com/blog/is-temp-mail-safe?src=probe` returned `308` to the same path and query on the HTTPS apex.
- `https://www.opentempmail.com/temp-mail-generator?src=probe` returned `308` to the HTTPS apex.
- The canonical article URL returned `200`, `index, follow`, a self-canonical URL, `og:type=article`, and Article `dateModified` metadata.
- A Googlebot-header crawl checked all 372 unique sitemap URLs. Every URL returned `200`, remained indexable, and used a self-canonical URL. The five restored English articles appeared exactly once and contained 1,155–1,286 visible words.
