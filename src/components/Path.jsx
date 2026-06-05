import { Fragment } from 'react'
import { timeline } from '../data.jsx'

export default function Path() {
  return (
    <section className="section" id="path">
      <div className="wrap">
        <div className="sec-label reveal"><b>04</b> Experience &amp; education</div>
        <h2 className="sec-title reveal">Leading, learning,<br />and shipping.</h2>
        <div className="tl" style={{ marginTop: 42 }}>
          {timeline.map((item) => (
            <div className="tl-item reveal" key={item.title}>
              <div>
                <div className="tl-when">{item.when}</div>
                <div className="tl-where">
                  {item.where.map((w, i) => (
                    <Fragment key={w}>{w}{i < item.where.length - 1 && <br />}</Fragment>
                  ))}
                </div>
              </div>
              <div>
                <h3>{item.title}</h3>
                <p className="tl-role">{item.role}</p>
                <ul className="tl-list">
                  {item.list.map((li, i) => <li key={i}>{li}</li>)}
                </ul>
                {item.sub && <p className="tl-sub">{item.sub}</p>}
                {item.courses && (
                  <div className="course">
                    {item.courses.map((c) => <span key={c}>{c}</span>)}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
