import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'

/**
 * Preloader v2 — quick, branded, once per session.
 * Letters of the wordmark rise in, a hairline bar fills while a small mono
 * counter runs 0→100, then the screen splits into two panels that clear
 * vertically. Skipped entirely on reduced motion and on repeat visits
 * within the same session (so route changes and reloads never feel blocked).
 */
const NAME = 'AHAMED SHAKIR'

export default function Preloader({ onDone }) {
  const root = useRef(null)
  const nameRef = useRef(null)
  const barRef = useRef(null)
  const countRef = useRef(null)
  const [count, setCount] = useState(0)

  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    let seen = false
    try {
      seen = !!sessionStorage.getItem('shakir-preloaded')
    } catch (e) { /* ignore */ }

    const finish = () => {
      document.documentElement.classList.remove('is-loading')
      if (root.current) root.current.style.display = 'none'
      try {
        sessionStorage.setItem('shakir-preloaded', '1')
      } catch (e) { /* ignore */ }
      onDone?.()
    }

    if (reduce || seen) {
      finish()
      return
    }

    document.documentElement.classList.add('is-loading')
    const letters = nameRef.current ? nameRef.current.querySelectorAll('span') : []
    const obj = { v: 0 }
    const tl = gsap.timeline()

    tl.fromTo(letters, { yPercent: 110 }, { yPercent: 0, duration: 0.65, ease: 'power3.out', stagger: 0.03 }, 0)
      .to(obj, {
        v: 100,
        duration: 1.0,
        ease: 'power2.inOut',
        onUpdate: () => setCount(Math.round(obj.v)),
      }, 0.15)
      .to(barRef.current, { scaleX: 1, duration: 1.0, ease: 'power2.inOut' }, 0.15)
      .to([nameRef.current, barRef.current, countRef.current], {
        yPercent: -40, opacity: 0, duration: 0.4, ease: 'power3.in',
      }, '+=0.1')
      .to('.pl-panel-top', { yPercent: -100, duration: 0.7, ease: 'expo.inOut' }, '-=0.12')
      .to('.pl-panel-bottom', { yPercent: 100, duration: 0.7, ease: 'expo.inOut', onComplete: finish }, '<')

    return () => {
      tl.kill()
      document.documentElement.classList.remove('is-loading')
    }
  }, [onDone])

  return (
    <div ref={root} className="preloader" aria-hidden="true">
      <div className="pl-panel pl-panel-top" />
      <div className="pl-panel pl-panel-bottom" />
      <div className="pl-center">
        <div className="pl-name" ref={nameRef}>
          {NAME.split('').map((c, i) => (
            <span key={i} className={c === ' ' ? 'sp' : undefined}>
              {c === ' ' ? ' ' : c}
            </span>
          ))}
        </div>
        <div className="pl-bar"><i ref={barRef} /></div>
        <div className="pl-count" ref={countRef}>{String(count).padStart(3, '0')}%</div>
      </div>
    </div>
  )
}
