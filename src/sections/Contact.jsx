import { useState } from 'react'

const EMAIL = 'ahamedshakir02@gmail.com'

const elsewhere = [
  { href: 'https://github.com/ahamedshakir02', label: 'GitHub' },
  { href: 'https://www.linkedin.com/in/ahamed-shakir', label: 'LinkedIn' },
  { href: 'https://g.dev/ahamedshakir', label: 'Google Developer' },
]

/** The back cover: one line, the address, and where else to find me. */
export default function Contact() {
  const [copied, setCopied] = useState(false)

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      window.location.href = `mailto:${EMAIL}`
    }
  }

  return (
    <section id="contact" className="scroll-mt-12 border-t border-line py-24 md:py-36">
      <div className="frame">
        <p className="meta text-muted">(06) Contact</p>

        <h2 className="mt-8 max-w-[14ch] font-serif text-hero">
          Got Something Worth Building<span className="dot">?</span>
        </h2>

        <p className="mt-8 max-w-[40ch] text-lede text-ink-2">
          Open to full-time engineering roles and freelance work. Tell me what you&apos;re
          building.
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-4">
          <a
            href={`mailto:${EMAIL}`}
            className="link font-serif text-[clamp(1.5rem,4vw,3rem)] leading-tight break-all"
          >
            {EMAIL}
          </a>
          <button
            type="button"
            onClick={copy}
            className="meta inline-flex min-h-11 items-center rounded-full border border-ink px-5 text-ink transition-colors hover:bg-ink hover:text-paper"
          >
            <span aria-live="polite">{copied ? 'Copied ✓' : 'Copy email'}</span>
          </button>
        </div>

        <ul className="meta mt-10 grid grid-cols-2 gap-x-8 text-ink sm:flex sm:flex-wrap">
          {elsewhere.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-11 items-center hover:text-accent"
              >
                {l.label} ↗
              </a>
            </li>
          ))}
          <li>
            <a
              href="/assets/Ahamed-Shakir-Resume.pdf"
              download
              className="inline-flex min-h-11 items-center hover:text-accent"
            >
              Résumé ↓
            </a>
          </li>
        </ul>
      </div>
    </section>
  )
}
