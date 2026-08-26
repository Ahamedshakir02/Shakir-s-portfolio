import { useEffect } from 'react'
import { gsap, prefersReducedMotion } from './gsap.js'
import { useLoadGate } from '../app/loadGate.js'

/**
 * The hero's entrance. Fires only when the load gate opens — the whole point
 * of the gate is that this reveal is the first thing you see move, rather
 * than something that already happened while the loader was up.
 *
 * Every step is a fromTo with an explicit end state, and the timeline clears
 * its inline styles when it finishes. A `from` tween that gets interrupted
 * leaves the element stranded at opacity 0; this cannot.
 */
export function useHeroIntro(ref) {
  const gateOpen = useLoadGate((s) => s.open)

  useEffect(() => {
    const root = ref.current
    if (!gateOpen || !root) return
    if (prefersReducedMotion()) return

    const targets = [
      '[data-hero-line] > span',
      '[data-hero-roles] > *',
      '[data-hero-desc]',
      '[data-hero-actions] > *',
      '[data-hero-photo]',
    ]

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        defaults: { ease: 'power3.out' },
        onComplete: () => gsap.set(targets, { clearProps: 'all' }),
      })

      tl.fromTo(
        '[data-hero-line] > span',
        { yPercent: 110 },
        { yPercent: 0, duration: 0.9, stagger: 0.08 }
      )
        .fromTo(
          '[data-hero-roles] > *',
          { y: 14, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.5, stagger: 0.06 },
          '-=0.5'
        )
        .fromTo(
          '[data-hero-desc]',
          { y: 16, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.6 },
          '-=0.35'
        )
        .fromTo(
          '[data-hero-actions] > *',
          { y: 14, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.5, stagger: 0.08 },
          '-=0.4'
        )
        .fromTo(
          '[data-hero-photo]',
          { scale: 1.06, opacity: 0 },
          { scale: 1, opacity: 1, duration: 1.1 },
          0.15
        )
    }, root)

    return () => {
      // Never leave the hero mid-reveal.
      gsap.set(targets, { clearProps: 'all' })
      ctx.revert()
    }
  }, [gateOpen, ref])
}
