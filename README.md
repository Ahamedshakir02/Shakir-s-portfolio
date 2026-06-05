# Ahamed Shakir — Portfolio

A React portfolio implementing the "COCOA" Cleo-inspired design (warm cream + rich cocoa,
light/dark theme). Built with Vite.

## Develop

```bash
npm install
npm run dev      # start the dev server (http://localhost:5173)
npm run build    # production build → dist/
npm run preview  # preview the production build
```

## Structure

- `src/App.jsx` — composes every section in order.
- `src/components/` — one file per section (`Hero`, `Stats`, `About`, `Skills`, `Projects`,
  `Path`, `Certs`, `Mulearn`, `Languages`, `Contact`, `Footer`) plus `Nav`, `ToTop`, `CountUp`,
  `ImageSlot`, and `icons`.
- `src/hooks/` — `useTheme` (light/dark + localStorage), `useScrolled` (nav + back-to-top),
  `useReveal` (IntersectionObserver scroll reveals).
- `src/data.jsx` — all section content.
- `src/index.css` — the full design system (CSS variables, light/dark, responsive layout).
- `public/assets/` — project images and résumé.

## Notes

- The hero portrait is a placeholder (`ImageSlot`); drop a real photo in via the `src` prop.
- Theme is applied before paint by an inline script in `index.html` to avoid a flash.
- Honors `prefers-reduced-motion` for reveals, counters, and smooth scroll.
