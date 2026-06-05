import { stats } from '../data.jsx'
import CountUp from './CountUp.jsx'

export default function Stats() {
  return (
    <section className="stats">
      {stats.map((s, i) => (
        <div className="stat reveal" key={s.label} data-delay={i || undefined}>
          <CountUp target={s.count} suffix={s.suffix} />
          <div className="lbl">{s.label}</div>
        </div>
      ))}
    </section>
  )
}
