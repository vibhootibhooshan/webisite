import { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
// Icons are functional only: status (CheckCircle2/AlertCircle), spinner (Loader2), button arrow, accordion toggle (Plus).
import { CheckCircle2, AlertCircle, Loader2, ArrowRight, Plus } from 'lucide-react'
import { container, Button, PageHero } from '../components/ui'
import { images } from '../data/images'
import Seo from '../components/Seo'
import { site, whatsappLink, telLink, mailLink } from '../config/site'
import { serviceCategories } from '../data/services'

const serviceOptions = [...serviceCategories.map((c) => c.title), 'Other / Not sure yet']
const budgetOptions = ['Under ₹25,000', '₹25,000 – ₹1,00,000', '₹1,00,000 – ₹5,00,000', 'Above ₹5,00,000', 'Not sure yet']
const empty = { name: '', email: '', phone: '', company: '', service: '', budget: '', message: '' }

const channels = [
  { label: 'Email', value: site.email, href: mailLink },
  { label: 'Phone', value: site.phone, href: telLink },
  { label: 'WhatsApp', value: 'Message us on WhatsApp', href: whatsappLink(), external: true },
  { label: 'Address', value: site.address },
]

const steps = [
  { title: 'We review your enquiry', text: 'We read the details you send and note any questions about goals, scope or timing.' },
  { title: 'We get back to you', text: 'We reply by email, phone or WhatsApp, whichever you prefer.' },
  { title: 'Free consultation', text: 'A call to agree the approach, technology and a realistic plan. There is no obligation.' },
]

const faqs = [
  {
    q: 'What should I include in my enquiry?',
    a: 'Tell us what you want built or fixed, who will use it, and any deadline or budget range you have in mind. Links to similar websites or apps, or existing documents, are useful too. If you are not sure about the details yet, that is fine. We can work them out together on the first call.',
  },
  {
    q: 'Is the first consultation free?',
    a: 'Yes. The first consultation is free and there is no obligation. We use it to understand your requirements and suggest a sensible scope, technology and next steps.',
  },
  {
    q: 'Do you work with clients outside India?',
    a: 'Yes. We work remotely with clients in other countries and keep in touch by email, WhatsApp and video calls, at times that suit both time zones.',
  },
  {
    q: 'Can you take over or fix an existing project?',
    a: 'Yes. We take on bug fixing, ongoing maintenance and migration of existing websites, apps and systems. We start by reviewing the code and hosting, then tell you what we found and what we recommend.',
  },
  {
    q: 'How soon will I hear back?',
    a: 'We read every enquiry and reply as soon as we can, usually on the channel you used to contact us. If your request is urgent, WhatsApp is the quickest way to reach us.',
  },
]

const monoLabel = 'font-mono text-xs font-medium uppercase tracking-[0.14em] text-muted'

// Key order = field order, so the first key is the first invalid field.
function validate(d) {
  const e = {}
  if (!d.name.trim()) e.name = 'Please enter your full name.'
  if (!d.email.trim()) e.email = 'Please enter your email address.'
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(d.email.trim())) e.email = 'Please enter a valid email address.'
  const digits = d.phone.replace(/\D/g, '').length
  if (!d.phone.trim()) e.phone = 'Please enter your phone number.'
  else if (!/^\+?[\d\s-]+$/.test(d.phone.trim()) || digits < 10 || digits > 15) e.phone = 'Please enter a valid phone number (10–15 digits).'
  if (!d.service) e.service = 'Please select the service you need.'
  const len = d.message.trim().length
  if (!len) e.message = 'Please describe your project.'
  else if (len < 20) e.message = 'Please add a little more detail (at least 20 characters).'
  return e
}

const toWhatsappText = (d) => [
  `Hi ${site.name}, I would like to discuss a project.`,
  '',
  `Name: ${d.name}`,
  `Email: ${d.email}`,
  `Phone: ${d.phone}`,
  d.company ? `Company: ${d.company}` : null,
  `Service required: ${d.service}`,
  d.budget ? `Project budget: ${d.budget}` : null,
  '',
  'Project description:',
  d.message,
].filter((l) => l !== null).join('\n')

function Field({ id, label, required, error, className = '', children }) {
  return (
    <div className={className}>
      <label htmlFor={id} className="block text-[15px] font-medium text-navy">
        {label}
        {required ? <span className="text-red-700" aria-hidden="true"> *</span> : <span className="font-normal text-muted"> (optional)</span>}
      </label>
      {children}
      {error && <p id={`${id}-error`} className="mt-1.5 text-sm text-red-700">{error}</p>}
    </div>
  )
}

export default function Contact() {
  const [params] = useSearchParams()
  const [data, setData] = useState(empty)
  const pre = params.get('service')
  // Applied after hydration: the pre-rendered HTML can't know the ?service= query string.
  useEffect(() => {
    if (serviceOptions.includes(pre)) setData((d) => ({ ...d, service: pre }))
  }, [pre])
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)
  const [status, setStatus] = useState(null) // { type: 'loading' | 'success' | 'error', text }
  const loading = status?.type === 'loading'

  const bind = (name, required = true) => {
    const id = `contact-${name}`
    const err = errors[name]
    return {
      id, name, required, value: data[name],
      onChange: (e) => setData((d) => ({ ...d, [name]: e.target.value })),
      onBlur: () => submitted && setErrors(validate(data)),
      'aria-invalid': err ? true : undefined,
      'aria-describedby': err ? `${id}-error` : undefined,
      className: `mt-2 block min-h-12 w-full rounded-md border bg-white px-3.5 py-2.5 text-base text-ink transition-colors placeholder:text-slate-400 focus:outline-none focus:ring-2 ${err ? 'border-red-600 focus:border-red-600 focus:ring-red-600/25' : 'border-line hover:border-slate-400 focus:border-royal focus:ring-royal/30'}`,
    }
  }

  const succeed = (text) => {
    setStatus({ type: 'success', text })
    setData(empty)
    setErrors({})
    setSubmitted(false)
  }

  async function handleSubmit(e) {
    e.preventDefault()
    if (loading) return
    const errs = validate(data)
    setErrors(errs)
    setSubmitted(true)
    const first = Object.keys(errs)[0]
    if (first) {
      setStatus(null)
      document.getElementById(`contact-${first}`)?.focus()
      return
    }
    const payload = Object.fromEntries(Object.entries(data).map(([k, v]) => [k, v.trim()]))

    if (!site.formEndpoint) {
      window.open(whatsappLink(toWhatsappText(payload)), '_blank', 'noopener,noreferrer')
      succeed('Your enquiry is ready in WhatsApp. Just press send.')
      return
    }

    setStatus({ type: 'loading' })
    try {
      const res = await fetch(site.formEndpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(payload),
      })
      if (!res.ok) throw new Error(`HTTP ${res.status}`)
      succeed('Thank you. Your enquiry has been sent. We will review it and get back to you soon.')
    } catch {
      setStatus({ type: 'error' })
    }
  }

  return (
    <>
      <Seo
        title="Contact Us"
        description={`Contact ${site.name} to discuss your website, software or mobile app project. Share your requirements and get a free consultation.`}
      />
      <PageHero
        image={images.contactHero}
        title="Contact Us"
        subtitle="Tell us about your project. We’ll get back to you with next steps and a free consultation."
      />

      <section className="py-16 sm:py-24">
        <div className={`${container} grid gap-16 lg:grid-cols-12 lg:gap-12`}>
          <div className="lg:col-span-7">
            <h2 className="text-[28px] font-semibold leading-tight tracking-tight text-navy sm:text-4xl">Send us an enquiry</h2>
            <p className="mt-3 text-base text-muted">Fields marked <span className="text-red-700">*</span> are required.</p>

            <form noValidate onSubmit={handleSubmit} className="mt-8 grid gap-6 sm:grid-cols-2 sm:gap-x-5">
              <Field id="contact-name" label="Full name" required error={errors.name}>
                <input type="text" autoComplete="name" placeholder="Your full name" {...bind('name')} />
              </Field>
              <Field id="contact-email" label="Email address" required error={errors.email}>
                <input type="email" autoComplete="email" placeholder="you@company.com" {...bind('email')} />
              </Field>
              <Field id="contact-phone" label="Phone number" required error={errors.phone}>
                <input type="tel" autoComplete="tel" inputMode="tel" placeholder="+91 98765 43210" {...bind('phone')} />
              </Field>
              <Field id="contact-company" label="Company name" error={errors.company}>
                <input type="text" autoComplete="organization" placeholder="Your company" {...bind('company', false)} />
              </Field>
              <Field id="contact-service" label="Service required" required error={errors.service}>
                <select {...bind('service')}>
                  <option value="" disabled>Select a service</option>
                  {serviceOptions.map((o) => <option key={o}>{o}</option>)}
                </select>
              </Field>
              <Field id="contact-budget" label="Project budget" error={errors.budget}>
                <select {...bind('budget', false)}>
                  <option value="">Select a budget range</option>
                  {budgetOptions.map((o) => <option key={o}>{o}</option>)}
                </select>
              </Field>
              <Field id="contact-message" label="Project description" required error={errors.message} className="sm:col-span-2">
                <textarea rows={6} placeholder="What do you want to build or fix? Who will use it? Any deadline or features you have in mind?" {...bind('message')} />
              </Field>

              <div className="sm:col-span-2">
                <Button type="submit" disabled={loading} className="min-h-12 w-full sm:w-auto">
                  {loading
                    ? <><Loader2 size={16} className="animate-spin" aria-hidden="true" /> Sending…</>
                    : <>{site.formEndpoint ? 'Send enquiry' : 'Send enquiry via WhatsApp'} <ArrowRight size={16} aria-hidden="true" /></>}
                </Button>
                {!site.formEndpoint && (
                  <p className="mt-3 text-sm text-muted">This opens WhatsApp with your details filled in, ready to send.</p>
                )}

                <div aria-live="polite" role="status">
                  {status?.type === 'success' && (
                    <div className="mt-6 flex gap-3 border-l-4 border-green-700 bg-green-50 px-4 py-3 text-base text-green-900">
                      <CheckCircle2 size={18} className="mt-1 shrink-0 text-green-700" aria-hidden="true" />
                      <p>{status.text}</p>
                    </div>
                  )}
                  {status?.type === 'error' && (
                    <div className="mt-6 flex gap-3 border-l-4 border-red-700 bg-red-50 px-4 py-3 text-base text-red-900">
                      <AlertCircle size={18} className="mt-1 shrink-0 text-red-700" aria-hidden="true" />
                      <p>
                        Sorry, we couldn’t send your enquiry right now. Please try again, or reach us directly on{' '}
                        <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="font-medium underline">WhatsApp</a>{' '}
                        or by <a href={mailLink} className="font-medium underline">email</a>.
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </form>
          </div>

          <aside className="space-y-14 lg:col-span-5 lg:border-l lg:border-line lg:pl-12">
            <div>
              <h2 className="text-xl font-semibold tracking-tight text-navy sm:text-2xl">Contact details</h2>
              <dl className="mt-6 border-t border-line">
                {channels.map(({ label, value, href, external }) => (
                  <div key={label} className="border-b border-line py-4">
                    <dt className={monoLabel}>{label}</dt>
                    <dd className="mt-1 text-base text-navy sm:text-lg">
                      {href ? (
                        <a
                          href={href}
                          {...(external && { target: '_blank', rel: 'noopener noreferrer' })}
                          className="inline-block max-w-full break-words py-1.5 font-medium text-royal underline-offset-4 transition-colors hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-royal"
                        >
                          {value}
                          {external && <span className="sr-only"> (opens in a new tab)</span>}
                        </a>
                      ) : (
                        <span className="block break-words whitespace-pre-line pt-1.5">{value}</span>
                      )}
                    </dd>
                  </div>
                ))}
              </dl>
              {site.mapEmbedUrl && (
                <iframe
                  src={site.mapEmbedUrl}
                  title={`${site.name} location on Google Maps`}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                  className="mt-8 aspect-[4/3] w-full rounded-md border border-line"
                />
              )}
            </div>

            <div>
              <h2 className="text-xl font-semibold tracking-tight text-navy sm:text-2xl">What happens next</h2>
              <ol className="mt-6 border-t border-line">
                {steps.map((s, i) => (
                  <li key={s.title} className="flex gap-5 border-b border-line py-5">
                    <span className="pt-0.5 font-mono text-sm font-medium text-royal">{String(i + 1).padStart(2, '0')}</span>
                    <div>
                      <p className="font-medium text-navy">{s.title}</p>
                      <p className="mt-1 text-base leading-relaxed text-muted">{s.text}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </aside>
        </div>
      </section>

      <section className="bg-surface pb-24 pt-16 sm:py-24">
        <div className={`${container} grid gap-10 lg:grid-cols-12 lg:gap-12`}>
          <div className="lg:col-span-4">
            <p className={monoLabel}>FAQ</p>
            <h2 className="mt-4 text-[28px] font-semibold leading-tight tracking-tight text-navy sm:text-4xl">Common questions</h2>
            <p className="mt-4 text-base leading-relaxed text-muted sm:text-lg">What people usually ask before getting in touch.</p>
          </div>
          <div className="border-t border-line lg:col-span-8">
            {faqs.map(({ q, a }) => (
              <details key={q} className="group border-b border-line">
                <summary className="flex min-h-14 cursor-pointer list-none items-center justify-between gap-4 py-5 text-base font-medium text-navy transition-colors hover:text-royal focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-royal sm:text-lg [&::-webkit-details-marker]:hidden">
                  {q}
                  <Plus size={20} className="shrink-0 text-royal group-open:rotate-45" aria-hidden="true" />
                </summary>
                <p className="max-w-2xl pb-6 text-base leading-relaxed text-muted">{a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
