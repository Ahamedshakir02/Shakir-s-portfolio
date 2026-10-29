import { Link, Navigate, useParams } from 'react-router-dom'
import { useDocumentMeta } from '../hooks/useDocumentMeta.js'
import { projects } from '../content/index.js'
import ImageSlot from '../ui/ImageSlot.jsx'

/**
 * /work/:slug — one project's case study, in the same column and type as home:
 * title, meta line, links, lead image, the written sections, then the next project.
 */
export default function ProjectPage() {
  const { slug } = useParams()
  const i = projects.findIndex((p) => p.slug === slug)
  const p = projects[i]

  // Hooks must run unconditionally, so this is called before the guard below.
  useDocumentMeta({
    title: p ? `${p.title} — Ahamed Shakir` : undefined,
    description: p?.seoDescription,
    path: p ? `/work/${p.slug}` : undefined,
    image: p?.media ?? undefined,
  })

  if (!p) return <Navigate to="/" replace />
  const next = projects[(i + 1) % projects.length]
  const links = [
    p.live && { href: p.live, label: 'Visit the live site ↗' },
    { href: p.link, label: `${p.linkLabel} ↗` },
  ].filter(Boolean)

  return (
    <main>
      <article>
        <div className="wrap pt-16 md:pt-24">
          <Link to="/#work" className="quiet inline-flex min-h-11 items-center text-small">
            ← Work
          </Link>

          <h1 className="mt-4 text-name font-semibold text-balance">{p.title}</h1>
          <p className="mt-2 text-small text-muted">
            {[p.type, p.year, ...p.stack].filter(Boolean).join(' · ')}
          </p>

          <ul className="mt-4 flex flex-wrap gap-x-6">
            {links.map((l) => (
              <li key={l.href}>
                <a href={l.href} target="_blank" rel="noopener noreferrer" className="link inline-flex min-h-11 items-center">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="mt-6">{p.desc}</div>

          {p.feats?.length > 0 && (
            <dl className="mt-6 space-y-1">
              {p.feats.map((f) => (
                <div key={f.b} className="flex flex-wrap gap-x-2">
                  <dt className="font-medium text-ink">{f.b}</dt>
                  <dd className="text-muted">{f.s}</dd>
                </div>
              ))}
            </dl>
          )}
        </div>

        <div className="mx-auto mt-12 w-full max-w-[48rem] px-5 md:px-6">
          <ImageSlot src={p.media} alt={p.alt} loading="eager" />
        </div>

        <div className="wrap">
          {p.details.map((d) => (
            <section key={d.h} className="mt-12 md:mt-16">
              <h2 className="mb-6 text-heading font-semibold">{d.h}</h2>
              <div className="space-y-4">
                {d.ps.map((t, j) => <p key={j}>{t}</p>)}
              </div>
            </section>
          ))}
        </div>

        {p.shots?.length > 0 && (
          <div className="mx-auto mt-12 w-full max-w-[48rem] space-y-8 px-5 md:px-6">
            {p.shots.map((s) => (
              <figure key={s.src}>
                <ImageSlot
                  src={s.src}
                  alt={`${p.title} — ${s.caption}`}
                  onError={(e) => { e.currentTarget.closest('figure').hidden = true }}
                />
                <figcaption className="mt-2 text-small text-muted">{s.caption}</figcaption>
              </figure>
            ))}
          </div>
        )}
      </article>

      <nav aria-label="Next project" className="wrap mt-16 md:mt-24">
        <Link to={`/work/${next.slug}`} className="link text-item font-medium">
          Next: {next.title} →
        </Link>
      </nav>
    </main>
  )
}
