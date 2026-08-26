# Ahamed Shakir — Portfolio

A single-page React portfolio with per-project case-study routes. Warm cocoa/cream
design system, light and dark themes, scroll-choreographed motion that is fully
gated behind `prefers-reduced-motion`.

**Live:** https://shakir-s-portfolio.vercel.app

## Develop

```bash
npm install
npm run dev      # dev server → http://localhost:5173
npm run build    # production build → dist/
npm run preview  # serve the production build
```

### Environment

| Variable | Required | Purpose |
| --- | --- | --- |
| `VITE_CONTACT_ENDPOINT` | for the contact form | Form POST target (Formspree / Web3Forms). Without it the form shows its error state and falls back to the `mailto:` link. |

Set it in `.env` locally and in the Vercel project settings for production.

## Stack

React 18 · Vite 6 · Tailwind CSS v4 · GSAP (ScrollTrigger) · Lenis · React Router · Zustand

## Structure

```
src/
  app/        App shell, routes, and the load gate
  sections/   One file per page section
  ui/         Reusable presentational pieces
  motion/     Everything that animates
  content/    All site copy and data
  hooks/      Non-motion hooks
  pages/      Route-level views
  styles/     Design tokens
```

- **`src/app/`** — `App.jsx` composes the page and routes; `loadGate.js` is the store
  every animation waits on (see [Motion](#motion)).
- **`src/sections/`** — `Hero`, `Stats`, `About`, `Skills`, `Work`, `Path`, `Certs`,
  `Mulearn`, `Languages`, `Contact`. Each is self-contained and mobile-first.
- **`src/ui/`** — `Nav`, `Footer`, `ToTop`, `Section`, `SectionHeader`, `Button`, `Chip`,
  `MetaBadge`, `CountUp`, `ImageSlot`, `Icons`.
- **`src/motion/`** — `Preloader`, `Choreography` (scroll effects), `Curtain` (route
  transition), `SmoothScroll` (Lenis), `useReveal`, `useHeroIntro`, and `gsap.js`, which is
  the **only** place GSAP plugins are registered.
- **`src/content/`** — `profile.js`, `skills.js`, `projects.jsx`, `timeline.jsx`, `certs.js`,
  re-exported through `index.js`. **All copy lives here** — sections never hardcode text.
- **`src/styles/theme.css`** — the whole design system: colour, spacing, and type scales
  declared in Tailwind's `@theme`, plus the dark overrides and the few compound utilities
  (`wrap`, `label`, `reveal`).
- **`index.html`** — head metadata: canonical, Open Graph / Twitter, JSON-LD (`Person`,
  `WebSite`, `ProfilePage`, and a `CreativeWork` per project), fonts, and the inline
  no-flash theme script. Also carries a `<noscript>` fallback for crawlers.
- **`public/`** — `robots.txt`, `sitemap.xml`, `llms.txt` (plain-text profile for AI
  crawlers), `favicon.svg`, and `assets/` (project images, portrait, OG card, résumé/CV).
- **`docs/`** — deployment and Google-tooling setup guides.
- **`vercel.json`** — SPA rewrite so `/work/:slug` deep links resolve.

## Design system

Everything comes from tokens in `src/styles/theme.css`; components use Tailwind
utilities that read them, so there are no ad-hoc colours or spacing values.

- **Colour** — warm cream paper with a cocoa-clay accent, and a rich espresso dark mode.
  Every text-on-surface pair meets **WCAG AA (4.5:1) for small text in both themes**. The
  light accent is deliberately deep: a brighter clay sits at the luminance midpoint where
  neither cream nor ink text passes on a filled button.
- **Type** — Unbounded (display), IBM Plex Sans (body), IBM Plex Mono (labels). Every step
  is a `clamp()`, so headings scale without breakpoint jumps.
- **Layout** — content column capped at 1320px. Text blocks carry their own `ch`-based
  max-widths, so the measure stays readable as the column widens.
- **Theme** — driven by `data-theme` on `<html>` so the toggle beats the OS setting;
  applied before paint by the inline script in `index.html`.

## Motion

Two rules govern all of it:

1. **Nothing moves until loading is genuinely finished.** `Preloader` derives progress from
   real readiness — `document.fonts.ready`, `img.decode()` on every image, and `window.load`
   — with a 6s safety timeout so a dead CDN can't trap anyone. When it completes it releases
   `loadGate`, which the hero intro, scroll reveals, count-ups, and ScrollTrigger all wait on.
2. **Every scroll effect is declared inside `gsap.matchMedia()`.** Desktop choreography and
   its mobile fallback sit side by side and tear down automatically. Pinning and the
   horizontal project rail never register below `lg` (1024px) — that's what keeps it smooth
   on a phone.

The rail is pinned and scrubbed sideways on desktop, offset by the `--nav-h` token so cards
never slide under the fixed header, with both edges masked so they dissolve rather than clip.

`prefers-reduced-motion` is honoured throughout: no preloader animation, no Lenis, no scrub,
all content rendered in its final state.

## Content

Editing the site means editing `src/content/` — nothing else.

- **Projects** carry a `slug` and `details`, which drive the `/work/:slug` case studies.
  Adding one means adding an entry plus a `<loc>` in `public/sitemap.xml`, a bullet in
  `public/llms.txt`, and a `CreativeWork` node in `index.html`.
- **Certifications** have an optional `href`. Entries without one render as plain text
  rather than a dead link — the current six have no verified URLs yet, so they are unlinked.
- **Résumé / CV** live in `public/assets/` and are linked from the hero, contact, and footer.

## Accessibility

- One `h1`, an `h2` per section, `h3` for items — no skipped levels.
- Contrast meets WCAG AA for small text in both themes.
- The mobile nav sheet traps focus, closes on Escape, restores focus to its trigger, and is
  `inert` while closed.
- Standalone tap targets are ≥44px; inline links in prose are exempt by design.
- Visible focus rings everywhere, and all motion is reduced-motion safe.

## Deployment

Vercel, building `dist/` from `npm run build`. `vercel.json` provides the SPA rewrite that
makes `/work/:slug` resolve on a hard refresh. See [`docs/`](docs/) for custom-domain setup
and Google tooling.
