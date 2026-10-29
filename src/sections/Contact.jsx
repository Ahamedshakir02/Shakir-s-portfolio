import { contact } from '../content/index.js'
import Section from '../ui/Section.jsx'

export default function Contact() {
  return (
    <Section id="contact" title="Contact">
      <p>{contact.text}</p>
      <p className="mt-4">
        <a href={`mailto:${contact.email}`} className="link inline-flex min-h-11 items-center text-item font-medium">
          {contact.email}
        </a>
      </p>
    </Section>
  )
}
