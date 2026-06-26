# LAW MAIL — Permanent Mail + Admin Dashboard (Worker-Only Edition)

LAW MAIL adalah website email pribadi/temp-mail permanen di atas **Cloudflare Email Routing + KV**,akses terkunci PIN, multi-domain, dan **Admin Dashboard**.

## ✅ Cara kerja (ringkas)

```
Browser  ──▶  https://lawstoremail.web.id        (Worker menyajikan HTML)
         ──▶  https://lawstoremail.web.id/api/*  (Worker yang sama melayani API)
Email    ──▶  @lawtmail.web.id  ──(Email Routing catch-all)──▶  Worker
```

- **Domain website + API:** `lawstoremail.web.id` (lihat `routes` di `wrangler.toml`).
- **Domain alamat email:** `lawtmail.web.id` (lihat `MAIL_DOMAINS` di `wrangler.toml`).
- Buka websitenya langsung di **https://lawstoremail.web.id** (bukan Vercel).

## 🔑 Password default
- **Password website (lock / PIN):** `1234` — bisa diubah dari dashboard → **Akses / Portal**.
- **Password dashboard owner:** `aw32154` — diatur di `wrangler.toml` (`DASHBOARD_PASSWORD`).

## 📁 File penting
| File | Fungsi |
|---|---|
| `public/app.html` | Website utama (lock + buat email + inbox). |
| `public/inbox.html` | Halaman inbox. |
| `public/dashboard.html` | Admin Dashboard (`/dashboard`). |
| `src/worker.js` | Backend Cloudflare: penyajian HTML, API, email handler, forward, security, cron cleanup. |
| `wrangler.toml` | Konfigurasi Worker: domain, KV, password dashboard, cron. |

## 🚀 Deploy (Worker-only)
```bash
npm install
npx wrangler login

# Pastikan KV namespace ada (id sudah terisi di wrangler.toml).
# Bila perlu buat baru:
# npx wrangler kv namespace create TEMPMAIL_KV   # lalu tempel id ke wrangler.toml

npx wrangler deploy
```
Setelah deploy, Cloudflare otomatis membuat DNS + SSL untuk custom domain di `routes`.
Buka **https://lawstoremail.web.id** untuk memastikan website tampil.

## ✉️ Aktifkan Email Routing (agar email/OTP masuk)
Lakukan untuk **`lawtmail.web.id`** (domain alamat email di `MAIL_DOMAINS`):
1. Cloudflare → pilih domain `lawtmail.web.id` → **Email → Email Routing**, aktifkan sampai MX/TXT valid.
2. **Routing rules → Catch-all address → Action: Send to a Worker** → pilih Worker `lawmail`.
3. Ulangi untuk setiap domain tambahan yang kamu daftarkan di `MAIL_DOMAINS`.

> Jika kamu menambah domain baru lewat dashboard, domain itu juga **wajib** diaktifkan Email Routing + catch-all ke Worker.

## 🩺 Cek cepat kalau masih error
Buka endpoint diagnostik (harus mengembalikan JSON `ok:true`):
```
https://lawstoremail.web.id/api/debug
```
- Jika halaman ini **tidak terbuka** → Worker belum ter-deploy atau domain belum aktif (jalankan `npx wrangler deploy`, cek DNS/SSL di Cloudflare).
- Jika `kvBound:false` → binding `TEMPMAIL_KV` di `wrangler.toml` salah/ kosong.
- Jika website terbuka tapi PIN salah terus → cek `sitePin` di dashboard → **Akses / Portal** (default `12356`).

## 🛠️ Endpoint API (semua same-origin di domain Worker)

### Publik
| Method | Path | Keterangan |
|---|---|---|
| GET | `/api/config` | Konfigurasi publik (tema, domain, portal). |
| GET | `/api/unlock?pin=...` | Verifikasi PIN website (server-side). |
| GET | `/api/messages?address=...` | Pesan satu alamat. |
| DELETE | `/api/delete?address=...&key=...` | Hapus satu pesan. |
| DELETE | `/api/clear?address=...` | Hapus semua pesan satu alamat. |
| GET | `/api/debug` | Diagnostik backend. |

### Bot / REST (perlu API Key — `?apikey=` atau header `x-api-key`)
| Method | Path | Keterangan |
|---|---|---|
| GET | `/api/v1/latest?address=...` | Pesan terbaru (ambil OTP bot). |
| GET | `/api/v1/messages?address=...` | Semua pesan satu alamat. |
| GET | `/api/v1/inboxes` | Daftar semua alamat. |

### Owner (perlu `?pw=DASHBOARD_PASSWORD`)
| Method | Path | Keterangan |
|---|---|---|
| GET | `/api/admin/messages` | Seluruh mail. |
| GET/POST | `/api/admin/settings` | Baca / simpan seluruh setting. |
| GET/DELETE | `/api/admin/traffic` | Live traffic log / bersihkan. |
| GET | `/api/admin/cleanup` | Jalankan cleanup manual. |
| GET | `/api/admin/test-notify` | Kirim tes webhook/Telegram. |

## 🧹 Auto Cleanup
- Cron di `wrangler.toml` (`crons = ["0 */6 * * *"]`) memicu cleanup tiap 6 jam.
- Aktifkan & atur retensi (hari) + maks pesan/inbox di **Dashboard → Auto Cleanup**.

## ⚠️ Catatan
- Pesan tersimpan permanen (tanpa TTL) kecuali Auto Cleanup aktif.
- Semua setting disimpan di KV (`settings:v1`) dan bisa diubah tanpa deploy ulang.
