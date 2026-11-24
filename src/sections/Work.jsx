import { Link } from 'react-router-dom'
import { projects } from '../content/index.js'
import Spread from '../ui/Spread.jsx'

// "FIR-AI — Investigation Assistant" reads as a name and a subtitle.
const split = (t) => {
  const [name, sub] = t.split(' — ')
  return { name, sub }
}

const byslug = (slug) => projects.find((p) => p.slug === slug)

/**
 * Two statement spreads up front, like pages from a printed folio, then the
 * full index of every project.
 */
export default function Work() {
  const safari = byslug('safari-typing')
  const holy = byslug('holytouch')

  return (
    <section id="work" className="scroll-mt-12 border-t border-line pt-20 pb-20 md:pt-28 md:pb-28">
      <div className="frame">
        <Spread
          left="(01) Selected work"
          right="Client work · 2026"
          title={<>I Turn Real Problems Into Live Websites</>}
          caption="Client Websites"
          body={
            <>
              A typing centre in Ajman that customers couldn&apos;t find online, and a builder in
              Kerala that needed a site as good as its builds. Both are{' '}
              <em className="font-serif text-[1.2em] text-ink">live today.</em>
            </>
          }
        >
          <div className="grid grid-cols-2 gap-2 sm:gap-3">
            <Tile to={holy} src="/assets/shots/holytouch-home.jpg" label="Holytouch · Home" />
            <Tile to={safari} src="/assets/shots/safari-services.jpg" label="Safari Typing · Services" />
            <Tile to={holy} src="/assets/shots/holytouch-projects.jpg" label="Holytouch · Projects" />
            <Tile to={safari} src="/assets/shots/safari-home.jpg" label="Safari Typing · Home" />
          </div>
        </Spread>

        <Spread
          className="mt-28 md:mt-40"
          left="Products, AI & hardware"
          right="2024–2026"
          title={<>Some Ideas Needed an App. One Needed a Circuit</>}
          caption="Products, AI & Hardware"
          body={
            <>
              A marketplace shipped as four Flutter apps, a crime classifier that runs offline at
              98.8% accuracy, and an ESP32 that calls for help after a crash. Not demos,{' '}
              <em className="font-serif text-[1.2em] text-ink">working things.</em>
            </>
          }
        >
          <div className="grid grid-cols-2 gap-2 sm:gap-3">
            <Tile to={byslug('thengapari')} src="/assets/proj-4.png" label="ThengaPari · Four Flutter apps" />
            <Tile to={byslug('fir-ai')} src="/assets/proj-1.png" label="FIR-AI · Offline classifier" />
            <Tile to={byslug('tailsafe')} src="/assets/proj-2.png" label="GPS & IMU safety · ESP32" />
            <Tile to={byslug('stroke-prediction')} src="/assets/proj-3.png" label="Stroke prediction · ML" />
          </div>
        </Spread>

        <div className="mt-28 md:mt-40">
          <div className="mb-8 flex items-end justify-between gap-6">
            <h3 className="font-serif text-item">
              Every Project, Indexed<span className="dot">.</span>
            </h3>
            <p className="meta text-muted">{projects.length} case studies</p>
          </div>

          <ol className="border-t border-ink">
        {projects.map((p) => {
          const { name, sub } = split(p.title)
          return (
            <li key={p.slug} className="border-b border-line">
              <Link
                to={`/work/${p.slug}`}
                className="group relative grid grid-cols-[2.5rem_1fr_auto] items-baseline gap-x-4 gap-y-2 py-7 md:gap-x-6 md:py-9 lg:grid-cols-[16rem_1fr_12rem_2rem] xl:grid-cols-[16rem_1fr_16rem_2rem]"
              >
                <span className="meta text-muted">{p.idx}</span>
                <span>
                  <span className="block font-serif text-item transition-transform duration-500 ease-[var(--ease-out)] group-hover:translate-x-3">
                    {name}
                    <span className="dot opacity-0 transition-opacity group-hover:opacity-100">.</span>
                  </span>
                  {sub && <span className="mt-2 block text-sm text-ink-2">{sub}</span>}
                </span>
                <span className="meta col-start-2 flex flex-wrap items-center gap-x-3 gap-y-1 text-muted lg:col-start-auto">
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
                  className="row-start-1 col-start-3 text-xl transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-accent lg:col-start-4"
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
        </div>
      </div>
    </section>
  )
}

/** One image in a spread's grid, linking to its case study. */
function Tile({ to, src, label }) {
  return (
    <Link
      to={`/work/${to.slug}`}
      className="group relative block aspect-[16/10] overflow-hidden bg-[#f2f2f2]"
    >
      <img
        src={src}
        alt={`${to.title.split(' — ')[0]}: ${label}`}
        loading="lazy"
        decoding="async"
        className="size-full object-cover object-center transition-transform duration-700 ease-[var(--ease-out)] group-hover:scale-[1.03]"
      />
      <span className="meta absolute bottom-2 left-2 bg-paper/90 px-2 py-1 text-ink opacity-0 transition-opacity group-hover:opacity-100 sm:bottom-3 sm:left-3">
        {label} →
      </span>
    </Link>
  )
}
