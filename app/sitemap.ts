import { MetadataRoute } from 'next'
import { getAllCategories } from './lib/categories'

const sitemap = async (): Promise<MetadataRoute.Sitemap> => {
  const categories = await getAllCategories()
  
  const categoryUrls = categories.map((category) => ({
    url: `https://buywhoa.com/categories/${category.id}`,
    lastModified: new Date(category.lastUpdated),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }))

  return [
    {
      url: 'https://buywhoa.com',
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
    ...categoryUrls,
  ]
}

export default sitemap 