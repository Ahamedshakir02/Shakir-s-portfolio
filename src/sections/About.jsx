import { about, languages } from '../content/index.js'
import Section from '../ui/Section.jsx'

const list = (xs) => xs.slice(0, -1).join(', ') + ' and ' + xs[xs.length - 1]

export default function About() {
  return (
    <Section id="about" title="About">
      <div className="space-y-4">
        {about.map((p) => <p key={p}>{p}</p>)}
        <p className="text-muted">Speaks {list(languages.map((l) => l.name))}.</p>
      </div>
    </Section>
  )
}
