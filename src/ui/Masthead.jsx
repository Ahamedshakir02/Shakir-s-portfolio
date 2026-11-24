import { Link } from 'react-router-dom'

const links = [
  { href: '/#work', label: 'Work' },
  { href: '/#about', label: 'About' },
  { href: '/#path', label: 'Path' },
  { href: '/#contact', label: 'Contact' },
]

/**
 * The top corners of the editorial grid: who and what on the left, the index
 * on the right. Static and unboxed, so it reads as print, not as an app bar.
 */
export default function Masthead() {
  return (
    <header className="absolute inset-x-0 top-0 z-20">
      <div className="frame flex items-start justify-between gap-6 pt-6 md:pt-10">
        <Link to="/" className="meta block min-h-11 text-ink">
          Ahamed Shakir M P
          <br />
          Designer + Developer<span className="hidden sm:inline"> + Builder</span>
        </Link>

        <nav aria-label="Primary">
          <ul className="meta flex gap-4 text-ink sm:gap-6">
            {links.map((l) => (
              <li key={l.href} className={l.label === 'Path' ? 'hidden sm:block' : undefined}>
                <a href={l.href} className="inline-flex min-h-11 items-start hover:text-accent">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}
