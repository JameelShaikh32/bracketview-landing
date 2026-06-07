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
