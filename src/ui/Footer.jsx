export default function Footer() {
  return (
    <footer className="border-t border-line py-10">
      <div className="wrap label flex flex-col gap-3 text-muted sm:flex-row sm:items-center sm:justify-between">
        <p>
          © {new Date().getFullYear()} Ahamed Shakir M P ·{' '}
          <b className="font-medium text-accent">Available worldwide</b>
        </p>
        <p className="flex flex-wrap items-center gap-x-4 gap-y-2">
          <a href="/assets/Ahamed-Shakir-CV.pdf" download className="hover:text-ink">
            Full CV ↓
          </a>
          <a
            href="https://g.dev/ahamedshakir"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-ink"
          >
            Google Developer Profile ↗
          </a>
        </p>
      </div>
    </footer>
  )
}
