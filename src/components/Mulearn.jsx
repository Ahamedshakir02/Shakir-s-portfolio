import { mulearnMeta } from '../data.jsx'

export default function Mulearn() {
  return (
    <section className="section" id="mulearn">
      <div className="wrap">
        <div className="sec-label reveal"><b>06</b> Community</div>
        <div className="mulearn-card reveal" data-delay="1">
          <div className="mulearn-rank">
            <img
              src="https://mulearn.org/embed/rank/ahamedshakir@mulearn"
              width="340"
              height="340"
              alt="Ahamed Shakir — live µLearn rank"
              loading="lazy"
            />
          </div>
          <div>
            <h3>I basically live on µLearn</h3>
            <p>
              Leading my campus chapter wasn't enough — I'm an active learner here too. µLearn is
              Kerala's largest student developer community, backed by the Government of Kerala. That
              badge on the left? My live rank, pulled straight from my profile. No screenshots, no
              fibbing.
            </p>
            <div className="mulearn-meta">
              {mulearnMeta.map((m) => (
                <div className="m" key={m.b}><b>{m.b}</b><small>{m.s}</small></div>
              ))}
            </div>
            <div className="hero-actions" style={{ marginTop: 26 }}>
              <a className="btn btn-ghost" href="https://app.mulearn.org/profile/ahamedshakir@mulearn" target="_blank" rel="noopener">
                View µLearn profile <span className="arrow">↗</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
