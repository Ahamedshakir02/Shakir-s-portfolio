/**
 * An editorial spread: a small numbered meta label, a serif title that ends
 * on the red full stop, and the content below.
 */
export default function Section({ id, no, label, title, aside, className = '', children }) {
  return (
    <section id={id} className={`scroll-mt-12 border-t border-line py-20 md:py-28 ${className}`}>
      <div className="frame">
        <div className="mb-12 grid gap-6 md:mb-16 lg:grid-cols-[16rem_1fr]">
          <p className="meta text-muted">
            ({no}) {label}
          </p>
          <div className="flex flex-col gap-6 xl:flex-row xl:items-end xl:justify-between">
            <h2 className="font-serif text-title text-balance">
              {title}
              <span className="dot">.</span>
            </h2>
            {aside && <div className="max-w-md text-ink-2 xl:max-w-sm xl:pb-2">{aside}</div>}
          </div>
        </div>
        {children}
      </div>
    </section>
  )
}
