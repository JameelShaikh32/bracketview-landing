# Backlinks & directory marketing kit

Use this doc when submitting BracketView to directories, roundups, and partner pages. Prefer **quality dofollow** links to the marketing apex over thin link farms.

Canonical product: **[https://bracketview.in](https://bracketview.in)**  
Workspace (conversion): **[https://app.bracketview.in](https://app.bracketview.in)**  
Public marketing repo: **[https://github.com/JameelShaikh32/bracketview-landing](https://github.com/JameelShaikh32/bracketview-landing)**

## Preferred link text (anchors)

Use one of these (or close variants):

| Priority | Anchor text |
| -------- | ----------- |
| Primary | BracketView |
| Outcome | BracketView — AI-powered JSON workspace |
| SEO | Free online JSON viewer |
| SEO | JSON formatter and validator |
| Tool | Online JSONPath explorer |
| Tool | Browser jq playground |
| Tool | Webhook tester |

Avoid keyword-stuffed anchors. One clear product name + short descriptor is enough.

## Canonical URLs by intent

| Intent | URL |
| ------ | --- |
| Homepage / brand | https://bracketview.in |
| Start using product | https://app.bracketview.in |
| Pricing | https://bracketview.in/pricing |
| Features | https://bracketview.in/features |
| JSON Viewer | https://bracketview.in/json-viewer |
| JSON Formatter | https://bracketview.in/json-formatter |
| JSON Validator | https://bracketview.in/json-validator |
| JSON Diff | https://bracketview.in/json-diff |
| JSONPath | https://bracketview.in/jsonpath-query |
| JQ Playground | https://bracketview.in/jq-playground |
| Schema Validator | https://bracketview.in/json-schema-validator |
| Type Generator | https://bracketview.in/json-type-generator |
| AI JSON Fixer | https://bracketview.in/ai-json-fixer |
| Webhook Tester (marketing) | https://bracketview.in/webhook-tester |
| Webhook Tester (app) | https://app.bracketview.in/webhooks |
| Learn hub | https://bracketview.in/learn |
| Blog | https://bracketview.in/blog |
| Contact | https://bracketview.in/contact |
| Privacy | https://bracketview.in/privacy |

Default listing URL: **https://bracketview.in** unless the directory asks for an “app URL” or login — then use **https://app.bracketview.in**.

## Blurbs (copy-paste)

### ~50 characters

`AI-powered JSON viewer & debugger for developers`

### ~150 characters

`BracketView is a freemium JSON workspace: view, format, validate, query (JSONPath & jq), diff, and test webhooks in the browser — privacy-first core tools.`

### ~300 characters

`BracketView is an AI-powered JSON workspace for developers. Inspect nested payloads in a clean tree, format and validate JSON, run JSONPath and jq filters, compare documents, validate schemas, generate types, repair broken JSON with AI, and capture webhooks — core tools run in the browser with a freemium Pro plan.`

### One-sentence tagline

`Debug JSON 10× faster in a privacy-first browser workspace.`

### Category tags (pick relevant)

`JSON`, `Developer Tools`, `API Tools`, `JSON Viewer`, `JSON Formatter`, `Webhook Testing`, `DevOps`, `QA`

Do **not** list this marketing repo as MIT / open-source licensed code — it is proprietary ([LICENSE](../LICENSE)). Prefer product tags above; the public GitHub repo is for discovery and backlinks, not code reuse.

## Brand assets

Hosted on the marketing site (use HTTPS absolute URLs in forms):

| Asset | Path |
| ----- | ---- |
| Logo | https://bracketview.in/logo.webp |
| Open Graph / social | https://bracketview.in/og-image.webp |
| Product Hunt badge (site) | https://bracketview.in/images/featured-logo/product_hunt_badge.webp |
| SaaSHub badge (site) | https://bracketview.in/images/featured-logo/saashub-badge.webp |

In this repo: `public/logo.webp`, `public/og-image.webp`, `public/images/featured-logo/`.

Accent color: `#ff9c1c`. Dark background: `#0f0d0e`.

## UTM conventions

When you control the outbound link from a listing or badge on **our** site, keep existing query params. When **you** add UTMs on links you own (blog, social, email):

```
https://bracketview.in/?utm_source=<directory>&utm_medium=referral&utm_campaign=backlink
https://app.bracketview.in/?utm_source=<directory>&utm_medium=referral&utm_campaign=trial
```

Examples: `utm_source=producthunt`, `alternativeto`, `devhunt`, `awesome-json`, `github`.

Do not append UTMs to canonical tags, sitemaps, or `llms.txt` official links.

## Priority directories & listings

Update status when submitted / live.

| Directory | URL / notes | Status |
| --------- | ----------- | ------ |
| Product Hunt | https://www.producthunt.com/products/bracketview | Listed — engage reviews |
| SaaSHub | https://www.saashub.com/bracketview | Listed |
| G2 | https://www.g2.com/products/bracketview | Listed |
| Capterra | https://www.capterra.com/p/10053145/BracketView/ | Listed |
| Software Advice | https://www.softwareadvice.com/product/560735-BracketView/ | Listed |
| GetApp | https://www.getapp.com/all-software/a/bracketview/ | Listed |
| AlternativeTo | Submit JSON viewer / formatter alternative | Todo |
| DevHunt | Developer tool launch / listing | Todo |
| Indie Hackers | Product page / ship post with apex link | Todo |
| Awesome lists | PRs to curated `awesome-json` / developer-tools lists | Todo |
| BetaList / Launching Next | Only if still accepting; avoid spammy clones | Optional |
| Hacker News / Reddit | Organic Show HN / r/webdev — no link spam | Ongoing |
| Medium / LinkedIn / X | Share learn + blog posts with apex URLs | Ongoing |

Target: **10–20 quality dofollow backlinks** in the first 90 days of active outreach (see also `public/llms.txt` off-page notes).

## GitHub (this repo) checklist after going public

- [ ] Repository visibility: **Public**
- [ ] About → Website: `https://bracketview.in`
- [ ] Topics: `json`, `json-viewer`, `json-formatter`, `json-validator`, `jsonpath`, `jq`, `webhook`, `developer-tools`, `nextjs`, `bracketview`
- [ ] Social preview image: `public/og-image.webp` (or 1280×640 PNG)
- [ ] LICENSE visible (Proprietary / All Rights Reserved)
- [ ] README badges and live links render
- [ ] Issues enabled for marketing/content bugs ([CONTRIBUTING.md](../CONTRIBUTING.md))
- [ ] Confirm site TrustStrip / footer still point at this GitHub URL

## Search Console (related off-page)

- Submit `https://bracketview.in/sitemap.xml` to Google Search Console and Bing Webmaster
- Request indexing first for **`/json-viewer`** and **`/learn/best-json-viewer`** (primary “free online JSON viewer” URLs)
- Then request: `/json-formatter`, `/json-validator`, `/jq-playground`, `/webhook-tester`
- Comparison guides (index after the roundup): `/learn/bracketview-vs-jsonlint`, `/learn/bracketview-vs-json-editor-online`, `/learn/bracketview-vs-jsoncrack`
- Keep marketing vs app indexing rules in [seo.md](./seo.md)

## Related docs

- [README.md](../README.md) — public product face
- [docs/seo.md](./seo.md) — canonical domains & indexing
- [public/llms.txt](../public/llms.txt) — long-form product / GEO summary
- [CONTRIBUTING.md](../CONTRIBUTING.md) — content PR scope
