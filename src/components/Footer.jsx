import { Link } from 'react-router-dom'
import Logo from './Logo'
import { navLinks } from './Header'
import { container } from './ui'
import { site, whatsappLink, telLink, mailLink } from '../config/site'
import { serviceCategories } from '../data/services'

const heading = 'font-mono text-xs font-medium uppercase tracking-[0.14em] text-slate-400'

export default function Footer() {
  return (
    <footer className="bg-navy-900 text-slate-300">
      <div className={`${container} grid gap-12 py-16 sm:grid-cols-2 lg:grid-cols-12`}>
        <div className="lg:col-span-4">
          <Logo light />
          <p className="mt-5 max-w-sm text-[15px] leading-relaxed text-slate-400">
            {site.name} is a software development company and IT services provider. We build websites,
            custom software, mobile apps and web applications for businesses in India and abroad.
          </p>
        </div>
        <div className="lg:col-span-2">
          <h3 className={heading}>Company</h3>
          <ul className="mt-5 space-y-3 text-[15px]">
            {navLinks.map((l) => <li key={l.to}><Link to={l.to} className="hover:text-white">{l.label}</Link></li>)}
          </ul>
        </div>
        <div className="lg:col-span-3">
          <h3 className={heading}>Services</h3>
          <ul className="mt-5 space-y-3 text-[15px]">
            {serviceCategories.map((c) => (
              <li key={c.id}><Link to={`/services/${c.id}`} className="hover:text-white">{c.title}</Link></li>
            ))}
          </ul>
        </div>
        <div className="lg:col-span-3">
          <h3 className={heading}>Contact</h3>
          <dl className="mt-5 space-y-4 text-[15px]">
            <div><dt className="text-slate-500">Email</dt><dd><a href={mailLink} className="break-all hover:text-white">{site.email}</a></dd></div>
            <div><dt className="text-slate-500">Phone</dt><dd><a href={telLink} className="hover:text-white">{site.phone}</a></dd></div>
            <div><dt className="text-slate-500">WhatsApp</dt><dd><a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="hover:text-white">Message us</a></dd></div>
            <div><dt className="text-slate-500">Address</dt><dd>{site.address}</dd></div>
          </dl>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className={`${container} flex flex-col gap-2 py-6 text-sm text-slate-500 sm:flex-row sm:justify-between`}>
          <p>© {new Date().getFullYear()} {site.name}. All rights reserved.</p>
          <p>Software Development &amp; IT Services, India</p>
        </div>
      </div>
    </footer>
  )
}
