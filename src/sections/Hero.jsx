import Monogram from '../ui/Monogram.jsx'

/**
 * The cover. A serif headline set tight on the left, a cut-out portrait bled
 * off the right and bottom edges, and small uppercase meta in the corners.
 */
export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden lg:min-h-[max(100svh,46rem)]">
      <div className="frame relative z-10 pt-32 md:pt-40 lg:flex lg:min-h-[max(100svh,46rem)] lg:flex-col lg:justify-center lg:pt-24 lg:pb-32">
        <h1 className="rise max-w-[11ch] font-serif text-hero">
          Ideas I&apos;ve Built Into Real Things<span className="dot">.</span>
        </h1>

        <p
          className="rise mt-7 max-w-[30ch] text-lede font-light text-ink-2 md:mt-9"
          style={{ animationDelay: '120ms' }}
        >
          A working record of the websites, apps and hardware I took from a sketch to{' '}
          <em className="font-serif text-[1.25em] text-ink">shipped.</em>
        </p>

        <div
          className="rise mt-9 flex items-end gap-8 md:mt-12"
          style={{ animationDelay: '220ms' }}
        >
          <p className="flex items-center gap-2 text-ink">
            <span className="font-serif text-xl">Ahamed Shakir</span>
            <span className="h-5 w-px bg-ink" aria-hidden="true" />
            <span className="text-sm font-medium">design + code</span>
          </p>
          <p className="meta text-ink">
            Est.
            <br />
            2022
          </p>
        </div>

        <p
          className="rise mt-9 flex flex-wrap gap-x-6 gap-y-2 text-sm font-medium"
          style={{ animationDelay: '300ms' }}
        >
          <a href="/#work" className="link inline-flex min-h-11 items-center">
            See the work →
          </a>
          <a href="/assets/Ahamed-Shakir-Resume.pdf" download className="link inline-flex min-h-11 items-center">
            Résumé ↓
          </a>
        </p>
      </div>

      {/* Portrait: in flow under the copy on small screens, bled off the
          right edge of the cover from lg up. */}
      <div
        className="fade-in pointer-events-none relative -mt-4 ml-auto w-[112%] max-w-none translate-x-[6%] sm:w-[88%] sm:translate-x-[8%] lg:absolute lg:right-0 lg:bottom-0 lg:mt-0 lg:h-[94%] lg:w-auto lg:translate-x-[10%] xl:translate-x-[6%]"
        style={{ animationDelay: '150ms' }}
      >
        <img
          src="/assets/Ahamed-Shakir-Cutout.webp"
          alt="Portrait of Ahamed Shakir"
          width="1254"
          height="1088"
          fetchpriority="high"
          decoding="async"
          className="h-full w-full object-contain object-bottom lg:w-auto"
        />
      </div>

      {/* Bottom corners of the cover, laid over the portrait like a print credit. */}
      <div className="absolute inset-x-0 bottom-0 z-10">
        <div className="frame meta flex items-end justify-between gap-6 pb-6 text-ink md:pb-8">
          <Monogram className="hidden sm:inline-flex" />
          <p className="hidden text-ink/70 md:block">
            © 2026 <b className="font-semibold text-ink">Ahamed Shakir</b> | Selected work 2023–2026
          </p>
          <p className="text-right [text-shadow:0_0_12px_#fff]">
            Open to roles
            <br />
            <b className="font-semibold">Remote first</b>
          </p>
        </div>
      </div>
    </section>
  )
}
