import { useEffect, useRef, useState } from 'react'
import { navLinks } from '../content/index.js'
import { MoonIcon, SunIcon } from './Icons.jsx'

function ThemeToggle({ onToggle }) {
  return (
    <button
      type="button"
      onClick={onToggle}
      aria-label="Toggle dark and light theme"
      title="Toggle theme"
      className="grid size-11 place-items-center rounded-pill border border-line text-ink transition-colors hover:border-ink"
    >
      <MoonIcon className="size-4 [[data-theme=dark]_&]:hidden" />
      <SunIcon className="hidden size-4 [[data-theme=dark]_&]:block" />
    </button>
  )
}

export default function Nav({ scrolled, onToggleTheme }) {
  const [open, setOpen] = useState(false)
  const sheetRef = useRef(null)
  const burgerRef = useRef(null)

  // While the sheet is open: lock scroll, close on Escape, and keep Tab
  // inside the sheet so focus can never wander behind the overlay.
  useEffect(() => {
    if (!open) return

    document.body.style.overflow = 'hidden'
    window.__lenis?.stop()

    const sheet = sheetRef.current
    const focusables = () =>
      sheet ? [...sheet.querySelectorAll('a[href], button:not([disabled])')] : []

    focusables()[0]?.focus()

    const onKey = (e) => {
      if (e.key === 'Escape') {
        setOpen(false)
        burgerRef.current?.focus()
        return
      }
      if (e.key !== 'Tab') return
      const items = focusables()
      if (!items.length) return
      const first = items[0]
      const last = items[items.length - 1]
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault()
        last.focus()
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault()
        first.focus()
      }
    }

    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      window.__lenis?.start()
      window.removeEventListener('keydown', onKey)
    }
  }, [open])

  const close = () => setOpen(false)

  return (
    <nav
      className={`fixed inset-x-0 top-0 z-100 border-b transition-all duration-300 ${
        scrolled
          ? 'border-line bg-paper/85 py-3 backdrop-blur-md backdrop-saturate-150'
          : 'border-transparent py-5'
      }`}
    >
      <div className="flex items-center justify-between px-[clamp(22px,6vw,96px)]">
        <a
          href="/#top"
          onClick={close}
          className="-my-2 inline-flex min-h-11 items-center gap-2.5 py-2 font-mono text-caption"
        >
          <span className="size-[7px] rounded-full bg-accent" />
          Ahamed Shakir
        </a>

        {/* Desktop */}
        <div className="hidden items-center gap-7 lg:flex">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="group relative font-mono text-caption text-ink-2 transition-colors hover:text-ink"
            >
              {l.label}
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-ink transition-all duration-300 ease-[var(--ease-out-expo)] group-hover:w-full" />
            </a>
          ))}
          <a
            href="/#contact"
            className="rounded-pill border border-line-2 px-4 py-2 font-mono text-caption transition-colors hover:border-ink"
          >
            Get in touch
          </a>
          <ThemeToggle onToggle={onToggleTheme} />
        </div>

        {/* Mobile */}
        <div className="flex items-center gap-2 lg:hidden">
          <ThemeToggle onToggle={onToggleTheme} />
          <button
            ref={burgerRef}
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            aria-controls="mobile-menu"
            className="grid size-11 place-items-center rounded-pill border border-line text-ink"
          >
            <span className="relative block h-3 w-4">
              {[0, 1, 2].map((i) => (
                <span
                  key={i}
                  className={`absolute left-0 h-px w-full bg-current transition-all duration-300 ease-[var(--ease-out-expo)] ${
                    ['top-0', 'top-1/2 -translate-y-1/2', 'bottom-0'][i]
                  } ${
                    open
                      ? ['top-1/2 -translate-y-1/2 rotate-45', 'opacity-0', 'bottom-1/2 translate-y-1/2 -rotate-45'][i]
                      : ''
                  }`}
                />
              ))}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile sheet */}
      <div
        id="mobile-menu"
        ref={sheetRef}
        inert={open ? undefined : ''}
        className={`absolute inset-x-0 top-full origin-top border-b border-line bg-paper px-[clamp(22px,6vw,96px)] transition-all duration-300 ease-[var(--ease-out-expo)] lg:hidden ${
          open ? 'visible opacity-100' : 'invisible -translate-y-2 opacity-0'
        }`}
      >
        <div className="flex flex-col py-4">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={close}
              className="flex min-h-12 items-center border-b border-line font-mono text-caption text-ink-2"
            >
              {l.label}
            </a>
          ))}
          <a
            href="/#contact"
            onClick={close}
            className="mt-4 flex min-h-12 items-center justify-center rounded-pill bg-accent font-mono text-caption text-accent-ink"
          >
            Get in touch
          </a>
        </div>
      </div>
    </nav>
  )
}
