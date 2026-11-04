import { Link } from 'react-router-dom'

export function LogoMark({ className = 'h-9 w-9' }) {
  return (
    <svg viewBox="0 0 40 40" className={className} aria-hidden="true">
      <rect width="40" height="40" rx="10" fill="#0B1630" />
      <path d="M11 12.5 20 28" stroke="#fff" strokeWidth="3.6" strokeLinecap="round" />
      <path d="M20 28 29 12.5" stroke="#2563EB" strokeWidth="3.6" strokeLinecap="round" />
      <circle cx="29" cy="12.5" r="2.6" fill="#60A5FA" />
    </svg>
  )
}

// light = for dark backgrounds
export default function Logo({ light = false }) {
  return (
    <Link to="/" className="flex items-center gap-2.5" aria-label="VashishthTech home">
      <LogoMark className={`h-9 w-9 ${light ? 'ring-1 ring-white/15 rounded-[10px]' : ''}`} />
      <span className={`text-xl font-bold tracking-tight ${light ? 'text-white' : 'text-navy'}`}>
        Vashishth<span className={light ? 'text-blue-400' : 'text-royal'}>Tech</span>
      </span>
    </Link>
  )
}
