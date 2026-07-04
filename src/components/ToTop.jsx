export default function ToTop({ show }) {
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  return (
    <button
      className={`to-top${show ? ' show' : ''}`}
      aria-label="Back to top"
      onClick={() => {
        if (window.__lenis) window.__lenis.scrollTo(0)
        else window.scrollTo({ top: 0, behavior: reduce ? 'auto' : 'smooth' })
      }}
    >
      ↑
    </button>
  )
}
