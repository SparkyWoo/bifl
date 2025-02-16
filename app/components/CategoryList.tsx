'use client'

import * as React from 'react'
import Link from "next/link"
import { Category } from "../lib/types"
import { usePathname } from 'next/navigation'
import { useState } from 'react'

export function CategoryListClient({ categories }: { categories: Category[] }) {
  const pathname = usePathname()
  const [searchQuery, setSearchQuery] = useState('')

  const filteredCategories = categories.filter(category =>
    category.title.toLowerCase().includes(searchQuery.toLowerCase())
  )

  return (
    <nav className="w-48 border-r border-gray-200 bg-white">
      <div className="sticky top-0">
        <div className="p-2 border-b border-gray-200 bg-gray-50">
          <input
            type="search"
            placeholder="Filter..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full px-2 py-1 text-sm bg-white border border-gray-200 rounded focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
        </div>
        <div className="h-[calc(100vh-8rem)] overflow-y-auto">
          <ul className="py-1">
            {filteredCategories.map((category) => {
              const isActive = pathname === `/categories/${category.id}`
              return (
                <li key={category.id}>
                  <Link
                    href={`/categories/${category.id}`}
                    className={`block px-2 py-1 text-sm truncate transition-colors ${
                      isActive 
                        ? 'bg-blue-50 text-blue-600 font-medium' 
                        : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                    }`}
                    title={category.title}
                  >
                    {category.title}
                  </Link>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </nav>
  )
} 