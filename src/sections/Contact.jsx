import { useState } from 'react'
import { contactLinks } from '../content/index.js'
import Section from '../ui/Section.jsx'
import SectionHeader from '../ui/SectionHeader.jsx'
import Button from '../ui/Button.jsx'

const EMAIL = 'ahamedshakir02@gmail.com'
const ENDPOINT = import.meta.env.VITE_CONTACT_ENDPOINT

const field =
  'w-full rounded-card border border-line bg-paper px-4 py-3 text-body text-ink ' +
  'placeholder:text-muted focus:border-line-2 focus:outline-none'

/**
 * Contact form. There is no backend — submissions POST to a form service
 * (Formspree / Web3Forms) configured through VITE_CONTACT_ENDPOINT. If that
 * is unset or the request fails, the mailto: link below is the fallback and
 * is always visible, so this section can never become a dead end.
 */
function ContactForm() {
  const [state, setState] = useState('idle') // idle | sending | sent | error
  const [errors, setErrors] = useState({})

  const validate = (data) => {
    const next = {}
    if (!data.get('name')?.trim()) next.name = 'Please tell me your name.'
    const email = data.get('email')?.trim()
    if (!email) next.email = 'I need an email to reply to.'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) next.email = "That email doesn't look right."
    if (!data.get('message')?.trim()) next.message = 'A sentence or two is plenty.'
    return next
  }

  const onSubmit = async (e) => {
    e.preventDefault()
    const form = e.currentTarget
    const data = new FormData(form)

    // Honeypot — bots fill hidden fields, humans never see this one.
    if (data.get('company')) return

    const found = validate(data)
    setErrors(found)
    if (Object.keys(found).length) return

    if (!ENDPOINT) {
      setState('error')
      return
    }

    setState('sending')
    try {
      const res = await fetch(ENDPOINT, {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: data,
      })
      if (!res.ok) throw new Error(String(res.status))
      form.reset()
      setState('sent')
    } catch {
      setState('error')
    }
  }

  if (state === 'sent') {
    return (
      <div className="rounded-card border border-accent p-8 text-center" role="status">
        <p className="font-display text-heading font-semibold">Message sent.</p>
        <p className="mt-2 text-caption text-ink-2">
          Thanks — I&apos;ll get back to you at the address you gave me.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={onSubmit} noValidate className="space-y-4 text-left">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="c-name" className="label text-muted">Name</label>
          <input
            id="c-name"
            name="name"
            className={`${field} mt-2`}
            placeholder="Your name"
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? 'c-name-err' : undefined}
          />
          {errors.name && (
            <p id="c-name-err" className="mt-2 text-caption text-accent">{errors.name}</p>
          )}
        </div>
        <div>
          <label htmlFor="c-email" className="label text-muted">Email</label>
          <input
            id="c-email"
            name="email"
            type="email"
            inputMode="email"
            autoComplete="email"
            className={`${field} mt-2`}
            placeholder="you@company.com"
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? 'c-email-err' : undefined}
          />
          {errors.email && (
            <p id="c-email-err" className="mt-2 text-caption text-accent">{errors.email}</p>
          )}
        </div>
      </div>

      <div>
        <label htmlFor="c-message" className="label text-muted">Message</label>
        <textarea
          id="c-message"
          name="message"
          rows={5}
          className={`${field} mt-2 resize-y`}
          placeholder="What are you building?"
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? 'c-message-err' : undefined}
        />
        {errors.message && (
          <p id="c-message-err" className="mt-2 text-caption text-accent">{errors.message}</p>
        )}
      </div>

      {/* Honeypot */}
      <input
        type="text"
        name="company"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="absolute left-[-9999px] size-px opacity-0"
      />

      <div className="flex flex-wrap items-center gap-4 pt-2">
        <Button as="button" type="submit" variant="primary" disabled={state === 'sending'}>
          {state === 'sending' ? 'Sending…' : 'Send message'} <span aria-hidden="true">→</span>
        </Button>
        {state === 'error' && (
          <p role="alert" className="text-caption text-accent">
            That didn&apos;t go through. Please{' '}
            <a href={`mailto:${EMAIL}`} className="underline underline-offset-4">email me directly</a>.
          </p>
        )}
      </div>
    </form>
  )
}

export default function Contact() {
  return (
    <Section id="contact">
      <SectionHeader idx="08" label="Let&apos;s build something" className="mb-10" />

      <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:gap-16">
        <div className="reveal">
          <h2 className="font-display text-title font-semibold text-balance">
            Tell me what you&apos;re building.
          </h2>
          <p className="mt-5 max-w-[46ch] text-ink-2">
            Open to international engineering roles and interesting freelance work. The form goes
            straight to my inbox — or reach me wherever you already are.
          </p>

          <ul className="mt-8 space-y-3">
            {contactLinks.map((l) => (
              <li key={l.label}>
                <a
                  href={l.href}
                  {...(l.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                  className="inline-flex min-h-11 items-center text-caption text-ink-2 transition-colors hover:text-accent"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-wrap gap-3">
            <Button href="/assets/Ahamed-Shakir-Resume.pdf" download>Résumé ↓</Button>
            <Button href="/assets/Ahamed-Shakir-CV.pdf" download>Full CV ↓</Button>
          </div>
        </div>

        <div className="reveal"><ContactForm /></div>
      </div>
    </Section>
  )
}
