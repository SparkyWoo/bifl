'use client'

import * as React from 'react'
import Link from "next/link"
import { Category } from "../lib/types"
import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'

export function CategoryListClient({ categories }: { categories: Category[] }) {
  const pathname = usePathname()
  const [searchQuery, setSearchQuery] = useState('')
  const [isOpen, setIsOpen] = useState(false)

  // Close drawer when route changes on mobile
  useEffect(() => {
    setIsOpen(false)
  }, [pathname])

  const filteredCategories = categories.filter(category =>
    category.title.toLowerCase().includes(searchQuery.toLowerCase())
  )

  // Close drawer when clicking outside on mobile
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      const drawer = document.getElementById('category-drawer')
      const toggle = document.getElementById('drawer-toggle')
      if (
        drawer &&
        !drawer.contains(event.target as Node) &&
        toggle &&
        !toggle.contains(event.target as Node)
      ) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  // Prevent body scroll when drawer is open on mobile
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  return (
    <>
      {/* Mobile Menu Toggle */}
      <button
        id="drawer-toggle"
        onClick={() => setIsOpen(!isOpen)}
        className="sm:hidden fixed bottom-4 right-4 z-40 bg-blue-600 text-white rounded-full p-3 shadow-lg hover:bg-blue-700 transition-colors"
        aria-label="Toggle Categories"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>

      {/* Mobile Overlay */}
      {isOpen && (
        <div 
          className="sm:hidden fixed inset-0 bg-black bg-opacity-25 z-40 transition-opacity"
          aria-hidden="true"
        />
      )}

      {/* Category List - Desktop Sidebar & Mobile Drawer */}
      <nav
        id="category-drawer"
        className={`
          fixed sm:static inset-y-0 left-0 z-40 w-64 sm:w-48 transform 
          ${isOpen ? 'translate-x-0' : '-translate-x-full'} 
          sm:translate-x-0 transition-transform duration-300 ease-in-out
          border-r border-gray-200 bg-white flex flex-col
        `}
      >
        {/* Search Input - Fixed at Top */}
        <div className="p-2 border-b border-gray-200 bg-gray-50">
          <input
            type="search"
            placeholder="Filter categories..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full px-2 py-1 text-sm bg-white border border-gray-200 rounded focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
        </div>

        {/* Scrollable Category List */}
        <div className="flex-1 overflow-y-auto overscroll-contain">
          <ul className="py-1">
            {filteredCategories.map((category) => {
              const isActive = pathname === `/categories/${category.id}`
              return (
                <li key={category.id}>
                  <Link
                    href={`/categories/${category.id}`}
                    className={`block px-2 py-1.5 text-sm truncate transition-colors ${
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
      </nav>
    </>
  )
} 