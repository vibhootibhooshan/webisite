import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { container, Button } from '../components/ui'
import Seo from '../components/Seo'
import { navLinks as pages } from '../components/Header'
import { serviceCategories } from '../data/services'

const label = 'font-mono text-xs font-medium uppercase tracking-[0.14em] text-muted'
const row = 'border-b border-line'
const link = 'flex min-h-12 items-center py-3 text-base text-navy transition-colors hover:text-royal'

export default function NotFound() {
  useEffect(() => {
    const meta = document.createElement('meta')
    meta.name = 'robots'
    meta.content = 'noindex'
    document.head.appendChild(meta)
    return () => meta.remove()
  }, [])

  return (
    <>
      <Seo title="Page Not Found" description="The page you are looking for doesn’t exist or may have been moved." />
      <section className="pb-24 pt-16 sm:py-24">
        <div className={container}>
          <p className="font-mono text-7xl font-medium leading-none tracking-tight text-royal sm:text-8xl">404</p>
          <h1 className="mt-8 max-w-2xl text-[34px] font-semibold leading-[1.1] tracking-tight text-navy sm:text-5xl">Page not found</h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
            The page you’re looking for doesn’t exist or may have been moved. Use one of the links below to find what you need.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button to="/">Back to Home</Button>
            <Button to="/services" variant="outline">View Services <ArrowRight size={16} aria-hidden="true" /></Button>
          </div>

          <nav aria-label="Helpful links" className="mt-16 grid gap-10 border-t border-line pt-10 lg:grid-cols-3 lg:gap-12">
            <div>
              <h2 className={label}>Pages</h2>
              <ul className="mt-4 border-t border-line">
                {pages.map((p) => (
                  <li key={p.to} className={row}><Link to={p.to} className={link}>{p.label}</Link></li>
                ))}
              </ul>
            </div>
            <div className="lg:col-span-2">
              <h2 className={label}>Services</h2>
              <ul className="mt-4 grid border-t border-line sm:grid-cols-2 sm:gap-x-8">
                {serviceCategories.map((c) => (
                  <li key={c.id} className={row}><Link to={`/services/${c.id}`} className={link}>{c.title}</Link></li>
                ))}
              </ul>
            </div>
          </nav>
        </div>
      </section>
    </>
  )
}
