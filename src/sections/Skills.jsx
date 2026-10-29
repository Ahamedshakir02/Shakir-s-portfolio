import { skills } from '../content/index.js'
import Section from '../ui/Section.jsx'

export default function Skills() {
  return (
    <Section id="skills" title="Skills">
      <dl className="space-y-4">
        {skills.map((g) => (
          <div key={g.name}>
            <dt className="text-small text-muted">{g.name}</dt>
            <dd>{g.items.join(', ')}.</dd>
          </div>
        ))}
      </dl>
    </Section>
  )
}
