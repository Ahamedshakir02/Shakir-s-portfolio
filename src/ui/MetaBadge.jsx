/**
 * The `{ b, s }` metadata pair used by project cards and the µLearn section:
 * a bold headline value over a small mono caption.
 */
export default function MetaBadge({ b, s }) {
  return (
    <div className="min-w-0">
      <div className="font-display text-[clamp(1.05rem,1.6vw,1.4rem)] leading-tight font-semibold text-balance text-accent">{b}</div>
      <div className="label mt-1 text-muted">{s}</div>
    </div>
  )
}
