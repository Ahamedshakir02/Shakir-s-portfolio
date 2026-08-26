import { languages } from '../content/index.js'
import Section from '../ui/Section.jsx'
import SectionHeader from '../ui/SectionHeader.jsx'

export default function Languages() {
  return (
    <Section id="languages">
      <SectionHeader
        idx="06"
        label="Languages"
        title={<>I&apos;ll meet you<br />in your language.</>}
      />

      <ul className="mt-12 grid gap-8 sm:grid-cols-3">
        {languages.map((l) => (
          <li key={l.name} className="reveal">
            <h3 className="font-display text-heading font-medium">{l.name}</h3>
            <p className="mt-1 text-caption text-muted">{l.level}</p>
            {/* The meter is decorative — the level is already stated above. */}
            <div aria-hidden="true" className="mt-4 h-px w-full bg-line">
              <i
                className="block h-px origin-left bg-accent transition-transform duration-1000 ease-[var(--ease-out-expo)] scale-x-0 [.in_&]:scale-x-(--lvl)"
                style={{ '--lvl': l.lvl }}
              />
            </div>
          </li>
        ))}
      </ul>
    </Section>
  )
}
