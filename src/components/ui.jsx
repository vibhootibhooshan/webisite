import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, MessageCircle } from 'lucide-react'
import { whatsappLink } from '../config/site'

export const container = 'mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8'

const variants = {
  primary: 'bg-royal text-white hover:bg-royal-dark shadow-sm shadow-royal/20',
  dark: 'bg-navy text-white hover:bg-navy-700',
  outline: 'border border-line bg-white text-navy hover:border-royal/40 hover:text-royal',
  light: 'bg-white text-navy hover:bg-surface',
  ghostLight: 'border border-white/20 text-white hover:bg-white/10',
}

// <Button to="/contact"> (router link) | <Button href="https://..."> (external) | <Button type="submit">
export function Button({ to, href, variant = 'primary', className = '', children, ...props }) {
  const cls = `inline-flex items-center justify-center gap-2 rounded-lg px-5 py-3 text-sm font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-royal disabled:opacity-60 ${variants[variant]} ${className}`
  if (to) return <Link to={to} className={cls} {...props}>{children}</Link>
  if (href) return <a href={href} className={cls} target={href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer" {...props}>{children}</a>
  return <button className={cls} {...props}>{children}</button>
}

export function SectionHeading({ eyebrow, title, subtitle, align = 'center', dark = false }) {
  const center = align === 'center'
  return (
    <div className={`max-w-3xl ${center ? 'mx-auto text-center' : ''}`}>
      {eyebrow && <p className={`text-sm font-semibold uppercase tracking-wider ${dark ? 'text-blue-400' : 'text-royal'}`}>{eyebrow}</p>}
      <h2 className={`mt-3 text-3xl font-bold tracking-tight sm:text-4xl ${dark ? 'text-white' : 'text-navy'}`}>{title}</h2>
      {subtitle && <p className={`mt-4 text-lg leading-relaxed ${dark ? 'text-slate-300' : 'text-muted'}`}>{subtitle}</p>}
    </div>
  )
}

// Fades children in once when scrolled into view.
export function Reveal({ as: Tag = 'div', delay = 0, className = '', children, ...props }) {
  const ref = useRef(null)
  const [shown, setShown] = useState(false)
  useEffect(() => {
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setShown(true); io.disconnect() }
    }, { rootMargin: '0px 0px -8% 0px' })
    io.observe(ref.current)
    return () => io.disconnect()
  }, [])
  return (
    <Tag ref={ref} style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-700 ease-out motion-reduce:transition-none ${shown ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'} ${className}`} {...props}>
      {children}
    </Tag>
  )
}

// Dark header band for inner pages (Services / About / Contact).
export function PageHero({ eyebrow, title, subtitle, children }) {
  return (
    <section className="relative overflow-hidden bg-navy">
      <div className="bg-grid absolute inset-0 [mask-image:radial-gradient(ellipse_at_top,black,transparent_75%)]" />
      <div className="absolute -top-40 left-1/2 h-80 w-[40rem] -translate-x-1/2 rounded-full bg-royal/25 blur-3xl" />
      <div className={`${container} relative py-20 sm:py-28`}>
        <div className="max-w-3xl">
          {eyebrow && <p className="text-sm font-semibold uppercase tracking-wider text-blue-400">{eyebrow}</p>}
          <h1 className="mt-3 text-4xl font-bold tracking-tight text-white sm:text-5xl">{title}</h1>
          {subtitle && <p className="mt-5 text-lg leading-relaxed text-slate-300">{subtitle}</p>}
          {children && <div className="mt-8 flex flex-wrap gap-3">{children}</div>}
        </div>
      </div>
    </section>
  )
}

// Closing call-to-action band, reused at the bottom of pages.
export function CtaSection({
  title = 'Have a project in mind? Let’s build it together.',
  subtitle = 'Share your requirements and get a free consultation on scope, technology and timelines — no obligation.',
}) {
  return (
    <section className="py-20 sm:py-24">
      <div className={container}>
        <Reveal className="relative overflow-hidden rounded-3xl bg-navy px-6 py-14 sm:px-14 sm:py-16">
          <div className="bg-grid absolute inset-0 opacity-60" />
          <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-royal/30 blur-3xl" />
          <div className="relative flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
            <div className="max-w-2xl">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">{title}</h2>
              <p className="mt-4 text-lg text-slate-300">{subtitle}</p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Button to="/contact" variant="primary">Get a Free Consultation <ArrowRight size={16} /></Button>
              <Button href={whatsappLink()} variant="ghostLight"><MessageCircle size={16} /> Chat on WhatsApp</Button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
