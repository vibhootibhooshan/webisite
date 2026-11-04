import { Link } from 'react-router-dom'
import { Mail, Phone, MapPin, MessageCircle } from 'lucide-react'
import Logo from './Logo'
import { navLinks } from './Header'
import { container } from './ui'
import { site, whatsappLink, telLink, mailLink } from '../config/site'
import { serviceCategories } from '../data/services'

export default function Footer() {
  const contact = [
    { icon: Mail, label: site.email, href: mailLink },
    { icon: Phone, label: site.phone, href: telLink },
    { icon: MessageCircle, label: 'WhatsApp us', href: whatsappLink() },
    { icon: MapPin, label: site.address },
  ]
  return (
    <footer className="bg-navy-900 text-slate-400">
      <div className={`${container} grid gap-12 py-16 sm:grid-cols-2 lg:grid-cols-12`}>
        <div className="lg:col-span-4">
          <Logo light />
          <p className="mt-5 max-w-sm text-sm leading-relaxed">
            {site.name} is a software development company and IT services provider delivering websites,
            custom software, mobile apps, cloud solutions and IT consulting for businesses in India and worldwide.
          </p>
        </div>
        <div className="lg:col-span-2">
          <h3 className="text-sm font-semibold text-white">Company</h3>
          <ul className="mt-4 space-y-3 text-sm">
            {navLinks.map((l) => <li key={l.to}><Link to={l.to} className="hover:text-white">{l.label}</Link></li>)}
          </ul>
        </div>
        <div className="lg:col-span-3">
          <h3 className="text-sm font-semibold text-white">Services</h3>
          <ul className="mt-4 space-y-3 text-sm">
            {serviceCategories.slice(0, 6).map((c) => (
              <li key={c.id}><Link to={`/services/${c.id}`} className="hover:text-white">{c.title}</Link></li>
            ))}
            <li><Link to="/services" className="text-blue-400 hover:text-white">View all services →</Link></li>
          </ul>
        </div>
        <div className="lg:col-span-3">
          <h3 className="text-sm font-semibold text-white">Contact</h3>
          <ul className="mt-4 space-y-3 text-sm">
            {contact.map(({ icon: Icon, label, href }) => (
              <li key={label} className="flex gap-3">
                <Icon size={18} className="mt-0.5 shrink-0 text-blue-400" />
                {href
                  ? <a href={href} className="break-all hover:text-white" {...(href.startsWith('http') && { target: '_blank', rel: 'noopener noreferrer' })}>{label}</a>
                  : <span>{label}</span>}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className={`${container} flex flex-col gap-2 py-6 text-xs sm:flex-row sm:justify-between`}>
          <p>© {new Date().getFullYear()} {site.name}. All rights reserved.</p>
          <p>Software Development &amp; IT Services · India</p>
        </div>
      </div>
    </footer>
  )
}
