# Limanex Studio Website

Static multi-page website for **Limanex Studio** (`limanexstudio.com`), styled with the Tactile Cartridge dark design system.

## Structure

- Multi-page static HTML entrypoints (`index.html`, `apps.html`, `apps/vitacase.html`, `apps/meowoirs.html`, `games.html`, `ai.html`, `contact.html`, `delete-account.html`, `privacy/`, `terms/`, `disclaimer/`, `404.html`)
- Shared stylesheet (`styles.css`) and progressive-enhancement script (`main.js`)
- Self-hosted media assets under `assets/`
- Root SEO, icon, manifest, and AdMob verification files (`public/app-ads.txt`, `public/ads.txt`, `public/robots.txt`, `public/sitemap.xml`, favicons)

## Build

```bash
npm run build
```

Builds all static pages, assets, and root `public/` files into `dist/` for deployment on Vercel (`vercel.json`).
