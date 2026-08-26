// Single place where GSAP plugins are registered. Import from here, never
// call registerPlugin again — repeat registration across modules is how you
// end up with ScrollTriggers attached to a stale instance.
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export const prefersReducedMotion = () =>
  window.matchMedia('(prefers-reduced-motion: reduce)').matches

export { gsap, ScrollTrigger }
