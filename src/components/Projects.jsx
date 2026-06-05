import { projects } from '../data.jsx'
import { ArrowOutIcon } from './icons.jsx'

export default function Projects() {
  return (
    <section className="section" id="work">
      <div className="wrap">
        <div className="sec-label reveal"><b>03</b> Selected work</div>
        <h2 className="sec-title reveal">Four projects.<br />Zero filler.</h2>
        <div className="projects" style={{ marginTop: 46 }}>
          {projects.map((p) => (
            <article className="project reveal" key={p.idx}>
              <div className="pidx">{p.idx}</div>
              <div className="pbody">
                <h3>{p.title}</h3>
                <div className="ptype">{p.type}</div>
                <p className="pdesc">{p.desc}</p>
                <div className="pstack">
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
                <img className="project-media" src={p.media} alt={p.alt} loading="lazy" />
              </div>
              <a className="plink" href={p.link} target="_blank" rel="noopener" aria-label={p.linkLabel}>
                <ArrowOutIcon />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
