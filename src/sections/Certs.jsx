import { certs } from '../content/index.js'
import Section from '../ui/Section.jsx'
import SectionHeader from '../ui/SectionHeader.jsx'

/**
 * NOT CURRENTLY MOUNTED. Parked in Aug 2026 because none of the six entries had
 * a verified credential URL, and a section called "Receipts. I keep them."
 * listing six unlinked lines invites the one question it cannot answer. The
 * component and src/content/certs.js are intact: add the hrefs, render <Certs />
 * in App.jsx again, and renumber the sections below it.
 *
 * A certificate renders as a link only when it has a verified `href`.
 * Entries without one stay plain text rather than becoming a dead anchor.
 */
function Cert({ c }) {
  const inner = (
    <>
      <div className="label flex items-baseline justify-between gap-3 text-muted">
        <span>{c.issuer}</span>
        <span>{c.yr}</span>
      </div>
      <h3 className="mt-3 text-caption font-medium text-balance">{c.title}</h3>
    </>
  )

  const shell = 'block h-full rounded-card border border-line p-6'
  if (!c.href) return <li className={`reveal ${shell}`}>{inner}</li>

  return (
    <li className="reveal">
      <a
        href={c.href}
        target="_blank"
        rel="noopener noreferrer"
        className={`${shell} transition-colors hover:border-line-2 hover:bg-paper-2/50`}
      >
        {inner}
      </a>
    </li>
  )
}

export default function Certs() {
  return (
    <Section id="certs">
      <SectionHeader idx="05" label="Certifications" title={<>Receipts.<br />I keep them.</>} />
      <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {certs.map((c) => <Cert key={c.title} c={c} />)}
      </ul>
    </Section>
  )
}
