import { aboutTags } from '../data.jsx'

export default function About() {
  return (
    <section className="section" id="about">
      <div className="wrap">
        <div className="sec-label reveal"><b>01</b> The gist</div>
        <div className="about-grid">
          <p className="about-lead reveal">
            Fresh CS grad from <span className="hl">APJ Abdul Kalam Technological University</span>,
            building across hardware and software — embedded systems, applied NLP, machine learning,
            and mobile. Basically, if it computes, I've probably poked at it.
          </p>
          <div className="about-body reveal" data-delay="1">
            <p>
              My favourite spot is the bit most people avoid: where physical hardware meets messy
              software. Microcontrollers and IMU sensors on one end, LLM-powered query interfaces and
              React Native apps on the other. If a project has real stakes, I'm in.
            </p>
            <p>
              The proof is in the work — an accident-detection system that bridges embedded hardware
              with a live mobile app, and an NLP system that reads and answers questions about
              unstructured police documents. Now I'm hunting for international engineering roles where
              I can build things that genuinely matter (and ship them).
            </p>
            <div className="about-tags">
              {aboutTags.map((t) => (
                <span className="tag" key={t}>{t}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
