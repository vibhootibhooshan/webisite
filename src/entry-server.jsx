// Build-time only: used by scripts/prerender.js to turn every route into its own HTML file.
import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router'
import { AppRoutes } from './App'
import { head } from './components/Seo'
import { serviceCategories } from './data/services'
import { site } from './config/site'

export const routes = ['/', '/services', '/about', '/contact', ...serviceCategories.map((c) => `/services/${c.id}`)]
export { site }

export function render(url) {
  const html = renderToString(<StaticRouter location={url}><AppRoutes /></StaticRouter>)
  return { html, head: { ...head } }
}
