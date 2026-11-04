import { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { Mail, Phone, MessageCircle, MapPin, CheckCircle2, AlertCircle, Loader2, Send } from 'lucide-react'
import { container, Button, PageHero } from '../components/ui'
import Seo from '../components/Seo'
import { site, whatsappLink, telLink, mailLink } from '../config/site'
import { serviceCategories } from '../data/services'

const serviceOptions = [...serviceCategories.map((c) => c.title), 'Other / Not sure yet']
const budgetOptions = ['Under ₹25,000', '₹25,000 – ₹1,00,000', '₹1,00,000 – ₹5,00,000', 'Above ₹5,00,000', 'Not sure yet']
const empty = { name: '', email: '', phone: '', company: '', service: '', budget: '', message: '' }

const channels = [
  { icon: Mail, label: 'Business email', value: site.email, href: mailLink },
  { icon: Phone, label: 'Contact number', value: site.phone, href: telLink },
  { icon: MessageCircle, label: 'WhatsApp', value: 'Chat with us on WhatsApp', href: whatsappLink(), external: true },
  { icon: MapPin, label: 'Business address', value: site.address },
]

const steps = [
  { title: 'We review your requirements', text: 'We go through the details you share to understand your goals and scope.' },
  { title: 'We get back to you', text: 'We reach out by email, phone or WhatsApp — whichever suits you best.' },
  { title: 'Free consultation', text: 'We discuss the right approach, technology and timelines, with no obligation.' },
]

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

function Field({ id, label, required, error, children }) {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium text-navy">
        {label}
        {required ? <span className="text-red-600" aria-hidden="true"> *</span> : <span className="font-normal text-muted"> (optional)</span>}
      </label>
      {children}
      {error && <p id={`${id}-error`} className="mt-1.5 text-sm text-red-600">{error}</p>}
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
      className: `mt-2 block w-full rounded-lg border bg-white px-3.5 py-2.5 text-sm text-ink shadow-xs transition placeholder:text-slate-400 focus:outline-none focus:ring-4 ${err ? 'border-red-400 focus:border-red-500 focus:ring-red-500/15' : 'border-line hover:border-slate-300 focus:border-royal focus:ring-royal/15'}`,
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
      succeed('Your enquiry has been prepared in WhatsApp — just press send.')
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
      succeed('Thank you! Your enquiry has been sent. We will review it and get back to you soon.')
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
        eyebrow="Get in touch"
        title="Contact Us"
        subtitle="Let’s discuss your project. Tell us what you want to build and we’ll help you plan the right solution — scope, technology and timelines."
      >
        <Button href={whatsappLink()}><MessageCircle size={16} /> Chat on WhatsApp</Button>
        <Button href={mailLink} variant="ghostLight"><Mail size={16} /> Email us</Button>
      </PageHero>

      <section className="py-16 sm:py-24">
        <div className={`${container} grid gap-10 lg:grid-cols-5 lg:gap-12`}>
          <div className="rounded-2xl border border-line bg-white p-6 shadow-sm sm:p-8 lg:col-span-3">
            <h2 className="text-2xl font-bold tracking-tight text-navy">Tell us about your project</h2>
            <p className="mt-2 text-sm text-muted">Fields marked <span className="text-red-600">*</span> are required.</p>

            <form noValidate onSubmit={handleSubmit} className="mt-8 grid gap-5 sm:grid-cols-2">
              <Field id="contact-name" label="Full Name" required error={errors.name}>
                <input type="text" autoComplete="name" placeholder="Your full name" {...bind('name')} />
              </Field>
              <Field id="contact-email" label="Email Address" required error={errors.email}>
                <input type="email" autoComplete="email" placeholder="you@company.com" {...bind('email')} />
              </Field>
              <Field id="contact-phone" label="Phone Number" required error={errors.phone}>
                <input type="tel" autoComplete="tel" inputMode="tel" placeholder="+91 98765 43210" {...bind('phone')} />
              </Field>
              <Field id="contact-company" label="Company Name" error={errors.company}>
                <input type="text" autoComplete="organization" placeholder="Your company" {...bind('company', false)} />
              </Field>
              <Field id="contact-service" label="Service Required" required error={errors.service}>
                <select {...bind('service')}>
                  <option value="" disabled>Select a service</option>
                  {serviceOptions.map((o) => <option key={o}>{o}</option>)}
                </select>
              </Field>
              <Field id="contact-budget" label="Project Budget" error={errors.budget}>
                <select {...bind('budget', false)}>
                  <option value="">Select a budget range</option>
                  {budgetOptions.map((o) => <option key={o}>{o}</option>)}
                </select>
              </Field>
              <div className="sm:col-span-2">
                <Field id="contact-message" label="Project Description" required error={errors.message}>
                  <textarea rows={5} placeholder="Briefly describe your project, goals and any features you have in mind." {...bind('message')} />
                </Field>
              </div>

              <div className="sm:col-span-2">
                <Button type="submit" disabled={loading} className="w-full sm:w-auto">
                  {loading
                    ? <><Loader2 size={16} className="animate-spin" /> Sending…</>
                    : <><Send size={16} /> {site.formEndpoint ? 'Send Enquiry' : 'Send Enquiry via WhatsApp'}</>}
                </Button>
                {!site.formEndpoint && (
                  <p className="mt-3 text-xs text-muted">This opens WhatsApp with your details filled in, ready to send.</p>
                )}

                <div aria-live="polite" role="status">
                  {status?.type === 'success' && (
                    <div className="mt-5 flex gap-3 rounded-lg border border-green-200 bg-green-50 p-4 text-sm text-green-800">
                      <CheckCircle2 size={20} className="shrink-0 text-green-600" aria-hidden="true" />
                      <p>{status.text}</p>
                    </div>
                  )}
                  {status?.type === 'error' && (
                    <div className="mt-5 flex gap-3 rounded-lg border border-red-200 bg-red-50 p-4 text-sm text-red-800">
                      <AlertCircle size={20} className="shrink-0 text-red-600" aria-hidden="true" />
                      <p>
                        Sorry, we couldn’t send your enquiry right now. Please try again, or reach us directly on{' '}
                        <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="font-semibold underline">WhatsApp</a>{' '}
                        or by <a href={mailLink} className="font-semibold underline">email</a>.
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </form>
          </div>

          <aside className="space-y-8 lg:col-span-2">
            <ul className="space-y-4">
              {channels.map(({ icon: Icon, label, value, href, external }) => {
                const Tag = href ? 'a' : 'div'
                return (
                  <li key={label}>
                    <Tag
                      {...(href && { href })}
                      {...(external && { target: '_blank', rel: 'noopener noreferrer' })}
                      className={`flex items-start gap-4 rounded-xl border border-line bg-white p-5 transition ${href ? 'hover:border-royal/40 hover:shadow-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-royal' : ''}`}
                    >
                      <span className="grid h-11 w-11 shrink-0 place-items-center rounded-lg bg-surface text-royal">
                        <Icon size={20} aria-hidden="true" />
                      </span>
                      <span className="min-w-0">
                        <span className="block text-xs font-semibold uppercase tracking-wider text-muted">{label}</span>
                        <span className="mt-1 block break-words whitespace-pre-line text-sm font-semibold text-navy">{value}</span>
                      </span>
                    </Tag>
                  </li>
                )
              })}
            </ul>

            <div className="rounded-2xl bg-surface p-6 sm:p-8">
              <h2 className="text-lg font-bold text-navy">What happens next?</h2>
              <ol className="mt-5 space-y-5">
                {steps.map((s, i) => (
                  <li key={s.title} className="flex gap-4">
                    <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-royal text-sm font-bold text-white">{i + 1}</span>
                    <div>
                      <p className="font-semibold text-navy">{s.title}</p>
                      <p className="mt-1 text-sm leading-relaxed text-muted">{s.text}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>

            {site.mapEmbedUrl && (
              <iframe
                src={site.mapEmbedUrl}
                title={`${site.name} location on Google Maps`}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
                className="h-72 w-full rounded-2xl border border-line"
              />
            )}
          </aside>
        </div>
      </section>
    </>
  )
}
