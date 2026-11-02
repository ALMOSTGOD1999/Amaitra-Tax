# Arindam Maitra Tax Consulting Unit — Website

Public website for Arindam Maitra Tax Consulting Unit (Berhampore, West Bengal) — tax, GST and compliance advisory — including the Future Dreams and Neelkanth Capital sister-venture pages.

Built with [TanStack Start](https://tanstack.com/start) with file-based routing and SSR, React 19, TypeScript, Tailwind CSS v4 and shadcn/ui components. Production builds target Cloudflare Workers through Nitro.

## Commands

| Command | Purpose |
| --- | --- |
| `bun install` | Install dependencies |
| `bun run dev` | Dev server at http://localhost:8080 |
| `bun run build` | Production build (Cloudflare preset, written to `.output/`) |
| `bun run preview` | Preview the production build |
| `bun run test` | Run Vitest tests once (`test:watch` for watch mode) |
| `bun run lint` | ESLint |
| `bun run format` | Format the repo with Prettier |

## Project structure

- `src/routes/` — one file per public section; each leaf owns its own metadata via the `pageHead()` helper
- `src/lib/site.ts` — shared business details, navigation, service content and metadata helper
- `src/components/site/` — site chrome (header, footer, page banners) and section components
- `src/components/ui/` — shadcn/ui primitives
- `src/styles.css` — design tokens and semantic site classes
- `src/assets/` — imagery
- `src/test/` — Vitest setup and tests
