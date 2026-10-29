import { Link } from 'react-router-dom'
import { projects } from '../content/index.js'
import Section from '../ui/Section.jsx'

/** A plain list: title, a short description, and a meta line. Details live on /work/:slug. */
export default function Work() {
  return (
    <Section id="work" title="Work">
      <ul className="space-y-6 md:space-y-8">
        {projects.map((p) => (
          <li key={p.slug}>
            <h3 className="text-item font-medium">
              <Link to={`/work/${p.slug}`} className="link">{p.title}</Link>
            </h3>
            <div className="mt-1 line-clamp-2 text-ink-2">{p.desc}</div>
            <p className="mt-1 text-small text-muted">
              {[p.year, ...p.stack.slice(0, 3)].filter(Boolean).join(' · ')}
            </p>
          </li>
        ))}
      </ul>
    </Section>
  )
}
