# Docs

Operational guides for this project. For the codebase itself, see the
[root README](../README.md).

| Guide | What it covers |
| --- | --- |
| [custom-domain-deployment.md](custom-domain-deployment.md) | Pointing a custom domain at the Vercel deployment: DNS records, SSL, and every place the canonical URL has to change. |
| [google-tools-setup.md](google-tools-setup.md) | Search Console, Analytics, and the rest of the Google tooling — verification, sitemap submission, and indexing. |

> Both guides use `shakir-s-portfolio.vercel.app` as the current canonical URL.
> If that changes, it appears in `index.html` (canonical, Open Graph, and the JSON-LD
> `@graph`), `public/sitemap.xml`, `public/robots.txt`, and `public/llms.txt` — change
> them together.
