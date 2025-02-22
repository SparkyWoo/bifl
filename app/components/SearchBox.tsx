'use client'

import { useCallback, useEffect, useState, useRef } from 'react'
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
  const [selectedIndex, setSelectedIndex] = useState(-1)
  const [isLoading, setIsLoading] = useState(false)
  const searchRef = useRef<HTMLDivElement>(null)
  const router = useRouter()

  // Initialize search index
  useEffect(() => {
    setSearchIndex(createSearchIndex(categories))
  }, [categories])

  // Handle search with debounce
  const handleSearch = useCallback((searchQuery: string) => {
    if (!searchIndex) return
    setIsLoading(true)
    
    const timer = setTimeout(() => {
      const searchResults = searchCategories(searchIndex, searchQuery)
      setResults(searchResults)
      setSelectedIndex(-1)
      setIsLoading(false)
    }, 150) // 150ms debounce

    return () => clearTimeout(timer)
  }, [searchIndex])

  // Update search results when query changes
  useEffect(() => {
    return handleSearch(query)
  }, [query, handleSearch])

  // Handle keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (results.length === 0) return

    switch (e.key) {
      case 'ArrowDown':
        e.preventDefault()
        setSelectedIndex(prev => 
          prev < results.length - 1 ? prev + 1 : prev
        )
        break
      case 'ArrowUp':
        e.preventDefault()
        setSelectedIndex(prev => prev > 0 ? prev - 1 : -1)
        break
      case 'Enter':
        e.preventDefault()
        if (selectedIndex >= 0) {
          const result = results[selectedIndex]
          router.push(result.link)
          setQuery('')
        }
        break
      case 'Escape':
        e.preventDefault()
        setQuery('')
        break
    }
  }

  // Handle click outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setQuery('')
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  return (
    <div ref={searchRef} className="relative w-full">
      <div className="relative">
        <input
          type="text"
          role="combobox"
          aria-expanded={results.length > 0}
          aria-controls="search-results"
          aria-activedescendant={selectedIndex >= 0 ? `result-${selectedIndex}` : undefined}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Search products..."
          className="w-full px-3 py-2 text-sm bg-white border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-100 focus:border-blue-400 transition-colors"
        />
        {isLoading && (
          <div className="absolute right-2.5 top-1/2 -translate-y-1/2">
            <div className="w-3.5 h-3.5 border-2 border-blue-400 border-t-transparent rounded-full animate-spin"></div>
          </div>
        )}
      </div>
      
      {results.length > 0 && (
        <div 
          id="search-results"
          role="listbox"
          className="absolute z-10 w-full mt-1 bg-white border border-gray-200 rounded-md shadow-sm overflow-hidden"
        >
          <ul className="max-h-80 overflow-auto py-1">
            {results.map((result, index) => (
              <li 
                key={index}
                role="option"
                aria-selected={index === selectedIndex}
                id={`result-${index}`}
              >
                <button
                  onClick={() => {
                    router.push(result.link)
                    setQuery('')
                  }}
                  onMouseEnter={() => setSelectedIndex(index)}
                  className={`w-full px-3 py-1.5 text-left ${
                    index === selectedIndex ? 'bg-blue-50' : 'hover:bg-gray-50'
                  }`}
                >
                  <div className="flex flex-col">
                    <span className="text-xs text-gray-500">
                      {result.type === 'category' ? 'Category' : result.category}
                    </span>
                    <span className="text-sm font-medium text-gray-900">
                      {result.item}
                    </span>
                  </div>
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
} 