import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
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
  const navigate = useNavigate()

  // In-page anchors go through the router rather than the browser.
  //
  // Two bugs used to live here. From a case study, a "/#about" link was let
  // through as "a real navigation", which tore down the SPA and reloaded it —
  // skipping the route curtain on the one path that most needs it. And on the
  // home page the handler scrolled without ever updating the URL, so Back did
  // not retrace sections and a shared "/#work" link landed at the top.
  //
  // Navigating instead makes the location the single source of truth; the
  // scroll itself is handled in App, keyed on the hash.
  useEffect(() => {
    const onClick = (e) => {
      if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return
      const a = e.target.closest('a[href^="#"], a[href^="/#"]')
      if (!a || a.target === '_blank') return
      const href = a.getAttribute('href')
      const id = href.slice(href.indexOf('#') + 1)
      if (!id) return
      e.preventDefault()
      navigate(`/#${id}`)
    }
    document.addEventListener('click', onClick)
    return () => document.removeEventListener('click', onClick)
  }, [navigate])

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

      // Horizontal rail through the projects. The pin has to clear the fixed
      // nav, or the top of every card sits underneath it.
      const rail = document.querySelector('[data-rail]')
      const track = rail?.querySelector('[data-rail-track]')
      if (rail && track) {
        const navOffset = () => {
          const raw = getComputedStyle(document.documentElement).getPropertyValue('--nav-h')
          return parseFloat(raw) * (raw.includes('rem') ? 16 : 1) || 84
        }
        const distance = () => track.scrollWidth - rail.clientWidth
        if (distance() > 0) {
          gsap.to(track, {
            x: () => -distance(),
            ease: 'none',
            scrollTrigger: {
              trigger: rail,
              start: () => `top top+=${navOffset()}`,
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
