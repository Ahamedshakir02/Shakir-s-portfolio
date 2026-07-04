import { Link, useNavigate } from 'react-router-dom'
import { projects } from '../data.jsx'
import { ArrowOutIcon } from './icons.jsx'

export default function Projects() {
  const navigate = useNavigate()
  return (
    <section className="section" id="work">
      <div className="wrap">
        <div className="sec-label reveal"><b>03</b> Selected work</div>
        <h2 className="sec-title reveal">{['One project.','Two projects.','Three projects.','Four projects.','Five projects.','Six projects.','Seven projects.'][projects.length - 1] || `${projects.length} projects.`}<br />Zero filler.</h2>
        <div className="projects" style={{ marginTop: 46 }}>
          {projects.map((p) => (
            <article
              className="project reveal"
              key={p.idx}
              onClick={() => navigate(`/work/${p.slug}`)}
            >
              <div className="pidx">{p.idx}</div>
              <div className="pbody">
                <h3><Link to={`/work/${p.slug}`}>{p.title}</Link></h3>
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
                <Link className="case-link" to={`/work/${p.slug}`}>
                  Read the case study <span className="arrow">→</span>
                </Link>
                {p.media ? (
                  <img className="project-media" src={p.media} alt={p.alt} loading="lazy" />
                ) : (
                  <div className="project-media project-media-ph" role="img" aria-label={p.alt}>
                    <span>{p.alt}</span>
                  </div>
                )}
              </div>
              <a className="plink" href={p.live || p.link} target="_blank" rel="noopener noreferrer" aria-label={p.live ? 'Visit live site' : p.linkLabel} onClick={(e) => e.stopPropagation()}>
                <ArrowOutIcon />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
