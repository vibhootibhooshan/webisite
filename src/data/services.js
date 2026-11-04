import {
  Globe, Code, Smartphone, LayoutDashboard, Server, Palette, Cloud, Workflow, ShoppingCart, Lightbulb,
} from 'lucide-react'

const img = (id) => `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=1200&q=75`

// Shared by Home, Services, Contact (dropdown) and Footer.
// Category-level fields (id, title, icon, summary, image) are relied on site-wide.
// items: [name, description] pairs, mapped to { name, description } below.
export const serviceCategories = [
  {
    id: 'website-development', title: 'Website Development', icon: Globe,
    summary: 'Fast, secure and SEO-ready websites that represent your business professionally and convert visitors into enquiries.',
    image: img('1460925895917-afdab827c52f'),
    items: [
      ['Business Website Development', 'Professional websites for small and growing businesses that clearly present your services, build trust and make it easy for customers to contact you.'],
      ['Corporate Website Development', 'Multi-page corporate sites with structured content for company profile, divisions, careers and investor or media information, built to reflect your brand standards.'],
      ['E-commerce Website Development', 'Online stores with product catalogues, cart, secure checkout and order tracking, designed to work smoothly on mobile and desktop.'],
      ['Custom Website Development', 'Websites built from scratch around your exact requirements, layout and features instead of being limited by a generic template.'],
      ['Dynamic Website Development', 'Database-driven websites where content, listings and user data update automatically and can be managed without touching code.'],
      ['Landing Page Development', 'Focused, fast-loading landing pages for campaigns and product launches, with clear calls to action and enquiry forms that capture leads.'],
      ['CMS Development', 'Content management setups on WordPress or a headless CMS so your team can update pages, blogs and media on their own.'],
      ['Website Maintenance', 'Regular updates, backups, security patches, uptime checks and content changes to keep your website reliable and current.'],
    ],
  },
  {
    id: 'software-development', title: 'Software Development', icon: Code,
    summary: 'Custom business software built around your workflows — from ERP and CRM to billing, inventory and HR systems.',
    image: img('1555066931-4365d14bab8c'),
    items: [
      ['Custom Software Development', 'Software designed around how your business actually operates, from requirement analysis and design through development, testing and deployment.'],
      ['Business Management Software', 'Centralised systems to manage day-to-day operations such as tasks, clients, staff and reports in one place.'],
      ['ERP Software Development', 'Integrated ERP modules for purchase, sales, inventory, finance and production, tailored to your processes rather than forcing you into a fixed template.'],
      ['CRM Software Development', 'Customer relationship systems to track leads, follow-ups, deals and customer history so your sales team never misses an opportunity.'],
      ['Inventory Management Software', 'Real-time stock tracking across warehouses or outlets with purchase orders, low-stock alerts, batch tracking and movement reports.'],
      ['Billing & Accounting Software', 'GST-ready invoicing, payment tracking, ledgers and financial reports that reduce manual bookkeeping and errors.'],
      ['HR Management Software', 'Employee records, attendance, leave, payroll processing and role-based access managed from a single dashboard.'],
      ['Custom Enterprise Applications', 'Secure, scalable applications for larger organisations with multi-user roles, audit trails and integration with existing systems.'],
    ],
  },
  {
    id: 'mobile-app-development', title: 'Mobile App Development', icon: Smartphone,
    summary: 'Android, iOS and cross-platform apps with clean UI, reliable performance and secure API integration.',
    image: img('1512941937669-90a1b58e7e9c'),
    items: [
      ['Android App Development', 'Android apps built for performance across a wide range of devices and screen sizes, prepared for Google Play Store release.'],
      ['iOS App Development', 'iPhone and iPad apps that follow Apple design guidelines and are prepared for App Store review and submission.'],
      ['Cross-Platform App Development', 'A single codebase for Android and iOS that lowers development and maintenance effort while keeping a native look and feel.'],
      ['React Native Applications', 'React Native apps with reusable components, smooth navigation, push notifications and offline support where needed.'],
      ['Mobile App UI/UX Design', 'Wireframes, user flows and polished screen designs focused on intuitive navigation and touch-friendly interactions.'],
      ['API Integration', 'Secure connections between your app and backend services, payment gateways, maps, analytics and other third-party APIs.'],
      ['App Maintenance', 'Bug fixes, OS compatibility updates, performance improvements and feature enhancements after your app goes live.'],
    ],
  },
  {
    id: 'web-application-development', title: 'Web Application Development', icon: LayoutDashboard,
    summary: 'Scalable SaaS products, dashboards, portals and real-time platforms engineered for growth.',
    image: img('1551434678-e076c223a692'),
    items: [
      ['SaaS Application Development', 'Multi-tenant SaaS products with user onboarding, subscription billing, role management and an architecture that scales as you add customers.'],
      ['Admin Dashboard Development', 'Data-rich admin panels with charts, filters, user management and reports to monitor and control your business operations.'],
      ['Customer Portals', 'Secure self-service portals where customers can log in to view orders, invoices, tickets, documents and account details.'],
      ['Trading Platform Development', 'Web platforms for trading and market data with live price feeds, order workflows, watchlists and secure user accounts.'],
      ['Financial Web Applications', 'Applications for loans, investments, payments and financial reporting built with strong access controls and accurate calculations.'],
      ['Real-Time Web Applications', 'Live chat, notifications, tracking and collaborative features powered by WebSockets and event-driven backends.'],
      ['Multi-Vendor Platforms', 'Marketplaces where multiple sellers manage their own products and orders, with commission handling and a central admin panel.'],
    ],
  },
  {
    id: 'api-backend-development', title: 'API & Backend Development', icon: Server,
    summary: 'Robust REST APIs, databases and backend systems with secure authentication and payment integrations.',
    image: img('1558494949-ef010cbdcc31'),
    items: [
      ['REST API Development', 'Well-structured, documented REST APIs with versioning, validation and error handling for web and mobile clients.'],
      ['Backend Development', 'Server-side logic in Node.js, Python or PHP that is secure, maintainable and designed to handle growing traffic.'],
      ['Database Design', 'Normalised schemas, indexing and query optimisation in MySQL, PostgreSQL or MongoDB for reliable and fast data access.'],
      ['Third-Party API Integration', 'Integration with SMS, email, maps, logistics, accounting and other external services your application depends on.'],
      ['Payment Gateway Integration', 'Secure integration with Razorpay, Stripe, PayU, Cashfree and similar gateways, including webhooks, refunds and payment status handling.'],
      ['Authentication Systems', 'Login, signup, OTP, social login, JWT sessions and role-based permissions implemented with security best practices.'],
      ['Real-Time Data Integration', 'Streaming and syncing data between systems through webhooks, queues and sockets so information stays current everywhere.'],
    ],
  },
  {
    id: 'ui-ux-frontend', title: 'UI/UX & Frontend Development', icon: Palette,
    summary: 'Intuitive interfaces and responsive React frontends designed for clarity, usability and conversion.',
    image: img('1581291518857-4e27b48ff24e'),
    items: [
      ['Website UI/UX Design', 'Clean, conversion-focused website layouts with clear hierarchy, consistent typography and a strong visual identity.'],
      ['Application UI/UX Design', 'User flows, wireframes and interface designs for web and mobile applications that make complex tasks simple.'],
      ['Responsive Web Design', 'Layouts that adapt seamlessly to phones, tablets and desktops so every visitor gets a consistent experience.'],
      ['React.js Development', 'Component-based React frontends with clean state management, routing and performance tuning.'],
      ['Frontend Development', 'Pixel-accurate conversion of designs into accessible, fast-loading HTML, CSS and JavaScript.'],
      ['Dashboard Design', 'Clear data visualisation, tables and filter layouts that help users understand metrics and act quickly.'],
    ],
  },
  {
    id: 'cloud-it-solutions', title: 'Cloud & IT Solutions', icon: Cloud,
    summary: 'Cloud deployment, server and VPS management, migrations and dependable technical support.',
    image: img('1451187580459-43490279c0fa'),
    items: [
      ['Cloud Application Deployment', 'Deployment of web apps and APIs on AWS, DigitalOcean and similar platforms with SSL, domains and environment configuration.'],
      ['Server Configuration', 'Linux server setup with Nginx, firewalls, process managers and security hardening for stable production hosting.'],
      ['VPS Setup and Management', 'Provisioning, monitoring, updates and backups for virtual private servers so your applications stay online.'],
      ['Website Migration', 'Moving websites and data between hosts or platforms with minimal downtime and SEO-safe redirects.'],
      ['Database Management', 'Database backups, performance tuning, access control and maintenance for MySQL, PostgreSQL and MongoDB.'],
      ['Application Maintenance', 'Routine updates, dependency upgrades, log monitoring and fixes to keep your applications secure and running smoothly.'],
      ['Technical Support', 'Responsive help for hosting, email, domain, deployment and application issues when your team needs it.'],
    ],
  },
  {
    id: 'automation-integration', title: 'Automation & Integration', icon: Workflow,
    summary: 'Automate repetitive work and connect your tools — WhatsApp, email, payments and third-party software.',
    image: img('1518432031352-d6fc5c10da5a'),
    items: [
      ['Business Process Automation', 'Identify repetitive manual tasks and automate them with custom scripts and software to save time and reduce errors.'],
      ['Workflow Automation', 'Automated approvals, notifications, task assignment and data entry across your team’s daily workflows.'],
      ['Payment Automation', 'Automatic payment reminders, recurring billing, reconciliation and receipt generation linked to your payment gateway.'],
      ['WhatsApp API Integration', 'WhatsApp Business API integration for order updates, alerts, OTPs and customer communication directly from your system.'],
      ['Email Automation', 'Transactional and scheduled emails such as welcome series, invoices and reminders triggered by user actions.'],
      ['Third-Party Software Integration', 'Connecting your CRM, ERP, accounting and other tools so data flows between them without manual copying.'],
    ],
  },
  {
    id: 'ecommerce-solutions', title: 'E-commerce Solutions', icon: ShoppingCart,
    summary: 'Complete online selling solutions with product, order, payment and shipping management.',
    image: img('1556742049-0cfed4f6a45d'),
    items: [
      ['Online Shopping Websites', 'Complete online stores with category browsing, search, wishlist, cart and secure checkout built for mobile shoppers.'],
      ['Product Management Systems', 'Manage products, variants, pricing, images and stock levels from a single, easy-to-use interface.'],
      ['Order Management Systems', 'Track orders from placement to delivery with status updates, invoices, returns and customer notifications.'],
      ['Payment Integration', 'UPI, cards, net banking, wallets and cash-on-delivery options integrated through trusted payment gateways.'],
      ['Shipping API Integration', 'Integration with courier and shipping aggregators for rate calculation, label generation and live shipment tracking.'],
      ['E-commerce Admin Panels', 'Admin dashboards for sales reports, customer management, discount codes and store settings.'],
    ],
  },
  {
    id: 'consulting-maintenance', title: 'Software Consulting & Maintenance', icon: Lightbulb,
    summary: 'Technical consulting, architecture, testing, performance tuning and ongoing support for your software.',
    image: img('1600880292203-757bb62b4baf'),
    items: [
      ['IT Consulting', 'Practical guidance on choosing the right technology, tools and approach for your business goals and budget.'],
      ['Software Architecture', 'Planning system structure, technology stack, data models and integrations so your software stays scalable and maintainable.'],
      ['Technical Consulting', 'Code reviews, feasibility assessments and technical roadmaps for new or existing software projects.'],
      ['Software Testing', 'Manual and automated testing of functionality, compatibility and edge cases to catch issues before your users do.'],
      ['Bug Fixing', 'Diagnosing and resolving errors, crashes and unexpected behaviour in existing websites, apps and software.'],
      ['Performance Optimization', 'Improving page speed, query performance and server response times through profiling, caching and code optimisation.'],
      ['Ongoing Software Support', 'Continued support for updates, small enhancements and issue resolution as your business needs evolve.'],
    ],
  },
].map((c) => ({ ...c, items: c.items.map(([name, description]) => ({ name, description })) }))
