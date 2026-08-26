import { Link } from 'react-router-dom'
import { projects } from '../content/index.js'
import Section from '../ui/Section.jsx'
import SectionHeader from '../ui/SectionHeader.jsx'
import ImageSlot from '../ui/ImageSlot.jsx'
import { ArrowOutIcon } from '../ui/Icons.jsx'

const COUNT_WORDS = ['One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight']

/**
 * A teaser, not the whole story: image, title, a clamped lead, and the stack.
 * The full description, the key numbers, and the write-up live on the case
 * study at /work/:slug — which keeps the card short enough to sit inside a
 * pinned horizontal rail without overflowing the viewport.
 */
function ProjectCard({ p }) {
  return (
    <article className="reveal flex h-full flex-col rounded-card border border-line bg-paper-2/40 p-5 transition-colors hover:border-line-2">
      <ImageSlot
        src={p.media}
        alt={p.alt}
        placeholder={p.alt}
        className="aspect-16/10 shrink-0 lg:aspect-auto lg:min-h-0 lg:flex-1"
        imgClassName="project-media scale-110"
      />

      <div className="mt-5 flex items-start justify-between gap-4">
        <span className="label text-muted">{p.idx}</span>
        <a
          href={p.live || p.link}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={p.live ? `Visit ${p.title} live site` : `${p.linkLabel} — ${p.title}`}
          className="grid size-11 shrink-0 place-items-center rounded-pill border border-line text-ink-2 transition-colors hover:border-ink hover:text-ink"
        >
          <ArrowOutIcon />
        </a>
      </div>

      <h3 className="mt-2 font-display text-heading font-semibold text-balance">
        <Link to={`/work/${p.slug}`} className="hover:text-accent">{p.title}</Link>
      </h3>
      <p className="label mt-2 text-muted">{p.type}</p>

      <div className="mt-4 line-clamp-3 text-caption text-ink-2">{p.desc}</div>

      <ul className="mt-4 flex flex-wrap gap-x-3 gap-y-1">
        {p.stack.slice(0, 4).map((s) => (
          <li key={s} className="label text-muted">{s}</li>
        ))}
      </ul>

      <Link
        to={`/work/${p.slug}`}
        className="inline-flex min-h-11 items-center gap-2 self-start pt-5 text-caption text-accent transition-all hover:gap-3"
      >
        Read the case study <span aria-hidden="true">→</span>
      </Link>
    </article>
  )
}

export default function Work() {
  const n = COUNT_WORDS[projects.length - 1] ?? projects.length

  return (
    <Section id="work">
      <SectionHeader
        idx="03"
        label="Selected work"
        title={<>{n} project{projects.length === 1 ? '' : 's'}.<br />Zero filler.</>}
      />

      {/* Below lg: a plain stack, then a two-up grid. At lg and up,
          Choreography pins this and scrubs the track sideways — see
          src/motion/Choreography.jsx. The rail stays inside the content
          column because ScrollTrigger fixes the pinned element's width. */}
      <div
        data-rail
        className="mt-12 lg:overflow-hidden lg:[mask-image:linear-gradient(to_right,transparent_0,#000_5rem,#000_calc(100%-5rem),transparent_100%)]"
      >
        <div data-rail-track className="grid gap-6 md:grid-cols-2 lg:flex lg:w-max lg:gap-8 lg:px-24">
          {projects.map((p) => (
            <div
              key={p.idx}
              className="lg:h-[calc(100dvh-var(--nav-h)-3rem)] lg:max-h-[40rem] lg:w-[26rem] lg:shrink-0"
            >
              <ProjectCard p={p} />
            </div>
          ))}
        </div>
      </div>
    </Section>
  )
}
