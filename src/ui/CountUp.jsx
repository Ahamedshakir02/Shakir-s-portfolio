import { useEffect, useRef, useState } from 'react'
import { useLoadGate } from '../app/loadGate.js'
import { prefersReducedMotion } from '../motion/gsap.js'

/**
 * Animates a number from 0 to `target` once it scrolls into view.
 * Holds at 0 until the load gate opens so no stat is quietly counting up
 * behind the preloader.
 */
export default function CountUp({ target, suffix }) {
  const ref = useRef(null)
  const [value, setValue] = useState(0)
  const gateOpen = useLoadGate((s) => s.open)

  useEffect(() => {
    if (!gateOpen) return
    const el = ref.current
    if (!el) return
    if (prefersReducedMotion()) {
      setValue(target)
      return
    }

    let raf = 0
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((en) => {
          if (!en.isIntersecting) return
          io.unobserve(en.target)
          const dur = 1300
          const start = performance.now()
          const ease = (t) => 1 - Math.pow(1 - t, 3)
          const step = (now) => {
            const t = Math.min(1, (now - start) / dur)
            setValue(Math.round(target * ease(t)))
            if (t < 1) raf = requestAnimationFrame(step)
            else setValue(target)
          }
          raf = requestAnimationFrame(step)
        })
      },
      { threshold: 0.6 }
    )
    io.observe(el)
    return () => {
      io.disconnect()
      cancelAnimationFrame(raf)
    }
  }, [target, gateOpen])

  return (
    <div ref={ref} className="font-display text-title font-semibold tabular-nums">
      <span>{value.toLocaleString()}</span>
      <span className="text-accent">{suffix}</span>
    </div>
  )
}
