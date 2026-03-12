# Ajay AI Portfolio (Next.js + Tailwind + GitHub Pages)

This repo is set up to deploy a **static export** of a Next.js site to **GitHub Pages**.

## Local development

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Deploy to GitHub Pages

1. Create a GitHub repo.
   - **Recommended (user site):** `AjaySarvajeeth.github.io`
   - Alternative (project site): any repo name (site will be served under `/<repo>/`).

2. Push this code to the repo's `main` branch.

3. In GitHub:
   - Go to **Settings → Pages**
   - Under **Build and deployment**, set **Source** to **GitHub Actions**

4. The workflow at `.github/workflows/pages.yml` will deploy the site.

## Customize content

- Update personal info: `data/profile.ts`
- Update projects: `data/projects.ts`
- Replace images in `public/projects/*.png` (optional)
- Put your resume in `public/resume.pdf`

## Important

- Update `metadataBase` in `app/layout.tsx` to your real domain/URL.

