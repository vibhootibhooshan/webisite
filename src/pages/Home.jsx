import { Link } from 'react-router-dom'
import {
  ArrowRight, Check, Search, PenTool, Code, ShieldCheck, CloudUpload, LifeBuoy, MessagesSquare, Layers, Cpu,
  Clock, Wrench, Target, ShoppingBag, Landmark, HeartPulse, GraduationCap, Building2, Truck, Factory, Rocket, Briefcase,
} from 'lucide-react'
import Seo from '../components/Seo'
import TechStack from '../components/TechStack'
import { Button, CtaSection, Reveal, SectionHeading, container } from '../components/ui'
import { serviceCategories } from '../data/services'

const img = (id) => `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=1200&q=75`

const heroServices = serviceCategories.filter((s) =>
  ['website-development', 'software-development', 'mobile-app-development', 'web-application-development', 'cloud-it-solutions'].includes(s.id))

const process = [
  [Search, 'Discovery', 'We learn about your business, goals and users to define the right scope and requirements.'],
  [PenTool, 'Planning & Design', 'We plan the architecture, features and timeline, and design intuitive UI/UX for your approval.'],
  [Code, 'Development', 'We build your product in clear iterations and share regular progress so you can give feedback early.'],
  [ShieldCheck, 'Testing', 'Every feature is tested for functionality, performance, security and responsiveness across devices.'],
  [CloudUpload, 'Deployment', 'We launch on reliable cloud infrastructure with proper configuration, monitoring and a smooth handover.'],
  [LifeBuoy, 'Support', 'After launch we provide maintenance, updates and improvements as your business grows.'],
]

const reasons = [
  [MessagesSquare, 'Transparent communication', 'Regular updates, honest timelines and a single point of contact — no jargon, no surprises.'],
  [Layers, 'Scalable architecture', 'Clean, well-structured code and architecture that grows with your users, data and features.'],
  [Cpu, 'Modern technology stack', 'Proven modern frameworks like React, Node.js and cloud platforms for speed, security and reliability.'],
  [Clock, 'On-time delivery focus', 'Clear milestones and realistic planning keep your project moving steadily toward launch.'],
  [Wrench, 'Post-launch support', 'Maintenance, bug fixes and enhancements after go-live so your software stays healthy.'],
  [Target, 'Business-focused approach', 'Every technical decision is tied to your goals — growth, efficiency and a better customer experience.'],
]

const industries = [
  [ShoppingBag, 'Retail & E-commerce', 'Online stores, inventory and order management systems.'],
  [Landmark, 'Finance & Fintech', 'Secure financial web apps, dashboards and payment integrations.'],
  [HeartPulse, 'Healthcare', 'Appointment booking, patient records and clinic management software.'],
  [GraduationCap, 'Education', 'Learning platforms, student portals and institute management.'],
  [Building2, 'Real Estate', 'Property listing websites, CRMs and lead management tools.'],
  [Truck, 'Logistics', 'Shipment tracking, fleet and delivery management systems.'],
  [Factory, 'Manufacturing', 'ERP, production planning and inventory software.'],
  [Rocket, 'Startups & SaaS', 'MVPs and scalable SaaS products built to grow with you.'],
  [Briefcase, 'Professional Services', 'Websites, booking systems and client portals for service firms.'],
]

const iconBox = 'grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-royal/10 text-royal'

export default function Home() {
  return (
    <>
      <Seo description="VashishthTech is a software development company in India offering website development, custom software, mobile apps, web applications, SaaS and cloud solutions." />

      {/* Hero */}
      <section className="relative overflow-hidden bg-navy">
        <div className="bg-grid absolute inset-0 [mask-image:radial-gradient(ellipse_at_top,black,transparent_75%)]" />
        <div className="absolute -top-48 left-0 h-96 w-[44rem] rounded-full bg-royal/25 blur-3xl" />
        <div className={`${container} relative grid items-center gap-14 py-16 sm:py-24 lg:grid-cols-2 lg:gap-12 lg:py-28`}>
          <div>
            <p className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-medium text-slate-300">
              <span className="h-1.5 w-1.5 rounded-full bg-blue-400" />
              Software Development Company &amp; IT Services Provider
            </p>
            <h1 className="mt-6 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-[3.5rem] lg:leading-[1.08]">
              Building <span className="text-blue-400">Smart Digital Solutions</span> for Modern Businesses
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-300">
              We provide professional website development, custom software, mobile applications, cloud solutions and IT consulting services to help businesses grow through technology.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button to="/services">Explore Our Services <ArrowRight size={16} /></Button>
              <Button to="/contact" variant="ghostLight">Get a Free Consultation</Button>
            </div>
            <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm text-slate-400">
              {['Free initial consultation', 'Transparent communication', 'Post-launch support'].map((t) => (
                <li key={t} className="flex items-center gap-2"><Check size={16} className="text-blue-400" />{t}</li>
              ))}
            </ul>
          </div>

          <div className="relative lg:pl-8">
            <img src={img('1522071820081-009f0129c71c')} alt="Software development team collaborating on laptops"
              width="1200" height="800" fetchPriority="high"
              className="aspect-[4/3] w-full rounded-2xl object-cover shadow-2xl shadow-navy-900/50 ring-1 ring-white/10" />
            <div className="relative mx-4 -mt-16 rounded-xl border border-line bg-white p-4 shadow-2xl shadow-navy-900/40 sm:absolute sm:-bottom-8 sm:left-0 sm:mx-0 sm:mt-0 sm:w-72 lg:-left-4">
              <p className="text-xs font-semibold uppercase tracking-wider text-muted">What we build</p>
              <ul className="mt-3 space-y-2.5">
                {heroServices.map(({ id, title, icon: Icon }) => (
                  <li key={id} className="flex items-center gap-3 text-sm font-medium text-navy">
                    <span className="grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-royal/10 text-royal"><Icon size={16} /></span>
                    {title}
                    <Check size={16} className="ml-auto shrink-0 text-emerald-500" />
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="py-20 sm:py-24">
        <div className={`${container} grid items-center gap-12 lg:grid-cols-2 lg:gap-16`}>
          <Reveal>
            <img src={img('1600880292089-90a7e086ee0c')} alt="VashishthTech team discussing a software project"
              width="1200" height="800" loading="lazy" className="aspect-[4/3] w-full rounded-2xl object-cover" />
          </Reveal>
          <Reveal delay={100}>
            <SectionHeading align="left" eyebrow="About VashishthTech"
              title="A software development company focused on business outcomes" />
            <div className="mt-5 space-y-4 text-lg leading-relaxed text-muted">
              <p>
                VashishthTech is an IT services provider from India helping startups, small businesses and growing enterprises turn ideas into reliable digital products. From website development services and custom software development to mobile app development and SaaS development, we build technology that fits the way your business actually works.
              </p>
              <p>We keep it simple: understand your goals first, recommend the right technology, and stay in clear communication from the first call to long after launch.</p>
            </div>
            <ul className="mt-6 space-y-3">
              {['End-to-end delivery — design, development, deployment and support', 'Modern, secure and scalable technology', 'Solutions tailored to your workflows, not generic templates'].map((t) => (
                <li key={t} className="flex gap-3 text-ink"><Check size={20} className="mt-0.5 shrink-0 text-royal" />{t}</li>
              ))}
            </ul>
            <Button to="/about" variant="outline" className="mt-8">More About Us <ArrowRight size={16} /></Button>
          </Reveal>
        </div>
      </section>

      {/* Services */}
      <section className="bg-surface py-20 sm:py-24">
        <div className={container}>
          <SectionHeading eyebrow="Our Services" title="Core services for every stage of your digital journey"
            subtitle="From web application development and SaaS products to cloud setup and software consulting services — one team for your complete technology needs." />
          <ul className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {serviceCategories.map(({ id, title, icon: Icon, summary }, i) => (
              <Reveal as="li" key={id} delay={(i % 3) * 80}>
                <Link to={`/services/${id}`}
                  className="group flex h-full flex-col rounded-2xl border border-line bg-white p-6 transition hover:-translate-y-0.5 hover:border-royal/30 hover:shadow-lg hover:shadow-royal/5">
                  <span className={iconBox}><Icon size={22} /></span>
                  <h3 className="mt-5 text-lg font-semibold text-navy">{title}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">{summary}</p>
                  <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-royal">
                    Learn more <ArrowRight size={15} className="transition-transform group-hover:translate-x-0.5" />
                  </span>
                </Link>
              </Reveal>
            ))}
            <Reveal as="li" delay={80} className="sm:col-span-2">
              <div className="relative flex h-full flex-col justify-center overflow-hidden rounded-2xl bg-navy p-8">
                <div className="bg-grid absolute inset-0 opacity-60" />
                <div className="relative">
                  <h3 className="text-xl font-semibold text-white">Not sure what you need?</h3>
                  <p className="mt-2 max-w-lg text-slate-300">Explore our services in detail, or tell us about your project and we’ll suggest the right approach.</p>
                  <div className="mt-6 flex flex-wrap gap-3">
                    <Button to="/services" variant="light">View All Services <ArrowRight size={16} /></Button>
                    <Button to="/contact" variant="ghostLight">Talk to Us</Button>
                  </div>
                </div>
              </div>
            </Reveal>
          </ul>
        </div>
      </section>

      {/* Technologies */}
      <section className="py-20 sm:py-24">
        <div className={container}>
          <SectionHeading eyebrow="Technology" title="Technologies we work with"
            subtitle="We use proven, modern tools that keep your product fast, secure and easy to scale." />
          <div className="mt-14"><TechStack /></div>
        </div>
      </section>

      {/* Process */}
      <section className="bg-surface py-20 sm:py-24">
        <div className={container}>
          <SectionHeading eyebrow="How We Work" title="Our development process"
            subtitle="A clear, structured process keeps your project predictable — you always know what is happening and what comes next." />
          <ol className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {process.map(([Icon, title, text], i) => (
              <Reveal as="li" key={title} delay={(i % 3) * 80} className="rounded-2xl border border-line bg-white p-6">
                <div className="flex items-center justify-between">
                  <span className="grid h-11 w-11 place-items-center rounded-xl bg-navy text-white"><Icon size={20} /></span>
                  <span className="text-3xl font-bold text-royal/15" aria-hidden="true">{String(i + 1).padStart(2, '0')}</span>
                </div>
                <h3 className="mt-5 text-lg font-semibold text-navy">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{text}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* Why choose us */}
      <section className="py-20 sm:py-24">
        <div className={`${container} grid gap-12 lg:grid-cols-[2fr_3fr] lg:gap-16`}>
          <div className="lg:sticky lg:top-28 lg:self-start">
            <SectionHeading align="left" eyebrow="Why VashishthTech" title="Why choose us"
              subtitle="We combine technical depth with a practical, business-first mindset — so the software we build keeps delivering value long after launch." />
            <Button to="/contact" className="mt-8">Discuss Your Project <ArrowRight size={16} /></Button>
          </div>
          <ul className="grid gap-x-8 gap-y-10 sm:grid-cols-2">
            {reasons.map(([Icon, title, text], i) => (
              <Reveal as="li" key={title} delay={(i % 2) * 80}>
                <span className={iconBox}><Icon size={20} /></span>
                <h3 className="mt-4 text-lg font-semibold text-navy">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{text}</p>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* Industries */}
      <section className="bg-surface py-20 sm:py-24">
        <div className={container}>
          <SectionHeading eyebrow="Industries" title="Industries we serve"
            subtitle="We build software for businesses across sectors, adapting every solution to industry-specific workflows and requirements." />
          <ul className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {industries.map(([Icon, name, text], i) => (
              <Reveal as="li" key={name} delay={(i % 3) * 60} className="flex gap-4 rounded-2xl border border-line bg-white p-5">
                <span className={iconBox}><Icon size={20} /></span>
                <div>
                  <h3 className="font-semibold text-navy">{name}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted">{text}</p>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <CtaSection />
    </>
  )
}
