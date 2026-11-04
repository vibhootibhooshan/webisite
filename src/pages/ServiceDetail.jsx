import { Link, useParams } from 'react-router-dom'
import { ArrowRight, Plus } from 'lucide-react'
import Seo from '../components/Seo'
import { Button, CtaSection, Eyebrow, PageHero, SectionHeading, container } from '../components/ui'
import { site, whatsappLink } from '../config/site'
import { serviceCategories } from '../data/services'
import part1 from '../data/serviceDetails/part1'
import part2 from '../data/serviceDetails/part2'
import NotFound from './NotFound'

const details = { ...part1, ...part2 }

const steps = [
  ['Discovery', 'We talk through your goals, users and requirements, then agree a written scope.'],
  ['Planning & design', 'We plan features and architecture, and design the screens for your sign-off before the build starts.'],
  ['Development & testing', 'We build in short cycles, share progress regularly and test each feature before moving on.'],
  ['Launch', 'We deploy to production, configure hosting and hand over access and documentation.'],
  ['Support', 'We stay available for fixes, updates and improvements after go-live.'],
]

const num = (i) => String(i + 1).padStart(2, '0')
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
  const contactTo = `/contact?service=${encodeURIComponent(title)}`
  // Alternate white / surface on light sections even when optional ones are skipped ("why" is the dark section).
  const light = ['overview', 'included', 'process', d?.faqs?.length && 'faqs', 'more'].filter(Boolean)
  const bg = (key) => (light.indexOf(key) % 2 ? 'bg-surface' : 'bg-white')

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

      <PageHero
        image={category.image}
        imageAlt={`${title} work at ${site.name}`}
        breadcrumb={[{ label: 'Services', to: '/services' }]}
        crumb={title}
        title={d?.headline ?? title}
        subtitle={summary}
      >
        <Button to={contactTo}>Discuss Your Project <ArrowRight size={16} aria-hidden="true" /></Button>
        <Button href={whatsappLink(`Hi, I am interested in ${title}`)} variant="ghostLight">Chat on WhatsApp</Button>
      </PageHero>

      {/* Overview */}
      <section className={`${bg('overview')} py-16 sm:py-24`}>
        <div className={`${container} grid gap-8 lg:grid-cols-[2fr_3fr] lg:gap-16`}>
          <div>
            <Eyebrow>Overview</Eyebrow>
            <h2 className="mt-4 text-[28px] font-semibold leading-tight tracking-tight text-navy sm:text-4xl">{title} at {site.name}</h2>
          </div>
          <div>
            <div className="space-y-5 text-base leading-relaxed text-muted sm:text-lg">
              {(d?.intro ?? [summary]).map((p) => <p key={p}>{p}</p>)}
            </div>
            {d?.idealFor?.length > 0 && (
              <div className="mt-12">
                <h3 className="font-mono text-xs font-medium uppercase tracking-[0.14em] text-navy">Ideal for</h3>
                <ul className="mt-4 divide-y divide-line border-y border-line">
                  {d.idealFor.map((t) => <li key={t} className="py-3.5 text-base text-ink">{t}</li>)}
                </ul>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* What's included */}
      <section className={`${bg('included')} py-16 sm:py-24`}>
        <div className={container}>
          <SectionHeading eyebrow="What’s included" title={`Our ${lower(title)} services`}
            subtitle="Take a single service or combine several. Each engagement is scoped to your requirements." />
          <ol className="mt-10 grid gap-x-16 border-b border-line sm:mt-14 lg:grid-cols-2">
            {category.items.map((s, i) => (
              <li key={s.name} className="grid grid-cols-[2.5rem_1fr] gap-x-3 border-t border-line py-6 sm:py-8">
                <span className="pt-1 font-mono text-sm text-royal">{num(i)}</span>
                <div>
                  <h3 className="text-lg font-semibold text-navy">{s.name}</h3>
                  <p className="mt-2 text-base leading-relaxed text-muted">{s.description}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Why choose us */}
      {d?.benefits?.length > 0 && (
        <section className="bg-navy py-16 sm:py-24">
          <div className={container}>
            <SectionHeading dark eyebrow={`Why ${site.name}`} title={`Why clients choose us for ${lower(title)}`} />
            <ol className="mt-10 grid gap-x-16 sm:mt-14 md:grid-cols-2">
              {d.benefits.map((b, i) => (
                <li key={b.title} className="border-t border-white/15 pt-6 pb-10">
                  <span className="font-mono text-sm text-blue-300">{num(i)}</span>
                  <h3 className="mt-3 text-xl font-semibold text-white">{b.title}</h3>
                  <p className="mt-3 text-base leading-relaxed text-slate-300">{b.text}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>
      )}

      {/* How we deliver */}
      <section className={`${bg('process')} py-16 sm:py-24`}>
        <div className={container}>
          <SectionHeading eyebrow="How we deliver" title="Five stages, every project"
            subtitle="You know what is happening now and what comes next." />
          <ol className="mt-10 divide-y divide-line border-y border-line sm:mt-14 lg:grid lg:grid-cols-5 lg:divide-x lg:divide-y-0">
            {steps.map(([name, text], i) => (
              <li key={name} className="grid grid-cols-[2.5rem_1fr] gap-x-3 py-6 lg:block lg:px-6 lg:py-8 lg:first:pl-0">
                <span className="pt-0.5 font-mono text-sm text-royal">{num(i)}</span>
                <div className="lg:mt-4">
                  <h3 className="font-semibold text-navy">{name}</h3>
                  <p className="mt-2 text-base leading-relaxed text-muted">{text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* FAQs */}
      {d?.faqs?.length > 0 && (
        <section className={`${bg('faqs')} py-16 sm:py-24`}>
          <div className={`${container} grid gap-8 lg:grid-cols-[2fr_3fr] lg:gap-16`}>
            <SectionHeading eyebrow="FAQs" title="Common questions" />
            <div className="divide-y divide-line border-y border-line">
              {d.faqs.map(({ q, a }) => (
                <details key={q} className="group">
                  <summary className="flex min-h-11 cursor-pointer list-none items-center justify-between gap-6 py-5 text-base font-semibold text-navy transition-colors hover:text-royal focus-visible:outline-2 focus-visible:outline-royal sm:text-lg [&::-webkit-details-marker]:hidden">
                    {q}
                    <Plus size={20} aria-hidden="true" className="shrink-0 text-royal transition-transform duration-200 group-open:rotate-45" />
                  </summary>
                  <p className="pb-6 pr-8 text-base leading-relaxed text-muted">{a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Other services */}
      <section className={`${bg('more')} py-16 sm:py-24`}>
        <div className={container}>
          <SectionHeading eyebrow="More services" title="Other services we offer" />
          <ul className="mt-10 grid gap-x-10 border-b border-line sm:grid-cols-2 lg:grid-cols-3">
            {serviceCategories.filter((c) => c.id !== id).map((c) => (
              <li key={c.id} className="border-t border-line">
                <Link to={`/services/${c.id}`}
                  className="group flex min-h-14 items-center justify-between gap-4 py-4 font-medium text-navy transition-colors hover:text-royal focus-visible:outline-2 focus-visible:outline-royal">
                  {c.title}
                  <ArrowRight size={16} aria-hidden="true" className="shrink-0 text-royal" />
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
