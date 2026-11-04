import fs from 'node:fs'
import path from 'node:path'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'vite'

// `npm run preview` only: serve /about → dist/about/index.html and unknown URLs → 404.html,
// the same way Vercel / Netlify / Apache serve the pre-rendered multi-page build.
const previewPages = {
  name: 'preview-pages',
  configurePreviewServer(server) {
    server.middlewares.use((req, _res, next) => {
      const [p, q] = req.url.split('?')
      if (!path.extname(p)) {
        const page = path.posix.join(p, 'index.html')
        req.url = (fs.existsSync(path.join('dist', page)) ? page : '/404.html') + (q ? `?${q}` : '')
      }
      next()
    })
  },
}

export default defineConfig({
  plugins: [react(), tailwindcss(), previewPages],
})
