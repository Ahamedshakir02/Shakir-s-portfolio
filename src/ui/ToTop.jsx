import { prefersReducedMotion } from '../motion/gsap.js'

export default function ToTop({ show }) {
  return (
    <button
      type="button"
      aria-label="Back to top"
      onClick={() => {
        if (window.__lenis) window.__lenis.scrollTo(0)
        else window.scrollTo({ top: 0, behavior: prefersReducedMotion() ? 'auto' : 'smooth' })
      }}
      className={`fixed bottom-6 right-6 z-50 grid size-12 place-items-center rounded-pill border border-line-2 bg-paper text-ink transition-all duration-300 ease-[var(--ease-out-expo)] hover:border-ink ${
        show ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-3 opacity-0'
      }`}
    >
      ↑
    </button>
  )
}
