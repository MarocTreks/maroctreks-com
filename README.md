# Maroc Treks

Independent Next.js website for Maroc Treks. All tour and editorial content required at runtime is stored locally in this repository. The application does not query or depend on a previous CMS or website.

## Getting Started

Install dependencies and run the development server:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

Production checks:

```bash
npm run lint
npm run build
node scripts/audit-site.mjs http://127.0.0.1:3102
```

The canonical production origin is configured once in `src/lib/seo.tsx`. Historical same-domain redirects in `next.config.ts` are retained solely to preserve working links and search equity.
