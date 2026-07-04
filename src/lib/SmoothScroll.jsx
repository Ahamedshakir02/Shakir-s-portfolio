import { useEffect } from 'react'
import Lenis from 'lenis'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { setScroll } from './scroll.js'

gsap.registerPlugin(ScrollTrigger)

/**
 * The single source of truth for scrolling.
 *
 * THE THREE LINES PEOPLE GET WRONG:
 *   1. lenis.on('scroll', ScrollTrigger.update) -> ScrollTrigger reads Lenis, not native scroll
 *   2. gsap.ticker.add((t) => lenis.raf(t * 1000)) -> Lenis driven by GSAP's clock, ONE loop
 *   3. gsap.ticker.lagSmoothing(0) -> stop GSAP "catching up" after a frame drop (the desync)
 *
 * Never run a separate requestAnimationFrame loop alongside this. One ticker.
 */
export default function SmoothScroll({ children }) {
  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    // On reduced motion, skip Lenis entirely — native scroll, no smoothing.
    if (reduce) {
      ScrollTrigger.refresh()
      return
    }

    const lenis = new Lenis({
      duration: 1.1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // expo-out
      smoothWheel: true,
      syncTouch: false, // native momentum on touch feels better than forced smoothing
    })

    lenis.on('scroll', (e) => {
      ScrollTrigger.update()
      const limit = lenis.limit || 1
      setScroll({
        progress: e.scroll / limit,
        scrollY: e.scroll,
        velocity: e.velocity,
      })
    })

    const raf = (time) => lenis.raf(time * 1000)
    gsap.ticker.add(raf)
    gsap.ticker.lagSmoothing(0)

    // Let layout settle (fonts, images) before ScrollTrigger measures.
    const refresh = () => ScrollTrigger.refresh()
    window.addEventListener('load', refresh)
    const t = setTimeout(refresh, 600)

    // Expose for anchor-link smooth scrolling elsewhere.
    window.__lenis = lenis

    return () => {
      clearTimeout(t)
      window.removeEventListener('load', refresh)
      gsap.ticker.remove(raf)
      lenis.destroy()
      delete window.__lenis
    }
  }, [])

  return children
}
