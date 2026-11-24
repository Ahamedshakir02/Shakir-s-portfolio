/**
 * A statement spread: corner meta, a big serif claim ending on the red full
 * stop, an image grid, then a small title and caption underneath.
 */
export default function Spread({ left, right, title, caption, body, className = '', children }) {
  return (
    <article className={className}>
      <div className="meta flex justify-between gap-6 text-muted">
        <span>{left}</span>
        <span>{right}</span>
      </div>

      <h2 className="mt-10 max-w-[15ch] font-serif text-title text-balance md:mt-14">
        {title}
        <span className="dot">.</span>
      </h2>

      <div className="mt-10 md:mt-12">{children}</div>

      <div className="mt-8 grid gap-3 md:mt-10 lg:grid-cols-[16rem_1fr] lg:gap-x-6">
        <h3 className="text-xl font-semibold tracking-tight md:text-2xl">{caption}</h3>
        <p className="max-w-[46ch] text-lede font-light text-ink-2">{body}</p>
      </div>
    </article>
  )
}
