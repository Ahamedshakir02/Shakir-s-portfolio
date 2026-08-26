import { aboutTags } from '../content/index.js'
import Section from '../ui/Section.jsx'
import Chip from '../ui/Chip.jsx'

export default function About() {
  return (
    <Section id="about">
      <div className="label mb-10 flex items-baseline gap-3 text-muted reveal">
        <b className="font-medium text-accent">01</b> The gist
      </div>

      <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:gap-16">
        <p className="reveal font-display text-heading font-medium text-balance">
          CS grad from{' '}
          <span className="text-accent">APJ Abdul Kalam Technological University</span>, building
          across hardware and software — embedded systems, applied NLP, machine learning, and
          mobile. Basically, if it computes, I&apos;ve probably poked at it.
        </p>

        <div className="reveal space-y-5 text-ink-2" data-delay="1">
          <p>
            My favourite spot is the bit most people avoid: where physical hardware meets messy
            software. Microcontrollers and IMU sensors on one end, LLM-powered query interfaces and
            React Native apps on the other. If a project has real stakes, I&apos;m in.
          </p>
          <p>
            The proof is in the work — an accident-detection system that bridges embedded hardware
            with a live mobile app, and an NLP system that reads and answers questions about
            unstructured police documents. Now I&apos;m hunting for international engineering roles
            where I can build things that genuinely matter (and ship them).
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
