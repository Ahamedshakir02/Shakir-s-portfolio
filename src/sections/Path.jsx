import { timeline } from '../content/index.js'
import Section from '../ui/Section.jsx'

export default function Path() {
  return (
    <Section id="path" no="03" label="Experience & education" title="Where I've Been">
      <ol className="border-t border-ink">
        {timeline.map((item) => (
          <li
            key={item.title}
            className="grid gap-4 border-b border-line py-9 md:grid-cols-[12rem_1fr] md:gap-0 lg:grid-cols-[16rem_1fr_22rem] lg:gap-x-10"
          >
            <p className="meta text-muted [font-variant-numeric:tabular-nums]">{item.when}</p>
            <div>
              <h3 className="font-serif text-item">{item.title}</h3>
              <p className="mt-2 text-sm text-ink-2">{item.where.join(' · ')}</p>
            </div>
            <p className="text-ink-2 md:col-start-2 lg:col-start-auto">{item.role}</p>
          </li>
        ))}
      </ol>
    </Section>
  )
}
