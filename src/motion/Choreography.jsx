import { useEffect } from 'react'
import { gsap, ScrollTrigger, prefersReducedMotion } from './gsap.js'
import { useLoadGate } from '../app/loadGate.js'

/**
 * Global scroll choreography, re-initialised per route.
 *
 * Every scroll-linked effect is declared inside gsap.matchMedia() so the
 * desktop choreography and its mobile fallback sit side by side and are torn
 * down automatically when the viewport crosses a breakpoint. Heavy work
 * (pinning, scrubbed rails) simply never registers below 1024px — that is
 * what keeps this smooth on a mid-range phone.
 *
 * Nothing here runs until the load gate opens.
 */
export default function Choreography({ pathname = '/' }) {
  const gateOpen = useLoadGate((s) => s.open)

  // Anchor links route through Lenis. Independent of the gate so navigation
  // works even if something upstream fails.
  useEffect(() => {
    const onClick = (e) => {
      const a = e.target.closest('a[href^="#"], a[href^="/#"]')
      if (!a) return
      const href = a.getAttribute('href')
      const id = href.slice(href.indexOf('#') + 1)
      if (!id) return
      // A "/#x" link from a sub-page is a real navigation — let it through.
      if (href.startsWith('/#') && window.location.pathname !== '/') return
      const target = document.getElementById(id)
      if (!target) return
      e.preventDefault()
      if (window.__lenis) window.__lenis.scrollTo(target, { offset: -10 })
      else target.scrollIntoView({ behavior: prefersReducedMotion() ? 'auto' : 'smooth' })
    }
    document.addEventListener('click', onClick)
    return () => document.removeEventListener('click', onClick)
  }, [])

  useEffect(() => {
    if (!gateOpen || prefersReducedMotion()) return

    const mm = gsap.matchMedia()

    // ---- Desktop: the full choreography ---------------------------------
    mm.add('(min-width: 1024px)', () => {
      // The hero drifts up and dims as you leave it.
      if (document.querySelector('#top .hero-inner')) {
        gsap.to('.hero-inner', {
          yPercent: -12,
          opacity: 0.25,
          ease: 'none',
          scrollTrigger: { trigger: '#top', start: 'top top', end: 'bottom top', scrub: true },
        })
      }

      // Horizontal rail through the projects.
      const rail = document.querySelector('[data-rail]')
      const track = rail?.querySelector('[data-rail-track]')
      if (rail && track) {
        const distance = () => track.scrollWidth - rail.clientWidth
        if (distance() > 0) {
          gsap.to(track, {
            x: () => -distance(),
            ease: 'none',
            scrollTrigger: {
              trigger: rail,
              start: 'top top',
              end: () => '+=' + distance(),
              pin: true,
              scrub: 1,
              anticipatePin: 1,
              invalidateOnRefresh: true,
            },
          })
        }
      }
    })

    // ---- All viewports: light parallax on project media ------------------
    mm.add('(min-width: 640px)', () => {
      gsap.utils.toArray('img.project-media').forEach((el) => {
        gsap.fromTo(
          el,
          { yPercent: -6 },
          {
            yPercent: 6,
            ease: 'none',
            scrollTrigger: { trigger: el, start: 'top bottom', end: 'bottom top', scrub: true },
          }
        )
      })
    })

    ScrollTrigger.refresh()
    return () => mm.revert()
  }, [pathname, gateOpen])

  return null
}
