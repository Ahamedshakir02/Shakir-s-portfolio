import { Fragment } from 'react'
import { roles } from '../data.jsx'
import ImageSlot from './ImageSlot.jsx'

export default function Hero() {
  return (
    <header className="hero section" id="top">
      <div className="wrap hero-inner">
        <div className="hero-text">
          <h1>
            <span className="ln"><span>Ahamed</span></span>
            <span className="ln"><span>Shakir</span></span>
          </h1>
          <div className="hero-roles">
            {roles.map((r, i) => (
              <Fragment key={r}>
                <b>{r}</b>
                {i < roles.length - 1 && <span className="sep">/</span>}
              </Fragment>
            ))}
          </div>
          <p className="hero-desc">
            I build at the messy, exciting border between AI and the real world — sensors,
            microcontrollers, NLP pipelines, ML models, and prompts that get LLMs to behave. Not
            demos. Stuff that works when it matters. And when the laptop closes, I'm out shooting.
          </p>
          <div className="hero-actions">
            <a className="btn btn-primary" href="#work">See the work <span className="arrow">→</span></a>
            <a className="btn btn-ghost" href="/assets/Ahamed-Shakir-Resume.pdf" download>
              Grab my résumé <span className="arrow">↓</span>
            </a>
            <a className="btn btn-ghost" href="/assets/Ahamed-Shakir-CV.pdf" download>
              Full CV <span className="arrow">↓</span>
            </a>
          </div>
        </div>

        <div className="hero-photo">
          <ImageSlot src="/assets/Ahamed-Shakir-Photo.png" alt="Ahamed Shakir — portrait" />
          <span className="frame-tag">portrait.png</span>
        </div>
      </div>

      <div className="hero-scroll"><span className="bar" /> Scroll</div>
    </header>
  )
}
