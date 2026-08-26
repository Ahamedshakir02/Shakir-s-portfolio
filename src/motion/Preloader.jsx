import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { roles } from '../content/index.js'
import { useLoadGate } from '../app/loadGate.js'
import { useAssetProgress } from '../hooks/useAssetProgress.js'

const NAME = 'AHAMED SHAKIR'

/**
 * The preloader.
 *
 * Three things happen at once, and the percentage is the smallest of them:
 *   1. the wordmark letters rise and settle,
 *   2. a hairline rule draws across, tied to *actual* asset progress,
 *   3. the role words cycle behind it.
 * A small mono readout sits in the corner as a detail, not as the event.
 *
 * The bar eases toward real progress and can never reach 100% before the
 * assets are genuinely ready. Only when the panels have cleared does the
 * load gate open and the rest of the site begin to move.
 */
export default function Preloader() {
  const root = useRef(null)
  const nameRef = useRef(null)
  const barRef = useRef(null)
  const release = useLoadGate((s) => s.release)
  const { progress, ready } = useAssetProgress()
  const [shown, setShown] = useState(0)
  const [skip, setSkip] = useState(null) // null = undecided

  // Decide up front whether to animate at all, before the first paint.
  useLayoutEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    let seen = false
    try {
      seen = !!sessionStorage.getItem('shakir-preloaded')
    } catch { /* private mode — treat as first visit */ }

    const bypass = reduce || seen
    setSkip(bypass)
    if (!bypass) document.documentElement.classList.add('is-loading')
  }, [])

  // Skip path: no animation, but still wait for real readiness before
  // releasing the gate, so the site never starts moving mid-load.
  useEffect(() => {
    if (skip !== true || !ready) return
    document.documentElement.classList.remove('is-loading')
    release()
  }, [skip, ready, release])

  // Animated path.
  useEffect(() => {
    if (skip !== false) return
    const letters = nameRef.current?.querySelectorAll('span') ?? []

    const ctx = gsap.context(() => {
      gsap.fromTo(
        letters,
        { yPercent: 110 },
        { yPercent: 0, duration: 0.65, ease: 'power3.out', stagger: 0.03 }
      )
    }, root)

    return () => ctx.revert()
  }, [skip])

  // Cycle the role label on a plain interval — simpler and more legible than
  // driving text swaps through the timeline.
  const [roleIdx, setRoleIdx] = useState(0)
  useEffect(() => {
    if (skip !== false) return
    const id = setInterval(() => setRoleIdx((i) => (i + 1) % roles.length), 600)
    return () => clearInterval(id)
  }, [skip])

  // Ease the displayed value toward real progress. Never snaps backward, and
  // holds just short of 100 until the assets actually report ready.
  useEffect(() => {
    if (skip !== false) return
    const target = ready ? 1 : Math.min(progress, 0.96)
    const obj = { v: shown }
    const tween = gsap.to(obj, {
      v: target,
      duration: 0.6,
      ease: 'power2.out',
      onUpdate: () => setShown(obj.v),
    })
    return () => tween.kill()
    // `shown` is the animation's own output — including it would restart the
    // tween on every frame.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [progress, ready, skip])

  // Drive the rule from the displayed value.
  useEffect(() => {
    if (barRef.current) gsap.set(barRef.current, { scaleX: shown })
  }, [shown])

  // Everything is loaded and the counter has caught up — clear the panels.
  // Guarded by a ref because this effect re-runs as `shown` settles, and the
  // exit timeline must be created exactly once.
  const exiting = useRef(false)
  useEffect(() => {
    // In a background tab requestAnimationFrame is suspended, so the counter
    // never finishes climbing and the exit animation would never play. There
    // is nothing to watch in that case — as soon as the assets are ready,
    // finish outright.
    const hidden = document.hidden
    if (skip !== false || !ready || exiting.current) return
    if (!hidden && shown < 0.999) return
    exiting.current = true

    const finish = () => {
      document.documentElement.classList.remove('is-loading')
      if (root.current) root.current.style.display = 'none'
      try {
        sessionStorage.setItem('shakir-preloaded', '1')
      } catch { /* ignore */ }
      release()
    }

    if (hidden) {
      finish()
      return
    }

    const tl = gsap.timeline({ onComplete: finish })
    tl.to('.pl-center', { yPercent: -40, opacity: 0, duration: 0.4, ease: 'power3.in' })
      .to('.pl-panel-top', { yPercent: -100, duration: 0.7, ease: 'expo.inOut' }, '-=0.12')
      .to('.pl-panel-bottom', { yPercent: 100, duration: 0.7, ease: 'expo.inOut' }, '<')
  }, [skip, ready, shown, release])

  if (skip !== false) return null

  return (
    <div
      ref={root}
      className="fixed inset-0 z-[999] flex items-center justify-center"
      role="progressbar"
      aria-label="Loading"
      aria-valuenow={Math.round(shown * 100)}
      aria-valuemin={0}
      aria-valuemax={100}
    >
      <div className="pl-panel pl-panel-top absolute inset-x-0 top-0 h-1/2 bg-paper" />
      <div className="pl-panel pl-panel-bottom absolute inset-x-0 bottom-0 h-1/2 bg-paper" />

      <div className="pl-center relative w-full max-w-[46rem] px-6">
        {/* Wordmark */}
        <div
          ref={nameRef}
          className="flex justify-center overflow-hidden font-display text-[clamp(1.5rem,6vw,3rem)] font-semibold tracking-[-0.03em] text-ink"
          aria-hidden="true"
        >
          {NAME.split('').map((c, i) => (
            <span key={i} className={c === ' ' ? 'inline-block w-[0.4em]' : 'inline-block'}>
              {c === ' ' ? '\u00a0' : c}
            </span>
          ))}
        </div>

        {/* Cycling role, behind the wordmark in the hierarchy */}
        <div className="mt-3 h-5 overflow-hidden text-center" aria-hidden="true">
          <span key={roleIdx} className="label animate-role-in text-muted">
            {roles[roleIdx]}
          </span>
        </div>

        {/* The rule — this is the actual progress indicator */}
        <div className="mt-8 h-px w-full bg-line">
          <i ref={barRef} className="block h-px origin-left scale-x-0 bg-accent" />
        </div>

        {/* The number, deliberately small */}
        <div className="mt-3 text-right font-mono text-[0.7rem] tabular-nums text-muted">
          {String(Math.round(shown * 100)).padStart(3, '0')}%
        </div>
      </div>
    </div>
  )
}
