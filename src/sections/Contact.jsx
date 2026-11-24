const EMAIL = 'ahamedshakir02@gmail.com'

const elsewhere = [
  { href: 'https://github.com/ahamedshakir02', label: 'GitHub' },
  { href: 'https://www.linkedin.com/in/ahamed-shakir', label: 'LinkedIn' },
  { href: 'https://g.dev/ahamedshakir', label: 'Google Developer' },
]

/** The back cover: one line, the address, and where else to find me. */
export default function Contact() {
  return (
    <section id="contact" className="scroll-mt-6 border-t border-line py-24 md:py-36">
      <div className="frame">
        <p className="meta text-muted">(05) Contact</p>

        <h2 className="mt-8 max-w-[14ch] font-serif text-hero">
          Got Something Worth Building<span className="dot">?</span>
        </h2>

        <a
          href={`mailto:${EMAIL}`}
          className="link mt-10 inline-block font-serif text-[clamp(1.5rem,4vw,3rem)] leading-tight break-all md:mt-14"
        >
          {EMAIL}
        </a>

        <ul className="meta mt-10 flex flex-wrap gap-x-8 text-ink">
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
        </ul>
      </div>
    </section>
  )
}
