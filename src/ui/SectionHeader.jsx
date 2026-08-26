/**
 * The section header used by every section on the page: a mono index + label,
 * a display title, and an optional intro paragraph. Previously this markup was
 * copy-pasted eight times.
 */
export default function SectionHeader({ idx, label, title, intro, children }) {
  return (
    <header className="reveal">
      <div className="label mb-8 flex items-baseline gap-3 text-muted">
        {idx && <b className="font-medium text-accent">{idx}</b>}
        <span>{label}</span>
      </div>
      <h2 className="font-display text-title font-semibold text-balance">{title}</h2>
      {intro && <p className="mt-5 max-w-[56ch] text-ink-2">{intro}</p>}
      {children}
    </header>
  )
}
