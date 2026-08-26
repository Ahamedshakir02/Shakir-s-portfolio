import { Fragment, useRef } from 'react'
import { roles } from '../content/index.js'
import { useHeroIntro } from '../motion/useHeroIntro.js'
import Button from '../ui/Button.jsx'

export default function Hero() {
  const ref = useRef(null)
  useHeroIntro(ref)

  return (
    <header
      ref={ref}
      id="top"
      className="relative flex min-h-[88dvh] items-center py-24 md:py-32"
    >
      <div className="wrap hero-inner grid w-full items-center gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
        <div>
          <h1 className="font-display text-display font-semibold">
            {['Ahamed', 'Shakir'].map((line) => (
              <span key={line} data-hero-line className="block overflow-hidden pb-[0.06em]">
                <span className="block">{line}</span>
              </span>
            ))}
          </h1>

          <div
            data-hero-roles
            className="label mt-6 flex flex-wrap items-center gap-x-3 gap-y-2 text-muted"
          >
            {roles.map((r, i) => (
              <Fragment key={r}>
                <b className="font-medium text-ink-2">{r}</b>
                {i < roles.length - 1 && <span aria-hidden="true" className="text-line-2">/</span>}
              </Fragment>
            ))}
          </div>

          <p data-hero-desc className="mt-7 max-w-[52ch] text-ink-2">
            I build at the messy, exciting border between AI and the real world — sensors,
            microcontrollers, NLP pipelines, ML models, and prompts that get LLMs to behave. Not
            demos. Stuff that works when it matters.
          </p>

          <div data-hero-actions className="mt-9 flex flex-wrap gap-3">
            <Button href="/#work" variant="primary">
              See the work <span aria-hidden="true">→</span>
            </Button>
            <Button href="/assets/Ahamed-Shakir-Resume.pdf" download>
              Résumé <span aria-hidden="true">↓</span>
            </Button>
          </div>
        </div>

        <div data-hero-photo className="relative mx-auto w-full max-w-sm lg:max-w-none">
          <img
            src="/assets/Ahamed-Shakir-Photo.png"
            alt="Ahamed Shakir"
            width="1254"
            height="1254"
            fetchpriority="high"
            decoding="async"
            className="w-full rounded-card border border-line object-cover"
          />
        </div>
      </div>

      <div className="label absolute bottom-8 left-1/2 hidden -translate-x-1/2 items-center gap-3 text-muted md:flex">
        <span className="h-px w-10 bg-line-2" /> Scroll
      </div>
    </header>
  )
}
