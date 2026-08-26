import { skills } from '../content/index.js'
import Section from '../ui/Section.jsx'
import SectionHeader from '../ui/SectionHeader.jsx'
import Chip from '../ui/Chip.jsx'

export default function Skills() {
  return (
    <Section id="skills">
      <SectionHeader
        idx="02"
        label="Capabilities"
        title={<>I speak fluent silicon<br />and software.</>}
      />

      <div className="mt-12 divide-y divide-line border-t border-line">
        {skills.map((row) => (
          <div
            key={row.idx}
            className="reveal grid gap-4 py-7 md:grid-cols-[minmax(0,17rem)_1fr] md:gap-8 lg:grid-cols-[minmax(0,24rem)_1fr]"
          >
            <h3 className="flex items-baseline gap-3 font-display text-heading font-medium">
              <span className="label text-muted">{row.idx}</span>
              {row.name}
            </h3>
            <ul className="flex flex-wrap gap-2">
              {row.chips.map((c) => <Chip key={c}>{c}</Chip>)}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  )
}
