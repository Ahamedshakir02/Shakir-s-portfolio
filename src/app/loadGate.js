import { create } from 'zustand'

/**
 * The load gate. Everything that moves on this site — hero choreography,
 * scroll reveals, count-ups, ScrollTrigger — subscribes to `open` and stays
 * completely idle until the preloader has finished and released it.
 *
 * This is deliberate: the brief was that nothing should start happening
 * behind the loader, so the reveal only begins once loading is genuinely done.
 */
export const useLoadGate = create((set) => ({
  open: false,
  release: () => set({ open: true }),
}))
