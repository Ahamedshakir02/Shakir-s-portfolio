import { useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

/**
 * Global scroll choreography, re-initialized per route:
 *  - anchor links ("#x" and "/#x" while on the home page) scroll via Lenis
 *  - the hero drifts up and fades as you leave it (home only)
 *  - project media gets a gentle parallax
 * Cross-page anchors ("/#x" from a sub-page) fall through to normal
 * navigation and the browser lands on the hash after load.
 */
export default function Choreography({ pathname = '/' }) {
  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    const onClick = (e) => {
      const a = e.target.closest('a[href^="#"], a[href^="/#"]')
      if (!a) return
      const href = a.getAttribute('href')
      const id = href.slice(href.indexOf('#') + 1)
      if (!id) return
      if (href.startsWith('/#') && window.location.pathname !== '/') return
      const target = document.getElementById(id)
      if (!target) return
      e.preventDefault()
      if (window.__lenis) window.__lenis.scrollTo(target, { offset: -10 })
      else target.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth' })
    }
    document.addEventListener('click', onClick)

    if (reduce) return () => document.removeEventListener('click', onClick)

    const ctx = gsap.context(() => {
      // Hero parallax (home page only — no-op when the hero isn't mounted).
      if (document.querySelector('#top .hero-inner')) {
        gsap.to('.hero-inner', {
          yPercent: -12,
          opacity: 0.25,
          ease: 'none',
          scrollTrigger: {
            trigger: '#top',
            start: 'top top',
            end: 'bottom top',
            scrub: true,
          },
        })
      }

      // Project media parallax — each image drifts within its frame.
      gsap.utils.toArray('img.project-media').forEach((el) => {
        gsap.fromTo(
          el,
          { yPercent: -6 },
          {
            yPercent: 6,
            ease: 'none',
            scrollTrigger: {
              trigger: el,
              start: 'top bottom',
              end: 'bottom top',
              scrub: true,
            },
          }
        )
      })
    })

    ScrollTrigger.refresh()

    return () => {
      document.removeEventListener('click', onClick)
      ctx.revert()
    }
  }, [pathname])

  return null
}
