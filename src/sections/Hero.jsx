import { intro } from '../content/index.js'

export default function Hero() {
  return (
    <header id="top" className="wrap pt-16 md:pt-24">
      <h1 className="text-name font-semibold">Ahamed Shakir</h1>
      <p className="mt-2 text-ink-2">{intro.role}</p>
      <p className="mt-4">{intro.text}</p>

      <ul className="mt-4 flex flex-wrap gap-x-6">
        {intro.links.map((l) => (
          <li key={l.label}>
            <a
              href={l.href}
              {...(l.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
              {...(l.download ? { download: true } : {})}
              className="link inline-flex min-h-11 items-center"
            >
              {l.label}
            </a>
          </li>
        ))}
      </ul>
    </header>
  )
}
