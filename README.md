# Open Temp Mail

Cloudflare Worker temp mail with D1-backed inboxes, hibernating Durable Object WebSockets, and one Turnstile verification per browser session.

```
Email Routing → Worker → D1 message row → mailbox Durable Object → verified browser WebSocket
```

Mailbox data is retained for seven days by default. D1 stores `mailboxes`, `messages`, and the latest 250 `traffic_events`; KV is reserved for settings and blog posts. Old `inbox:*` KV values are only used for the controlled migration recovery window.

## Setup and deploy

```bash
npm install
npx wrangler d1 create tempmail
```

Copy the returned UUID into `wrangler.toml` as `TEMPMAIL_DB.database_id`, then apply the schema and deploy:

```bash
npx wrangler d1 migrations apply tempmail --remote
npx wrangler deploy
```

Set these Worker secrets (never commit them):

```bash
npx wrangler secret put DASHBOARD_PASSWORD
npx wrangler secret put TURNSTILE_SECRET
npx wrangler secret put INBOX_SESSION_SECRET
```

Create a Turnstile widget restricted to `opentempmail.com` and set its public site key in `TURNSTILE_SITE_KEY` in `wrangler.toml`. `TURNSTILE_EXPECTED_HOSTNAME` is already set to `opentempmail.com` for server-side hostname validation.

`MAIL_DOMAINS` contains the email-receiving domains. Configure Cloudflare Email Routing and a catch-all “Send to Worker” rule for every listed domain.

## KV → D1 cutover

The migration is owner-only and idempotent. It reads the existing KV `addrs` index and every legacy inbox, inserts D1 rows with `INSERT OR IGNORE`, and verifies that D1 contains at least the source message count for every address in the batch.

1. Temporarily set `MAIL_STORAGE_MODE = "kv"` and deploy the D1-capable release.
2. Call `POST /api/admin/migrate-kv?pw=…` repeatedly with JSON such as `{"cursor":0,"limit":10}`. Use the returned `nextCursor` until `complete` is `true`; rerun from cursor `0` to compare current counts.
3. Set `MAIL_STORAGE_MODE = "d1"` and deploy. D1 is now authoritative for mailbox reads, writes, cleanup, dashboard mail views, API-key routes, and traffic events.
4. Replay the migration batches once in D1 mode. This arms a seven-day TTL on each old `inbox:*` KV key. Do not delete legacy keys sooner; they are the recovery archive.
5. Purge cached HTML before enabling the session gate in production so no cached page attempts the retired `/api/poll` route.

Do not change source mode to `d1` until the final KV batches report no mismatches and sampled records match in D1.

## Browser and API routes

| Route | Access |
|---|---|
| `POST /api/session` | Validates a Turnstile token and sets the signed `HttpOnly; Secure; SameSite=Lax` session cookie. |
| `GET /api/session` | Reports current browser session validity. |
| `GET /api/messages`, `GET /api/live`, `DELETE /api/delete`, `DELETE /api/clear` | Require the verified browser session. `/api/live` is an address-scoped WebSocket. |
| `/api/v1/*` | Requires an API key only; it is intentionally exempt from Turnstile for bot integrations. |
| `/api/admin/*`, `/api/debug` | Requires `?pw=DASHBOARD_PASSWORD`; `/api/debug` is not public. |

The homepage and `/inbox` load the current D1 messages first, then listen for the Durable Object’s `{ "type": "inbox-updated" }` signal. They refetch only after that signal. A visible tab falls back to a 60-second refresh only while the WebSocket reconnects.

## Cloudflare edge controls

Configure these in the Cloudflare dashboard; they are intentionally outside Worker code so they do not create KV operations:

- Enable Bot Fight Mode.
- Rate-limit `/api/live` above 10 requests/minute/IP.
- Rate-limit browser inbox paths (`/api/messages`, `/api/delete`, `/api/clear`) above 20 requests/minute/IP.
- Challenge `/api/unlock` above 5 requests/minute/IP.
- Apply a separate 120 requests/minute/IP limit to `/api/v1/*`.

Review D1 reads, writes, storage, Durable Object requests, Worker requests, Turnstile failures, and WAF events daily. Investigate at 70% of a free-tier daily limit. D1’s free tier is currently 5M rows read/day, 100k rows written/day, and 5 GB storage; confirm current limits in Cloudflare’s pricing documentation before relying on them.

## Local verification

```bash
npm test
npx wrangler deploy --dry-run
```

The integration suite creates temporary local D1 databases, applies the real migration, and verifies session enforcement, API-key exemption, D1 CRUD and cleanup, idempotent KV migration, Durable Object notifications, and the browser reconnect fallback implementation.
