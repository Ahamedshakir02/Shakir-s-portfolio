import { useEffect, useRef, useState } from 'react'

const SAFETY_TIMEOUT = 6000

/**
 * Tracks *real* readiness rather than a fixed timer: web fonts, every image
 * currently in the document (decoded, not merely fetched), and the window
 * load event. Returns a 0..1 progress value that only ever moves forward.
 *
 * A safety timeout force-resolves so a slow or dead CDN can never trap a
 * visitor behind the loader.
 */
export function useAssetProgress() {
  const [progress, setProgress] = useState(0)
  const [ready, setReady] = useState(false)
  const highWater = useRef(0)

  useEffect(() => {
    let cancelled = false
    let settled = 0

    const tasks = []

    // Web fonts — the wordmark itself depends on these.
    if (document.fonts?.ready) tasks.push(document.fonts.ready)

    // Only the images that genuinely gate the first paint: same-origin and not
    // lazy. Waiting on the rest was the bug — a lazy image the viewport never
    // reaches leaves its decode pending, so the loader sat until the safety
    // timeout instead of clearing as soon as the page was ready. Worse,
    // calling decode() on a lazy image forces it to load, pulling third-party
    // screenshots into the critical path of the homepage.
    for (const img of document.images) {
      if (img.loading === 'lazy') continue
      try {
        if (new URL(img.src, location.href).origin !== location.origin) continue
      } catch {
        continue // malformed src — not something to block paint on
      }
      tasks.push(
        img.decode
          ? img.decode().catch(() => undefined)
          : new Promise((res) => {
              if (img.complete) return res()
              img.addEventListener('load', res, { once: true })
              img.addEventListener('error', res, { once: true })
            })
      )
    }

    // The document itself.
    tasks.push(
      document.readyState === 'complete'
        ? Promise.resolve()
        : new Promise((res) => window.addEventListener('load', res, { once: true }))
    )

    const total = tasks.length
    const bump = () => {
      if (cancelled) return
      settled += 1
      const next = Math.max(highWater.current, settled / total)
      highWater.current = next
      setProgress(next)
    }

    tasks.forEach((t) => Promise.resolve(t).then(bump, bump))

    const done = () => {
      if (cancelled) return
      highWater.current = 1
      setProgress(1)
      setReady(true)
    }

    Promise.allSettled(tasks).then(done)
    const timer = setTimeout(done, SAFETY_TIMEOUT)

    return () => {
      cancelled = true
      clearTimeout(timer)
    }
  }, [])

  return { progress, ready }
}
