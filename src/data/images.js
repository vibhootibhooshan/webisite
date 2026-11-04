// Every photo on the site lives here. Values are BASE image URLs (no query string) from
// images.unsplash.com or images.pexels.com — use photo(url, width) to get a sized URL.
export const photo = (url, w = 1200) =>
  url.includes('pexels.com')
    ? `${url}?auto=compress&cs=tinysrgb&w=${w}`
    : `${url}?auto=format&fit=crop&w=${w}&q=75`

const u = (id) => `https://images.unsplash.com/photo-${id}`
const p = (id) => `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg`

export const images = {
  // pages
  homeHero: u('1681164315051-add1906a9b07'),
  homeAbout: u('1681164315430-6159b2361615'),
  homeProcess: p(7213516),
  homeWhy: p(4308104),
  servicesHero: u('1748256622734-92241ae7b43f'),
  aboutHero: u('1765366417030-16d9765d920a'),
  aboutStory: u('1621858436649-25dedba0eb38'),
  aboutApproach: u('1637073849667-91120a924221'),
  contactHero: p(4342127),
  // service categories (keys = ids in services.js)
  'website-development': u('1678690832311-bb6e361989ca'),
  'software-development': p(36706460),
  'mobile-app-development': u('1551650975-87deedd944c3'),
  'web-application-development': u('1551288049-bebda4e38f71'),
  'api-backend-development': u('1584169417032-d34e8d805e8b'),
  'ui-ux-frontend': u('1576153192396-180ecef2a715'),
  'cloud-it-solutions': p(37605911),
  'automation-integration': u('1542744094-24638eff58bb'),
  'ecommerce-solutions': u('1563013544-824ae1b704d3'),
  'consulting-maintenance': u('1758691736490-03d39c292d7a'),
  // industries (Home page)
  industryRetail: u('1556740738-b6a63e27c4df'),
  industryFinance: u('1560221328-12fe60f83ab8'),
  industryHealthcare: u('1758691463203-cce9d415b2b5'),
  industryEducation: p(32074907),
  industryRealEstate: u('1776941251062-5cceb9ec9e2c'),
  industryLogistics: u('1586528116022-aeda1613c63d'),
  industryManufacturing: u('1610891015188-5369212db097'),
  industryStartups: u('1559310451-19481b3c7ec8'),
}
