'use client'

import { useCallback, useEffect, useState, useMemo } from 'react'
import Fuse from 'fuse.js'
import { SearchResult } from '@/app/lib/types'
import { useRouter } from 'next/navigation'

interface SearchProps {
  categories: Array<{ id: string; title: string; products: Array<{ name: string }> }>
}

export function Search({ categories }: SearchProps) {
  const [query, setQuery] = useState('')
  const [results, setResults] = useState<SearchResult[]>([])
  const router = useRouter()

  // Initialize Fuse instance with useMemo
  const fuse = useMemo(() => new Fuse(categories, {
    keys: ['title', 'products.name'],
    threshold: 0.3,
    includeMatches: true,
  }), [categories])

  const handleSearch = useCallback((searchQuery: string) => {
    if (!searchQuery) {
      setResults([])
      return
    }

    const searchResults = fuse.search(searchQuery)
    const formattedResults: SearchResult[] = []

    searchResults.forEach((result) => {
      const category = result.item

      // If the category title matches
      if (result.matches?.some((match) => match.key === 'title')) {
        formattedResults.push({
          type: 'category',
          category: category.title,
          item: category.title,
          link: `/categories/${category.id}`
        })
      }

      // If product names match
      result.matches
        ?.filter((match) => match.key?.startsWith('products'))
        .forEach((match) => {
          formattedResults.push({
            type: 'product',
            category: category.title,
            item: match.value as string,
            link: `/categories/${category.id}#${encodeURIComponent(match.value as string)}`
          })
        })
    })

    setResults(formattedResults)
  }, [fuse])

  useEffect(() => {
    handleSearch(query)
  }, [query, handleSearch])

  return (
    <div className="relative w-full max-w-2xl">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search categories and products..."
        className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
      />
      
      {results.length > 0 && (
        <div className="absolute mt-1 w-full rounded-lg border border-gray-200 bg-white shadow-lg">
          <ul className="max-h-96 overflow-auto py-2">
            {results.map((result, index) => (
              <li key={index}>
                <button
                  onClick={() => {
                    router.push(result.link)
                    setQuery('')
                  }}
                  className="w-full px-4 py-2 text-left hover:bg-gray-100"
                >
                  <span className="block text-sm text-gray-600">
                    {result.type === 'category' ? 'Category:' : 'Product in'}
                  </span>
                  <span className="block font-medium">
                    {result.type === 'category' ? result.item : `${result.category} → ${result.item}`}
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