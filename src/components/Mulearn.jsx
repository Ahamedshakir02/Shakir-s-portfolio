import { useState } from 'react'
import { mulearnMeta } from '../data.jsx'

export default function Mulearn() {
  const [imgError, setImgError] = useState(false)

  return (
    <section className="section" id="mulearn">
      <div className="wrap">
        <div className="sec-label reveal"><b>06</b> Community</div>
        <div className="mulearn-card reveal" data-delay="1">
          <div className="mulearn-rank">
            {!imgError ? (
              <img
                src="https://mulearn.org/embed/rank/ahamedshakir%40mulearn"
                width="340"
                height="340"
                alt="Ahamed Shakir — live µLearn rank"
                loading="lazy"
                onError={() => setImgError(true)}
              />
            ) : (
              <div style={{
                width: '100%',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                border: '2px solid var(--accent)',
                borderRadius: 'var(--radius)',
                background: 'var(--paper)',
                padding: '20px',
                textAlign: 'center',
                color: 'var(--ink-2)',
                fontSize: '14px',
                gap: '10px'
              }}>
                <span style={{ fontSize: '24px' }}>🎓</span>
                <div>
                  <div style={{ fontWeight: 600, marginBottom: '4px' }}>Live rank unavailable</div>
                  <div style={{ fontSize: '13px' }}>View my profile on µLearn</div>
                </div>
              </div>
            )}
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
              <a className="btn btn-ghost" href="https://app.mulearn.org/profile/ahamedshakir@mulearn" target="_blank" rel="noopener noreferrer">
                View µLearn profile <span className="arrow">↗</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
