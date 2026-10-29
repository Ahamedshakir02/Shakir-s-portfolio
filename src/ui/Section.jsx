/** A home-page section: the 40rem column, section spacing, and a plain h2. */
export default function Section({ id, title, children }) {
  const headingId = `${id}-heading`
  return (
    <section id={id} aria-labelledby={headingId} className="wrap mt-16 scroll-mt-6 md:mt-24">
      <h2 id={headingId} className="mb-6 text-heading font-semibold">{title}</h2>
      {children}
    </section>
  )
}
