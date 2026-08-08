# BracketView Design System

Preserve the existing developer-tool identity: dark-first, orange accent, Martian Mono + Fira Code. Do not introduce purple-on-white or cream/serif defaults.

## Tokens

| Token | Value | Usage |
|-------|-------|-------|
| `--accent` | `#ff9c1c` | Primary CTAs, highlights |
| `--accent-dark` | `#be7009` | Dark-mode CTAs |
| `--black` | `#191314` | Light-mode text |
| `--gray` | `#f4f4f4` | Light page background |
| `--background` (dark) | `#0f0d0e` | Dark page background |
| `--muted` | `#1a1718` | Dark panels |
| Display font | Martian Mono | H1–H6 |
| Body font | Fira Code | UI copy and code |
| Radius | `1rem` / `1.5rem` / `2rem` | controls / cards / hero panels |

Defined in `src/app/globals.css` via `@theme inline`.

## Primitives (`src/components/ui`)

- `Button` — `primary` | `secondary` | `ghost`
- `Badge` — section/eyebrow labels
- `SectionHeader` — consistent H1/H2 + description
- Existing: `Navbar`, `Footer`, `ThemeToggle`, `ClientSidePrivacyBadge`

## Motion

Use existing Motion helpers in `src/components/motion/*`. Durations 150–300ms. Always respect `prefers-reduced-motion`.

## App parity

Mirror marketing CSS variables in the app where practical (`#ff9c1c` accent already used in auth CTAs). Tree/AI panels should use amber accents consistent with marketing orange.
