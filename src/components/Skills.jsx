import { skills } from '../data.jsx'

export default function Skills() {
  return (
    <section className="section" id="skills">
      <div className="wrap">
        <div className="sec-label reveal"><b>02</b> Capabilities</div>
        <h2 className="sec-title reveal">I speak fluent silicon<br />and software.</h2>
        <div className="skills-list" style={{ marginTop: 48 }}>
          {skills.map((row) => (
            <div className="skill-row reveal" key={row.idx}>
              <h3><span className="idx">{row.idx}</span> {row.name}</h3>
              <div className="chips">
                {row.chips.map((c) => (
                  <span className="chip" key={c}>{c}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
