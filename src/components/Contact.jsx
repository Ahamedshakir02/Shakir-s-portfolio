import { contactLinks } from '../data.jsx'

export default function Contact() {
  return (
    <section className="section contact" id="contact">
      <div className="wrap">
        <div className="sec-label reveal" style={{ justifyContent: 'center' }}>
          <b>08</b> Let's build something
        </div>
        <div className="big reveal"><a href="mailto:ahamedshakir02@gmail.com">Let's talk →</a></div>
        <div className="contact-links reveal" data-delay="1">
          {contactLinks.map((l) => (
            <a
              className="clink"
              key={l.label}
              href={l.href}
              {...(l.external ? { target: '_blank', rel: 'noopener' } : {})}
            >
              {l.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
