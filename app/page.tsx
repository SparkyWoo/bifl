import * as React from 'react'
import { SearchBox } from './components/SearchBox'
import { getAllCategories } from './lib/categories'

export default async function HomePage() {
  const categories = await getAllCategories()

  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <div className="space-y-12">
        {/* Hero Section */}
        <div className="space-y-4">
          <h1 className="text-4xl font-display font-medium text-gray-900">
            BuyWhoa
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl">
            Expert-curated recommendations for products that truly last a lifetime
          </p>
        </div>

        {/* Search */}
        <div className="max-w-2xl">
          <SearchBox categories={categories} />
        </div>

        {/* Main Content */}
        <div className="prose text-gray-600 space-y-6">
          <p className="lead text-lg">
            We meticulously research and test products to find items that are built to last. 
            Our recommendations focus on quality, durability, and long-term value — because 
            the best products are the ones you only need to buy once.
          </p>

          <div className="bg-blue-50 border border-blue-100 rounded-lg p-4 text-sm text-blue-900">
            <h2 className="text-base font-medium mb-2">Our Promise to You</h2>
            <ul className="space-y-2">
              <li className="flex items-start">
                <svg className="w-5 h-5 text-blue-500 mt-0.5 mr-2 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>
                  <strong>100% Independent:</strong> We never accept payment or free products from manufacturers for reviews or recommendations
                </span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-blue-500 mt-0.5 mr-2 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>
                  <strong>Thorough Research:</strong> Each recommendation is based on extensive research of user experiences, expert reviews, and long-term reliability data
                </span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-blue-500 mt-0.5 mr-2 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>
                  <strong>Transparent Process:</strong> We explain exactly why each product made our list and what makes it BIFL-worthy
                </span>
              </li>
            </ul>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 not-prose">
            <div className="bg-gray-50 border border-gray-100 rounded-lg p-4">
              <h3 className="font-medium text-gray-900 mb-2">How We Research</h3>
              <p className="text-sm text-gray-600">
                We analyze decades of user reports, expert reviews, manufacturer specifications, 
                and real-world durability tests. Our recommendations come from thousands of hours 
                of research and community feedback.
              </p>
            </div>
            <div className="bg-gray-50 border border-gray-100 rounded-lg p-4">
              <h3 className="font-medium text-gray-900 mb-2">Affiliate Disclosure</h3>
              <p className="text-sm text-gray-600">
                We use affiliate links to cover our costs, but this never influences our 
                recommendations. Products are chosen solely on merit, and we often recommend 
                items with no affiliate programs.
              </p>
            </div>
          </div>
        </div>

        {/* Update Info */}
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
