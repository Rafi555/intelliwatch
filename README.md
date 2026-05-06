# IntelliWatch Website

A deployable React + TypeScript landing page for IntelliWatch: AI QC intelligence for garment factories.

## Tech stack

- Vite
- React
- TypeScript
- Plain CSS
- Vercel-ready configuration

## Local setup

```bash
npm install
npm run dev
```

Open the local URL shown in your terminal, usually `http://localhost:5173`.

## Production build

```bash
npm run build
npm run preview
```

## Deploy to GitHub and Vercel

1. Create a new GitHub repository.
2. Upload/push this project folder to the repository.
3. In Vercel, choose **New Project**.
4. Import the GitHub repository.
5. Vercel should detect Vite automatically.
6. Use these settings if asked:
   - Build command: `npm run build`
   - Output directory: `dist`
   - Install command: `npm install`

## Main files

- `src/App.tsx` — full landing page content and layout
- `src/styles.css` — complete responsive styling
- `public/favicon.svg` — favicon
- `public/og-image.svg` — social preview image
- `vercel.json` — Vercel SPA rewrite and build config

## Notes

The current site is a static marketing website. The pilot CTA uses a `mailto:` link. Replace it with a real form endpoint, CRM form, or calendar link when ready.
