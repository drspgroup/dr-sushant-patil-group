export default function robots() {
  const baseUrl = 'https://www.drsushantpatilgroup.com'

  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
      }
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  }
}
