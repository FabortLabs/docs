# Fabort Docs

Fabort's documentation site, built with TanStack Start, Fumadocs, and local
MDX content.

## Disclaimer

This documentation was generated with AI assistance and may contain stale,
incomplete, or incorrect information. Treat it as a working draft: verify
service behavior against the source code, running environments, and current
team decisions before relying on it for production work.

## Development

```bash
npm install
npm run dev
```

The development server listens on port `5175` by default. Set `PORT` to
override it.

## Verification

```bash
npm run types:check
npm run build
```

Documentation pages live in `content/docs`. Folder `meta.json` files control
sidebar labels and page ordering.
