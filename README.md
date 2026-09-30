# sidieyel.vercel.app

Source of my portfolio — **[sidieyel.vercel.app](https://sidieyel.vercel.app/en)**.

A single-page site listing the products I've shipped (Bedel, Sha6er, Tahdir, Smart Claim, AB Group Gift Cards), my open-source contributions to React, and a downloadable CV.

## Stack

- **Next.js 14** (App Router) · **React 18** · **TypeScript**
- **Tailwind CSS**, dark mode via `prefers-color-scheme`
- Locale routing (`/en`, `/ar`) with a small dictionary layer and middleware
- `lucide-react` icons, `shadcn/ui`-style primitives in `src/components/ui`
- Deployed on **Vercel**; the CV button serves `public/assets/resume.pdf`

## Run locally

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # production build + type check
```

## Structure

```
src/
  app/[locale]/        route + layout per locale
  landing_pages/       all page content (experience, projects, open source) lives in one file
  Layouts/             header, menu, wrapper
  dict/                en / ar strings
  components/ui/       button, card, badge
public/assets/         resume.pdf
```

Content is plain TypeScript data at the top of `src/landing_pages/WebsiteLandingPage.tsx` — editing the site is editing those arrays.

## License

Code: MIT. Text and images are mine — please don't reuse them as your own.
