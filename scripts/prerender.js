// Turns the built app into a real multi-page site: one HTML file per route
// (dist/services/index.html, dist/services/website-development/index.html, …) plus 404.html and sitemap.xml.
import fs from 'node:fs'
import path from 'node:path'
import { pathToFileURL } from 'node:url'

const dist = path.resolve('dist')
const { render, routes, site } = await import(pathToFileURL(path.resolve('dist-ssr/entry-server.js')).href)
const template = fs.readFileSync(path.join(dist, 'index.html'), 'utf8')

const esc = (s) => s.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;')

function page(url) {
  const { html, head } = render(url)
  const t = esc(head.title), d = esc(head.description)
  return template
    .replace(/<title>.*?<\/title>/s, `<title>${t}</title>`)
    .replace(/(<meta name="description" content=")[^"]*/, `$1${d}`)
    .replace(/(<link rel="canonical" href=")[^"]*/, `$1${head.url}`)
    .replace(/(<meta property="og:title" content=")[^"]*/, `$1${t}`)
    .replace(/(<meta property="og:description" content=")[^"]*/, `$1${d}`)
    .replace(/(<meta property="og:url" content=")[^"]*/, `$1${head.url}`)
    .replace(/(<meta name="twitter:title" content=")[^"]*/, `$1${t}`)
    .replace(/(<meta name="twitter:description" content=")[^"]*/, `$1${d}`)
    .replace('<div id="root"></div>', () => `<div id="root">${html}</div>`)
}

for (const url of routes) {
  const file = path.join(dist, url, 'index.html')
  fs.mkdirSync(path.dirname(file), { recursive: true })
  fs.writeFileSync(file, page(url))
  console.log('  page ', url)
}

fs.writeFileSync(path.join(dist, '404.html'),
  page('/404').replace(/<link rel="canonical"[^>]*>\s*/, '').replace('</head>', '  <meta name="robots" content="noindex" />\n  </head>'))
console.log('  page  404.html')

const today = new Date().toISOString().slice(0, 10)
fs.writeFileSync(path.join(dist, 'sitemap.xml'),
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${routes
    .map((u) => `  <url><loc>${site.domain}${u}</loc><lastmod>${today}</lastmod></url>`).join('\n')}\n</urlset>\n`)
fs.writeFileSync(path.join(dist, 'robots.txt'), `User-agent: *\nAllow: /\n\nSitemap: ${site.domain}/sitemap.xml\n`)
fs.rmSync('dist-ssr', { recursive: true, force: true })
console.log(`  ${routes.length} pages + 404.html + sitemap.xml + robots.txt`)
