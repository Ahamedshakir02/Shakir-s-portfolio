/** A page section: consistent vertical rhythm and a centred content column. */
export default function Section({ id, className = '', children }) {
  return (
    <section id={id} className={`relative py-16 md:py-24 lg:py-32 ${className}`}>
      <div className="wrap">{children}</div>
    </section>
  )
}
