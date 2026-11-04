import { Link } from 'react-router-dom'
import {
  ArrowRight, ArrowUpRight, Building2, CircleCheck, ClipboardList, CodeXml, Eye, FlaskConical, Globe,
  Lightbulb, LifeBuoy, MapPin, MessagesSquare, Rocket, ShieldCheck, Target,
} from 'lucide-react'
import Seo from '../components/Seo'
import TechStack from '../components/TechStack'
import { Button, CtaSection, PageHero, Reveal, SectionHeading, container } from '../components/ui'
import { site } from '../config/site'
import { serviceCategories } from '../data/services'

const highlights = [
  'Custom software development built around your workflows',
  'Websites, web applications, mobile apps and backend systems',
  'Software consulting services for planning and architecture',
  'Maintenance and support after launch',
]

const audiences = [
  { icon: Rocket, title: 'Startups', text: 'MVPs and first product versions, built to validate ideas and grow.' },
  { icon: Building2, title: 'Small & medium businesses', text: 'Software that replaces manual work and supports daily operations.' },
  { icon: Lightbulb, title: 'Entrepreneurs', text: 'Turning a business idea into a working, launch-ready product.' },
  { icon: MapPin, title: 'Indian businesses', text: 'Local payment gateways, WhatsApp integration and workflows that fit how you work.' },
  { icon: Globe, title: 'International clients', text: 'Remote collaboration with clear communication across time zones.' },
]

const principles = [
  { icon: ClipboardList, title: 'Requirement-first planning', text: 'We understand your goals, users and constraints before writing code, so scope and timelines stay realistic.' },
  { icon: CodeXml, title: 'Clean, scalable code', text: 'Readable, well-structured code that is easy to maintain and ready to grow with your business.' },
  { icon: MessagesSquare, title: 'Transparent communication', text: 'Regular updates, honest estimates and direct access to the people building your product.' },
  { icon: ShieldCheck, title: 'Security & performance', text: 'Secure authentication, safe data handling and fast load times are built in from the start.' },
  { icon: FlaskConical, title: 'Testing before delivery', text: 'Features are tested across devices and scenarios so you receive software that works as expected.' },
  { icon: LifeBuoy, title: 'Long-term support', text: 'Maintenance, updates and improvements after launch, so your software keeps running smoothly.' },
]

const steps = ['Discover', 'Plan', 'Design', 'Develop', 'Test', 'Launch & support']

export default function About() {
  return (
    <>
      <Seo
        title="About Us"
        description={`${site.name} is an independent software development company and IT services provider offering custom software development, web and mobile apps, and software consulting services for startups and businesses.`}
      />

      <PageHero
        eyebrow="About Us"
        title={`About ${site.name}`}
        subtitle="We are an independent software development and IT services provider focused on delivering reliable, scalable and business-oriented digital solutions. We help startups, entrepreneurs and established businesses transform their ideas into practical software products."
      >
        <Button to="/contact">Get a Free Consultation <ArrowRight size={16} /></Button>
        <Button to="/services" variant="ghostLight">Explore Services</Button>
      </PageHero>

      {/* Business overview */}
      <section className="py-20 sm:py-24">
        <div className={`${container} grid items-center gap-12 lg:grid-cols-2 lg:gap-16`}>
          <Reveal>
            <SectionHeading align="left" eyebrow="Who we are" title="A software development company focused on business outcomes" />
            <div className="mt-6 space-y-4 text-lg leading-relaxed text-muted">
              <p>
                {site.name} is an IT services provider that designs and builds software for real business needs —
                from business websites and customer portals to ERP, CRM, inventory and billing systems.
              </p>
              <p>
                As an independent team, we work closely with every client, keep the process simple and focus on
                software that is practical to use, easy to maintain and ready to scale.
              </p>
            </div>
            <ul className="mt-8 space-y-3">
              {highlights.map((h) => (
                <li key={h} className="flex gap-3 text-ink">
                  <CircleCheck size={20} className="mt-0.5 shrink-0 text-royal" />
                  <span>{h}</span>
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={120}>
            <img
              src="https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?auto=format&fit=crop&w=1200&q=75"
              alt="Software team discussing a project plan around a laptop"
              width="1200" height="900" loading="lazy"
              className="aspect-[4/3] w-full rounded-3xl border border-line object-cover shadow-xl shadow-navy/5"
            />
          </Reveal>
        </div>
      </section>

      {/* Mission & vision */}
      <section className="bg-surface py-20 sm:py-24">
        <div className={container}>
          <SectionHeading eyebrow="Purpose" title="Our mission and vision" />
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {[
              { icon: Target, title: 'Our mission', text: 'To deliver reliable, secure and scalable software that solves real business problems — with honest advice, clear communication and dependable support at every stage.' },
              { icon: Eye, title: 'Our vision', text: 'To be a trusted technology partner for businesses in India and around the world, helping them grow through practical, well-built digital solutions.' },
            ].map((c, i) => (
              <Reveal key={c.title} delay={i * 100} className="rounded-2xl border border-line bg-white p-8 sm:p-10">
                <div className="grid h-12 w-12 place-items-center rounded-xl bg-royal/10 text-royal"><c.icon size={24} /></div>
                <h3 className="mt-6 text-2xl font-bold tracking-tight text-navy">{c.title}</h3>
                <p className="mt-3 text-lg leading-relaxed text-muted">{c.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Who we work with */}
      <section className="py-20 sm:py-24">
        <div className={container}>
          <SectionHeading eyebrow="Who we work with" title="Built for businesses at every stage" />
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {audiences.map((a, i) => (
              <Reveal key={a.title} delay={i * 60} className="rounded-2xl border border-line bg-white p-6">
                <a.icon size={22} className="text-royal" />
                <h3 className="mt-4 font-semibold text-navy">{a.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{a.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Expertise */}
      <section className="bg-surface py-20 sm:py-24">
        <div className={container}>
          <SectionHeading
            eyebrow="Our expertise"
            title="End-to-end software and IT services"
            subtitle="From custom software development to cloud deployment and software consulting services — one partner for the complete product."
          />
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            {serviceCategories.map((s, i) => (
              <Reveal key={s.id} delay={(i % 5) * 50}>
                <Link
                  to={`/services/${s.id}`}
                  className="group flex h-full flex-col rounded-2xl border border-line bg-white p-5 transition-colors hover:border-royal/40"
                >
                  <div className="flex items-center justify-between">
                    <div className="grid h-10 w-10 place-items-center rounded-lg bg-royal/10 text-royal"><s.icon size={20} /></div>
                    <ArrowUpRight size={18} className="text-muted transition-colors group-hover:text-royal" />
                  </div>
                  <h3 className="mt-4 font-semibold text-navy">{s.title}</h3>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="py-20 sm:py-24">
        <div className={container}>
          <SectionHeading
            eyebrow="Technologies and tools"
            title="Modern, proven technology stack"
            subtitle="We choose tools based on your project’s needs — balancing performance, security, cost and long-term maintainability."
          />
          <div className="mt-12"><TechStack /></div>
        </div>
      </section>

      {/* Development approach */}
      <section className="bg-surface py-20 sm:py-24">
        <div className={container}>
          <SectionHeading
            eyebrow="How we work"
            title="Our development approach"
            subtitle="A simple, transparent process with quality checks at every step."
          />
          <Reveal as="ol" className="mx-auto mt-12 flex max-w-4xl flex-wrap justify-center gap-2">
            {steps.map((s, i) => (
              <li key={s} className="flex items-center gap-2 rounded-full border border-line bg-white px-4 py-2 text-sm font-semibold text-navy">
                <span className="grid h-6 w-6 place-items-center rounded-full bg-royal text-xs text-white">{i + 1}</span>
                {s}
              </li>
            ))}
          </Reveal>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {principles.map((p, i) => (
              <Reveal key={p.title} delay={(i % 3) * 80} className="rounded-2xl border border-line bg-white p-7">
                <div className="grid h-11 w-11 place-items-center rounded-xl bg-navy text-white"><p.icon size={20} /></div>
                <h3 className="mt-5 text-lg font-semibold text-navy">{p.title}</h3>
                <p className="mt-2 leading-relaxed text-muted">{p.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaSection />
    </>
  )
}
