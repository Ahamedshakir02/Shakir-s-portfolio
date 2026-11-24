// Small true things, placed around the portrait like notes on a pinboard.
// x / y are percentages of the map on large screens.
const notes = [
  { t: 'Speaks four languages', x: 50, y: 6 },
  { t: 'Started a µLearn chapter solo', x: 20, y: 22 },
  { t: 'NASA Space Apps, twice', x: 80, y: 22 },
  { t: 'Learns things by teaching them', x: 13, y: 52 },
  { t: 'Solders as well as codes', x: 86, y: 50 },
  { t: 'Ran 10+ workshops', x: 24, y: 80 },
  { t: 'Deploys until it stops breaking', x: 76, y: 78 },
  { t: 'Four apps, one codebase', x: 50, y: 95 },
]

const pill =
  'inline-flex items-center rounded-full bg-[#efefef] px-4 py-2.5 text-[0.8125rem] whitespace-nowrap text-ink sm:px-5 sm:py-3 sm:text-sm lg:text-[0.95rem]'

/** "Off the record": a bubble map of small facts around a round portrait. */
export default function OffRecord() {
  return (
    <section id="off-the-record" className="scroll-mt-12 border-t border-line py-20 md:py-28">
      <div className="frame">
        <div className="meta flex justify-between gap-6 text-muted">
          <span>(05) Off the record</span>
          <span>The small print</span>
        </div>

        <h2 className="mt-10 text-center font-serif text-title md:mt-14">
          Off the Record<span className="dot">.</span>
        </h2>

        {/* Phones and tablets: portrait, then the notes as a centred cloud. */}
        <div className="mt-12 lg:hidden">
          <img
            src="/assets/Ahamed-Shakir-Avatar.webp"
            alt="Ahamed Shakir"
            width="480"
            height="480"
            loading="lazy"
            className="mx-auto size-36 rounded-full border-4 border-paper shadow-[0_0_0_1px_var(--color-line)] sm:size-44"
          />
          <ul className="mx-auto mt-10 flex max-w-xl flex-wrap justify-center gap-2">
            {notes.map((n) => (
              <li key={n.t} className={pill}>{n.t}</li>
            ))}
          </ul>
        </div>

        {/* Large screens: the notes orbit the portrait, joined by dotted threads. */}
        <div className="relative mx-auto mt-14 hidden h-[36rem] max-w-5xl lg:block">
          <svg
            className="absolute inset-0 size-full text-muted/50"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            {notes.map((n, i) => {
              const cx = (50 + n.x) / 2 + (i % 2 ? 6 : -6)
              const cy = (50 + n.y) / 2
              return (
                <path
                  key={n.t}
                  d={`M50 50 Q${cx} ${cy} ${n.x} ${n.y}`}
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1"
                  strokeDasharray="2 4"
                  vectorEffect="non-scaling-stroke"
                />
              )
            })}
          </svg>

          <img
            src="/assets/Ahamed-Shakir-Avatar.webp"
            alt="Ahamed Shakir"
            width="480"
            height="480"
            loading="lazy"
            className="absolute top-1/2 left-1/2 size-40 -translate-x-1/2 -translate-y-1/2 rounded-full border-4 border-paper shadow-[0_0_0_1px_var(--color-line)]"
          />

          <ul>
            {notes.map((n) => (
              <li
                key={n.t}
                className={`${pill} absolute -translate-x-1/2 -translate-y-1/2`}
                style={{ left: `${n.x}%`, top: `${n.y}%` }}
              >
                {n.t}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
