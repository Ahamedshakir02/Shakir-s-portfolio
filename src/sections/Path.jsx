import { Fragment } from 'react'
import { timeline } from '../content/index.js'
import Section from '../ui/Section.jsx'
import SectionHeader from '../ui/SectionHeader.jsx'
import Chip from '../ui/Chip.jsx'

export default function Path() {
  return (
    <Section id="path">
      <SectionHeader
        idx="04"
        label="Experience & education"
        title={<>Leading, learning,<br />and shipping.</>}
      />

      <div className="mt-12 divide-y divide-line border-t border-line">
        {timeline.map((item) => (
          <div
            key={item.title}
            className="reveal grid gap-6 py-10 md:grid-cols-[minmax(0,15rem)_1fr] md:gap-10"
          >
            <div>
              <div className="label text-accent">{item.when}</div>
              <div className="mt-3 text-caption text-muted">
                {item.where.map((w, i) => (
                  <Fragment key={w}>
                    {w}
                    {i < item.where.length - 1 && <br />}
                  </Fragment>
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-display text-heading font-semibold">{item.title}</h3>
              <p className="mt-3 text-ink-2">{item.role}</p>
              <ul className="mt-5 space-y-3">
                {item.list.map((li, i) => (
                  <li key={i} className="relative pl-5 text-caption text-ink-2">
                    <span
                      aria-hidden="true"
                      className="absolute left-0 top-[0.6em] size-1.5 rounded-full bg-accent"
                    />
                    {li}
                  </li>
                ))}
              </ul>

              {item.sub && <p className="label mt-8 text-muted">{item.sub}</p>}
              {item.courses && (
                <ul className="mt-4 flex flex-wrap gap-2">
                  {item.courses.map((c) => <Chip key={c}>{c}</Chip>)}
                </ul>
              )}
            </div>
          </div>
        ))}
      </div>
    </Section>
  )
}
