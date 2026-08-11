# Contributing

Thanks for helping improve the **BracketView marketing site**.

This repository powers [https://bracketview.in](https://bracketview.in). It is **not** the interactive JSON workspace. Product bugs in the viewer, AI panel, jq engine, or webhooks belong in the **app** project / contact [support@bracketview.in](mailto:support@bracketview.in) — not as “app feature” PRs here unless they are marketing copy or deep links.

## What belongs here

- Typos and clarity fixes on marketing pages
- Learn hub / glossary copy (`src/app/data/learnPages.ts`, `src/app/data/glossary.ts`)
- Blog MDX posts (`content/blog/*.mdx`)
- SEO metadata helpers and internal links (without inventing unverified metrics)
- Accessibility and content bugs on this Next.js site
- Documentation in `README.md`, `docs/`, `SECURITY.md`

## What does not belong here

- Secrets, real SMTP credentials, API keys, or `.env` files
- AdSense / analytics IDs that are not placeholders
- Claims about rankings, Lighthouse scores, or user counts without an approved source
- Full product features that only exist in the app (Monaco, workers, auth, billing)

## Development

```bash
npm install
cp .env.example .env.local
npm run dev
```

Before opening a PR:

```bash
npm run lint
npm run build
```

Use Node.js **20+**. Prefer small, focused PRs.

## Content guidelines

- Keep positioning **developer-first**, privacy-aware, and freemium-accurate (core tools free; Pro limits as on [pricing](https://bracketview.in/pricing)).
- Prefer apex URLs: `https://bracketview.in/...` for marketing; deep-link CTAs to `https://app.bracketview.in` where users should open the product.
- Match brand tokens in [docs/design-system.md](./docs/design-system.md) (orange accent, Martian Mono / Fira Code, dark-first).
- For directory / backlink blurbs, reuse copy from [docs/backlinks.md](./docs/backlinks.md) instead of inventing new taglines.

## Security

Report vulnerabilities privately — see [SECURITY.md](./SECURITY.md). Do not file public issues that disclose exploits or personal data.

## License

This repository is **proprietary** ([LICENSE](./LICENSE)). By submitting a contribution, you assign (or irrevocably license) it to the copyright holder under the same proprietary terms so it can be included in BracketView. You do **not** receive rights to copy, redistribute, or sell the repository.
