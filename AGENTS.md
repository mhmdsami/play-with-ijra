# AGENTS.md

A tiny Next.js sandbox people use to test agent-driven changes. One page, two toy components, no database.

## Layout

- `app/page.tsx` — the page; sections compose the toys
- `app/toys.tsx` — client components (counter, color palette)
- `app/globals.css` — all styles, dark theme, monospace

## Rules

- Keep it dependency-free. Never add packages or touch lockfiles.
- Match the existing style: dark background `#111820`, accent `#71c98e`, monospace type, rounded pill buttons.
- Keep the page structure (layout, page, toys). Prefer editing `app/toys.tsx` and `app/globals.css`.

## Verify before finishing

```bash
npm ci
npx tsc --noEmit
npm run build
```
