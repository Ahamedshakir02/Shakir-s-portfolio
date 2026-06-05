import { useEffect, useState } from 'react'

/** Tracks window scrollY against thresholds for the nav and back-to-top button. */
export function useScrolled() {
  const [scrolled, setScrolled] = useState(false)
  const [showTop, setShowTop] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY
      setScrolled(y > 30)
      setShowTop(y > 700)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return { scrolled, showTop }
}
