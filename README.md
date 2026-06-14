# BracketView Landing

Marketing site for [BracketView](https://bracketview.in) — a freemium online JSON viewer, formatter, and validator.

## Local development

```bash
npm install
cp .env.example .env.local   # fill in secrets locally
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Deploy on Vercel

1. Import this repo in [Vercel](https://vercel.com/new) (framework: **Next.js**, root directory: `.`).
2. Set **Production** environment variables (Project → Settings → Environment Variables):

| Variable                               | Required         | Notes                                       |
| -------------------------------------- | ---------------- | ------------------------------------------- |
| `NEXT_PUBLIC_SITE_URL`                 | Yes              | `https://bracketview.in`                    |
| `NEXT_PUBLIC_GA_ID`                    | No               | Google Analytics measurement ID             |
| `NEXT_PUBLIC_GTM_ID`                   | No               | Google Tag Manager container ID             |
| `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` | No               | Search Console verification code            |
| `NEXT_PUBLIC_ADSENSE_CLIENT_ID`        | No               | AdSense publisher ID (`ca-pub-…`) — marketing site only |
| `NEXT_PUBLIC_ADSENSE_SLOT`             | No               | Default ad unit slot ID when ads are enabled |
| `NEXT_PUBLIC_ADSENSE_SLOT_BLOG`        | No               | Optional blog-specific ad slot              |
| `NEXT_PUBLIC_ADSENSE_SLOT_CONTENT`     | No               | Optional tool/glossary/features ad slot     |
| `SMTP_HOST`                            | For contact form | Hostinger SMTP host                         |
| `SMTP_PORT`                            | For contact form | e.g. `465`                                  |
| `SMTP_SECURE`                          | For contact form | `true` for port 465                         |
| `SMTP_USER`                            | For contact form | SMTP username                               |
| `SMTP_PASS`                            | For contact form | SMTP password (secret)                      |
| `SMTP_FROM`                            | For contact form | e.g. `BracketView <support@bracketview.in>` |
| `CONTACT_INBOX`                        | For contact form | e.g. `support@bracketview.in`               |

3. Add domain `bracketview.in` in Vercel → Domains and point DNS to Vercel.
4. Upload `public/og-image.webp` (1200×630) for social previews.
5. Deploy — `npm run build` runs `next-sitemap` automatically to generate `robots.txt` and `sitemap.xml`.

### Google AdSense (optional)

Ads appear only on the **marketing site** (`bracketview.in`) — blog, tool landing pages, glossary, and features. The app workspace stays ad-free.

1. Apply at [Google AdSense](https://www.google.com/adsense) and create display ad units.
2. Set `NEXT_PUBLIC_ADSENSE_CLIENT_ID` and `NEXT_PUBLIC_ADSENSE_SLOT` in Vercel env vars.
3. Update `public/ads.txt` with your real publisher ID (replace `pub-XXXXXXXXXXXXXXXX`).
4. Visitors see a cookie consent banner before any ad scripts load.

### Vercel CLI

```bash
npx vercel login
npx vercel link
npx vercel env pull .env.local
npx vercel          # preview
npx vercel --prod   # production
```

## Scripts

| Command         | Description                           |
| --------------- | ------------------------------------- |
| `npm run dev`   | Start dev server                      |
| `npm run build` | Production build + sitemap generation |
| `npm run start` | Start production server locally       |
| `npm run lint`  | Run ESLint                            |
