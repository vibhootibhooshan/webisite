import { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu, X, ChevronDown } from 'lucide-react'
import Logo from './Logo'
import { Button, container } from './ui'
import { serviceCategories } from '../data/services'
import { whatsappLink } from '../config/site'

export const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/services', label: 'Services' },
  { to: '/about', label: 'About Us' },
  { to: '/contact', label: 'Contact Us' },
]

const linkCls = ({ isActive }) =>
  `px-3 py-2 text-[15px] font-medium transition-colors ${isActive ? 'text-royal' : 'text-ink hover:text-royal'}`

// Desktop "Services" item with a hover / keyboard-focus dropdown (pure CSS).
function ServicesMenu() {
  return (
    <div className="group relative">
      <NavLink to="/services" className={(s) => `${linkCls(s)} inline-flex items-center gap-1`}>
        Services <ChevronDown size={14} className="transition-transform group-hover:rotate-180 group-focus-within:rotate-180" />
      </NavLink>
      <div className="invisible absolute left-1/2 top-full w-[34rem] -translate-x-1/2 pt-3 opacity-0 transition-opacity group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
        <div className="rounded-md border border-line bg-white p-2 shadow-lg shadow-navy/10" onClick={() => document.activeElement?.blur()}>
          <div className="grid grid-cols-2">
            {serviceCategories.map(({ id, title }) => (
              <Link key={id} to={`/services/${id}`} className="rounded px-3 py-2.5 text-[14px] text-ink hover:bg-surface hover:text-royal">{title}</Link>
            ))}
          </div>
          <Link to="/services" className="mt-1 block border-t border-line px-3 pb-1 pt-3 text-[14px] font-medium text-royal">All services →</Link>
        </div>
      </div>
    </div>
  )
}

export default function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // lock page scroll behind the open mobile menu
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
  }, [open])

  return (
    <header className={`sticky top-0 z-50 border-b bg-white transition-shadow ${scrolled || open ? 'border-line shadow-sm' : 'border-transparent'}`}>
      <nav className={`${container} flex h-16 items-center justify-between lg:h-[72px]`} aria-label="Main">
        <Logo />
        <div className="hidden items-center gap-2 lg:flex">
          {navLinks.map((l) => l.to === '/services'
            ? <ServicesMenu key={l.to} />
            : <NavLink key={l.to} to={l.to} end className={linkCls}>{l.label}</NavLink>)}
        </div>
        <div className="hidden lg:block">
          <Button to="/contact" className="!py-2.5">Get a Free Consultation</Button>
        </div>
        <button className="-mr-2 p-2 text-navy lg:hidden" onClick={() => setOpen(!open)}
          aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open} aria-controls="mobile-menu">
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </nav>

      {open && (
        <div id="mobile-menu" className="fixed inset-x-0 bottom-0 top-16 overflow-y-auto bg-white lg:hidden"
          onClick={(e) => e.target.closest('a') && setOpen(false)}>
          <div className={`${container} flex min-h-full flex-col py-4`}>
            <ul className="divide-y divide-line border-b border-line">
              {navLinks.map((l) => (
                <li key={l.to}>
                  {l.to === '/services' ? (
                    <details className="group">
                      <summary className="flex cursor-pointer list-none items-center justify-between py-4 text-lg font-medium text-navy">
                        Services <ChevronDown size={20} className="transition-transform group-open:rotate-180" />
                      </summary>
                      <ul className="pb-4 pl-1">
                        <li><Link to="/services" className="block py-2 text-[15px] font-medium text-royal">All services</Link></li>
                        {serviceCategories.map((c) => (
                          <li key={c.id}><Link to={`/services/${c.id}`} className="block py-2 text-[15px] text-muted">{c.title}</Link></li>
                        ))}
                      </ul>
                    </details>
                  ) : (
                    <NavLink to={l.to} end className={({ isActive }) => `block py-4 text-lg font-medium ${isActive ? 'text-royal' : 'text-navy'}`}>{l.label}</NavLink>
                  )}
                </li>
              ))}
            </ul>
            <div className="mt-auto flex flex-col gap-3 pt-8">
              <Button to="/contact">Get a Free Consultation</Button>
              <Button href={whatsappLink()} variant="outline">Chat on WhatsApp</Button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
