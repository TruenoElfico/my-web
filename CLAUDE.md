# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev       # start dev server at localhost:3000
npm run build     # production build
npm run lint      # run ESLint
npx tsc --noEmit  # type-check without building
```

No test suite is configured.

## Architecture

Single-page Next.js 16 portfolio site using the App Router. All meaningful code lives in `app/`.

- `app/layout.tsx` — root layout: loads Inter from `next/font/google`, sets metadata and Open Graph tags, applies the font CSS variable to `<body>`
- `app/page.tsx` — the entire site as one component (`PersonalPortfolioPage`): hero, about/skills, work, experience, and contact sections
- `app/globals.css` — Tailwind v4 (imported via `@import "tailwindcss"`), CSS custom properties for colors (`--background`, `--foreground`, `--link`), and base `body` font rule

## Styling conventions

- Tailwind v4 with PostCSS (`@tailwindcss/postcss`). No `tailwind.config.*` file — configuration is done inside `globals.css` via `@theme inline`.
- Brand color: `#69E8FF` (cyan). Referenced directly as Tailwind arbitrary values (`bg-[#69E8FF]`, `text-[#69E8FF]`) and as `--link` in CSS.
- Dark background: `#0f1115`. Card surfaces: `#141821` / `bg-white/5`.
- Path alias `@/*` maps to the repo root (e.g. `@/app/...`).
