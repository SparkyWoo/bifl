import Fuse from 'fuse.js'
import { Category, SearchResult } from './types'

const fuseOptions = {
  keys: [
    'title',
    'description',
    'products.name',
    'products.whyBifl'
  ],
  threshold: 0.3,
  includeMatches: true,
}

export function createSearchIndex(categories: Category[]) {
  return new Fuse(categories, fuseOptions)
}

export function searchCategories(fuse: Fuse<Category>, query: string): SearchResult[] {
  if (!query.trim()) {
    return []
  }

  const results = fuse.search(query)
  const searchResults: SearchResult[] = []

  results.forEach((result) => {
    const category = result.item

    // If the category title or description matches
    if (result.matches?.some(match => match.key === 'title' || match.key === 'description')) {
      searchResults.push({
        type: 'category',
        category: category.title,
        item: category.title,
        link: `/categories/${category.id}`
      })
    }

    // If product names or descriptions match
    result.matches?.forEach(match => {
      if (match.key?.startsWith('products.')) {
        const productIndex = parseInt(match.key.split('.')[1])
        const product = category.products[productIndex]
        
        if (product) {
          searchResults.push({
            type: 'product',
            category: category.title,
            item: product.name,
            link: `/categories/${category.id}#${encodeURIComponent(product.name)}`
          })
        }
      }
    })
  })

  // Remove duplicates
  return Array.from(new Set(searchResults.map(r => JSON.stringify(r))))
    .map(s => JSON.parse(s))
} 