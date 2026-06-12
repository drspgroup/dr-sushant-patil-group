export default function sitemap() {
  const baseUrl = 'https://www.drsushantpatilgroup.com'

  const routes = ['', '/about', '/team', '/news', '/journey', '/entities']

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: route === '' ? 1 : 0.8,
  }))
}
