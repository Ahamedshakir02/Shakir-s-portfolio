/** A small pill for a skill, tag, or tech-stack entry. */
export default function Chip({ children }) {
  return (
    <li className="rounded-pill border border-line px-3 py-1.5 text-caption text-ink-2 transition-colors hover:border-line-2 hover:text-ink">
      {children}
    </li>
  )
}
