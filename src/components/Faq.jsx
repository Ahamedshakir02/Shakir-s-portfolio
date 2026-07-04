import { faqs } from '../data.jsx'

export default function Faq() {
  return (
    <section className="section" id="faq">
      <div className="wrap">
        <div className="sec-label reveal"><b>08</b> FAQ</div>
        <h2 className="sec-title reveal">Quick answers,<br />straight up.</h2>
        <div className="faq-list" style={{ marginTop: 46 }}>
          {faqs.map((f, i) => (
            <details className="faq-item reveal" key={f.q} data-delay={(i % 3) || undefined}>
              <summary>
                <h3>{f.q}</h3>
                <span className="faq-mark" aria-hidden="true" />
              </summary>
              <p>{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
