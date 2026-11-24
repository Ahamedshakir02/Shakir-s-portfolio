import { timeline } from '../content/index.js'
import Section from '../ui/Section.jsx'

export default function Path() {
  return (
    <Section id="path" no="03" label="Experience & education" title="Where I've Been">
      <ol className="border-t border-ink">
        {timeline.map((item) => (
          <li
            key={item.title}
            className="grid gap-4 border-b border-line py-9 lg:grid-cols-[16rem_1fr] lg:gap-x-6 xl:grid-cols-[16rem_1fr_22rem]"
          >
            <p className="meta text-muted [font-variant-numeric:tabular-nums]">{item.when}</p>
            <div>
              <h3 className="font-serif text-item">{item.title}</h3>
              <p className="mt-2 text-sm text-ink-2">{item.where.join(' · ')}</p>
            </div>
            <div className="lg:col-start-2 xl:col-start-auto">
              <p className="text-ink-2">{item.role}</p>
              <details className="group mt-4">
                <summary className="meta inline-flex min-h-11 cursor-pointer list-none items-center gap-2 text-ink hover:text-accent [&::-webkit-details-marker]:hidden">
                  <span className="transition-transform group-open:rotate-45" aria-hidden="true">+</span>
                  Highlights
                </summary>
                <ul className="mt-2 space-y-3 text-sm text-ink-2">
                  {item.list.map((li, i) => (
                    <li key={i} className="border-l border-line pl-4">{li}</li>
                  ))}
                </ul>
              </details>
            </div>
          </li>
        ))}
      </ol>
    </Section>
  )
}
