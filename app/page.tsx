import * as React from 'react'

export default function HomePage() {
  return (
    <main className="px-4 sm:px-6 py-6">
      <div className="space-y-8">
        <header>
          <h1 className="text-2xl sm:text-3xl font-display font-medium text-gray-900 mb-2">
            BuyWhoa
          </h1>
          <p className="text-base sm:text-lg text-gray-600">
            Expert-curated recommendations for products that truly last a lifetime
          </p>
        </header>

        <article className="prose text-sm sm:text-base text-gray-600">
          <p>
            We meticulously research and test products to find items that are built to last. 
            Our recommendations focus on quality, durability, and long-term value — because 
            the best products are the ones you only need to buy once.
          </p>
        </article>

        {/* Trusted Sources Section */}
        <section className="py-8 border-y border-gray-100" aria-labelledby="trusted-sources">
          <div className="text-center mb-6">
            <h2 id="trusted-sources" className="text-sm font-medium text-gray-500 uppercase tracking-wider">
              Research Backed By Trusted Sources
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center">
            {/* Reddit */}
            <div className="grayscale opacity-60 hover:opacity-100 transition-opacity">
              <svg className="h-8" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm5.01 4.744c.688 0 1.25.561 1.25 1.249a1.25 1.25 0 0 1-2.498.056l-2.597-.547-.8 3.747c1.824.07 3.48.632 4.674 1.488.308-.309.73-.491 1.207-.491.968 0 1.754.786 1.754 1.754 0 .716-.435 1.333-1.01 1.614a3.111 3.111 0 0 1 .042.52c0 2.694-3.13 4.87-7.004 4.87-3.874 0-7.004-2.176-7.004-4.87 0-.183.015-.366.043-.534A1.748 1.748 0 0 1 4.028 12c0-.968.786-1.754 1.754-1.754.463 0 .898.196 1.207.49 1.207-.883 2.878-1.43 4.744-1.487l.885-4.182a.342.342 0 0 1 .14-.197.35.35 0 0 1 .238-.042l2.906.617a1.214 1.214 0 0 1 1.108-.701zM9.25 12C8.561 12 8 12.562 8 13.25c0 .687.561 1.248 1.25 1.248.687 0 1.248-.561 1.248-1.249 0-.688-.561-1.249-1.249-1.249zm5.5 0c-.687 0-1.248.561-1.248 1.25 0 .687.561 1.248 1.249 1.248.688 0 1.249-.561 1.249-1.249 0-.687-.562-1.249-1.25-1.249zm-5.466 3.99a.327.327 0 0 0-.231.094.33.33 0 0 0 0 .463c.842.842 2.484.913 2.961.913.477 0 2.105-.056 2.961-.913a.361.361 0 0 0 .029-.463.33.33 0 0 0-.464 0c-.547.533-1.684.73-2.512.73-.828 0-1.979-.196-2.512-.73a.326.326 0 0 0-.232-.095z"/>
              </svg>
              <span className="sr-only">Reddit</span>
            </div>
            {/* New York Times */}
            <div className="grayscale opacity-60 hover:opacity-100 transition-opacity">
              <svg className="h-8" viewBox="0 0 379 64" fill="currentColor">
                <path d="M30.8 13.4C30.8 5.9 23.9 0 15.4 0 6.9 0 0 5.9 0 13.4s6.9 13.4 15.4 13.4c8.5 0 15.4-5.9 15.4-13.4zm99 41.9h8.5V19.6h-8.5v35.7zM354.5 19.6h-8.5v35.7h8.5V19.6zm-282.9 0h-8.8l-14.9 35.7h8.4l3.3-8.2h15.2l3.3 8.2h8.4l-14.9-35.7zm-9.2 20.5l5-12.4h.1l4.9 12.4h-10zm201.4-20.5h-8.8l-14.9 35.7h8.4l3.3-8.2h15.2l3.3 8.2h8.4l-14.9-35.7zm-9.2 20.5l5-12.4h.1l4.9 12.4h-10zm-128.6-20.5h-8.8l-14.9 35.7h8.4l3.3-8.2h15.2l3.3 8.2h8.4l-14.9-35.7zm-9.2 20.5l5-12.4h.1l4.9 12.4h-10zm63.8-20.5h-8.8l-14.9 35.7h8.4l3.3-8.2h15.2l3.3 8.2h8.4l-14.9-35.7zm-9.2 20.5l5-12.4h.1l4.9 12.4h-10zm128.6-20.5h-8.8l-14.9 35.7h8.4l3.3-8.2h15.2l3.3 8.2h8.4l-14.9-35.7zm-9.2 20.5l5-12.4h.1l4.9 12.4h-10z"/>
              </svg>
              <span className="sr-only">The New York Times</span>
            </div>
            {/* Consumer Reports */}
            <div className="grayscale opacity-60 hover:opacity-100 transition-opacity">
              <svg className="h-8" viewBox="0 0 300 60" fill="currentColor">
                <path d="M30 0C13.4 0 0 13.4 0 30s13.4 30 30 30 30-13.4 30-30S46.6 0 30 0zm0 54c-13.2 0-24-10.8-24-24S16.8 6 30 6s24 10.8 24 24-10.8 24-24 24zm66.4-30.8c-3.4 0-6.2 2.8-6.2 6.2s2.8 6.2 6.2 6.2 6.2-2.8 6.2-6.2-2.8-6.2-6.2-6.2zm53.2 0c-3.4 0-6.2 2.8-6.2 6.2s2.8 6.2 6.2 6.2 6.2-2.8 6.2-6.2-2.8-6.2-6.2-6.2zm53.2 0c-3.4 0-6.2 2.8-6.2 6.2s2.8 6.2 6.2 6.2 6.2-2.8 6.2-6.2-2.8-6.2-6.2-6.2zm53.2 0c-3.4 0-6.2 2.8-6.2 6.2s2.8 6.2 6.2 6.2 6.2-2.8 6.2-6.2-2.8-6.2-6.2-6.2z"/>
              </svg>
              <span className="sr-only">Consumer Reports</span>
            </div>
            {/* DeepMind */}
            <div className="grayscale opacity-60 hover:opacity-100 transition-opacity">
              <svg className="h-8" viewBox="0 0 180 32" fill="currentColor">
                <path d="M39.4 10.6h8.2v2.3h-5.5v3.3h5.2v2.3h-5.2v3.4h5.7v2.3h-8.4V10.6zm11.5 0h2.7v11.3h5.5v2.3H50.9V10.6zm10.3 0h8.2v2.3h-5.5v3.3h5.2v2.3h-5.2v3.4h5.7v2.3h-8.4V10.6zm11.5 0h4.4c4.1 0 6.3 2.5 6.3 6.8 0 4.3-2.2 6.8-6.3 6.8h-4.4V10.6zm4.4 11.3c2.4 0 3.6-1.5 3.6-4.5s-1.2-4.5-3.6-4.5h-1.7v9h1.7zm9.1-11.3h2.7v13.6h-2.7V10.6zm6.1 0h2.9l5.5 9.1V10.6h2.5v13.6h-2.7l-5.7-9.3v9.3h-2.5V10.6zm14.2 0h2.7v11.3h5.5v2.3h-8.2V10.6zm11.5 0h2.7v13.6h-2.7V10.6zm6.1 0h3.1l2.4 9.8 2.4-9.8h2.6l2.4 9.8 2.4-9.8h3l-3.8 13.6h-2.9L132 14.5l-2.4 9.7h-2.9l-3.8-13.6zm19.9 0h8.2v2.3h-5.5v3.3h5.2v2.3h-5.2v3.4h5.7v2.3h-8.4V10.6z"/>
                <path fillRule="evenodd" clipRule="evenodd" d="M16 0L0 9.2v13.6L16 32l16-9.2V9.2L16 0zm0 2.8l13.7 7.9-5.9 3.4-7.8-4.5-7.8 4.5-5.9-3.4L16 2.8zm0 20.9l-7.8-4.5v-9l7.8 4.5 7.8-4.5v9l-7.8 4.5z"/>
              </svg>
              <span className="sr-only">DeepMind</span>
            </div>
          </div>
          <p className="text-xs text-center text-gray-500 mt-6">
            Our recommendations are based on extensive research from these and other trusted sources
          </p>
        </section>

        <section className="bg-blue-50 border border-blue-100 rounded-lg p-3 text-sm text-blue-900" aria-labelledby="promise-heading">
          <h2 id="promise-heading" className="font-medium mb-2">Our Promise to You</h2>
          <ul className="space-y-2">
            <li className="flex gap-2">
              <svg className="w-4 h-4 text-blue-500 mt-1 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>
                <strong>100% Independent:</strong> We never accept payment or free products from manufacturers
              </span>
            </li>
            <li className="flex gap-2">
              <svg className="w-4 h-4 text-blue-500 mt-1 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>
                <strong>Thorough Research:</strong> Based on user experiences, expert reviews, and reliability data
              </span>
            </li>
            <li className="flex gap-2">
              <svg className="w-4 h-4 text-blue-500 mt-1 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>
                <strong>Transparent Process:</strong> Clear explanations for why each product is BuyWhoa-worthy
              </span>
            </li>
          </ul>
        </section>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <section className="bg-gray-50 border border-gray-100 rounded-lg p-3" aria-labelledby="research-heading">
            <h3 id="research-heading" className="font-medium text-gray-900 mb-1">How We Research</h3>
            <p className="text-sm text-gray-600">
              We analyze decades of user reports, expert reviews, and real-world durability tests. 
              Our recommendations come from thousands of hours of research and community feedback.
            </p>
          </section>
          <section className="bg-gray-50 border border-gray-100 rounded-lg p-3" aria-labelledby="affiliate-heading">
            <h3 id="affiliate-heading" className="font-medium text-gray-900 mb-1">Affiliate Disclosure</h3>
            <p className="text-sm text-gray-600">
              We use affiliate links to cover our costs, but this never influences our 
              recommendations. We often recommend items with no affiliate programs.
            </p>
          </section>
        </div>

        <footer className="text-xs text-gray-500 flex items-center gap-2">
          <svg className="w-3.5 h-3.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <span>Updated daily with new products and reviews</span>
        </footer>
      </div>
    </main>
  )
}
