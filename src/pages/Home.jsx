import { Link } from 'react-router-dom'
import { ArrowRight, Plus } from 'lucide-react'
import Seo from '../components/Seo'
import TechStack from '../components/TechStack'
import { Button, CtaSection, Eyebrow, Photo, SectionHeading, container } from '../components/ui'
import { images } from '../data/images'
import { serviceCategories } from '../data/services'

const num = (i) => String(i + 1).padStart(2, '0')
const label = 'font-mono text-xs font-medium uppercase tracking-[0.14em]'

const capabilities = [
  ['Websites & E-commerce', 'Business sites, online stores and landing pages built for mobile and search.'],
  ['Custom Software', 'ERP, CRM, billing and inventory systems shaped around your processes.'],
  ['Mobile Apps', 'Android, iOS and cross-platform apps connected to your backend.'],
  ['Cloud & Support', 'Deployment, servers, maintenance and help after launch.'],
]

const engagements = [
  {
    title: 'Project-based',
    lead: 'A fixed scope agreed before work starts.',
    bestFor: 'A new website, app or software product where the requirements can be written down up front.',
    included: ['Written scope and feature list', 'Estimate with milestones', 'Design, development and testing', 'Deployment and handover of source code'],
  },
  {
    title: 'Ongoing development',
    lead: 'Monthly development time or a dedicated developer.',
    bestFor: 'Products that keep changing, startups building after their first version, or teams that need extra capacity.',
    included: ['Agreed monthly hours or a dedicated developer', 'A shared task list you prioritise', 'Regular progress updates and demos', 'Freedom to change priorities each month'],
  },
  {
    title: 'Support & maintenance',
    lead: 'Keeping live software secure and working.',
    bestFor: 'Websites, apps and systems already in use, including software built by another team.',
    included: ['Bug fixes and small changes', 'Security and dependency updates', 'Backups, hosting and uptime checks', 'Help when something stops working'],
  },
]

const steps = [
  ['Discovery', 'We discuss your business, users and goals, then write down the requirements and what a good result looks like.'],
  ['Planning & design', 'We agree on features, technology and milestones, and prepare wireframes or screen designs for your approval.'],
  ['Development', 'We build in short iterations and show you working software regularly, so feedback comes early.'],
  ['Testing', 'Each feature is checked on real devices and browsers for errors, speed and security issues.'],
  ['Launch', 'We deploy to your hosting or cloud account, set up the domain and SSL, and hand over code and access.'],
  ['Support', 'After launch we fix issues, apply updates and add improvements as your needs change.'],
]

const reasons = [
  ['Direct communication with the developer', 'You speak to the person writing your code, not a chain of account managers. Questions are answered by someone who knows the details.'],
  ['Business-first planning', 'We start from the problem you want solved and the budget you have, then suggest the simplest software that solves it.'],
  ['Clean, maintainable code', 'Readable code, a sensible structure and basic documentation, so the software can be extended later by us or by another team.'],
  ['You own the source code', 'The code, repositories and hosting accounts are handed over to you. You are not locked in to working with us.'],
  ['Honest estimates', 'You get a written estimate based on the agreed scope, and we tell you early if something will take longer or cost more.'],
  ['Support after launch', 'We stay available after go-live for fixes, updates and new features, on request or as a monthly arrangement.'],
]

const industries = [
  ['industryRetail', 'Retail & E-commerce', 'Online stores, billing, inventory and order management.', 'Shop counter with a customer paying at checkout'],
  ['industryFinance', 'Finance & Fintech', 'Loan, payment and investment platforms with secure dashboards.', 'Financial charts and reports on a laptop screen'],
  ['industryHealthcare', 'Healthcare', 'Appointment booking, patient records and clinic management.', 'Healthcare professional using a computer'],
  ['industryEducation', 'Education', 'Learning platforms, student portals and institute management.', 'Students working together on laptops'],
  ['industryRealEstate', 'Real Estate', 'Property listing websites, CRMs and lead tracking.', 'Modern office building interior'],
  ['industryLogistics', 'Logistics', 'Shipment tracking, fleet and delivery management.', 'Team planning logistics operations'],
  ['industryManufacturing', 'Manufacturing', 'ERP, production planning and stock control software.', 'Hardware and electronics on a workbench'],
  ['industryStartups', 'Startups & SaaS', 'MVPs and SaaS products, from first version to paying customers.', 'Startup team working in an open office'],
]

const faqs = [
  ['How much does a website or software project cost?', 'It depends on the scope: the number of pages or screens, the features, the integrations and the platforms you need. Share your requirements and we will send a free, itemised estimate before any work begins.'],
  ['How long does a project take?', 'That also depends on scope. A business website takes far less time than a custom web application or mobile app. After the first discussion we give you a timeline with milestones, so you know what will be delivered and when.'],
  ['Do you work with clients outside India?', 'Yes. We work with international clients over email, video calls and WhatsApp. Communication is in English, and calls are scheduled to suit your time zone.'],
  ['Will I own the source code?', 'Yes. When the project is complete and paid for, the source code, design files and access to hosting, domains and third-party accounts are handed over to you.'],
  ['Do you provide support after launch?', 'Yes. We fix issues reported after go-live and offer ongoing maintenance for updates, security patches, backups and new features, either on request or as a monthly arrangement.'],
  ['Can you take over a project built by someone else?', 'Yes. We start by reviewing the code, hosting and documentation, then explain what is in good shape, what needs fixing and how we suggest continuing.'],
]

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map(([q, a]) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } })),
}

export default function Home() {
  return (
    <>
      <Seo description="VashishthTech is a software development company in India building websites, custom software, mobile apps, web applications and SaaS products for businesses." />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Hero */}
      <section className="bg-white">
        <div className={`${container} pb-16 pt-10 sm:pb-24 sm:pt-16 lg:pt-20`}>
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">
            <div>
              <Eyebrow>Software Development &amp; IT Services</Eyebrow>
              <h1 className="mt-5 text-[34px] font-semibold leading-[1.1] tracking-tight text-navy sm:text-5xl lg:text-[56px]">
                Building Smart Digital Solutions for Modern Businesses
              </h1>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
                We provide professional website development, custom software, mobile applications, cloud solutions and IT consulting services to help businesses grow through technology.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button to="/services">Explore Our Services <ArrowRight size={16} /></Button>
                <Button to="/contact" variant="outline">Get a Free Consultation</Button>
              </div>
            </div>
            <Photo src={images.homeHero} alt="Software developers working together on a project" priority
              sizes="(min-width: 1024px) 50vw, 100vw" className="aspect-[4/3] w-full rounded-md" />
          </div>

          <ul className="mt-12 grid grid-cols-2 border-l border-t border-line sm:mt-16 lg:grid-cols-4">
            {capabilities.map(([title, text]) => (
              <li key={title} className="border-b border-r border-line p-4 sm:p-6">
                <p className="font-semibold text-navy">{title}</p>
                <p className="mt-2 text-[15px] leading-relaxed text-muted">{text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Introduction */}
      <section className="bg-surface py-16 sm:py-24">
        <div className={`${container} grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-16`}>
          <Photo src={images.homeAbout} alt="Developer writing code on a laptop"
            sizes="(min-width: 1024px) 50vw, 100vw" className="aspect-[4/3] w-full rounded-md" />
          <div>
            <SectionHeading eyebrow="About VashishthTech" title="An independent software development company in India" />
            <div className="mt-5 space-y-4 text-base leading-relaxed text-muted sm:text-lg">
              <p>
                VashishthTech is an IT services provider that designs, builds and supports software for Indian businesses, startups, SMEs, entrepreneurs and international clients. Our work covers websites, custom business software, mobile apps, web application development and SaaS development.
              </p>
              <p>
                Each project starts with how your business actually runs. We recommend the simplest technology that does the job, explain trade-offs in plain language, and stay involved after launch for fixes and improvements.
              </p>
            </div>
            <Link to="/about" className="mt-6 inline-flex min-h-11 items-center gap-2 font-medium text-royal underline-offset-4 hover:underline">
              More about us <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 sm:py-24">
        <div className={container}>
          <SectionHeading eyebrow="Our Services" title="What we build and support"
            subtitle="Ten service areas, from website development services and custom software development to mobile app development, cloud hosting and software consulting services. Choose one to see what it includes." />
          <ol className="mt-12 grid border-t border-line lg:grid-cols-2 lg:gap-x-16">
            {serviceCategories.map(({ id, title, summary }, i) => (
              <li key={id} className="border-b border-line">
                <Link to={`/services/${id}`} className="group flex gap-4 py-6 sm:gap-6">
                  <span className="pt-1 font-mono text-sm text-royal">{num(i)}</span>
                  <span className="flex-1">
                    <span className="block text-lg font-semibold text-navy transition-colors group-hover:text-royal">{title}</span>
                    <span className="mt-2 block text-base leading-relaxed text-muted">{summary}</span>
                  </span>
                  <ArrowRight size={18} aria-hidden="true" className="mt-1.5 shrink-0 text-navy/30 transition-colors group-hover:text-royal" />
                </Link>
              </li>
            ))}
          </ol>
          <div className="mt-10 flex flex-col sm:flex-row">
            <Button to="/services" variant="outline">View all services <ArrowRight size={16} /></Button>
          </div>
        </div>
      </section>

      {/* Ways to work with us */}
      <section className="bg-surface py-16 sm:py-24">
        <div className={container}>
          <SectionHeading eyebrow="Engagement" title="Ways to work with us"
            subtitle="Choose the arrangement that suits your project. Many clients combine them, for example a fixed-scope build followed by monthly support." />
          <div className="mt-12 grid divide-y divide-line border-y border-line lg:grid-cols-3 lg:divide-x lg:divide-y-0">
            {engagements.map(({ title, lead, bestFor, included }, i) => (
              <div key={title} className="py-8 lg:px-8 lg:first:pl-0 lg:last:pr-0">
                <p className="font-mono text-sm text-royal">{num(i)}</p>
                <h3 className="mt-3 text-xl font-semibold tracking-tight text-navy">{title}</h3>
                <p className="mt-2 text-base leading-relaxed text-ink">{lead}</p>
                <p className={`${label} mt-6 text-muted`}>Best for</p>
                <p className="mt-2 text-base leading-relaxed text-muted">{bestFor}</p>
                <p className={`${label} mt-6 text-muted`}>What’s included</p>
                <ul className="mt-2 list-disc space-y-1.5 pl-5 text-base leading-relaxed text-muted marker:text-royal">
                  {included.map((t) => <li key={t}>{t}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How we work */}
      <section className="py-16 sm:py-24">
        <div className={container}>
          <SectionHeading eyebrow="How We Work" title="A clear process from first call to launch"
            subtitle="You always know what is being built, what comes next and what it will take." />
          <div className="mt-12 grid gap-10 lg:grid-cols-2 lg:items-start lg:gap-16">
            <Photo src={images.homeProcess} alt="Project planning meeting with notes and laptops"
              sizes="(min-width: 1024px) 50vw, 100vw" className="aspect-[4/3] w-full rounded-md lg:sticky lg:top-28" />
            <ol className="divide-y divide-line border-y border-line">
              {steps.map(([title, text], i) => (
                <li key={title} className="flex gap-4 py-5 sm:gap-6">
                  <span className="pt-0.5 font-mono text-sm text-royal">{num(i)}</span>
                  <div>
                    <h3 className="text-lg font-semibold text-navy">{title}</h3>
                    <p className="mt-1 text-base leading-relaxed text-muted">{text}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="bg-surface py-16 sm:py-24">
        <div className={container}>
          <SectionHeading eyebrow="Technology" title="Technologies we work with"
            subtitle="Established frameworks and platforms with large communities, so your software is easier to host, maintain and hire for." />
          <div className="mt-12"><TechStack /></div>
        </div>
      </section>

      {/* Why choose us */}
      <section className="py-16 sm:py-24">
        <div className={`${container} grid gap-10 lg:grid-cols-[5fr_7fr] lg:gap-16`}>
          <div>
            <SectionHeading eyebrow="Why VashishthTech" title="Why businesses choose us"
              subtitle="What working with us looks like in practice." />
            <Photo src={images.homeWhy} alt="Client and developer reviewing a project together"
              sizes="(min-width: 1024px) 40vw, 100vw" className="mt-8 aspect-[4/3] w-full rounded-md" />
          </div>
          <ol className="grid gap-x-10 gap-y-8 sm:grid-cols-2 lg:pt-2">
            {reasons.map(([title, text], i) => (
              <li key={title} className="border-t border-line pt-5">
                <p className="font-mono text-sm text-royal">{num(i)}</p>
                <h3 className="mt-2 text-lg font-semibold text-navy">{title}</h3>
                <p className="mt-2 text-base leading-relaxed text-muted">{text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Industries */}
      <section className="bg-surface py-16 sm:py-24">
        <div className={container}>
          <SectionHeading eyebrow="Industries" title="Industries we serve"
            subtitle="Each sector has its own workflows, rules and customer expectations. These are the kinds of software we build for them." />
          <ul className="mt-12 grid grid-cols-2 gap-x-4 gap-y-8 sm:gap-x-6 lg:grid-cols-4">
            {industries.map(([key, name, text, alt]) => (
              <li key={key}>
                <Photo src={images[key]} alt={alt} sizes="(min-width: 1024px) 25vw, 50vw" width={800} height={600}
                  className="aspect-[4/3] w-full rounded-md" />
                <h3 className="mt-4 text-base font-semibold text-navy sm:text-lg">{name}</h3>
                <p className="mt-1 text-[15px] leading-relaxed text-muted sm:text-base">{text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 sm:py-24">
        <div className={`${container} grid gap-10 lg:grid-cols-[2fr_3fr] lg:gap-16`}>
          <SectionHeading eyebrow="FAQ" title="Frequently asked questions"
            subtitle="Short answers to what clients usually ask before starting a project." />
          <div className="border-t border-line">
            {faqs.map(([q, a]) => (
              <details key={q} className="group border-b border-line">
                <summary className="flex min-h-11 cursor-pointer list-none items-center justify-between gap-4 py-5 text-lg font-medium text-navy [&::-webkit-details-marker]:hidden">
                  {q}
                  <Plus size={20} aria-hidden="true" className="shrink-0 text-royal transition-transform group-open:rotate-45" />
                </summary>
                <p className="pb-5 pr-8 text-base leading-relaxed text-muted">{a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <CtaSection />
    </>
  )
}
