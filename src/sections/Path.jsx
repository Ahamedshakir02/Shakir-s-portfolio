import { timeline } from '../content/index.js'
import Section from '../ui/Section.jsx'

/** Experience, with education as the last row. One sentence per role. */
export default function Path() {
  return (
    <Section id="path" title="Experience">
      <ol className="space-y-6 md:space-y-8">
        {timeline.map((item) => (
          <li key={item.title} className="md:grid md:grid-cols-[8rem_1fr] md:gap-6">
            <p className="text-small text-muted tabular-nums md:pt-0.5">{item.when}</p>
            <div>
              <h3 className="text-item font-medium">{item.title}</h3>
              <p className="text-small text-muted">{item.where[0]}</p>
              <p className="mt-2">{item.role}</p>
            </div>
          </li>
        ))}
      </ol>
    </Section>
  )
}
