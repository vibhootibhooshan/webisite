# VashishthTech — Company Website

React + Vite + Tailwind CSS v4 + React Router + Lucide icons — a **multi-page website**: `npm run build` pre-renders every page into its own HTML file (fast, SEO-friendly, works without JavaScript for search engines).

Pages: Home, Services, 10 service detail pages (`/services/website-development`, …), About Us, Contact Us, 404.

## Run locally
```bash
npm install
npm run dev       # http://localhost:5173
npm run build     # production build → dist/
npm run preview   # preview the production build
```

## 1. Add your real business details (required)
Edit **`src/config/site.js`** — name, owner, email, phone, WhatsApp (digits with country code, e.g. `919876543210`), address, domain, optional Google Maps embed URL and optional form endpoint.

Then replace `https://your-domain.com` and the `[YOUR …]` placeholders in `index.html` (Open Graph image URL and JSON-LD business info). `sitemap.xml` and `robots.txt` are generated automatically from `site.domain` at build time.

## 2. Contact form
- Default: on submit, the enquiry opens in WhatsApp pre-filled (no backend needed).
- To receive enquiries by email instead, create a free form at [Formspree](https://formspree.io) and put its endpoint URL in `formEndpoint` in `site.js`.

## 3. Deploy
`npm run build` creates `dist/` with one HTML file per page (`dist/about/index.html`, `dist/services/website-development/index.html`, …), `404.html`, `sitemap.xml` and `robots.txt`. Upload/serve that folder anywhere static.

**Vercel:** push to GitHub → vercel.com → New Project → import repo → Framework preset: Vite → Deploy.

**Netlify:** New site from Git → Build command `npm run build`, Publish directory `dist`.

**cPanel / shared hosting:** run `npm run build` and upload the *contents* of `dist/` to `public_html`. Optionally add `.htaccess` with `ErrorDocument 404 /404.html`.

Then connect your domain, enable HTTPS, and submit `https://your-domain.com/sitemap.xml` in Google Search Console.

## Structure
```
src/config/site.js        business details (edit this)
src/data/                 services, technologies and images.js (all photo URLs, change photos here)
src/components/           Header, Footer, Logo, Seo, TechStack, ui (Button, Reveal, PageHero, CtaSection…)
src/pages/                Home, Services, ServiceDetail, About, Contact, NotFound
src/data/serviceDetails/  content for the 10 service detail pages
src/entry-server.jsx      build-time renderer (routes list)
scripts/prerender.js      writes one HTML file per page + sitemap.xml + robots.txt
public/                   favicon/logo, og-image.png
```
