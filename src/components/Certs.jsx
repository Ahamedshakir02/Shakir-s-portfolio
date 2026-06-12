import { certs } from '../data.jsx'

export default function Certs() {
  return (
    <section className="section" id="certs">
      <div className="wrap">
        <div className="sec-label reveal"><b>05</b> Certifications</div>
        <h2 className="sec-title reveal">Receipts.<br />I keep them.</h2>
        <div className="certs-grid" style={{ marginTop: 46 }}>
          {certs.map((c, i) => (
            <a href={c.href} target="_blank" rel="noopener noreferrer" className="cert reveal" key={c.title} data-delay={(i % 3) || undefined}>
              <div className="issuer"><span>{c.issuer}</span><span className="yr">{c.yr}</span></div>
              <h4>{c.title}</h4>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
