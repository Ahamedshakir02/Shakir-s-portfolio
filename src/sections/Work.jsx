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
                className="group relative grid grid-cols-[2.5rem_1fr_auto] items-baseline gap-x-4 gap-y-2 md:gap-x-6 py-7 md:grid-cols-[12rem_1fr_14rem_2rem] md:py-9 lg:grid-cols-[16rem_1fr_16rem_2rem]"
              >
                <span className="meta text-muted">{p.idx}</span>
                <span>
                  <span className="block font-serif text-item transition-transform duration-500 ease-[var(--ease-out)] group-hover:translate-x-3">
                    {name}
                    <span className="dot opacity-0 transition-opacity group-hover:opacity-100">.</span>
                  </span>
                  {sub && <span className="mt-2 block text-sm text-ink-2">{sub}</span>}
                </span>
                <span className="meta col-start-2 flex flex-wrap items-center gap-x-3 gap-y-1 text-muted md:col-start-auto">
                  <span>{p.type}</span>
                  {p.year && <span>{p.year}</span>}
                  {p.live && (
                    <span className="inline-flex items-center gap-1.5 text-ink">
                      <span className="size-1.5 rounded-full bg-[#1f9d55]" aria-hidden="true" />
                      Live
                    </span>
                  )}
                </span>
                <span
                  aria-hidden="true"
                  className="row-start-1 col-start-3 text-xl transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-accent md:col-start-4"
                >
                  →
                </span>
                {p.media && (
                  <img
                    src={p.media}
                    alt=""
                    loading="lazy"
                    decoding="async"
                    className="pointer-events-none absolute top-1/2 right-[20rem] z-10 hidden aspect-[4/3] w-64 -translate-y-1/2 rotate-2 border border-line object-cover opacity-0 shadow-[0_24px_48px_-16px_rgb(0_0_0/0.35)] transition-all duration-300 group-hover:rotate-0 group-hover:opacity-100 lg:block"
                  />
                )}
              </Link>
            </li>
          )
        })}
      </ol>
    </Section>
  )
}
