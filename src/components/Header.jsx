import { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu, X, ArrowRight, ChevronDown } from 'lucide-react'
import Logo from './Logo'
import { Button, container } from './ui'
import { serviceCategories } from '../data/services'

export const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/services', label: 'Services' },
  { to: '/about', label: 'About Us' },
  { to: '/contact', label: 'Contact Us' },
]

const linkCls = ({ isActive }) =>
  `rounded-md px-3 py-2 text-sm font-medium transition-colors ${isActive ? 'text-royal' : 'text-ink/80 hover:text-navy'}`

// Desktop "Services" item with a hover / keyboard-focus dropdown (pure CSS).
function ServicesMenu() {
  return (
    <div className="group relative">
      <NavLink to="/services" className={(s) => `${linkCls(s)} inline-flex items-center gap-1`}>
        Services <ChevronDown size={14} className="transition-transform group-hover:rotate-180 group-focus-within:rotate-180" />
      </NavLink>
      <div className="invisible absolute left-1/2 top-full w-[36rem] -translate-x-1/2 pt-3 opacity-0 transition-all group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
        <div className="grid grid-cols-2 gap-1 rounded-2xl border border-line bg-white p-3 shadow-xl shadow-navy/10" onClick={() => document.activeElement?.blur()}>
          {serviceCategories.map(({ id, title, icon: Icon }) => (
            <Link key={id} to={`/services/${id}`} className="flex items-center gap-3 rounded-lg p-2.5 text-sm font-medium text-ink hover:bg-surface hover:text-royal">
              <span className="grid h-8 w-8 shrink-0 place-items-center rounded-md bg-surface text-royal"><Icon size={16} /></span>
              {title}
            </Link>
          ))}
          <Link to="/services" className="col-span-2 mt-1 rounded-lg bg-surface p-2.5 text-center text-sm font-semibold text-royal hover:bg-royal hover:text-white">
            View all services →
          </Link>
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

  return (
    <header className={`sticky top-0 z-50 border-b bg-white/85 backdrop-blur-lg transition-shadow ${scrolled ? 'border-line shadow-sm' : 'border-transparent'}`}>
      <nav className={`${container} flex h-16 items-center justify-between`} aria-label="Main">
        <Logo />
        <div className="hidden items-center gap-1 md:flex">
          {navLinks.map((l) => l.to === '/services'
            ? <ServicesMenu key={l.to} />
            : <NavLink key={l.to} to={l.to} end className={linkCls}>{l.label}</NavLink>)}
        </div>
        <div className="hidden md:block">
          <Button to="/contact" className="!py-2.5">Get a Free Consultation <ArrowRight size={16} /></Button>
        </div>
        <button className="rounded-md p-2 text-navy md:hidden" onClick={() => setOpen(!open)}
          aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open}>
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>
      {open && (
        <div className="max-h-[calc(100vh-4rem)] overflow-y-auto border-t border-line bg-white md:hidden">
          <div className={`${container} flex flex-col gap-1 py-4`} onClick={(e) => e.target.closest('a') && setOpen(false)}>
            {navLinks.map((l) => (
              <div key={l.to} className="flex flex-col">
                <NavLink to={l.to} end className={linkCls}>{l.label}</NavLink>
                {l.to === '/services' && (
                  <div className="ml-3 flex flex-col border-l border-line pl-2">
                    {serviceCategories.map((c) => (
                      <NavLink key={c.id} to={`/services/${c.id}`} className={(s) => `${linkCls(s)} !py-1.5 !text-[13px]`}>{c.title}</NavLink>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <Button to="/contact" className="mt-3">Get a Free Consultation</Button>
          </div>
        </div>
      )}
    </header>
  )
}
