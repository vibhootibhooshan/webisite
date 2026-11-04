import { technologies, techLogo } from '../data/technologies'
import { Reveal } from './ui'

// Grouped technology badges with logos. Used on Home and About.
export default function TechStack() {
  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {technologies.map((g, i) => (
        <Reveal key={g.group} delay={i * 60} className="rounded-2xl border border-line bg-white p-6">
          <h3 className="text-sm font-semibold uppercase tracking-wider text-muted">{g.group}</h3>
          <ul className="mt-4 flex flex-wrap gap-2">
            {g.items.map((t) => (
              <li key={t.name} className="flex items-center gap-2 rounded-lg border border-line bg-surface px-3 py-2 text-sm font-medium text-navy">
                {t.logo
                  ? <img src={techLogo(t.logo)} alt="" width="18" height="18" loading="lazy" className="h-[18px] w-[18px]" />
                  : <span className="grid h-[18px] min-w-[18px] place-items-center rounded bg-navy px-1 text-[9px] font-bold text-white">{t.name}</span>}
                {t.logo && t.name}
              </li>
            ))}
          </ul>
        </Reveal>
      ))}
    </div>
  )
}
