/**
 * A full-bleed portrait band with one line underneath, the pause between
 * the about page and the record.
 */
export default function Statement() {
  return (
    <section aria-label="In short" className="border-t border-line">
      <div className="relative overflow-hidden bg-[#ececec]">
        <div className="frame meta absolute inset-x-0 top-0 z-10 flex justify-between pt-6 text-ink md:pt-8">
          <span>Designer + Developer</span>
          <span>2026</span>
        </div>
        <img
          src="/assets/Ahamed-Shakir-Cutout.webp"
          alt="Ahamed Shakir"
          width="1254"
          height="1088"
          loading="lazy"
          decoding="async"
          className="relative left-1/2 block h-auto w-[min(130%,46rem)] max-w-none -translate-x-1/2 pt-16 sm:w-[min(100%,46rem)] md:pt-20"
        />
      </div>

      <div className="frame py-16 md:py-24">
        <blockquote className="mx-auto max-w-[22ch] text-center font-serif text-[clamp(2.25rem,5vw,4.5rem)] leading-[1] tracking-[-0.02em] text-balance">
          I Design It, Build It, and Put It{' '}
          <span className="text-accent">in Front of People.</span>
        </blockquote>

        <p className="mx-auto mt-10 flex max-w-3xl flex-col items-center gap-3 text-center text-sm text-muted sm:flex-row sm:gap-4 sm:text-left md:mt-14 md:text-base">
          <span className="shrink-0">
            Not <em className="font-semibold text-ink">demos</em>,
          </span>
          <span className="h-px w-12 bg-ink/40 sm:w-auto sm:flex-1" aria-hidden="true" />
          <span className="shrink-0">stuff that works when it matters.</span>
        </p>
      </div>
    </section>
  )
}
