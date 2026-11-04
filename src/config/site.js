// Edit these values once — they are used across the whole website.
// Do not put made-up details here: replace each [PLACEHOLDER] with your real information.
export const site = {
  name: 'VashishthTech',
  tagline: 'Software Development & IT Services',
  owner: '[YOUR NAME]',
  email: '[YOUR EMAIL]',
  phone: '[YOUR PHONE]', // shown as-is, e.g. "+91 98765 43210"
  whatsapp: '[YOUR WHATSAPP]', // digits with country code, e.g. "919876543210"
  address: '[YOUR BUSINESS ADDRESS]',
  domain: 'https://your-domain.com', // no trailing slash
  // Optional: paste the "src" URL from Google Maps → Share → Embed a map
  mapEmbedUrl: '',
  // Optional: a Formspree endpoint, e.g. "https://formspree.io/f/xxxxxxx". Leave empty to send enquiries via WhatsApp.
  formEndpoint: '',
}

export const whatsappLink = (text = `Hi ${site.name}, I would like to discuss a project.`) =>
  `https://wa.me/${site.whatsapp.replace(/\D/g, '')}?text=${encodeURIComponent(text)}`

export const telLink = `tel:${site.phone.replace(/[^\d+]/g, '')}`
export const mailLink = `mailto:${site.email}`
