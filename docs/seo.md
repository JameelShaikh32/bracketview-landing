# SEO notes (marketing vs app)

## Canonical domains

| Host | Role |
|------|------|
| **https://bracketview.in** | Canonical marketing / SEO front door (apex) |
| **https://app.bracketview.in** | Interactive JSON workspace |

Prefer apex URLs in sitemaps, canonical tags, and external links. Keep `www` ↔ apex consistent at DNS/Vercel (redirect one way).

## Tool URLs (marketing)

Indexed tool landings live on the marketing site, for example:

- `/json-viewer`
- `/json-formatter`
- `/json-validator`
- `/json-diff`
- `/jsonpath-query` (alias `/jsonpath` → this path)
- `/jq-playground`
- `/json-schema-validator`
- `/json-type-generator` (alias `/json-to-typescript` when configured)
- `/ai-json-fixer`
- `/webhook-tester`

CTAs should deep-link to the matching app workspace URL (for example `https://app.bracketview.in` or tool-specific app paths) without creating conflicting canonicals.

## Marketing vs app indexing

- **Marketing (`bracketview.in`):** Primary indexable content—homepage, tool pages, learn, blog, pricing, legal.
- **App (`app.bracketview.in`):** Mostly `noindex` / restrictive `robots` allow-list. Prefer marketing pages as the search landing for tool intent; the app is for product use after the click.

Do not claim rankings, impression counts, or Lighthouse scores in public copy without verification in Search Console / field data.
