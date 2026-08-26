/**
 * The section header used by every section on the page: a mono index + label,
 * an optional display title, and an optional intro paragraph.
 *
 * `title` is optional because a few sections (About, Community, Contact) carry
 * their heading inside their own layout — they still want the same eyebrow, so
 * they use this rather than hand-rolling the markup.
 */
export default function SectionHeader({ idx, label, title, intro, className = '', children }) {
  return (
    <header className={`reveal ${className}`}>
      <div className="label flex items-baseline gap-3 text-muted">
        {idx && <b className="font-medium text-accent">{idx}</b>}
        <span>{label}</span>
      </div>
      {title && (
        <h2 className="mt-8 font-display text-title font-semibold text-balance">{title}</h2>
      )}
      {intro && <p className="mt-5 max-w-[56ch] text-ink-2">{intro}</p>}
      {children}
    </header>
  )
}
