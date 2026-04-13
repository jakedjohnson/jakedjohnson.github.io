# jakedjohnson.github.io

Personal site. Built with Astro + Tailwind CSS.

**Live:** https://jakedjohnson.github.io

## Dev

```bash
npm install
npm run dev        # http://localhost:4321
npm run build      # builds to dist/
npm run preview    # preview the build
```

## Adding your photo

Drop `jake.jpg` (or `.png`, `.webp`) into `public/images/`. The hero section picks it up automatically.

## Deployment

Deploys automatically to GitHub Pages via `.github/workflows/deploy.yml` on every push to `main`.

**First-time setup:**
1. Create the repo as `jakedjohnson/jakedjohnson.github.io` on GitHub
2. Push this code to `main`
3. Go to Settings → Pages → Source: **GitHub Actions**
4. Done — the workflow handles the rest

## Adding projects

Edit `src/pages/projects.astro` — projects are just arrays of objects at the top of the file. Future plan: each project gets its own markdown-based page.

## Structure

```
src/
  layouts/Layout.astro     # HTML shell, meta, fonts
  components/
    Nav.astro              # Fixed top nav
    ProjectCard.astro      # Reusable card component
  pages/
    index.astro            # Splash page
    projects.astro         # Projects page
  styles/global.css        # Base styles, scrollbar, selection color
public/
  favicon.svg
  images/                  # Drop jake.jpg here
.github/workflows/
  deploy.yml               # GitHub Pages deploy
```
