# Victory Arikpo — Portfolio

Personal portfolio site. React + TypeScript + Vite + Tailwind CSS v4, dark-mode-first
with a light mode toggle (persisted in `localStorage`). Content lives in
`src/data/projects.ts` and `src/data/skills.ts` — update those as work progresses,
no need to touch the components.

This is a standalone project, separate from the Nexa repo, so it can be pushed to its
own GitHub repo and deployed independently.

## Local development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

Output goes to `dist/`.

## Deploying to Vercel

1. Push this repo to GitHub (own repo, not a subfolder of another project).
2. In Vercel: **Add New → Project**, import the GitHub repo.
3. Framework preset: **Vite** (auto-detected). No environment variables needed.
4. Deploy. Vercel builds with `npm run build` and serves `dist/` automatically.

Every push to the default branch redeploys automatically once connected.

## Updating content

- New or changed projects: edit `src/data/projects.ts`.
- New or changed skills: edit `src/data/skills.ts`.
- Everything else (hero copy, contact links, certifications) lives directly in the
  matching component under `src/components/`.
