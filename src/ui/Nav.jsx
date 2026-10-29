import { Link } from 'react-router-dom'
import { MoonIcon, SunIcon } from './Icons.jsx'

const links = [
  { to: '/#work', label: 'Work' },
  { to: '/#about', label: 'About' },
  { to: '/#contact', label: 'Contact' },
]

/** Static top bar: the name links home, three links and the theme toggle on the right. */
export default function Nav({ theme, onToggleTheme }) {
  const dark = theme === 'dark'
  return (
    <header className="wrap flex items-center justify-between gap-4 pt-4">
      <Link to="/" className="inline-flex min-h-11 items-center font-medium whitespace-nowrap text-ink">
        Ahamed Shakir
      </Link>

      <nav aria-label="Main" className="-mr-3 flex items-center text-small">
        {links.map((l) => (
          <Link key={l.to} to={l.to} className="quiet inline-flex min-h-11 items-center px-2 sm:px-3">
            {l.label}
          </Link>
        ))}
        <button
          type="button"
          onClick={onToggleTheme}
          aria-label={dark ? 'Switch to light theme' : 'Switch to dark theme'}
          className="quiet grid size-11 place-items-center"
        >
          {dark ? <SunIcon className="size-4" /> : <MoonIcon className="size-4" />}
        </button>
      </nav>
    </header>
  )
}
