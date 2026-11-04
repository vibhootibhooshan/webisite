import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { whatsappLink } from '../config/site'
import { photo } from '../data/images'

export const container = 'mx-auto w-full max-w-7xl px-5 sm:px-6 lg:px-8'

const variants = {
  primary: 'bg-royal text-white hover:bg-royal-dark',
  dark: 'bg-navy text-white hover:bg-navy-700',
  outline: 'border border-navy/20 bg-white text-navy hover:border-navy',
  light: 'bg-white text-navy hover:bg-surface',
  ghostLight: 'border border-white/35 text-white hover:border-white hover:bg-white/5',
}

// <Button to="/contact"> (router link) | <Button href="https://..."> (external) | <Button type="submit">
export function Button({ to, href, variant = 'primary', className = '', children, ...props }) {
  const cls = `inline-flex items-center justify-center gap-2 rounded-md px-5 py-3 text-[15px] font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-royal disabled:opacity-60 ${variants[variant]} ${className}`
  if (to) return <Link to={to} className={cls} {...props}>{children}</Link>
  if (href) return <a href={href} className={cls} target={href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer" {...props}>{children}</a>
  return <button className={cls} {...props}>{children}</button>
}

// Small uppercase label above headings.
export function Eyebrow({ children, dark = false, className = '' }) {
  return (
    <p className={`flex items-center gap-3 font-mono text-xs font-medium uppercase tracking-[0.14em] ${dark ? 'text-blue-300' : 'text-royal'} ${className}`}>
      <span className="h-px w-6 bg-current" aria-hidden="true" />{children}
    </p>
  )
}

export function SectionHeading({ eyebrow, title, subtitle, align = 'left', dark = false }) {
  const center = align === 'center'
  return (
    <div className={`max-w-3xl ${center ? 'mx-auto text-center [&>p:first-child]:justify-center' : ''}`}>
      {eyebrow && <Eyebrow dark={dark}>{eyebrow}</Eyebrow>}
      <h2 className={`mt-4 text-[28px] font-semibold leading-tight tracking-tight sm:text-4xl ${dark ? 'text-white' : 'text-navy'}`}>{title}</h2>
      {subtitle && <p className={`mt-4 text-base leading-relaxed sm:text-lg ${dark ? 'text-slate-300' : 'text-muted'}`}>{subtitle}</p>}
    </div>
  )
}

// Responsive photo from src/data/images.js (base URL) with srcset + lazy loading.
export function Photo({ src, alt, sizes = '100vw', priority = false, width = 1200, height = 800, className = '' }) {
  return (
    <img
      src={photo(src, 1200)}
      srcSet={[640, 1024, 1600].map((w) => `${photo(src, w)} ${w}w`).join(', ')}
      sizes={sizes} alt={alt} width={width} height={height}
      loading={priority ? 'eager' : 'lazy'} fetchPriority={priority ? 'high' : undefined} decoding="async"
      className={`object-cover ${className}`}
    />
  )
}

// Inner-page header: full-width photo with navy overlay, breadcrumb, H1.
// breadcrumb: [{ label, to }] — the current page is appended automatically from `title` unless `crumb` is given.
export function PageHero({ image, imageAlt = '', breadcrumb = [], crumb, title, subtitle, children }) {
  return (
    <section className="relative isolate overflow-hidden bg-navy">
      {image && <Photo src={image} alt={imageAlt} priority sizes="100vw" className="absolute inset-0 -z-10 h-full w-full" />}
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-navy via-navy/90 to-navy/60" aria-hidden="true" />
      <div className={`${container} py-14 sm:py-24 lg:py-28`}>
        <nav aria-label="Breadcrumb">
          <ol className="flex flex-wrap items-center gap-2 text-sm text-slate-300">
            {[{ label: 'Home', to: '/' }, ...breadcrumb].map((b) => (
              <li key={b.to} className="flex items-center gap-2">
                <Link to={b.to} className="hover:text-white">{b.label}</Link><span aria-hidden="true">/</span>
              </li>
            ))}
            <li aria-current="page" className="text-white">{crumb ?? title}</li>
          </ol>
        </nav>
        <h1 className="mt-5 max-w-3xl text-[34px] font-semibold leading-[1.15] tracking-tight text-white sm:text-5xl">{title}</h1>
        {subtitle && <p className="mt-5 max-w-2xl text-base leading-relaxed text-slate-200 sm:text-lg">{subtitle}</p>}
        {children && <div className="mt-8 flex flex-col gap-3 sm:flex-row">{children}</div>}
      </div>
    </section>
  )
}

// Closing call-to-action band, reused at the bottom of pages.
export function CtaSection({
  title = 'Have a project in mind? Let’s talk.',
  subtitle = 'Tell us what you want to build. We’ll reply with suggested scope, technology and next steps. The first consultation is free.',
}) {
  return (
    <section className="bg-navy">
      <div className={`${container} flex flex-col gap-8 py-16 sm:py-20 lg:flex-row lg:items-center lg:justify-between`}>
        <div className="max-w-2xl">
          <h2 className="text-[28px] font-semibold leading-tight tracking-tight text-white sm:text-4xl">{title}</h2>
          <p className="mt-4 text-base leading-relaxed text-slate-300 sm:text-lg">{subtitle}</p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row lg:shrink-0">
          <Button to="/contact">Get a Free Consultation <ArrowRight size={16} /></Button>
          <Button href={whatsappLink()} variant="ghostLight">Chat on WhatsApp</Button>
        </div>
      </div>
    </section>
  )
}

