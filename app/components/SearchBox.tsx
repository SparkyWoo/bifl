import { useCallback, useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { Category, SearchResult } from '@/app/lib/types'
import { createSearchIndex, searchCategories } from '@/app/lib/search'
import Fuse from 'fuse.js'

interface SearchBoxProps {
  categories: Category[]
}

export function SearchBox({ categories }: SearchBoxProps) {
  const [query, setQuery] = useState('')
  const [results, setResults] = useState<SearchResult[]>([])
  const [searchIndex, setSearchIndex] = useState<Fuse<Category> | null>(null)
  const router = useRouter()

  // Initialize search index
  useEffect(() => {
    setSearchIndex(createSearchIndex(categories))
  }, [categories])

  // Handle search
  const handleSearch = useCallback((searchQuery: string) => {
    if (!searchIndex) return

    const searchResults = searchCategories(searchIndex, searchQuery)
    setResults(searchResults)
  }, [searchIndex])

  // Update search results when query changes
  useEffect(() => {
    handleSearch(query)
  }, [query, handleSearch])

  return (
    <div className="relative w-full max-w-2xl mx-auto">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search for long-lasting products..."
        className="w-full px-4 py-2 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
      />
      
      {results.length > 0 && (
        <div className="absolute z-10 w-full mt-1 bg-white border border-gray-200 rounded-lg shadow-lg">
          <ul className="py-2 max-h-96 overflow-auto">
            {results.map((result, index) => (
              <li key={index}>
                <button
                  onClick={() => {
                    router.push(result.link)
                    setQuery('')
                  }}
                  className="w-full px-4 py-2 text-left hover:bg-gray-100 focus:outline-none focus:bg-gray-100"
                >
                  <span className="block text-sm text-gray-600">
                    {result.type === 'category' ? 'Category' : 'Product in ' + result.category}
                  </span>
                  <span className="block font-medium text-gray-900">
                    {result.item}
                  </span>
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
} 