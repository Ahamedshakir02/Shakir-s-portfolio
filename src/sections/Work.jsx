import { Link } from 'react-router-dom'
import { projects } from '../content/index.js'
import Section from '../ui/Section.jsx'

// "FIR-AI — Investigation Assistant" reads as a name and a subtitle.
const split = (t) => {
  const [name, sub] = t.split(' — ')
  return { name, sub }
}

/** An index, like the contents page of a magazine: number, name, kind, go. */
export default function Work() {
  return (
    <Section
      id="work"
      no="01"
      label="Selected work"
      title="Work I've Put My Name On"
      aside={<>Client sites with real customers, a four-app marketplace, applied AI and a piece of hardware. Each one has a full case study.</>}
    >
      <ol className="border-t border-ink">
        {projects.map((p) => {
          const { name, sub } = split(p.title)
          return (
            <li key={p.slug} className="border-b border-line">
              <Link
                to={`/work/${p.slug}`}
                className="group grid grid-cols-[2.5rem_1fr_auto] items-baseline gap-x-4 gap-y-2 py-7 md:grid-cols-[12rem_1fr_14rem_2rem] md:py-9 lg:grid-cols-[16rem_1fr_16rem_2rem]"
              >
                <span className="meta text-muted">{p.idx}</span>
                <span>
                  <span className="block font-serif text-item transition-transform duration-500 ease-[var(--ease-out)] group-hover:translate-x-3">
                    {name}
                    <span className="dot opacity-0 transition-opacity group-hover:opacity-100">.</span>
                  </span>
                  {sub && <span className="mt-2 block text-sm text-ink-2">{sub}</span>}
                </span>
                <span className="meta col-start-2 text-muted md:col-start-auto">{p.type}</span>
                <span
                  aria-hidden="true"
                  className="row-start-1 col-start-3 text-xl transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-accent md:col-start-4"
                >
                  ↗
                </span>
              </Link>
            </li>
          )
        })}
      </ol>
    </Section>
  )
}
