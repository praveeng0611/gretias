# PROJECT: Gretias — IT & Industry Consulting Website

<!--
  AI CONTEXT
  ==========
  Website for Gretias, an IT Services / Consulting entity under Gnosiso Labs.
  Specialises in: Automotive consulting, Auto Ancillary advisory, niche IT advisory.
  Stack: Next.js 14 (App Router) · Tailwind CSS · Resend (contact form)
  Deployment: GitHub push → Vercel auto-deploy
  Live URL: https://gretias.gnosisolabs.com
  GitHub: praveeng0611/gretias (to be created)
  Env: RESEND_API_KEY only
  No database — fully static content except contact form API route.
-->

## What This Is

The official website for **Gretias** — a consulting practice offering strategic advisory across:
- Automotive (OEMs, dealerships, digital transformation, operations)
- Auto Ancillary (supply chain, quality, vendor development, process)
- IT Advisory (technology strategy, ERP/CRM, digital roadmaps, systems integration)

Live URL: **https://gretias.gnosisolabs.com**

---

## Tech Stack

| Layer      | Details                                            |
|------------|----------------------------------------------------|
| Framework  | Next.js 14 (App Router)                            |
| Styling    | Tailwind CSS v3                                    |
| Email      | Resend (contact form → praveen.goswami81@gmail.com)|
| Hosting    | Vercel                                             |
| Deployment | GitHub push → Vercel auto-deploy                  |
| No database — all content is static in page files  |

Design: dark navy `#080D1A` bg, blue/cyan accent (`#2563EB` / `#06B6D4`), Inter font.
Matches the Gnosiso Labs visual family.

---

## Pages & Routes

| Route        | File                          | Description                              |
|--------------|-------------------------------|------------------------------------------|
| `/`          | `app/page.tsx`                | Homepage — hero, services, why us, CTA   |
| `/about`     | `app/about/page.tsx`          | Story, values, approach steps            |
| `/services`  | `app/services/page.tsx`       | Detailed 3-service breakdown             |
| `/contact`   | `app/contact/page.tsx`        | Contact form (client component)          |
| `/api/contact`| `app/api/contact/route.ts`   | POST — sends email via Resend            |

---

## Key Files

| File                          | Purpose                                              |
|-------------------------------|------------------------------------------------------|
| `app/globals.css`             | Dark theme, CSS utilities, gradient/glow classes     |
| `app/layout.tsx`              | Root layout — Navbar + Footer + metadata             |
| `components/Navbar.tsx`       | Sticky navbar with mobile menu                       |
| `components/Footer.tsx`       | Footer with nav, contact, attribution                |
| `app/page.tsx`                | Homepage                                             |
| `app/about/page.tsx`          | About page                                           |
| `app/services/page.tsx`       | Services detail page                                 |
| `app/contact/page.tsx`        | Contact form (client component)                      |
| `app/api/contact/route.ts`    | Resend API route — force-dynamic                     |

---

## Environment Variables

```env
# .env.local
RESEND_API_KEY=re_xxxxxxxxxxxxxxxx
```

Get from: https://resend.com → API Keys

Contact form sends to: `hello@gretias.com` and `praveen.goswami81@gmail.com`

---

## Deploy

```bash
git add <changed-files>
git commit -m "describe the change"
git push origin main
# Vercel auto-deploys in ~2 minutes
# Live: https://gretias.gnosisolabs.com
```

---

## Subdomain Setup (one-time)

In Vercel Dashboard → gretias project → Settings → Domains:
Add `gretias.gnosisolabs.com`

In Vercel Dashboard → gnosisolabs.com project (or DNS provider):
Add CNAME: `gretias` → `cname.vercel-dns.com`

---

## Local Development

```bash
cd gretias
npm install
# Create .env.local with RESEND_API_KEY
npm run dev
# Open http://localhost:3000
```

---

## Content — Where to Edit

| What                    | Where                               |
|-------------------------|-------------------------------------|
| Homepage hero / stats   | `app/page.tsx` — `stats` array      |
| Service cards (home)    | `app/page.tsx` — `services` array   |
| Why us points           | `app/page.tsx` — `whyUs` array      |
| Full service detail     | `app/services/page.tsx`             |
| About story text        | `app/about/page.tsx`                |
| Contact email recipient | `app/api/contact/route.ts` — `to:`  |
| Footer links / email    | `components/Footer.tsx`             |
