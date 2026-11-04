// Every photo on the site lives here. Values are BASE image URLs (no query string) from
// images.unsplash.com or images.pexels.com — use photo(url, width) to get a sized URL.
export const photo = (url, w = 1200) =>
  url.includes('pexels.com')
    ? `${url}?auto=compress&cs=tinysrgb&w=${w}`
    : `${url}?auto=format&fit=crop&w=${w}&q=75`

const u = (id) => `https://images.unsplash.com/photo-${id}`

export const images = {
  // pages
  homeHero: u('1522071820081-009f0129c71c'),
  homeAbout: u('1498050108023-c5249f4df085'),
  homeProcess: u('1454165804606-c3d57bc86b40'),
  homeWhy: u('1600880292203-757bb62b4baf'),
  servicesHero: u('1551434678-e076c223a692'),
  aboutHero: u('1497366216548-37526070297c'),
  aboutStory: u('1486312338219-ce68d2c6f44d'),
  aboutApproach: u('1519389950473-47ba0277781c'),
  contactHero: u('1556761175-b413da4baf72'),
  // service categories (keys = ids in services.js)
  'website-development': u('1460925895917-afdab827c52f'),
  'software-development': u('1555066931-4365d14bab8c'),
  'mobile-app-development': u('1512941937669-90a1b58e7e9c'),
  'web-application-development': u('1551434678-e076c223a692'),
  'api-backend-development': u('1558494949-ef010cbdcc31'),
  'ui-ux-frontend': u('1581291518857-4e27b48ff24e'),
  'cloud-it-solutions': u('1451187580459-43490279c0fa'),
  'automation-integration': u('1518432031352-d6fc5c10da5a'),
  'ecommerce-solutions': u('1556742049-0cfed4f6a45d'),
  'consulting-maintenance': u('1600880292203-757bb62b4baf'),
  // industries (Home page)
  industryRetail: u('1556742049-0cfed4f6a45d'),
  industryFinance: u('1460925895917-afdab827c52f'),
  industryHealthcare: u('1573164713988-8665fc963095'),
  industryEducation: u('1522071820081-009f0129c71c'),
  industryRealEstate: u('1497366216548-37526070297c'),
  industryLogistics: u('1504384308090-c894fdcc538d'),
  industryManufacturing: u('1531297484001-80022131f5a1'),
  industryStartups: u('1519389950473-47ba0277781c'),
}
