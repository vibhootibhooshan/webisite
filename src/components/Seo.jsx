import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { site } from '../config/site'

// ponytail: filled during build-time render and read by scripts/prerender.js (one page renders at a time).
export const head = {}

const setMeta = (attr, key, content) => {
  let el = document.head.querySelector(`meta[${attr}="${key}"]`)
  if (!el) { el = document.createElement('meta'); el.setAttribute(attr, key); document.head.appendChild(el) }
  el.setAttribute('content', content)
}

// Per-page title, description, canonical and Open Graph tags.
export default function Seo({ title, description }) {
  const { pathname } = useLocation()
  const fullTitle = title ? `${title} | ${site.name}` : `${site.name} — ${site.tagline}`
  const url = site.domain + (pathname === '/' ? '/' : pathname.replace(/\/$/, ''))
  if (typeof window === 'undefined') Object.assign(head, { title: fullTitle, description, url })

  useEffect(() => {
    document.title = fullTitle
    setMeta('name', 'description', description)
    setMeta('property', 'og:title', fullTitle)
    setMeta('property', 'og:description', description)
    setMeta('property', 'og:url', url)
    setMeta('name', 'twitter:title', fullTitle)
    setMeta('name', 'twitter:description', description)
    let link = document.head.querySelector('link[rel="canonical"]')
    if (!link) { link = document.createElement('link'); link.rel = 'canonical'; document.head.appendChild(link) }
    link.href = url
  }, [fullTitle, description, url])
  return null
}
