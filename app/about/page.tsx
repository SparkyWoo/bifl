import * as React from 'react'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About BuyWhoa - Our Methodology',
  description: 'Learn how we research and select products that are truly built to last. Our rigorous process combines community insights, expert reviews, and hands-on testing.',
}

export default function AboutPage() {
  return (
    <div className="max-w-3xl mx-auto">
      <section className="space-y-6">
        <div className="space-y-2">
          <h1 className="text-2xl font-medium text-gray-900">About BuyWhoa</h1>
          <p className="text-gray-600">
            We help you find products that make you go &ldquo;Whoa!&rdquo; &ndash; items so well-made and thoughtfully designed that they&apos;re worth every penny.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="text-xl font-medium text-gray-900">Our Research Process</h2>
          <div className="space-y-4 text-gray-600">
            <p>
              Every product recommendation on BuyWhoa comes from extensive research and real-world validation:
            </p>
            <ul className="space-y-3 list-disc pl-5">
              <li>
                <strong className="text-gray-900">Community Insights:</strong> We analyze thousands of user experiences from Reddit, specialized forums, and long-term product owners to identify items that consistently perform well over time.
              </li>
              <li>
                <strong className="text-gray-900">Expert Reviews:</strong> We aggregate insights from reputable review sites, industry experts, and professional testing labs to understand product performance across various use cases.
              </li>
              <li>
                <strong className="text-gray-900">Hands-on Testing:</strong> Whenever possible, we personally test products or connect with long-term users to verify durability claims and assess real-world performance.
              </li>
              <li>
                <strong className="text-gray-900">Price Analysis:</strong> We carefully evaluate price-to-quality ratios to ensure our recommendations provide genuine value for your investment.
              </li>
            </ul>
          </div>
        </div>

        <div className="space-y-4">
          <h2 className="text-xl font-medium text-gray-900">Our Values</h2>
          <div className="space-y-4 text-gray-600">
            <ul className="space-y-3 list-disc pl-5">
              <li>
                <strong className="text-gray-900">Independence:</strong> We never accept payment or free products from manufacturers for reviews or recommendations.
              </li>
              <li>
                <strong className="text-gray-900">Transparency:</strong> We use affiliate links to sustain our research, but this never influences our product selections.
              </li>
              <li>
                <strong className="text-gray-900">Quality Obsession:</strong> We&apos;re relentless about finding products that truly deserve the &ldquo;buy it for life&rdquo; designation.
              </li>
              <li>
                <strong className="text-gray-900">Continuous Updates:</strong> We regularly revisit our recommendations to ensure they remain current and accurate.
              </li>
            </ul>
          </div>
        </div>

        <div className="space-y-4">
          <h2 className="text-xl font-medium text-gray-900">Price Tiers</h2>
          <p className="text-gray-600">
            We organize products into clear price tiers to help you find quality items within your budget. While higher prices often correlate with better durability, we actively seek out exceptional value at every price point.
          </p>
        </div>

        <div className="bg-blue-50 border border-blue-100 rounded-lg p-4 text-sm text-blue-900">
          <h3 className="font-medium mb-2">Our Promise</h3>
          <p>
            Every product we recommend has been thoroughly vetted to ensure it delivers exceptional value and durability. We&apos;re not just helping you shop &ndash; we&apos;re helping you invest in products that truly last.
          </p>
        </div>
      </section>
    </div>
  )
} 