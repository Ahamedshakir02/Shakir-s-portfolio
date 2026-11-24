import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const links = [
  { href: '/#work', label: 'Work' },
  { href: '/#about', label: 'About' },
  { href: '/#path', label: 'Path' },
  { href: '/#contact', label: 'Contact' },
]

function NavLinks({ className = '' }) {
  return (
    <ul className={`meta flex gap-4 text-ink sm:gap-6 ${className}`}>
      {links.map((l) => (
        <li key={l.href} className={l.label === 'Path' ? 'hidden sm:block' : undefined}>
          <a href={l.href} className="inline-flex min-h-11 items-center hover:text-accent">
            {l.label}
          </a>
        </li>
      ))}
    </ul>
  )
}

/**
 * The top corners of the editorial grid: who and what on the left, the index
 * on the right. Static over the cover so it reads as print; once the cover
 * scrolls away a slim bar slides in, so the index is never more than a
 * glance away on a long page.
 */
export default function Masthead() {
  const [pinned, setPinned] = useState(false)

  useEffect(() => {
    const onScroll = () => setPinned(window.scrollY > window.innerHeight * 0.6)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <a
        href="#main"
        className="meta fixed top-2 left-2 z-50 -translate-y-20 bg-ink px-4 py-3 text-paper focus:translate-y-0"
      >
        Skip to content
      </a>

      <header className="absolute inset-x-0 top-0 z-20">
        <div className="frame flex items-start justify-between gap-6 pt-4 md:pt-8">
          <Link to="/" className="meta flex min-h-11 items-center text-ink">
            <span>
              Ahamed Shakir M P
              <br />
              Designer + Developer<span className="hidden sm:inline"> + Builder</span>
            </span>
          </Link>
          <nav aria-label="Primary">
            <NavLinks />
          </nav>
        </div>
      </header>

      <div
        aria-hidden={!pinned}
        inert={pinned ? undefined : ''}
        className={`fixed inset-x-0 top-0 z-30 border-b border-line bg-paper transition-transform duration-300 ease-[var(--ease-out)] ${
          pinned ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        <div className="frame flex items-center justify-between gap-6">
          <Link to="/" className="flex min-h-12 items-center font-serif text-xl leading-none">
            Ahamed Shakir<span className="dot">.</span>
          </Link>
          <nav aria-label="Sections">
            <NavLinks />
          </nav>
        </div>
      </div>
    </>
  )
}
