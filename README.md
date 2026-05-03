# BLACK ROCKS CONSULTANCY

**Connecting Skills with Global Opportunities**

A production-ready multipage website for BLACK ROCKS CONSULTANCY - Manpower Recruitment & Overseas Staffing.

## Tech Stack

- **Next.js 14** (App Router, **static export** `out/` for cPanel)
- **PHP** (first-party form handlers in `public/forms/` — SMTP, no third-party form services)
- **Tailwind CSS**, **Framer Motion**, **Lucide React Icons**, **TypeScript**

## Brand Colors

- Primary Red: `#E53935`
- Dark Gray / Black: `#1A1A1A`
- Secondary Gray: `#4A4A4A`
- Light Background: `#F7F7F7`
- White: `#FFFFFF`

## Installation

### Prerequisites

- Node.js 18+
- npm or yarn

### Steps

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd blackrockconsultancy
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Environment (optional for build)**
   ```bash
   cp .env.example .env.local
   ```
   Set `NEXT_PUBLIC_SITE_URL` if needed. **SMTP is configured in PHP** — see `public/forms/config.example.php` (on the server, copy to `config.php` inside `forms/` after upload).

4. **Run development server**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000). **Note:** `next dev` does not run PHP; contact/career/lead forms POST to `/forms/*.php` and will only work where PHP is served (see below).

5. **Build static site for cPanel**
   ```bash
   npm run build
   ```
   Output is in the **`out/`** folder (HTML, `_next`, and **`forms/*.php`**).

6. **Test forms locally (optional)**
   ```bash
   npm run build && cd out && php -S localhost:8080
   ```
   Open `http://localhost:8080` — PHP handlers can send mail if `forms/config.php` exists and SMTP is valid.

## Project structure

```
blackrockconsultancy/
├── public/forms/          # PHP mail handlers (copied to out/forms/)
│   ├── contact.php
│   ├── career.php
│   ├── lead.php
│   ├── config.example.php
│   └── lib/MimeSmtp.php
├── app/
├── components/
├── lib/form-submit-client.ts   # POSTs to /forms/*.php
├── scripts/sync-export-assets.js
└── package.json
```

## Deployment (cPanel, no Node.js)

1. Run **`npm run build`** on your computer (or in CI).
2. Upload the entire **`out/`** directory into **`public_html`** (merge/replace as your host requires).
3. In **`public_html/forms/`**: edit **`config.php`** (already in the repo next to the example — set real **`smtp_pass`** and mailbox values before deploy, or replace on the server only). **`mail_to`** defaults to **`info@blackrocksconsultancy.com`**.
4. **`out/.user.ini`** (from **`public/.user.ini`**) requests **12M** upload/post limits for CVs. If your host ignores it, set the same in **MultiPHP INI Editor**.
5. Ensure **PHP** is enabled (cPanel does by default).
6. Send a test from the contact page and careers form.

### Environment variables (Next build only)

- `NEXT_PUBLIC_SITE_URL` — production URL
- `NEXT_PUBLIC_BASE_PATH` — only if the site is deployed under a subpath

## Features

- Sticky header with smooth scroll navigation
- Responsive mobile-first design
- Contact, careers, and lead forms → **PHP + SMTP** (no external form SaaS)
- SEO metadata
- WhatsApp and call links on contact
- Google Maps embed
- Framer Motion animations

## Forms

| Endpoint | Purpose |
|----------|---------|
| `POST /forms/contact.php` | JSON: name, email, phone, message, honeypot `website` |
| `POST /forms/career.php` | Multipart + CV `attachment` |
| `POST /forms/lead.php` | Multipart; business or individual + optional CV |

Default recipient is **`info@blackrocksconsultancy.com`** (set `mail_to` in `forms/config.php`).

## License

MIT
