import { navLinks } from '../data.jsx'
import { MoonIcon, SunIcon } from './icons.jsx'

export default function Nav({ scrolled, onToggleTheme }) {
  return (
    <nav className={`nav${scrolled ? ' scrolled' : ''}`}>
      <a className="nav-brand" href="#top"><span className="dot" /> Ahamed Shakir</a>
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
    </nav>
  )
}
