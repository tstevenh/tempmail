# LAW MAIL — SEO Strategy (Temp-Mail, English-first)

> Durable reference. Grounded in live DataForSEO research (pulled 2026-06-24).
> Credentials for re-running research live in `secrets/dataforseo.local.env` (gitignored, never shipped).
> The live Worker never calls DataForSEO — it is research/build-time only.

## Goal
Convert the private PIN-locked temp-mail engine into a **public, English-first, SEO-optimised free
temp-mail site** monetised with **Google AdSense**, architected so country/language pages can be added
later without refactor. Host: Cloudflare only (Workers + Email Routing + KV).

## 1. Keyword research (US unless noted)

### Head terms → homepage + primary landings
| Keyword | US Vol | KD | CPC | Target |
|---|---|---|---|---|
| temp mail | 673,000 | 70 | $4.11 | Homepage (India 1.5M, UK 135K) |
| temporary email | 246,000 | 48 | $3.77 | Homepage secondary (winnable KD) |
| temp email | 246,000 | 56 | $3.77 | Homepage |
| tempmail / temporary mail / disposable temporary email | 673,000 | 70 | $4.11 | Homepage (alt spellings) |
| 10 minute mail | 90,500 | – | $0.00 | /10-minute-mail |
| fake email | 74,000 | – | $4.59 | /fake-email-generator |
| email generator | 74,000 | – | $5.21 | /fake-email-generator |
| burner email | 27,100 | – | $1.72 | angle page |
| temp gmail | 22,200 | – | $1.51 | angle page |
| disposable email | 14,800 | 69 | $2.44 | /disposable-email |

### Mid/long-tail → feature + comparison pages (lower KD = winnable)
| Keyword | Vol | KD | CPC | Target |
|---|---|---|---|---|
| temp mail service(s) | 40,500 | 56–62 | $2.49 | /temporary-email-service |
| temp mail generator / disposable email generator | 14,800 | 48–68 | $2.76 | /temp-mail-generator |
| generate/get temporary email | 14,800 | 45–52 | $2.76 | /temp-mail-generator |
| best temp mail | 1,900 | **23** | $1.77 | /blog/best-temp-mail (easy win) |
| best temporary email | 1,900 | 35 | $1.77 | /blog/best-temp-mail |
| create temp mail | 8,100 | 50 | $3.81 | homepage / generator |
| guerrilla mail | 12,100 | – | $0.87 | /alternatives/guerrilla-mail |
| mailinator | 9,900 | – | $5.54 | /alternatives/mailinator |
| anonymous email | 5,400 | – | $4.00 | angle page |
| free temporary email | 4,400 | – | $1.52 | homepage |

### Informational → blog (topical authority + AdSense)
- how to create / make a temporary email — KD 39–50
- best temp mail (KD 23), best temporary email (KD 35)
- expand: is temp mail safe · what is a disposable email · how to receive OTP on temp mail · temp mail vs VPN · why use disposable email

## 2. Country expansion (English term works globally)
| Market | "temp mail" Vol | CPC | Priority |
|---|---|---|---|
| India | 1,500,000 | $0.36 | #1 volume (low CPC) |
| US | 673,000 | $4.11 | #1 revenue/visit |
| UK | 135,000 | $1.42 | #2 revenue |
| ID/BR/DE/FR/MX/RU (local-language) | TBD | TBD | Phase 2 — re-run local-term research |

**Conclusions**
1. One English site captures US+UK+India — English-first is correct.
2. Head term KD 70 is hard → win via tool UX/brand signals + lower-KD long-tail + content cluster + geo pages.
3. Revenue skews US/UK; India is high-volume but low-CPC (free upside).

## 3. URL architecture (i18n-ready)
```
/  /temp-mail-generator  /disposable-email  /10-minute-mail  /fake-email-generator
/temporary-email-service  /alternatives/{guerrilla-mail,mailinator}
/blog/<slug>  /privacy /terms /about /contact /disclaimer
/robots.txt /sitemap.xml /ads.txt
Phase 2: /in/ /gb/ then /id/ /pt/ /de/ /fr/ /es/ /ru/  (+ hreflang everywhere)
```

## 4. Monetisation (AdSense)
- Best CPC terms: email generator ($5.21), mailinator ($5.54), fake email ($4.59), temp mail ($4.11), anonymous email ($4.00).
- Approval needs trust pages (privacy/terms/about/contact) + real content + `ads.txt`.
- Temp-mail sites face AdSense scrutiny → lead with content depth; have Adsterra/Monetag as fallback networks.

## 5. Re-running research
```
set -a; source secrets/dataforseo.local.env; set +a
curl -s -u "$DATAFORSEO_LOGIN:$DATAFORSEO_PASSWORD" -X POST \
  https://api.dataforseo.com/v3/keywords_data/google_ads/search_volume/live \
  -H 'Content-Type: application/json' \
  -d '[{"location_code":2840,"language_code":"en","keywords":["temp mail"]}]'
```
Useful endpoints: `keywords_data/google_ads/search_volume/live` (volume+CPC),
`dataforseo_labs/google/keyword_suggestions/live` (phrase-match long-tail + KD),
`dataforseo_labs/google/bulk_keyword_difficulty/live` (KD). Location codes: US 2840, India 2356, UK 2826.
