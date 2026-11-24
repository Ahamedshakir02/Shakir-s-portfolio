/** A✱S in three linked rings: the small stamp in the corner of each spread. */
export default function Monogram({ className = '' }) {
  const ring = 'grid size-6 place-items-center rounded-full border-[1.5px] border-ink text-[10px] font-bold leading-none text-ink'
  return (
    <span aria-hidden="true" className={`inline-flex -space-x-[3px] ${className}`}>
      <span className={ring}>A</span>
      <span className={`${ring} bg-ink text-paper`}>✱</span>
      <span className={ring}>S</span>
    </span>
  )
}
