import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { container, Button } from '../components/ui'
import Seo from '../components/Seo'
import { navLinks as pages } from '../components/Header'


export default function NotFound() {
  useEffect(() => {
    const meta = document.createElement('meta')
    meta.name = 'robots'
    meta.content = 'noindex'
    document.head.appendChild(meta)
    return () => meta.remove()
  }, [])

  return (
    <section className="py-24 sm:py-32">
      <Seo title="Page Not Found" description="The page you are looking for doesn’t exist or may have been moved." />
      <div className={`${container} text-center`}>
        <p className="bg-linear-to-b from-navy to-royal bg-clip-text text-8xl font-extrabold tracking-tight text-transparent sm:text-9xl">404</p>
        <h1 className="mt-6 text-3xl font-bold tracking-tight text-navy sm:text-4xl">Page not found</h1>
        <p className="mx-auto mt-4 max-w-md text-lg text-muted">
          Sorry, the page you’re looking for doesn’t exist or may have been moved.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          <Button to="/"><ArrowLeft size={16} /> Back to Home</Button>
          <Button to="/services" variant="outline">View Services <ArrowRight size={16} /></Button>
        </div>
        <nav aria-label="Helpful links" className="mt-14 border-t border-line pt-8">
          <ul className="flex flex-wrap justify-center gap-x-8 gap-y-3 text-sm font-medium">
            {pages.map((p) => (
              <li key={p.to}><Link to={p.to} className="text-muted transition-colors hover:text-royal">{p.label}</Link></li>
            ))}
          </ul>
        </nav>
      </div>
    </section>
  )
}
