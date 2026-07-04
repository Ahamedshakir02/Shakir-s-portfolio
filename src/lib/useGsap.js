import { useLayoutEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

/**
 * Run GSAP animations scoped to a container, with automatic cleanup.
 *
 * gsap.context() collects every tween/ScrollTrigger created inside `setup`
 * and reverts them on unmount. Without this, ScrollTriggers leak on
 * hot-reloads and fire on the wrong elements. Always scope.
 *
 *   const ref = useGsap(() => {
 *     gsap.from('.headline', { yPercent: 100, stagger: 0.05 })
 *   })
 *   return <section ref={ref}>...</section>
 */
export function useGsap(setup, deps = []) {
  const ref = useRef(null)
  useLayoutEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const ctx = gsap.context((self) => setup(self, reduce), ref)
    return () => ctx.revert()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps)
  return ref
}
