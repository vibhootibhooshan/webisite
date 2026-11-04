import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import Seo from '../components/Seo'
import TechStack from '../components/TechStack'
import { Button, CtaSection, Eyebrow, PageHero, Photo, SectionHeading, container } from '../components/ui'
import { site } from '../config/site'
import { images } from '../data/images'
import { serviceCategories } from '../data/services'

const num = (i) => String(i + 1).padStart(2, '0')

// Short lines for the service list (category summaries in services.js are longer).
const blurbs = {
  'website-development': 'Business, corporate and e-commerce websites, landing pages and CMS setups.',
  'software-development': 'ERP, CRM, inventory, billing and HR systems built around your processes.',
  'mobile-app-development': 'Android, iOS and cross-platform apps, prepared for store release.',
  'web-application-development': 'SaaS products, admin dashboards, customer portals and real-time platforms.',
  'api-backend-development': 'REST APIs, databases, authentication and payment gateway integration.',
  'ui-ux-frontend': 'Interface design, responsive layouts and React frontends.',
  'cloud-it-solutions': 'Cloud deployment, server and VPS management, migration and technical support.',
  'automation-integration': 'Workflow automation and integration with WhatsApp, email, payments and other tools.',
  'ecommerce-solutions': 'Online stores with product, order, payment and shipping management.',
  'consulting-maintenance': 'Architecture advice, code reviews, testing, performance work and ongoing support.',
}

const audiences = [
  { title: 'Startups', text: 'A first version of the product, built quickly enough to test with real users and structured well enough to keep building on.' },
  { title: 'Small and medium businesses', text: 'Software that replaces spreadsheets and manual steps in billing, inventory, sales and daily operations.' },
  { title: 'Entrepreneurs', text: 'Help turning an idea into a clear scope, and then into a working website, app or platform ready to launch.' },
  { title: 'Established Indian businesses', text: 'New systems or upgrades that fit existing processes, with GST-ready billing, Indian payment gateways and WhatsApp integration.' },
  { title: 'International clients', text: 'A remote development partner in India, with clear written communication and meeting times agreed around your time zone.' },
]

const principles = [
  { title: 'Understand the business first', text: 'We start by learning how your business works, who will use the software and what problem it has to solve. The technology choice comes after that.' },
  { title: 'Plan before code', text: 'Scope, screens, data and integrations are agreed in writing before development starts, so estimates are based on real requirements.' },
  { title: 'Clean, maintainable code', text: 'Readable, well-structured code with sensible naming and comments, so your own team or another developer can pick it up later.' },
  { title: 'Transparent communication', text: 'Regular updates on what is done, what is next and anything that affects time or cost. If a problem comes up, you hear about it early.' },
  { title: 'Security and performance by default', text: 'Secure authentication, validated input, careful handling of data and fast load times are part of every build from the first release.' },
  { title: 'Long-term support', text: 'After launch we stay available for fixes, updates and new features, so the software keeps working as your business changes.' },
]

const commitments = [
  { title: 'A single point of contact', text: 'You deal with one person who knows your project from the first call to the latest release. There are no hand-offs between departments.' },
  { title: 'Clear estimates before work starts', text: 'You receive a written scope and estimate before development begins. Any change to scope is discussed and agreed before it is built.' },
  { title: 'Regular progress updates', text: 'Updates at an agreed rhythm, usually weekly, with a staging link or test build you can check yourself.' },
  { title: 'You own the code and accounts', text: 'Source code, domains, hosting and app store accounts are set up in your name or handed over to you. Nothing is locked to us.' },
  { title: 'Documentation and handover', text: 'Each project ends with setup notes, access details and documentation, so your team or another developer can continue the work.' },
]

export default function About() {
  return (
    <>
      <Seo
        title="About Us"
        description={`${site.name} is an independent software development company and IT services provider in India, offering custom software development and software consulting services.`}
      />

      <PageHero
        image={images.aboutHero}
        imageAlt="Office workspace"
        title={`About ${site.name}`}
        subtitle="We are an independent software development and IT services provider focused on delivering reliable, scalable and business-oriented digital solutions."
      />

      {/* Introduction */}
      <section className="py-16 sm:py-24">
        <div className={`${container} grid gap-6 lg:grid-cols-12 lg:gap-16`}>
          <Eyebrow className="lg:col-span-3 lg:pt-3">Introduction</Eyebrow>
          <div className="lg:col-span-9">
            <p className="text-2xl font-medium leading-snug tracking-tight text-navy sm:text-3xl">
              We help startups, entrepreneurs and established businesses transform their ideas into practical
              software products. That includes websites, web applications, mobile apps, backend systems and the
              business software that runs daily operations.
            </p>
            <p className="mt-6 max-w-3xl text-base leading-relaxed text-muted sm:text-lg">
              Every project starts with the problem the software has to solve, not with a technology choice. We
              take on work of different sizes, from a single landing page to a multi-module business system, and
              we stay involved after launch for maintenance, fixes and new features.
            </p>
          </div>
        </div>
      </section>

      {/* Business overview */}
      <section className="bg-surface py-16 sm:py-24">
        <div className={`${container} grid items-center gap-10 lg:grid-cols-2 lg:gap-16`}>
          <div>
            <SectionHeading eyebrow="Who we are" title="A software development company you work with directly" />
            <div className="mt-6 space-y-4 text-base leading-relaxed text-muted sm:text-lg">
              <p>
                {site.name} designs, builds and maintains software for businesses. The work ranges from business
                websites and online stores to customer portals, mobile apps, APIs and internal systems such as
                ERP, CRM, inventory, billing and HR software.
              </p>
              <p>
                We work with startups building a first product, small and medium businesses replacing manual
                work, and established companies that need a new system or support for an existing one, in India
                and abroad.
              </p>
              <p>
                As an independent provider, there is no sales layer or account manager between you and the work.
                You speak directly with the people who plan, write and maintain your software, so questions get
                answered quickly and nothing is lost in handover.
              </p>
            </div>
          </div>
          <div className="aspect-[4/3] overflow-hidden rounded-md">
            <Photo
              src={images.aboutStory}
              alt="Software developer working on a laptop"
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="h-full w-full"
            />
          </div>
        </div>
      </section>

      {/* Mission and vision */}
      <section className="py-16 sm:py-24">
        <div className={container}>
          <SectionHeading eyebrow="Mission and vision" title="What we are working towards" />
          <div className="mt-12 grid divide-y divide-line border-t border-line md:grid-cols-2 md:divide-x md:divide-y-0">
            {[
              { label: 'Our mission', text: 'To build software that solves a real business problem, is easy to maintain and keeps working after launch, with honest advice on scope and technology at every stage.' },
              { label: 'Our vision', text: 'To be a long-term technology partner for businesses in India and abroad, known for practical software, honest estimates and support that continues after launch.' },
            ].map((c) => (
              <div key={c.label} className="py-10 md:px-10 md:first:pl-0 md:last:pr-0">
                <h3 className="font-mono text-xs font-medium uppercase tracking-[0.14em] text-royal">{c.label}</h3>
                <p className="mt-4 text-xl leading-relaxed text-navy sm:text-2xl sm:leading-snug">{c.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What we do */}
      <section className="bg-surface py-16 sm:py-24">
        <div className={container}>
          <SectionHeading
            eyebrow="What we do"
            title="Software and IT services we provide"
            subtitle="Each area has its own page with the full list of services we offer in it."
          />
          <ul className="mt-12 grid lg:grid-cols-2 lg:gap-x-12">
            {serviceCategories.map((c, i) => (
              <li key={c.id} className="border-b border-line first:border-t lg:nth-2:border-t">
                <Link to={`/services/${c.id}`} className="group flex gap-5 py-6">
                  <span className="pt-1 font-mono text-sm text-royal">{num(i)}</span>
                  <span className="min-w-0 flex-1">
                    <span className="block text-lg font-semibold text-navy transition-colors group-hover:text-royal">{c.title}</span>
                    <span className="mt-1 block text-base leading-relaxed text-muted">{blurbs[c.id] ?? c.summary}</span>
                  </span>
                  <ArrowRight size={18} aria-hidden="true" className="mt-1.5 shrink-0 text-muted transition-colors group-hover:text-royal" />
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-10 flex flex-col sm:flex-row">
            <Button to="/services" variant="outline">View all services <ArrowRight size={16} aria-hidden="true" /></Button>
          </div>
        </div>
      </section>

      {/* Who we work with */}
      <section className="py-16 sm:py-24">
        <div className={`${container} grid gap-10 lg:grid-cols-12 lg:gap-16`}>
          <div className="lg:col-span-5">
            <SectionHeading
              eyebrow="Who we work with"
              title="Clients at different stages"
              subtitle="What a business needs from a development partner depends on its stage and what it already has in place."
            />
          </div>
          <dl className="divide-y divide-line border-y border-line lg:col-span-7">
            {audiences.map((a) => (
              <div key={a.title} className="py-6">
                <dt className="text-lg font-semibold text-navy">{a.title}</dt>
                <dd className="mt-2 text-base leading-relaxed text-muted">{a.text}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Our approach */}
      <section className="bg-surface py-16 sm:py-24">
        <div className={container}>
          <SectionHeading
            eyebrow="Our approach"
            title="Six principles behind every project"
            subtitle="These shape how we plan, build and support software, from the first conversation to the years after launch."
          />
          <div className="mt-12 grid gap-10 lg:grid-cols-2 lg:gap-16">
            <div className="aspect-[4/3] overflow-hidden rounded-md lg:sticky lg:top-28 lg:aspect-[4/5] lg:self-start">
              <Photo
                src={images.aboutApproach}
                alt="Project team reviewing work together at their laptops"
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="h-full w-full"
              />
            </div>
            <ol className="divide-y divide-line border-y border-line">
              {principles.map((p, i) => (
                <li key={p.title} className="flex gap-5 py-6">
                  <span className="pt-1 font-mono text-sm text-royal">{num(i)}</span>
                  <div>
                    <h3 className="text-lg font-semibold text-navy">{p.title}</h3>
                    <p className="mt-2 text-base leading-relaxed text-muted">{p.text}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* How we work with clients */}
      <section className="py-16 sm:py-24">
        <div className={container}>
          <SectionHeading
            eyebrow="Working with us"
            title="How we work with clients"
            subtitle="These commitments apply to every project, whatever its size."
          />
          <ol className="mt-12 divide-y divide-line border-y border-line">
            {commitments.map((c, i) => (
              <li key={c.title} className="grid gap-2 py-6 lg:grid-cols-[64px_minmax(0,360px)_1fr] lg:gap-8">
                <span className="font-mono text-sm text-royal lg:pt-1">{num(i)}</span>
                <h3 className="text-lg font-semibold text-navy">{c.title}</h3>
                <p className="text-base leading-relaxed text-muted">{c.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Technologies and tools */}
      <section className="bg-surface py-16 sm:py-24">
        <div className={container}>
          <SectionHeading
            eyebrow="Technologies and tools"
            title="The technology we work with"
            subtitle="We choose tools based on what your project needs, weighing performance, security, cost and how easy the system will be to maintain."
          />
          <div className="mt-12"><TechStack /></div>
        </div>
      </section>

      <CtaSection />
    </>
  )
}
