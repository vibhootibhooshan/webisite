import { ArrowRight } from 'lucide-react'
import Seo from '../components/Seo'
import { Button, CtaSection, Eyebrow, PageHero, Photo, SectionHeading, container } from '../components/ui'
import { site, whatsappLink } from '../config/site'
import { images } from '../data/images'
import { serviceCategories } from '../data/services'

const num = (i) => String(i + 1).padStart(2, '0')

const steps = [
  ['Free consultation and estimate', 'Start with a call or a WhatsApp message. We ask about your business, your users and what the software needs to do, then share a suggested approach, technology and an estimated cost and timeline. There is no charge for this.'],
  ['Proposal with scope and milestones', 'You receive a written proposal that lists features, deliverables, milestones and payment stages. Work starts only after you have reviewed it and agreed.'],
  ['Build, with regular updates', 'We build in stages and show you working screens at each milestone, so feedback comes early. After testing and your sign-off, we deploy and stay available for support and changes.'],
]

export default function Services() {
  return (
    <>
      <Seo
        title="Software Development & IT Services"
        description={`Website development services, custom software development, mobile app development, web application development, SaaS development and software consulting services from ${site.name}, an independent IT services company in India.`}
      />

      <PageHero
        image={images.servicesHero}
        crumb="Services"
        title="Software Development & IT Services"
        subtitle="Websites, custom business software, mobile apps, SaaS products and cloud setup, planned and built by one team in India. Pick a service area below, or tell us what you need and we will suggest where to start."
      >
        <Button to="/contact">Discuss Your Project <ArrowRight size={16} aria-hidden="true" /></Button>
        <Button href={whatsappLink()} variant="ghostLight">Chat on WhatsApp</Button>
      </PageHero>

      <section className="bg-white py-16 sm:py-24">
        <div className={`${container} grid gap-10 lg:grid-cols-12 lg:gap-16`}>
          <div className="lg:col-span-5">
            <SectionHeading
              eyebrow="Overview"
              title="Ten service areas, one team"
              subtitle={`${site.name} is an independent software development company and IT services provider. We take on website development, custom software development, mobile app development, web application and SaaS development, and software consulting for businesses in India and abroad.`}
            />
            <p className="mt-4 text-base leading-relaxed text-muted sm:text-lg">
              Each area below lists what we build. Its detail page covers scope, deliverables and technology. Not sure which one fits? Describe the problem and we will tell you.
            </p>
          </div>

          <nav aria-label="Service categories" className="lg:col-span-7">
            <ol className="grid border-b border-line sm:grid-cols-2 sm:gap-x-8">
              {serviceCategories.map((cat, i) => (
                <li key={cat.id} className="border-t border-line">
                  <a href={`#${cat.id}`} className="group flex min-h-[52px] items-center gap-4 py-3">
                    <span className="font-mono text-sm text-royal">{num(i)}</span>
                    <span className="font-medium text-navy transition-colors group-hover:text-royal">{cat.title}</span>
                  </a>
                </li>
              ))}
            </ol>
          </nav>
        </div>
      </section>

      {serviceCategories.map((cat, i) => (
        <section key={cat.id} id={cat.id} aria-labelledby={`${cat.id}-title`}
          className={`scroll-mt-24 py-14 sm:py-20 ${i % 2 ? 'bg-surface' : 'bg-white'}`}>
          <div className={`${container} grid gap-8 lg:grid-cols-2 lg:gap-14`}>
            <div className={i % 2 ? 'lg:order-last' : ''}>
              <Photo src={cat.image} alt={`${cat.title} services`} sizes="(min-width: 1024px) 50vw, 100vw"
                className="aspect-[16/9] w-full rounded-md lg:aspect-[4/3]" />
            </div>

            <div>
              <p className="font-mono text-sm text-royal">{num(i)} / {num(serviceCategories.length - 1)}</p>
              <h2 id={`${cat.id}-title`} className="mt-3 text-[28px] font-semibold leading-tight tracking-tight text-navy sm:text-4xl">{cat.title}</h2>
              <p className="mt-4 text-base leading-relaxed text-muted sm:text-lg">{cat.summary}</p>

              <ul className="mt-6 grid border-b border-line sm:grid-cols-2 sm:gap-x-8">
                {cat.items.map((s) => (
                  <li key={s.name} className="border-t border-line py-2.5 text-base text-ink">{s.name}</li>
                ))}
              </ul>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button to={`/services/${cat.id}`}>View service details <ArrowRight size={16} aria-hidden="true" /></Button>
                <Button to={`/contact?service=${encodeURIComponent(cat.title)}`} variant="outline">Discuss this service</Button>
              </div>
            </div>
          </div>
        </section>
      ))}

      <section className="bg-white py-16 sm:py-24">
        <div className={container}>
          <SectionHeading
            eyebrow="Process"
            title="How engagements work"
            subtitle="Every project, large or small, follows the same three steps from first call to delivery."
          />
          <ol className="mt-10 grid gap-8 lg:grid-cols-3">
            {steps.map(([title, text], i) => (
              <li key={title} className="border-t border-line pt-6">
                <Eyebrow>{num(i)}</Eyebrow>
                <h3 className="mt-3 text-xl font-semibold tracking-tight text-navy">{title}</h3>
                <p className="mt-3 text-base leading-relaxed text-muted">{text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <CtaSection />
    </>
  )
}
