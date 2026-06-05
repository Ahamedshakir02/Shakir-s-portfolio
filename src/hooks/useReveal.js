import { useEffect } from 'react'

/**
 * Adds the `in` class to every `.reveal` / `.lang` element once it scrolls into
 * view — mirrors the IntersectionObserver in the original app-minimal.js.
 */
export function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll('.reveal:not(.in), .lang:not(.in)')
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((en) => {
          if (en.isIntersecting) {
            en.target.classList.add('in')
            io.unobserve(en.target)
          }
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -6% 0px' }
    )
    els.forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [])
}
