import { useEffect } from 'react'
import { Link, Navigate, useParams } from 'react-router-dom'
import { projects } from '../data.jsx'
import { ArrowOutIcon } from '../components/icons.jsx'

/**
 * /work/:slug — the case-study page for a single project.
 * Hero (eyebrow, title, lead, stack, key numbers) → media → detail sections
 * → next-project handoff, all on the existing design system.
 */
export default function ProjectPage() {
  const { slug } = useParams()
  const i = projects.findIndex((p) => p.slug === slug)
  const p = projects[i]

  useEffect(() => {
    if (!p) return
    const prev = document.title
    document.title = `${p.title} — Ahamed Shakir`
    return () => {
      document.title = prev
    }
  }, [p])

  if (!p) return <Navigate to="/" replace />
  const next = projects[(i + 1) % projects.length]

  return (
    <main className="pp">
      <section className="section pp-hero">
        <div className="wrap">
          <Link className="pp-back" to="/#work">← All work</Link>
          <div className="sec-label" style={{ marginTop: 22, marginBottom: 20 }}>
            <b>{p.idx}</b> {p.type}
          </div>
          <h1 className="pp-title">{p.title}</h1>
          <p className="pp-lead">{p.desc}</p>
          <div className="pstack pp-stack">
            {p.stack.map((s) => <span key={s}>{s}</span>)}
          </div>
          <div className="pfeats">
            {p.feats.map((f) => (
              <div className="pfeat" key={f.b}>
                <b>{f.b}</b>
                <small>{f.s}</small>
              </div>
            ))}
          </div>
          {p.media ? (
            <img className="project-media" src={p.media} alt={p.alt} />
          ) : (
            <div className="project-media project-media-ph" role="img" aria-label={p.alt}>
              <span>{p.alt}</span>
            </div>
          )}
        </div>
      </section>

      <section className="pp-body">
        <div className="wrap">
          {p.details.map((d) => (
            <div className="pp-block reveal" key={d.h}>
              <h2>{d.h}</h2>
              <div>
                {d.ps.map((t, j) => <p key={j}>{t}</p>)}
              </div>
            </div>
          ))}
          {p.shots?.length > 0 && (
            <div className="pp-shots reveal">
              {p.shots.map((s) => (
                <figure key={s.src}>
                  <img
                    src={s.src}
                    alt={`${p.title} — ${s.caption}`}
                    loading="lazy"
                    onError={(e) => { e.currentTarget.closest('figure').style.display = 'none' }}
                  />
                  <figcaption>{s.caption}</figcaption>
                </figure>
              ))}
            </div>
          )}
          <div className="hero-actions" style={{ marginTop: 46 }}>
            {p.live && (
              <a className="btn btn-primary" href={p.live} target="_blank" rel="noopener noreferrer">
                Visit the live site <span className="arrow">↗</span>
              </a>
            )}
            <a className={`btn ${p.live ? 'btn-ghost' : 'btn-primary'}`} href={p.link} target="_blank" rel="noopener noreferrer">
              {p.linkLabel} <span className="arrow">↗</span>
            </a>
            <Link className="btn btn-ghost" to="/#contact">
              Discuss a project like this <span className="arrow">→</span>
            </Link>
          </div>
        </div>
      </section>

      <section className="section pp-next">
        <div className="wrap">
          <div className="sec-label"><b>Next</b> Keep exploring</div>
          <Link to={`/work/${next.slug}`} className="pp-next-link">
            {next.title} <ArrowOutIcon />
          </Link>
        </div>
      </section>
    </main>
  )
}
