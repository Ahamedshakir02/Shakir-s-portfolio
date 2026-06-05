import { useEffect, useRef, useState } from 'react'

/** Animates a number from 0 → target once it scrolls into view (cubic ease-out). */
export default function CountUp({ target, suffix }) {
  const ref = useRef(null)
  const [value, setValue] = useState(0)

  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const el = ref.current
    if (!el) return
    if (reduce) {
      setValue(target)
      return
    }

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
            if (t < 1) requestAnimationFrame(step)
            else setValue(target)
          }
          requestAnimationFrame(step)
        })
      },
      { threshold: 0.6 }
    )
    io.observe(el)
    return () => io.disconnect()
  }, [target])

  return (
    <div className="num" ref={ref}>
      <span>{value.toLocaleString()}</span>
      <span className="suf">{suffix}</span>
    </div>
  )
}
