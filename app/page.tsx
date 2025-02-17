import * as React from 'react'
import { SearchBox } from './components/SearchBox'
import { getAllCategories } from './lib/categories'

export default async function HomePage() {
  const categories = await getAllCategories()

  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <div className="space-y-8">
        <div className="space-y-4">
          <h1 className="text-4xl font-display font-medium text-gray-900">
            BuyWhoa
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl">
            Expert-curated recommendations for products that truly last a lifetime
          </p>
        </div>

        <div className="max-w-2xl">
          <SearchBox categories={categories} />
        </div>

        <div className="prose text-gray-600">
          <p>
            We meticulously research and test products to find items that are built to last. 
            Our recommendations focus on quality, durability, and long-term value — because 
            the best products are the ones you only need to buy once.
          </p>
        </div>

        <div className="text-sm text-gray-500 flex items-center space-x-2">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <span>Updated daily with new products and reviews</span>
        </div>
      </div>
    </div>
  )
}
