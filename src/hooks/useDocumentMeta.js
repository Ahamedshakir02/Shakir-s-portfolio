import { useEffect } from 'react'

const SITE = 'https://shakir-s-portfolio.vercel.app'

/** Set one meta/link tag, remembering what was there so it can be restored. */
function apply(selector, create, attr, value, restore) {
  let el = document.head.querySelector(selector)
  let created = false
  if (!el) {
    el = create()
    document.head.appendChild(el)
    created = true
  }
  restore.push({ el, attr, prev: el.getAttribute(attr), created })
  el.setAttribute(attr, value)
}

/**
 * Per-route document metadata.
 *
 * All six case studies previously inherited the homepage's description,
 * canonical and social card, while sitemap.xml submitted every one of them for
 * indexing — so search engines saw six pages describing themselves identically,
 * and sharing a case study previewed the generic portrait.
 *
 * Everything is restored on unmount, so returning to the homepage puts its own
 * metadata back.
 */
export function useDocumentMeta({ title, description, path, image }) {
  useEffect(() => {
    const restore = []
    const prevTitle = document.title
    if (title) document.title = title

    const url = path ? `${SITE}${path}` : undefined

    if (description) {
      apply('meta[name="description"]', () => {
        const m = document.createElement('meta'); m.setAttribute('name', 'description'); return m
      }, 'content', description, restore)
      apply('meta[property="og:description"]', () => {
        const m = document.createElement('meta'); m.setAttribute('property', 'og:description'); return m
      }, 'content', description, restore)
      apply('meta[name="twitter:description"]', () => {
        const m = document.createElement('meta'); m.setAttribute('name', 'twitter:description'); return m
      }, 'content', description, restore)
    }

    if (title) {
      apply('meta[property="og:title"]', () => {
        const m = document.createElement('meta'); m.setAttribute('property', 'og:title'); return m
      }, 'content', title, restore)
      apply('meta[name="twitter:title"]', () => {
        const m = document.createElement('meta'); m.setAttribute('name', 'twitter:title'); return m
      }, 'content', title, restore)
    }

    if (url) {
      apply('link[rel="canonical"]', () => {
        const l = document.createElement('link'); l.setAttribute('rel', 'canonical'); return l
      }, 'href', url, restore)
      apply('meta[property="og:url"]', () => {
        const m = document.createElement('meta'); m.setAttribute('property', 'og:url'); return m
      }, 'content', url, restore)
    }

    if (image) {
      const abs = image.startsWith('http') ? image : `${SITE}${image}`
      apply('meta[property="og:image"]', () => {
        const m = document.createElement('meta'); m.setAttribute('property', 'og:image'); return m
      }, 'content', abs, restore)
      apply('meta[name="twitter:image"]', () => {
        const m = document.createElement('meta'); m.setAttribute('name', 'twitter:image'); return m
      }, 'content', abs, restore)
    }

    return () => {
      document.title = prevTitle
      for (const { el, attr, prev, created } of restore) {
        if (created) el.remove()
        else if (prev !== null) el.setAttribute(attr, prev)
      }
    }
  }, [title, description, path, image])
}
