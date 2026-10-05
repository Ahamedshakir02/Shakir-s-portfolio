import { aboutTags } from '../content/index.js'
import Section from '../ui/Section.jsx'
import SectionHeader from '../ui/SectionHeader.jsx'
import Chip from '../ui/Chip.jsx'

export default function About() {
  return (
    <Section id="about">
      <SectionHeader idx="01" label="The gist" className="mb-10" />

      <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:gap-16">
        <h2 className="reveal font-display text-heading font-medium text-balance">
          CS grad from{' '}
          <span className="text-accent">MES College of Engineering, Kuttippuram</span>. I work
          across the whole thing — the design, the code, and the part where a real person has to
          use it.
        </h2>

        <div className="reveal space-y-5 text-ink-2">
          <p>
            Most of what I make starts with a problem someone actually has. A typing centre in
            Ajman that customers couldn&apos;t find online. A construction firm in Kerala that
            needed a site as good as its builds. Police stations buried in FIR paperwork. A rider
            who can&apos;t call for help after a crash.
          </p>
          <p>
            So the work ranges wide: client websites in React, a coconut-harvest marketplace
            I&apos;m building solo as four Flutter apps, an ESP32 accident-detection device with
            its companion app, and FIR-AI — a four-person final-year project for Kerala Police,
            where I built the classification model and designed the architecture.
          </p>
          <p>
            Along the way I started the µLearn chapter at my college and grew it campus-wide, and
            learned AWS, Docker and Terraform by deploying things until they stopped breaking.
            I&apos;ve been freelancing since graduating, and I&apos;m open to engineering roles —
            remote first, happy to relocate.
          </p>

          <ul className="flex flex-wrap gap-2 pt-2">
            {aboutTags.map((t) => <Chip key={t}>{t}</Chip>)}
          </ul>

          <p className="text-caption text-muted">
            Find my certifications, skills, and GitHub projects on my{' '}
            <a
              href="https://g.dev/ahamedshakir"
              target="_blank"
              rel="noopener noreferrer"
              className="underline decoration-line-2 underline-offset-4 hover:text-ink"
            >
              Google Developer profile
            </a>
            .
          </p>
        </div>
      </div>
    </Section>
  )
}
