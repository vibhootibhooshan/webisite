import { Link, useParams } from 'react-router-dom'
import {
  ArrowRight, BadgeCheck, Check, ChevronDown, ChevronRight, CircleCheck, Code, LifeBuoy, MessageCircle, PenTool, Rocket, Search,
} from 'lucide-react'
import Seo from '../components/Seo'
import { Button, CtaSection, Reveal, SectionHeading, container } from '../components/ui'
import { site, whatsappLink } from '../config/site'
import { serviceCategories } from '../data/services'
import part1 from '../data/serviceDetails/part1'
import part2 from '../data/serviceDetails/part2'
import NotFound from './NotFound'

const details = { ...part1, ...part2 }

const steps = [
  [Search, 'Discovery', 'We understand your goals, users and requirements to define a clear scope.'],
  [PenTool, 'Planning & Design', 'We plan features, architecture and timeline, and design the interface for your approval.'],
  [Code, 'Development & Testing', 'We build in short iterations with regular updates and test every feature thoroughly.'],
  [Rocket, 'Launch', 'We deploy to production with proper configuration and a smooth handover.'],
  [LifeBuoy, 'Support', 'We stay on for maintenance, updates and improvements after go-live.'],
]

const iconBox = 'grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-royal/10 text-royal'
// Escape "<" so data strings can never close the <script> tag.
const ld = (obj) => ({ __html: JSON.stringify({ '@context': 'https://schema.org', ...obj }).replace(/</g, '\\u003c') })
// Lowercase ordinary words, keep acronyms: "API & Backend Development" -> "API & backend development", "E-commerce" -> "e-commerce".
const lower = (s) => s.replace(/\b[A-Z][a-z-]*[a-z]/g, (w) => w.toLowerCase())

export default function ServiceDetail() {
  const { id } = useParams()
  const category = serviceCategories.find((c) => c.id === id)
  if (!category) return <NotFound />

  const d = details[id]
  const { title, summary } = category
  const description = d?.metaDescription ?? summary
  // Alternate white / surface backgrounds even when optional sections are skipped.
  const sections = ['overview', 'included', d?.benefits?.length && 'why', 'process', d?.faqs?.length && 'faqs', 'more'].filter(Boolean)
  const bg = (key) => (sections.indexOf(key) % 2 ? 'bg-surface' : 'bg-white')

  return (
    <>
      <Seo title={d?.metaTitle ?? title} description={description} />
      <script type="application/ld+json" dangerouslySetInnerHTML={ld({
        '@type': 'Service',
        name: title,
        serviceType: title,
        description,
        url: `${site.domain}/services/${id}`,
        provider: { '@type': 'Organization', name: site.name, url: site.domain },
        areaServed: [{ '@type': 'Country', name: 'India' }, { '@type': 'Place', name: 'Worldwide' }],
      })} />
      {d?.faqs?.length > 0 && (
        <script type="application/ld+json" dangerouslySetInnerHTML={ld({
          '@type': 'FAQPage',
          mainEntity: d.faqs.map(({ q, a }) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } })),
        })} />
      )}

      {/* Hero — same look as PageHero, with a breadcrumb above the H1 */}
      <section className="relative overflow-hidden bg-navy">
        <div className="bg-grid absolute inset-0 [mask-image:radial-gradient(ellipse_at_top,black,transparent_75%)]" />
        <div className="absolute -top-40 left-1/2 h-80 w-[40rem] -translate-x-1/2 rounded-full bg-royal/25 blur-3xl" />
        <div className={`${container} relative py-20 sm:py-28`}>
          <div className="max-w-3xl">
            <nav aria-label="Breadcrumb">
              <ol className="flex flex-wrap items-center gap-x-1.5 gap-y-1 text-sm text-slate-400">
                {[['/', 'Home'], ['/services', 'Services']].map(([to, label]) => (
                  <li key={to} className="flex items-center gap-1.5">
                    <Link to={to} className="rounded transition-colors hover:text-white focus-visible:outline-2 focus-visible:outline-blue-400">{label}</Link>
                    <ChevronRight size={14} aria-hidden="true" />
                  </li>
                ))}
                <li aria-current="page" className="font-medium text-blue-400">{title}</li>
              </ol>
            </nav>
            <h1 className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl">{d?.headline ?? title}</h1>
            <p className="mt-5 text-lg leading-relaxed text-slate-300">{summary}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button to={`/contact?service=${encodeURIComponent(title)}`}>Discuss Your Project <ArrowRight size={16} /></Button>
              <Button href={whatsappLink(`Hi, I am interested in ${title}`)} variant="ghostLight"><MessageCircle size={16} /> Chat on WhatsApp</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className={`${bg('overview')} py-20 sm:py-24`}>
        <div className={`${container} grid items-start gap-12 lg:grid-cols-2 lg:gap-16`}>
          <img src={category.image} alt={`${title} services by ${site.name}`} width="1200" height="800" decoding="async"
            className="aspect-[3/2] w-full rounded-2xl border border-line bg-surface object-cover" />
          <div>
            <SectionHeading align="left" eyebrow="Overview" title={`${title} at ${site.name}`} />
            <div className="mt-5 space-y-4 text-lg leading-relaxed text-muted">
              {(d?.intro ?? [summary]).map((p) => <p key={p}>{p}</p>)}
            </div>
            {d?.idealFor?.length > 0 && (
              <div className="mt-8 rounded-2xl border border-line bg-surface p-6">
                <h3 className="font-semibold text-navy">Ideal for</h3>
                <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                  {d.idealFor.map((t) => (
                    <li key={t} className="flex gap-3 text-sm text-ink"><Check size={18} className="mt-0.5 shrink-0 text-royal" aria-hidden="true" />{t}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* What's included */}
      <section className={`${bg('included')} py-20 sm:py-24`}>
        <div className={container}>
          <SectionHeading eyebrow="What’s Included" title="How we can help"
            subtitle="Choose a single service or combine several — every engagement is scoped around your requirements." />
          <ul className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {category.items.map((s, i) => (
              <Reveal as="li" key={s.name} delay={(i % 4) * 60}
                className="rounded-2xl border border-line bg-white p-6 transition duration-200 hover:-translate-y-0.5 hover:border-royal/30 hover:shadow-lg hover:shadow-navy/5">
                <span className={iconBox}><CircleCheck size={20} aria-hidden="true" /></span>
                <h3 className="mt-5 font-semibold text-navy">{s.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{s.description}</p>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* Why choose us */}
      {d?.benefits?.length > 0 && (
        <section className={`${bg('why')} py-20 sm:py-24`}>
          <div className={`${container} grid gap-12 lg:grid-cols-[2fr_3fr] lg:gap-16`}>
            <div className="lg:sticky lg:top-28 lg:self-start">
              <SectionHeading align="left" eyebrow={`Why ${site.name}`} title={`Why choose ${site.name} for ${title}`} />
              <Button to={`/contact?service=${encodeURIComponent(title)}`} className="mt-8">Discuss Your Project <ArrowRight size={16} /></Button>
            </div>
            <ul className="grid gap-4 sm:grid-cols-2">
              {d.benefits.map((b, i) => (
                <Reveal as="li" key={b.title} delay={(i % 2) * 80} className="rounded-2xl border border-line bg-white p-6">
                  <span className={iconBox}><BadgeCheck size={20} aria-hidden="true" /></span>
                  <h3 className="mt-5 text-lg font-semibold text-navy">{b.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{b.text}</p>
                </Reveal>
              ))}
            </ul>
          </div>
        </section>
      )}

      {/* Process */}
      <section className={`${bg('process')} py-20 sm:py-24`}>
        <div className={container}>
          <SectionHeading eyebrow="How We Work" title="A simple, transparent process"
            subtitle="You always know what is happening and what comes next." />
          <ol className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {steps.map(([Icon, name, text], i) => (
              <Reveal as="li" key={name} delay={i * 60} className="rounded-2xl border border-line bg-white p-5">
                <div className="flex items-center justify-between">
                  <span className="grid h-10 w-10 place-items-center rounded-xl bg-navy text-white"><Icon size={18} aria-hidden="true" /></span>
                  <span className="text-2xl font-bold text-royal/15" aria-hidden="true">{String(i + 1).padStart(2, '0')}</span>
                </div>
                <h3 className="mt-4 font-semibold text-navy">{name}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted">{text}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* FAQs */}
      {d?.faqs?.length > 0 && (
        <section className={`${bg('faqs')} py-20 sm:py-24`}>
          <div className={container}>
            <SectionHeading eyebrow="FAQs" title="Frequently asked questions" />
            <div className="mx-auto mt-12 max-w-3xl space-y-3">
              {d.faqs.map(({ q, a }) => (
                <details key={q} className="group rounded-2xl border border-line bg-white transition-colors open:border-royal/30">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 rounded-2xl p-5 font-semibold text-navy focus-visible:outline-2 focus-visible:outline-royal [&::-webkit-details-marker]:hidden">
                    {q}
                    <ChevronDown size={20} aria-hidden="true" className="shrink-0 text-muted transition-transform duration-200 group-open:rotate-180 group-open:text-royal" />
                  </summary>
                  <p className="px-5 pb-5 leading-relaxed text-muted">{a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Other services */}
      <section className={`${bg('more')} py-20 sm:py-24`}>
        <div className={container}>
          <SectionHeading eyebrow="More Services" title="Explore other services" />
          <ul className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {serviceCategories.filter((c) => c.id !== id).map(({ id: cid, title: ct, icon: Icon }) => (
              <li key={cid}>
                <Link to={`/services/${cid}`}
                  className="group flex items-center gap-4 rounded-2xl border border-line bg-white p-4 transition hover:border-royal/30 hover:shadow-lg hover:shadow-royal/5 focus-visible:outline-2 focus-visible:outline-royal">
                  <span className={iconBox}><Icon size={20} aria-hidden="true" /></span>
                  <span className="font-semibold text-navy">{ct}</span>
                  <ArrowRight size={16} aria-hidden="true" className="ml-auto shrink-0 text-royal transition-transform group-hover:translate-x-0.5" />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CtaSection title={`Let’s discuss your ${lower(title)} project`} />
    </>
  )
}
