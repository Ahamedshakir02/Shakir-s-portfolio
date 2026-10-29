# Design: minimal edition

This is the spec for the minimal redesign. Anything that touches how the site looks or moves
follows it. If the code and this file disagree, fix one of them. Don't let them drift apart.

## Direction

One column of text on a quiet page. The work does the talking, type does the structure, and
there is almost no decoration. The rule for every element is **remove it unless the page gets
worse without it**.

What the current site does that this edition drops:

- Scroll choreography: the preloader, the route curtain, Lenis smooth scroll, the GSAP pinned
  rail, the hero intro and the count-ups.
- Decoration: mono uppercase eyebrows, section numbers ("01", "02"), chips and pills, card
  borders and panels, the scroll cue, the to-top button, the accent dots.
- Display type: Unbounded and the `display` and `title` sizes it needed.
- Whole sections: Stats goes (the numbers move into prose where they matter), and Languages
  becomes one line in About.

## Colour

There are two neutrals and one accent, in both themes. The cocoa accent carries over from the
current site, so the brand stays recognisable.

| Token | Light | Dark | Use |
| --- | --- | --- | --- |
| `paper` | `#fafaf9` | `#121110` | Page background. This is the only surface. |
| `ink` | `#1c1917` | `#f0eeec` | Headings, name, primary text |
| `ink-2` | `#44403c` | `#c4bfba` | Body copy |
| `muted` | `#6b6560` | `#968f88` | Dates, meta, captions |
| `line` | `#e7e5e4` | `#292524` | Hairline dividers (the only borders) |
| `accent` | `#974d22` | `#e89a5c` | Links on hover, focus ring, text selection |

Contrast on `paper`: ink 16.7 / 16.3, ink-2 9.8 / 10.3, muted 5.5 / 5.9, accent 5.9 / 8.3
(light / dark). Every pair passes WCAG AA for small text.

Rules:

- No second background tone, no panels, no gradients, no shadows, no `backdrop-blur`.
- Use the accent sparingly. It shows on hover and focus, and nowhere else by default.
  Body links are `ink` with a `line` underline that turns `accent` on hover.
- Dark mode keeps working the way it does now: `data-theme` on `<html>`, set by the inline
  script before paint, and switched by the toggle.

## Type

One family: **Inter** (Google Fonts, weights 400, 500 and 600). Dates and numbers use
`font-variant-numeric: tabular-nums`. IBM Plex Mono and Unbounded are removed.

| Token | Size | Line height | Weight | Use |
| --- | --- | --- | --- | --- |
| `name` | `clamp(1.75rem, 4vw, 2.25rem)` | 1.15 | 600 | The `h1`, once per page |
| `heading` | `1.125rem` (18px) | 1.4 | 600 | Section `h2`s |
| `item` | `1rem` | 1.5 | 500 | Item titles (`h3`): projects, roles |
| `body` | `1rem` (16px) | 1.7 | 400 | Prose |
| `small` | `0.875rem` (14px) | 1.55 | 400 | Meta, dates, footer |

Rules:

- Five sizes, no more. Section headings stay small on purpose. Hierarchy comes from space
  and weight, not size.
- Sentence case everywhere. No uppercase and no letter-spacing tricks.
- Letter-spacing is `-0.01em` on `name` and normal everywhere else.

## Spacing

The base step stays at 4px. Use only these steps: **4, 8, 12, 16, 24, 32, 48, 64, 96**.

| Context | Mobile | ≥ md |
| --- | --- | --- |
| Page gutter | 20px | 24px |
| Top of page to `h1` | 64px | 96px |
| Between sections | 64px | 96px |
| Section `h2` to content | 24px | 24px |
| Between list items | 24px | 32px |
| Paragraph gap | 16px | 16px |

## Layout

- **One column**, `max-width: 40rem` (640px), centred. Nothing on the page is wider than this
  except case-study images, which can extend to `48rem`.
- **Nav**: a static bar at the top. It is not fixed and has no blur. The name links home on the
  left, and three links (Work, About, Contact) plus the theme toggle sit on the right. On mobile
  the links stay inline, because three short words fit, so the burger sheet goes.
- **Footer**: one `small` line with © year and name on the left, and the CV and GitHub links on the right.
- Tap targets stay ≥ 44px tall. Inline prose links are exempt.

## Page structure (home)

Order and content for each section:

1. **Intro** (`header`): the name as `h1`, a one-line role under it in `ink-2` (e.g.
   "Software engineer in Kerala, building web and mobile products"), and two sentences of intro.
   Below that is a row of text links: Email, GitHub, LinkedIn, Résumé ↓. There is no photo and
   there are no buttons.
2. **Work**: a plain list. Each row has the title (`item`, linked to `/work/:slug`), one line of
   description in `ink-2`, and then a `muted` `small` line with the year and up to three stack
   items, separated by `·`. Rows sit apart with spacing alone, with no dividers and no cards.
3. **About**: two or three short paragraphs. End with one `muted` line for languages:
   "Speaks English, Malayalam, Tamil and Hindi."
4. **Experience**: a list where each row is a two-column grid on md and up (`when` in `muted`
   tabular numbers, 8rem wide | title + role). Stacked on mobile. Each role gets one sentence,
   not a bullet list. Education goes here as the last row.
5. **Skills**: four groups at most (e.g. Languages, Web & mobile, Cloud & tools, AI & hardware).
   Each group is a `muted` label followed by a comma-separated sentence, with no chips.
6. **Contact**: one sentence, then the email address as a large-enough plain link (`item` size).
   The form is removed and the `mailto:` link is the only contact path.

## Case study (`/work/:slug`)

Same column and type as home:

- "← Work" back link (`small`, `muted`).
- Title as the `h1` at `name` size, then a `muted` meta line: type · year · stack.
- Visit / Source links as text links.
- One lead image at full column width (up to `48rem`), with a 1px `line` border and `6px` radius.
  Screenshots follow in a single column, never a grid.
- Body sections use `h2` `heading` with prose. The feature badges become a short sentence or
  a three-row definition list.
- "Next: {project} →" at the end.

## Components

| Component | Fate |
| --- | --- |
| `Nav` | Simplify. Static, inline links, keep the toggle. |
| `Footer` | Simplify to one line. |
| `Section` | Keep it as the `max-w-[40rem]` wrapper with the section spacing. |
| `SectionHeader` | Replace with a plain `h2`. Drop `idx`, `label` and `intro`. |
| `Button` | Remove. Use text links. |
| `Chip`, `MetaBadge`, `CountUp`, `ToTop` | Remove. |
| `ImageSlot` | Keep for case-study images. Drop the scale and parallax class. |
| `Icons` | Keep only the sun and moon for the toggle, plus the external-link arrow if used. |
| `motion/*`, `app/loadGate.js` | Remove. |

Dependencies that can go once motion is removed: `gsap`, `lenis`, `zustand`.

## Motion

Almost none:

- `color` and `text-decoration-color` transitions of 150ms on links.
- No load animation, no scroll reveals and no smooth-scroll library. Anchor jumps use native
  `scroll-behavior: smooth` and are switched off under `prefers-reduced-motion`.

## Accessibility (unchanged commitments)

- One `h1` per page, an `h2` per section and `h3` for items, with no skipped levels.
- Every text colour pair meets AA in both themes (see Colour).
- A visible `:focus-visible` ring: 2px `accent`, 3px offset.
- The theme toggle keeps its `aria-label`.

## Content and metadata

`src/content/` stays the only place copy lives. Fields the new layout doesn't use (`stats`,
`aboutTags`, `roles`, skill `idx`, project `idx`) can be deleted. If Hero copy, the page title
or descriptions change, keep `index.html` metadata, `public/llms.txt` and the OG image in sync
the way the current history does. The README's "Design system" and "Motion" sections need
rewriting to match this file when the build lands.
