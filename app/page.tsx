import * as React from 'react'

export default function HomePage() {
  return (
    <div className="px-4 sm:px-6 py-6">
      <div className="space-y-5">
        <div>
          <h1 className="text-2xl sm:text-3xl font-display font-medium text-gray-900 mb-2">
            BuyWhoa
          </h1>
          <p className="text-base sm:text-lg text-gray-600">
            Expert-curated recommendations for products that truly last a lifetime
          </p>
        </div>

        <div className="prose text-sm sm:text-base text-gray-600">
          <p>
            We meticulously research and test products to find items that are built to last. 
            Our recommendations focus on quality, durability, and long-term value — because 
            the best products are the ones you only need to buy once.
          </p>
        </div>

        <div className="bg-blue-50 border border-blue-100 rounded-lg p-3 text-sm text-blue-900">
          <h2 className="font-medium mb-2">Our Promise to You</h2>
          <ul className="space-y-2">
            <li className="flex gap-2">
              <svg className="w-4 h-4 text-blue-500 mt-1 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>
                <strong>100% Independent:</strong> We never accept payment or free products from manufacturers
              </span>
            </li>
            <li className="flex gap-2">
              <svg className="w-4 h-4 text-blue-500 mt-1 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>
                <strong>Thorough Research:</strong> Based on user experiences, expert reviews, and reliability data
              </span>
            </li>
            <li className="flex gap-2">
              <svg className="w-4 h-4 text-blue-500 mt-1 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>
                <strong>Transparent Process:</strong> Clear explanations for why each product is BIFL-worthy
              </span>
            </li>
          </ul>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div className="bg-gray-50 border border-gray-100 rounded-lg p-3">
            <h3 className="font-medium text-gray-900 mb-1">How We Research</h3>
            <p className="text-sm text-gray-600">
              We analyze decades of user reports, expert reviews, and real-world durability tests. 
              Our recommendations come from thousands of hours of research and community feedback.
            </p>
          </div>
          <div className="bg-gray-50 border border-gray-100 rounded-lg p-3">
            <h3 className="font-medium text-gray-900 mb-1">Affiliate Disclosure</h3>
            <p className="text-sm text-gray-600">
              We use affiliate links to cover our costs, but this never influences our 
              recommendations. We often recommend items with no affiliate programs.
            </p>
          </div>
        </div>

        <div className="text-xs text-gray-500 flex items-center gap-2">
          <svg className="w-3.5 h-3.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <span>Updated daily with new products and reviews</span>
        </div>
      </div>
    </div>
  )
}
