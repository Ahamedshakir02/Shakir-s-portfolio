# Ahamed Shakir — Portfolio

A single-page React portfolio with per-project case-study routes. Minimal design:
one narrow column, one typeface, two neutrals and a cocoa accent, light and dark
themes, and no decorative motion. The spec is in `DESIGN.md`.

**Live:** https://shakir-s-portfolio.vercel.app

## Develop

```bash
npm install
npm run dev      # dev server → http://localhost:5173
npm run build    # production build → dist/
npm run preview  # serve the production build
```

## Stack

React 18 · Vite 6 · Tailwind CSS v4 · React Router

## Structure

```
src/
  app/        App shell and routes
  sections/   One file per page section
  ui/         Reusable presentational pieces
  content/    All site copy and data
  hooks/      Theme and document-metadata hooks
  pages/      Route-level views
  styles/     Design tokens
```

- **`src/app/`** — `App.jsx` composes the page and routes.
- **`src/sections/`** — `Hero`, `Work`, `About`, `Path` (experience), `Skills`, `Contact`,
  plus the parked `Certs`.
- **`src/ui/`** — `Nav`, `Footer`, `Section`, `ImageSlot`, `Icons`.
- **`src/content/`** — `profile.js`, `home.js`, `skills.js`, `projects.jsx`, `timeline.jsx`, `certs.js`,
  re-exported through `index.js`. **All copy lives here** — sections never hardcode text.
- **`src/styles/theme.css`** — the design tokens (colour, type, spacing) in Tailwind's
  `@theme`, the dark overrides, and three utilities: `wrap`, `link` and `quiet`.
- **`index.html`** — head metadata: canonical, Open Graph / Twitter, JSON-LD (`Person`,
  `WebSite`, `ProfilePage`, and a `CreativeWork` per project), fonts, and the inline
  no-flash theme script. Also carries a `<noscript>` fallback for crawlers.
- **`public/`** — `robots.txt`, `sitemap.xml`, `llms.txt` (plain-text profile for AI
  crawlers), `favicon.svg`, and `assets/` (project images, portrait, OG card, résumé/CV).
- **`docs/`** — deployment and Google-tooling setup guides.
- **`vercel.json`** — SPA rewrite so `/work/:slug` deep links resolve.

## Design system

`DESIGN.md` is the spec; `src/styles/theme.css` implements it. Keep the two in step.

- **Colour** — `paper`, `ink`, `ink-2`, `muted`, `line` and one `accent`, in both themes.
  Every text pair meets WCAG AA for small text. The accent shows only on hover, focus and
  selection.
- **Type** — Inter at five sizes (`name`, `heading`, `item`, `body`, `small`). Hierarchy comes
  from weight and space, not size. Sentence case everywhere.
- **Layout** — one 40rem column; case-study images can run to 48rem. Static header, one-line
  footer.
- **Theme** — driven by `data-theme` on `<html>` so the toggle beats the OS setting;
  applied before paint by the inline script in `index.html`.

## Motion

Almost none: 150ms colour transitions on links, and native smooth scrolling for anchor
jumps, switched off under `prefers-reduced-motion`. No preloader, no scroll reveals, no
animation libraries.

## Content

Editing the site means editing `src/content/` — nothing else.

- **Projects** carry a `slug` and `details`, which drive the `/work/:slug` case studies.
  Adding one means adding an entry plus a `<loc>` in `public/sitemap.xml`, a bullet in
  `public/llms.txt`, and a `CreativeWork` node in `index.html`.
- **Certifications** have an optional `href`. Entries without one render as plain text
  rather than a dead link — the current six have no verified URLs yet, so they are unlinked.
- **Home copy** (intro, About, Contact) lives in `home.js`.
- **Résumé / CV** live in `public/assets/` and are linked from the intro and the footer.

## Accessibility

- One `h1`, an `h2` per section, `h3` for items — no skipped levels.
- Contrast meets WCAG AA for small text in both themes.
- A skip link jumps past the header to the content.
- Standalone tap targets are ≥44px; inline links in prose are exempt by design.
- Visible focus rings everywhere (2px accent, 3px offset).

## Deployment

Vercel, building `dist/` from `npm run build`. `vercel.json` provides the SPA rewrite that
makes `/work/:slug` resolve on a hard refresh. See [`docs/`](docs/) for custom-domain setup
and Google tooling.
