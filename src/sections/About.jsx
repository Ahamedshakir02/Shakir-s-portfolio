import Section from '../ui/Section.jsx'

export default function About() {
  return (
    <Section id="about" no="02" label="About" title="The Short Version">
      <div className="grid gap-12 md:grid-cols-[12rem_1fr] md:gap-x-6 lg:grid-cols-[16rem_1fr]">
        <dl className="meta grid content-start gap-5 text-muted">
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
            <dd className="mt-1 text-ink">English, Malayalam,<br />Tamil, Hindi</dd>
          </div>
        </dl>

        <div>
          <p className="max-w-[28ch] font-serif text-[clamp(1.75rem,3.4vw,3rem)] leading-[1.1] text-balance">
            CS grad from MES College of Engineering, Kuttippuram. I work across the whole thing: the
            design, the code, and the part where <em>a real person</em> has to use it.
          </p>

          <div className="mt-12 grid gap-8 text-ink-2 lg:grid-cols-2 lg:gap-12">
            <p>
              Most of what I make starts with a problem someone actually has. A typing centre in
              Ajman that customers couldn&apos;t find online. A construction firm in Kerala that
              needed a site as good as its builds. Police stations buried in FIR paperwork. A rider
              who can&apos;t call for help after a crash.
            </p>
            <p>
              I started the µLearn chapter at my college and grew it campus-wide, and learned AWS,
              Docker and Terraform by deploying things until they stopped breaking. I&apos;ve been
              freelancing since graduating, and I&apos;m open to engineering roles, remote first and
              happy to relocate.
            </p>
          </div>
        </div>
      </div>
    </Section>
  )
}
