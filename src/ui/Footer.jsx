export default function Footer() {
  return (
    <footer className="wrap mt-16 flex flex-wrap items-center justify-between gap-x-6 py-8 text-small text-muted md:mt-24">
      <p>© {new Date().getFullYear()} Ahamed Shakir</p>
      <p className="flex gap-4">
        <a href="/assets/Ahamed-Shakir-CV.pdf" download className="quiet inline-flex min-h-11 items-center">
          CV ↓
        </a>
        <a
          href="https://github.com/ahamedshakir02"
          target="_blank"
          rel="noopener noreferrer"
          className="quiet inline-flex min-h-11 items-center"
        >
          GitHub
        </a>
      </p>
    </footer>
  )
}
