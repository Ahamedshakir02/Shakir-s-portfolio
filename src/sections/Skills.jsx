import { skills } from '../content/index.js'
import Section from '../ui/Section.jsx'

export default function Skills() {
  return (
    <Section id="skills" no="04" label="Toolkit" title="What I Work With">
      <dl className="grid gap-x-10 gap-y-10 border-t border-ink pt-10 sm:grid-cols-2 lg:grid-cols-4">
        {skills.map((g) => (
          <div key={g.name}>
            <dt className="meta text-muted">{g.name}</dt>
            <dd className="mt-3 text-ink-2">{g.chips.join(', ')}</dd>
          </div>
        ))}
      </dl>
    </Section>
  )
}
