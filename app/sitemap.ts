import { MetadataRoute } from 'next'
import { getAllCategories } from './lib/categories'

export const dynamic = 'force-static'

const baseUrl = 'https://buywhoa.com'

const sitemap = async (): Promise<MetadataRoute.Sitemap> => {
  const categories = await getAllCategories()
  
  // Core pages
  const corePages = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    },
  ]

  // Category pages
  const categoryUrls = categories.map((category) => ({
    url: `${baseUrl}/categories/${category.id}`,
    lastModified: new Date(category.lastUpdated),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }))

  return [
    ...corePages,
    ...categoryUrls,
  ].sort((a, b) => b.priority - a.priority) // Sort by priority
}

export default sitemap 