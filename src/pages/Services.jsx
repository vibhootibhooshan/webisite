import { ArrowRight, CircleCheck, MessageCircle } from 'lucide-react'
import Seo from '../components/Seo'
import { Button, CtaSection, PageHero, Reveal, container } from '../components/ui'
import { site, whatsappLink } from '../config/site'
import { serviceCategories } from '../data/services'

export default function Services() {
  return (
    <>
      <Seo
        title="Software Development & IT Services"
        description="Website development services, custom software development, mobile app development, web application development, SaaS development and software consulting services for businesses in India and worldwide."
      />

      <PageHero
        eyebrow="Our Services"
        title="Software Development & IT Services"
        subtitle="From business websites and custom software to mobile apps, SaaS platforms and cloud infrastructure — end-to-end development and support under one roof."
      >
        <Button to="/contact">Discuss Your Project <ArrowRight size={16} /></Button>
        <Button href={whatsappLink()} variant="ghostLight"><MessageCircle size={16} /> Chat on WhatsApp</Button>
      </PageHero>

      <nav aria-label="Service categories" className="border-b border-line bg-white">
        <ul className={`${container} flex gap-2 overflow-x-auto py-4 [scrollbar-width:none]`}>
          {serviceCategories.map((c) => (
            <li key={c.id} className="shrink-0">
              <a href={`#${c.id}`}
                className="inline-flex items-center gap-2 rounded-full border border-line px-4 py-2 text-sm font-medium text-navy transition-colors hover:border-royal/40 hover:text-royal focus-visible:outline-2 focus-visible:outline-royal">
                <c.icon size={15} aria-hidden="true" /> {c.title}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {serviceCategories.map((cat, i) => (
        <section key={cat.id} id={cat.id} aria-labelledby={`${cat.id}-title`}
          className={`scroll-mt-20 py-16 sm:py-24 ${i % 2 ? 'bg-surface' : 'bg-white'}`}>
          <div className={container}>
            <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
              <Reveal className={i % 2 ? 'lg:order-2' : ''}>
                <div className="grid h-12 w-12 place-items-center rounded-xl bg-royal/10 text-royal">
                  <cat.icon size={24} aria-hidden="true" />
                </div>
                <h2 id={`${cat.id}-title`} className="mt-6 text-3xl font-bold tracking-tight text-navy sm:text-4xl">{cat.title}</h2>
                <p className="mt-4 text-lg leading-relaxed text-muted">{cat.summary}</p>
              </Reveal>
              <Reveal delay={100}>
                <img src={cat.image} alt={`${cat.title} services by ${site.name}`} width="1200" height="800"
                  loading="lazy" decoding="async"
                  className="aspect-[3/2] w-full rounded-2xl border border-line bg-surface object-cover" />
              </Reveal>
            </div>

            <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {cat.items.map((s) => (
                <li key={s.name}
                  className="rounded-2xl border border-line bg-white p-6 transition duration-200 hover:-translate-y-0.5 hover:border-royal/30 hover:shadow-lg hover:shadow-navy/5">
                  <CircleCheck size={20} className="text-royal" aria-hidden="true" />
                  <h3 className="mt-4 font-semibold text-navy">{s.name}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{s.description}</p>
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-wrap gap-3">
              <Button to={`/services/${cat.id}`} variant="dark">View Full Details <ArrowRight size={16} /></Button>
              <Button variant="outline" to={`/contact?service=${encodeURIComponent(cat.title)}`}>Discuss Your Project <ArrowRight size={16} /></Button>
              <Button href={whatsappLink(`Hi, I am interested in ${cat.title}`)} variant="outline"><MessageCircle size={16} /> Ask on WhatsApp</Button>
            </div>
          </div>
        </section>
      ))}

      <CtaSection />
    </>
  )
}
