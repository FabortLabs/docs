# Contributing to Fabort Docs

This documentation is a working source of truth for Fabort services, products,
platform concepts, and team workflows.

## Before editing

- Verify claims against the current source code and deployed behavior.
- Avoid documenting assumptions as facts. If something is inferred, say so.
- Prefer precise, operational language over marketing language.
- Keep stale or uncertain sections clearly marked.

## Writing docs

- Put documentation pages under `content/docs`.
- Update the nearest `meta.json` when adding, removing, or reordering pages.
- Use short sections and concrete examples where they reduce ambiguity.
- Link related services or concepts when a page depends on another area.

## Verification

Run these checks before submitting changes:

```bash
npm run types:check
npm run build
```

## AI-generated content

AI assistance is allowed, but generated content must be reviewed before it is
treated as accurate. Contributors are responsible for checking generated text
against current code, infrastructure, and team decisions.
