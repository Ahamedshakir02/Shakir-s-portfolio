import { certs } from '../content/index.js'
import Section from '../ui/Section.jsx'

/**
 * NOT CURRENTLY MOUNTED. Parked until every certificate has a verified
 * credential URL. To bring it back, add the hrefs in src/content/certs.js and
 * render <Certs /> in App.jsx.
 *
 * A certificate renders as a link only when it has a verified `href`.
 */
export default function Certs() {
  return (
    <Section id="certs" title="Certifications">
      <ul className="space-y-4">
        {certs.map((c) => (
          <li key={c.title}>
            <h3 className="text-item font-medium">
              {c.href ? (
                <a href={c.href} target="_blank" rel="noopener noreferrer" className="link">{c.title}</a>
              ) : c.title}
            </h3>
            <p className="text-small text-muted">{c.issuer} · {c.yr}</p>
          </li>
        ))}
      </ul>
    </Section>
  )
}
