import { MetadataRoute } from 'next'

export const dynamic = 'force-static'

const baseUrl = 'https://buywhoa.com'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: [
          '/',
          '/categories/*',
          '/about',
        ],
        disallow: [
          '/private/',
          '/admin/',
          '/*.json$',
          '/*_next/*',
          '/api/*',
        ],
      },
      {
        userAgent: 'GPTBot',
        disallow: ['/'],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl,
  }
} 