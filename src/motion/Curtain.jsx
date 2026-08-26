import { useEffect, useRef } from 'react'
import { gsap, prefersReducedMotion } from './gsap.js'

/**
 * A cocoa curtain that wipes across on every route change, so the scroll
 * reset underneath never shows as a flash of half-scrolled page.
 */
export default function Curtain({ pathname }) {
  const ref = useRef(null)
  const prevPath = useRef(pathname)

  useEffect(() => {
    // Only wipe on an actual route change. Comparing the pathname rather than
    // holding a "have I run yet" flag matters: StrictMode invokes effects
    // twice on mount, which would flip such a flag on the first pass and then
    // play the curtain on the second — a full-screen wipe the instant the
    // preloader clears, which reads as the page reloading itself.
    if (prevPath.current === pathname) return
    prevPath.current = pathname

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
