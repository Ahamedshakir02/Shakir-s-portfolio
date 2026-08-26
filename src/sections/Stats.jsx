import { stats } from '../content/index.js'
import CountUp from '../ui/CountUp.jsx'

export default function Stats() {
  return (
    <section aria-label="By the numbers" className="wrap">
      <dl className="grid grid-cols-2 gap-x-8 gap-y-10 border-y border-line py-12 lg:grid-cols-4">
        {stats.map((s) => (
          <div key={s.label} className="reveal">
            <dd><CountUp target={s.count} suffix={s.suffix} /></dd>
            <dt className="mt-2 max-w-[22ch] text-caption text-muted">{s.label}</dt>
          </div>
        ))}
      </dl>
    </section>
  )
}
