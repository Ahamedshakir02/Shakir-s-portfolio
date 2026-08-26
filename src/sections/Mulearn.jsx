import { useState } from 'react'
import { mulearnMeta } from '../content/index.js'
import Section from '../ui/Section.jsx'
import SectionHeader from '../ui/SectionHeader.jsx'
import MetaBadge from '../ui/MetaBadge.jsx'
import Button from '../ui/Button.jsx'

const PROFILE = 'https://app.mulearn.org/profile/ahamedshakir@mulearn'

export default function Mulearn() {
  // The rank badge is fetched live from mulearn.org — if it is down, fall
  // back to a static card rather than a broken image.
  const [imgFailed, setImgFailed] = useState(false)

  return (
    <Section id="mulearn">
      <SectionHeader idx="06" label="Community" className="mb-10" />

      <div className="reveal grid items-center gap-10 rounded-card border border-line bg-paper-2/40 p-6 md:p-10 lg:grid-cols-[minmax(0,20rem)_1fr] lg:gap-14">
        {/* Fixed-ratio box: the badge is fetched from mulearn.org, so reserving
            the space here means neither a slow load nor a change to their image
            dimensions can shift the layout. The fallback fills the same box. */}
        <div className="mx-auto aspect-6/5 w-full max-w-[20rem]">
          {imgFailed ? (
            <div className="grid h-full w-full place-items-center gap-2 rounded-card border border-accent p-6 text-center">
              <div>
                <div className="font-medium">Live rank unavailable</div>
                <div className="mt-1 text-caption text-muted">View my profile on µLearn</div>
              </div>
            </div>
          ) : (
            <img
              src="https://mulearn.org/embed/rank/ahamedshakir%40mulearn"
              width="998"
              height="826"
              alt="Ahamed Shakir — live µLearn rank"
              loading="lazy"
              decoding="async"
              onError={() => setImgFailed(true)}
              className="h-full w-full rounded-card object-contain"
            />
          )}
        </div>

        <div>
          <h2 className="font-display text-title font-semibold text-balance">
            I basically live on µLearn
          </h2>
          <p className="mt-5 max-w-[54ch] text-ink-2">
            Leading my campus chapter wasn&apos;t enough — I&apos;m an active learner here too.
            µLearn is Kerala&apos;s largest student developer community, backed by the Government of
            Kerala. That badge on the left? My live rank, pulled straight from my profile. No
            screenshots, no fibbing.
          </p>

          <div className="mt-8 grid grid-cols-1 gap-5 border-t border-line pt-6 sm:grid-cols-3">
            {mulearnMeta.map((m) => <MetaBadge key={m.b} {...m} />)}
          </div>

          <Button href={PROFILE} target="_blank" rel="noopener noreferrer" className="mt-8">
            View µLearn profile <span aria-hidden="true">↗</span>
          </Button>
        </div>
      </div>
    </Section>
  )
}
