import { useState, useEffect } from 'react'
import { navLinks } from '../data.jsx'
import { MoonIcon, SunIcon } from './icons.jsx'

export default function Nav({ scrolled, onToggleTheme }) {
  const [open, setOpen] = useState(false)

  // Lock body scroll while the mobile menu is open, and close on Escape.
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    const onKey = (e) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [open])

  return (
    <nav className={`nav${scrolled ? ' scrolled' : ''}`}>
      <a className="nav-brand" href="#top" onClick={() => setOpen(false)}>
        <span className="dot" /> Ahamed Shakir
      </a>

      <div className="nav-links">
        {navLinks.map((l) => (
          <a key={l.href} href={l.href}>{l.label}</a>
        ))}
        <a href="#contact" className="nav-cta">Get in touch</a>
        <button
          className="theme-toggle"
          onClick={onToggleTheme}
          aria-label="Toggle dark / light theme"
          title="Toggle theme"
        >
          <MoonIcon />
          <SunIcon />
        </button>
      </div>

      {/* Mobile controls */}
      <div className="nav-mobile">
        <button
          className="theme-toggle"
          onClick={onToggleTheme}
          aria-label="Toggle dark / light theme"
          title="Toggle theme"
        >
          <MoonIcon />
          <SunIcon />
        </button>
        <button
          className={`nav-burger${open ? ' open' : ''}`}
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          aria-controls="mobile-menu"
        >
          <span /><span /><span />
        </button>
      </div>

      {/* Mobile menu overlay */}
      <div
        id="mobile-menu"
        className={`nav-sheet${open ? ' open' : ''}`}
        hidden={!open}
      >
        {navLinks.map((l) => (
          <a key={l.href} href={l.href} onClick={() => setOpen(false)}>{l.label}</a>
        ))}
        <a href="#contact" className="nav-cta" onClick={() => setOpen(false)}>Get in touch</a>
      </div>
    </nav>
  )
}
