import Monogram from './Monogram.jsx'

/** The bottom edge of the page: monogram, credit line, and the two documents. */
export default function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="frame meta flex flex-col gap-4 py-8 text-muted md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-5">
          <Monogram />
          <p>
            © {new Date().getFullYear()} <b className="font-semibold text-ink">Ahamed Shakir</b> | Kerala, India
          </p>
        </div>
        <p className="flex flex-wrap gap-x-6">
          <a href="/assets/Ahamed-Shakir-CV.pdf" download className="inline-flex min-h-11 items-center hover:text-ink">
            Full CV ↓
          </a>
          <a
            href="https://g.dev/ahamedshakir"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-11 items-center hover:text-ink"
          >
            Google Developer profile ↗
          </a>
        </p>
      </div>
    </footer>
  )
}
