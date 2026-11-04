// logo: Simple Icons slug (https://cdn.simpleicons.org/<slug>) — null shows a text badge instead.
export const techLogo = (slug) => `https://cdn.simpleicons.org/${slug}`

export const technologies = [
  { group: 'Frontend', items: [['React.js', 'react'], ['Next.js', 'nextdotjs'], ['HTML5', 'html5'], ['CSS3', 'css'], ['JavaScript', 'javascript'], ['Bootstrap', 'bootstrap']] },
  { group: 'Backend', items: [['Node.js', 'nodedotjs'], ['Express.js', 'express'], ['Python', 'python'], ['FastAPI', 'fastapi'], ['PHP', 'php'], ['Laravel', 'laravel']] },
  { group: 'Mobile', items: [['React Native', 'react'], ['Expo', 'expo']] },
  { group: 'Database', items: [['MongoDB', 'mongodb'], ['MySQL', 'mysql'], ['PostgreSQL', 'postgresql']] },
  { group: 'Cloud & Infrastructure', items: [['AWS', null], ['Docker', 'docker'], ['Linux', 'linux'], ['Nginx', 'nginx'], ['Cloudflare', 'cloudflare']] },
  { group: 'Tools', items: [['Git', 'git'], ['GitHub', 'github'], ['Postman', 'postman'], ['Figma', 'figma']] },
].map((g) => ({ ...g, items: g.items.map(([name, logo]) => ({ name, logo })) }))
