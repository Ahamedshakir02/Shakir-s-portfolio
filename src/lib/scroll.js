import { create } from 'zustand'

/**
 * Global scroll state.
 *
 * Why a store and not props: the R3F canvas lives in its own renderer tree.
 * Passing scroll progress down through React props forces re-renders every
 * frame and fights the render loop. Lenis writes here once per frame, and
 * useFrame inside the canvas reads getScroll() with zero React re-renders.
 * This is the pattern that keeps 3D + scroll at 60fps.
 */
export const useScroll = create((set) => ({
  progress: 0, // 0..1 through the whole page
  scrollY: 0, // raw pixel scroll
  velocity: 0, // current scroll velocity
  set,
}))

// Non-reactive setter for the per-frame hot path.
export const setScroll = (payload) => useScroll.setState(payload)
export const getScroll = () => useScroll.getState()
