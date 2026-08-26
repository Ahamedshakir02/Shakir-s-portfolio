import { useEffect } from 'react'
import { Link, Navigate, useParams } from 'react-router-dom'
import { projects } from '../content/index.js'
import { ArrowOutIcon } from '../ui/Icons.jsx'
import Section from '../ui/Section.jsx'
import Button from '../ui/Button.jsx'
import MetaBadge from '../ui/MetaBadge.jsx'
import ImageSlot from '../ui/ImageSlot.jsx'

/**
 * /work/:slug — the case study for a single project: hero, media, the written
 * detail sections, screenshots, and a handoff to the next project.
 */
export default function ProjectPage() {
  const { slug } = useParams()
  const i = projects.findIndex((p) => p.slug === slug)
  const p = projects[i]

  useEffect(() => {
    if (!p) return
    const prev = document.title
    document.title = `${p.title} — Ahamed Shakir`
    return () => { document.title = prev }
  }, [p])

  if (!p) return <Navigate to="/" replace />
  const next = projects[(i + 1) % projects.length]

  return (
    <main className="pt-16">
      <Section>
        <Link to="/#work" className="label inline-flex min-h-11 items-center text-muted hover:text-ink">
          ← All work
        </Link>

        <div className="label mt-6 mb-5 flex items-baseline gap-3 text-muted">
          <b className="font-medium text-accent">{p.idx}</b> {p.type}
        </div>

        <h1 className="font-display text-[clamp(2rem,4.6vw,3.5rem)] leading-[1.05] font-semibold tracking-[-0.025em] text-balance">
          {p.title}
        </h1>
        <div className="mt-7 max-w-[62ch] text-ink-2">{p.desc}</div>

        <ul className="mt-7 flex flex-wrap gap-x-3 gap-y-1">
          {p.stack.map((s) => <li key={s} className="label text-muted">{s}</li>)}
        </ul>

        <div className="mt-8 grid grid-cols-1 gap-5 border-y border-line py-6 sm:grid-cols-3">
          {p.feats.map((f) => <MetaBadge key={f.b} {...f} />)}
        </div>

        <ImageSlot
          src={p.media}
          alt={p.alt}
          placeholder={p.alt}
          className="mt-10 aspect-[16/9]"
          imgClassName="project-media scale-110"
        />
      </Section>

      <Section>
        {p.details.map((d) => (
          <div
            key={d.h}
            className="reveal grid gap-5 border-t border-line py-10 md:grid-cols-[minmax(0,16rem)_1fr] md:gap-10"
          >
            <h2 className="font-display text-heading font-semibold text-balance">{d.h}</h2>
            <div className="space-y-5 text-ink-2">
              {d.ps.map((t, j) => <p key={j}>{t}</p>)}
            </div>
          </div>
        ))}

        {p.shots?.length > 0 && (
          <div className="reveal mt-10 grid gap-6 sm:grid-cols-2">
            {p.shots.map((s) => (
              <figure key={s.src}>
                <img
                  src={s.src}
                  alt={`${p.title} — ${s.caption}`}
                  loading="lazy"
                  decoding="async"
                  onError={(e) => { e.currentTarget.closest('figure').hidden = true }}
                  className="w-full rounded-card border border-line"
                />
                <figcaption className="label mt-3 text-muted">{s.caption}</figcaption>
              </figure>
            ))}
          </div>
        )}

        <div className="mt-12 flex flex-wrap gap-3">
          {p.live && (
            <Button href={p.live} target="_blank" rel="noopener noreferrer" variant="primary">
              Visit the live site <span aria-hidden="true">↗</span>
            </Button>
          )}
          <Button
            href={p.link}
            target="_blank"
            rel="noopener noreferrer"
            variant={p.live ? 'ghost' : 'primary'}
          >
            {p.linkLabel} <span aria-hidden="true">↗</span>
          </Button>
          <Button as={Link} to="/#contact">
            Discuss a project like this <span aria-hidden="true">→</span>
          </Button>
        </div>
      </Section>

      <Section className="border-t border-line">
        <div className="label mb-6 flex items-baseline gap-3 text-muted">
          <b className="font-medium text-accent">Next</b> Keep exploring
        </div>
        <Link
          to={`/work/${next.slug}`}
          className="group flex items-center justify-between gap-6 font-display text-title font-semibold text-balance hover:text-accent"
        >
          {next.title}
          <ArrowOutIcon size={28} className="shrink-0 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
        </Link>
      </Section>
    </main>
  )
}
