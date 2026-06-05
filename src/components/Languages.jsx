import { languages } from '../data.jsx'

export default function Languages() {
  return (
    <section className="section" id="languages">
      <div className="wrap">
        <div className="sec-label reveal"><b>07</b> Languages</div>
        <h2 className="sec-title reveal">I'll meet you<br />in your language.</h2>
        <div className="langs" style={{ marginTop: 46 }}>
          {languages.map((l, i) => (
            <div className="lang reveal" key={l.name} data-delay={i || undefined} style={{ '--lvl': l.lvl }}>
              <h4>{l.name}</h4>
              <small>{l.level}</small>
              <div className="meter"><i /></div>
            </div>
          ))}
        </div>
        <div className="note reveal" style={{ marginTop: 28 }}>
          <span className="tagm">Writing · soon</span>
          <span>
            Notes on Edge AI, IoT, and applied NLP are coming — once I stop building long enough to
            write them down. Want a blog section here? Say the word and it's done.
          </span>
        </div>
      </div>
    </section>
  )
}
