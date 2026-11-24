import { Link, Navigate, useParams } from 'react-router-dom'
import { useDocumentMeta } from '../hooks/useDocumentMeta.js'
import { projects } from '../content/index.js'

/** /work/:slug — one case study, set like a magazine feature. */
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
  const [name, sub] = p.title.split(' — ')

  return (
    <main id="main">
      <article>
        <header className="frame pt-32 md:pt-40">
          <Link to="/#work" className="meta inline-flex min-h-11 items-center text-muted hover:text-ink">
            ← All work
          </Link>

          <div className="mt-6 grid gap-6 md:grid-cols-[12rem_1fr] lg:grid-cols-[16rem_1fr]">
            <p className="meta text-muted">
              ({p.idx}) {p.type}
              {p.year && <><br />{p.year}</>}
            </p>
            <div>
              <h1 className="max-w-[16ch] font-serif text-title text-balance">
                {name}
                <span className="dot">.</span>
              </h1>
              {sub && <p className="mt-4 text-lede text-ink-2">{sub}</p>}
            </div>
          </div>

          <div className="mt-12 grid gap-10 border-t border-ink pt-10 md:grid-cols-[12rem_1fr] lg:grid-cols-[16rem_1fr_20rem]">
            <dl className="meta grid content-start gap-5 text-muted">
              {p.feats.map((f) => (
                <div key={f.b}>
                  <dt className="font-serif text-3xl normal-case tracking-normal text-ink">{f.b}</dt>
                  <dd className="mt-1">{f.s}</dd>
                </div>
              ))}
            </dl>
            <div className="max-w-[62ch] text-lede text-ink-2">{p.desc}</div>
            <div className="md:col-start-2 lg:col-start-auto">
              <p className="meta text-muted">Built with</p>
              <p className="mt-2 text-ink-2">{p.stack.join(', ')}</p>
              <p className="mt-6 flex flex-wrap gap-x-6 text-sm font-medium">
                {p.live && (
                  <a href={p.live} target="_blank" rel="noopener noreferrer" className="link inline-flex min-h-11 items-center">
                    Visit the live site ↗
                  </a>
                )}
                <a href={p.link} target="_blank" rel="noopener noreferrer" className="link inline-flex min-h-11 items-center">
                  {p.linkLabel} ↗
                </a>
              </p>
            </div>
          </div>
        </header>

        {p.media && (
          <figure className="frame mt-16 md:mt-20">
            <img
              src={p.media}
              alt={p.alt}
              decoding="async"
              className="aspect-[16/9] w-full border border-line object-cover"
            />
          </figure>
        )}

        <div className="frame mt-8">
          {p.details.map((d) => (
            <section
              key={d.h}
              className="grid gap-5 border-t border-line py-12 md:grid-cols-[12rem_1fr] lg:grid-cols-[16rem_1fr]"
            >
              <h2 className="font-serif text-3xl leading-tight">{d.h}</h2>
              <div className="max-w-[66ch] space-y-5 text-ink-2">
                {d.ps.map((t, j) => <p key={j}>{t}</p>)}
              </div>
            </section>
          ))}

          {p.shots?.length > 0 && (
            <div className="grid gap-8 border-t border-line py-12 sm:grid-cols-2">
              {p.shots.map((s) => (
                <figure key={s.src}>
                  <img
                    src={s.src}
                    alt={`${p.title}: ${s.caption}`}
                    loading="lazy"
                    decoding="async"
                    onError={(e) => { e.currentTarget.closest('figure').hidden = true }}
                    className="w-full border border-line"
                  />
                  <figcaption className="meta mt-3 text-muted">{s.caption}</figcaption>
                </figure>
              ))}
            </div>
          )}
        </div>
      </article>

      <nav aria-label="Next project" className="border-t border-line py-16 md:py-24">
        <div className="frame grid gap-4 md:grid-cols-[12rem_1fr] lg:grid-cols-[16rem_1fr]">
          <p className="meta text-muted">Next</p>
          <Link to={`/work/${next.slug}`} className="group font-serif text-title text-balance">
            {next.title.split(' — ')[0]}
            <span className="dot"> →</span>
          </Link>
        </div>
      </nav>
    </main>
  )
}
