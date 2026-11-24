/**
 * A centred manifesto, set like the philosophy page of a printed folio.
 */
export default function About() {
  return (
    <section id="about" className="scroll-mt-12 border-t border-line py-24 md:py-36">
      <div className="frame">
        <div className="meta flex justify-between gap-6 text-muted">
          <span>(02) About</span>
          <span>Kerala, India</span>
        </div>

        <div className="mx-auto mt-14 max-w-[40rem] text-center md:mt-20">
          <h2 className="font-serif text-[clamp(2.5rem,5vw,4.25rem)] leading-[0.98] tracking-[-0.02em] text-balance">
            Most of What I Make Starts With a Real Problem<span className="dot">.</span>
          </h2>

          <div className="mt-10 space-y-6 text-lede text-pretty md:mt-12">
            <p className="font-light text-ink-2">
              A typing centre in Ajman that customers couldn&apos;t find online. A construction firm
              in Kerala that needed a site as good as its builds. Police stations buried in FIR
              paperwork. A rider who can&apos;t call for help after a crash.
            </p>
            <p className="font-medium text-ink">
              So I work across the whole thing: the design, the code, and the part where a real
              person has to use it.
            </p>
            <p className="font-light text-ink-2">
              I started the µLearn chapter at my college and grew it campus-wide, and learned AWS,
              Docker and Terraform by deploying things until they stopped breaking.
            </p>
          </div>

          <dl className="meta mx-auto mt-14 grid max-w-lg grid-cols-3 gap-4 border-t border-line pt-6 text-muted">
            <div>
              <dt>Based in</dt>
              <dd className="mt-1 text-ink">Kerala, India</dd>
            </div>
            <div>
              <dt>Studied</dt>
              <dd className="mt-1 text-ink">B.Tech CSE, KTU</dd>
            </div>
            <div>
              <dt>Speaks</dt>
              <dd className="mt-1 text-ink">4 languages</dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  )
}
