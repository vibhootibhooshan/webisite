import { technologies, techLogo } from '../data/technologies'

// Technology list grouped by area (real product logos). Used on Home and About.
export default function TechStack({ dark = false }) {
  return (
    <dl className={`divide-y border-y ${dark ? 'divide-white/10 border-white/10' : 'divide-line border-line'}`}>
      {technologies.map((g) => (
        <div key={g.group} className="grid gap-3 py-5 sm:grid-cols-[220px_1fr] sm:items-center sm:gap-8">
          <dt className={`font-mono text-xs font-medium uppercase tracking-[0.14em] ${dark ? 'text-slate-400' : 'text-muted'}`}>{g.group}</dt>
          <dd className="flex flex-wrap gap-x-6 gap-y-3">
            {g.items.map((t) => (
              <span key={t.name} className={`flex items-center gap-2 text-[15px] font-medium ${dark ? 'text-white' : 'text-navy'}`}>
                {t.logo && <img src={techLogo(t.logo)} alt="" width="18" height="18" loading="lazy" className="h-[18px] w-[18px]" />}
                {t.name}
              </span>
            ))}
          </dd>
        </div>
      ))}
    </dl>
  )
}
