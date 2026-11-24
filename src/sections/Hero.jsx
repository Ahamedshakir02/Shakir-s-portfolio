import Monogram from '../ui/Monogram.jsx'

/**
 * The cover, composed per screen rather than shrunk:
 *
 * - Phone: headline, then the portrait tucked up under its last line and bled
 *   off the right edge, then the intro and actions on a hairline.
 * - Tablet and landscape phone: headline across the top, intro on the left,
 *   portrait on the right bleeding off the right and bottom edges.
 * - Wide landscape screens: headline and intro in a column on the left, the
 *   portrait filling the right of the cover.
 */
export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden wide:min-h-[max(100svh,40rem)]">
      <div className="frame pt-24 sm:pt-32 wide:flex wide:min-h-[max(100svh,40rem)] wide:flex-col wide:justify-center wide:pt-28 wide:pb-24">
        <h1 className="rise relative z-10 max-w-[9ch] font-serif landscape:max-w-[11ch] text-[clamp(3.5rem,min(18vw,20vh),9rem)] leading-[0.88] tracking-[-0.045em] wide:text-hero">
          Ideas I&apos;ve built into real things<span className="dot">.</span>
        </h1>

        <div>
          {/* Portrait */}
          <div
            className="fade-in pointer-events-none -mt-[16vw] mr-[calc(var(--gutter)*-1)] ml-auto w-[86%] sm:absolute sm:right-0 sm:bottom-0 sm:m-0 sm:w-[56%] wide:h-[92%] wide:w-[56%] xl:w-[58%]"
            style={{ animationDelay: '150ms' }}
          >
            <img
              src="/assets/Ahamed-Shakir-Cutout.webp"
              alt="Portrait of Ahamed Shakir"
              width="1254"
              height="1088"
              fetchpriority="high"
              decoding="async"
              className="h-auto w-full wide:h-full wide:object-contain wide:object-right-bottom"
            />
          </div>

          {/* Intro and actions */}
          <div className="relative z-10 border-t border-ink pt-8 pb-14 sm:max-w-[44%] sm:border-0 sm:pt-10 sm:pb-16 wide:max-w-[min(30rem,40vw)] wide:p-0 wide:pt-8">
            <p className="rise max-w-[30ch] text-lede font-light text-ink-2" style={{ animationDelay: '120ms' }}>
              A working record of the websites, apps and hardware I took from a sketch to{' '}
              <em>shipped.</em>
            </p>

            <div className="rise mt-8 flex items-end gap-8" style={{ animationDelay: '220ms' }}>
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

            <div
              className="rise mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm font-medium"
              style={{ animationDelay: '300ms' }}
            >
              <a
                href="/#work"
                className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-ink px-6 text-paper transition-colors hover:bg-accent sm:w-auto"
              >
                See the work <span aria-hidden="true">→</span>
              </a>
              <a href="mailto:ahamedshakir02@gmail.com" className="link inline-flex min-h-11 items-center">
                Email me
              </a>
              <a href="/assets/Ahamed-Shakir-Resume.pdf" download className="link inline-flex min-h-11 items-center">
                Résumé ↓
              </a>
            </div>

            <p className="rise meta mt-6 flex items-start gap-2.5 text-ink-2" style={{ animationDelay: '360ms' }}>
              <span className="relative mt-[0.3em] flex size-2 shrink-0" aria-hidden="true">
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-[#1f9d55] opacity-60" />
                <span className="relative inline-flex size-2 rounded-full bg-[#1f9d55]" />
              </span>
              <span>
                Open to full-time roles
                <br />
                and freelance · Remote first
              </span>
            </p>
          </div>
        </div>
      </div>

      {/* Bottom-left stamp, like the mark in the corner of a print. */}
      <div className="absolute bottom-0 left-0 z-10 hidden wide:block">
        <div className="frame pb-8">
          <Monogram />
        </div>
      </div>
    </section>
  )
}
