import { useEffect } from 'react'
import { gsap, ScrollTrigger, prefersReducedMotion } from './gsap.js'
import { useLoadGate } from '../app/loadGate.js'


/**
 * Scroll reveals, Lenis-synced via ScrollTrigger. Adds the `in` class in
 * staggered batches — the animation itself lives in CSS.
 *
 * Pass a dependency (e.g. the current pathname) so reveals re-attach to the
 * fresh elements after a route change. Reduced motion: reveal immediately.
 *
 * Nothing is armed until the load gate opens, so no section quietly reveals
 * itself behind the preloader.
 */
export function useReveal(dep) {
  const gateOpen = useLoadGate((s) => s.open)

  useEffect(() => {
    if (!gateOpen) return
    const els = gsap.utils.toArray('.reveal:not(.in), .lang:not(.in)')
    if (!els.length) return

    if (prefersReducedMotion()) {
      els.forEach((el) => el.classList.add('in'))
      return
    }

    const batch = ScrollTrigger.batch(els, {
      start: 'top 88%',
      once: true,
      onEnter: (targets) =>
        targets.forEach((el, i) =>
          gsap.delayedCall(i * 0.06, () => el.classList.add('in'))
        ),
    })

    // Reveal anything already above the fold on first paint.
    requestAnimationFrame(() => ScrollTrigger.refresh())

    return () => batch.forEach((t) => t.kill())
  }, [dep, gateOpen])
}
