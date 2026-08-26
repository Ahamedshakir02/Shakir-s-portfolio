import { useEffect, useRef } from 'react'
import { gsap, prefersReducedMotion } from './gsap.js'

/**
 * A cocoa curtain that wipes across on every route change, so the scroll
 * reset underneath never shows as a flash of half-scrolled page.
 */
export default function Curtain({ pathname }) {
  const ref = useRef(null)
  const first = useRef(true)

  useEffect(() => {
    // Don't wipe on the very first render — the preloader already covers it.
    if (first.current) {
      first.current = false
      return
    }
    if (prefersReducedMotion() || !ref.current) return

    const tl = gsap.timeline()
    tl.set(ref.current, { yPercent: 100, display: 'block' })
      .to(ref.current, { yPercent: 0, duration: 0.45, ease: 'expo.inOut' })
      .to(ref.current, { yPercent: -100, duration: 0.55, ease: 'expo.inOut' }, '+=0.05')
      .set(ref.current, { display: 'none' })

    return () => tl.kill()
  }, [pathname])

  return (
    <div
      ref={ref}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-200 hidden bg-accent"
    />
  )
}
