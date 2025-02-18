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
              <svg className="h-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm5.01 4.744c.688 0 1.25.561 1.25 1.249a1.25 1.25 0 0 1-2.498.056l-2.597-.547-.8 3.747c1.824.07 3.48.632 4.674 1.488.308-.309.73-.491 1.207-.491.968 0 1.754.786 1.754 1.754 0 .716-.435 1.333-1.01 1.614a3.111 3.111 0 0 1 .042.52c0 2.694-3.13 4.87-7.004 4.87-3.874 0-7.004-2.176-7.004-4.87 0-.183.015-.366.043-.534A1.748 1.748 0 0 1 4.028 12c0-.968.786-1.754 1.754-1.754.463 0 .898.196 1.207.49 1.207-.883 2.878-1.43 4.744-1.487l.885-4.182a.342.342 0 0 1 .14-.197.35.35 0 0 1 .238-.042l2.906.617a1.214 1.214 0 0 1 1.108-.701zM9.25 12C8.561 12 8 12.562 8 13.25c0 .687.561 1.248 1.25 1.248.687 0 1.248-.561 1.248-1.249 0-.688-.561-1.249-1.249-1.249zm5.5 0c-.687 0-1.248.561-1.248 1.25 0 .687.561 1.248 1.249 1.248.688 0 1.249-.561 1.249-1.249 0-.687-.562-1.249-1.25-1.249zm-5.466 3.99a.327.327 0 0 0-.231.094.33.33 0 0 0 0 .463c.842.842 2.484.913 2.961.913.477 0 2.105-.056 2.961-.913a.361.361 0 0 0 .029-.463.33.33 0 0 0-.464 0c-.547.533-1.684.73-2.512.73-.828 0-1.979-.196-2.512-.73a.326.326 0 0 0-.232-.095z"/>
              </svg>
              <span className="sr-only">Reddit</span>
            </div>
            {/* New York Times */}
            <div className="grayscale opacity-60 hover:opacity-100 transition-opacity">
              <svg className="h-5" viewBox="0 0 184 25" fill="currentColor">
                <path d="M13.8 2.9c0-2-1.9-2.5-3.4-2.5v.3c.9 0 1.6.3 1.6 1 0 .4-.3 1-1.2 1-.7 0-2.2-.4-3.3-.8C6.2 1.4 5 1 4 1 2 1 .6 2.5.6 4.2c0 1.5 1.1 2 1.5 2.2l.1-.2c-.2-.2-.5-.4-.5-1 0-.4.4-1.1 1.4-1.1.9 0 2.1.4 3.7.9 1.4.4 2.9.7 3.7.8v3.1L9 10.2v.1l1.5 1.3v4.3c-.8.5-1.7.6-2.5.6-1.5 0-2.8-.4-3.9-1.6l4.1-2V6l-5 2.2C3.6 6.9 4.7 6 5.8 5.4l-.1-.3c-3 .8-5.7 3.6-5.7 7 0 4 3.3 7 7 7 4 0 6.6-3.2 6.6-6.5h-.2c-.6 1.3-1.5 2.5-2.6 3.1v-4.1l1.6-1.3v-.1l-1.6-1.3V5.8c1.5 0 3 1 3 2.9zm-8.7 11l-1.2.6c-.7-.9-1.1-2.1-1.1-3.8 0-.7.1-1.5.3-2.1l2.1-.9-.1 6.2zm12.2-12h-.1l-2 1.7v.1l1.7 1.9h.2l2-1.7v-.1l-1.8-1.9zm3 14.8l-.8.5-1-1V9.3l1-.7-.2-.2-.7.6-1.8-2.1-2.9 2 .2.3.7-.5.9 1.1v6.5l-1.3 1 .1.2.7-.5 2.2 2 3-2-.1-.3zm16.7-.1l-.7.5-1.1-1V9.3l1-.8-.2-.2-.8.7-2.3-2.1-3 2.1-2.3-2.1L154 9l-1.8-2.1-2.9 2 .1.3.7-.5 1 1.1v6.5l-.8.8 2.3 1.9 2.2-2-.9-.9V9.3l.9-.6 1.5 1.4v6l-.8.8 2.3 1.9 2.2-2-.9-.9V9.3l.8-.5 1.6 1.4v6l-.7.7 2.3 2.1 3.1-2.1v-.3zm8.7-1.5l-2.5 1.9-2.5-2v-1.2l4.7-3.2v-.1l-2.4-3.6-5.2 2.8v6.8l3.5 2.5 4.5-3.6-.1-.3zm-5-1.7V8.5l.2-.1 2.2 3.5-2.4 1.5zm14.1-.9l-1.9-1.5c1.3-1.1 1.8-2.6 1.8-3.6v-.6h-.2c-.2.5-.6 1-1.4 1-.8 0-1.3-.4-1.8-1L176 9.3v3.6l1.7 1.3c-1.7 1.5-2 2.5-2 3.3 0 1 .5 1.7 1.3 2l.1-.2c-.2-.2-.4-.3-.4-.8 0-.3.4-.8 1.2-.8 1 0 1.6.7 1.9 1l4.3-2.6v-3.6h-.1zm-1.1-3c-.7 1.2-2.2 2.4-3.1 3l-1.1-.9V8.1c.4 1 1.5 1.8 2.6 1.8.7 0 1.1-.1 1.6-.4zm-1.7 8c-.5-1.1-1.7-1.9-2.9-1.9-.3 0-1.1 0-1.9.5.5-.8 1.8-2.2 3.5-3.2l1.2 1 .1 3.6z"/>
              </svg>
              <span className="sr-only">The New York Times</span>
            </div>
            {/* Wirecutter */}
            <div className="grayscale opacity-60 hover:opacity-100 transition-opacity">
              <svg className="h-6" viewBox="0 0 200 28" fill="currentColor">
                <path d="M28.3 1.4h-4.6L11.4 25.8h4.1l2.7-5.5h10.6l2.6 5.5h4.2L28.3 1.4zm-8.9 15.4l4.3-8.7h.1l4.2 8.7h-8.6zm38.1-3.3c0-7.8-5.8-12.1-12.2-12.1h-8.3v24.4h8.3c6.4 0 12.2-4.3 12.2-12.3zm-4.3 0c0 5.3-3.4 8.7-7.9 8.7h-4V5.1h4c4.5 0 7.9 3.4 7.9 8.4zm35.2 0c0-7.8-5.8-12.1-12.2-12.1h-8.3v24.4h8.3c6.4 0 12.2-4.3 12.2-12.3zm-4.3 0c0 5.3-3.4 8.7-7.9 8.7h-4V5.1h4c4.5 0 7.9 3.4 7.9 8.4zm31.5-12.1h-4.6L98.7 25.8h4.1l2.7-5.5h10.6l2.6 5.5h4.2l-12.3-24.4zm-8.9 15.4l4.3-8.7h.1l4.2 8.7h-8.6zm46.5-15.4h-4.6l-12.3 24.4h4.1l2.7-5.5h10.6l2.6 5.5h4.2l-12.3-24.4zm-8.9 15.4l4.3-8.7h.1l4.2 8.7h-8.6z"/>
              </svg>
              <span className="sr-only">Wirecutter</span>
            </div>
            {/* Consumer Reports */}
            <div className="grayscale opacity-60 hover:opacity-100 transition-opacity">
              <svg className="h-6" viewBox="0 0 283 64" fill="currentColor">
                <path d="M141.68 16.25c-11.04 0-19 7.2-19 18s8.96 18 20 18c6.67 0 12.55-2.64 16.19-7.09l-7.65-4.42c-2.02 2.21-5.09 3.5-8.54 3.5-4.79 0-8.86-2.5-10.37-6.5h28.02c.22-1.12.35-2.28.35-3.5 0-10.79-7.96-17.99-19-17.99zm-9.46 14.5c1.25-3.99 4.67-6.5 9.45-6.5 4.79 0 8.21 2.51 9.45 6.5h-18.9zm117.14-14.5c-11.04 0-19 7.2-19 18s8.96 18 20 18c6.67 0 12.55-2.64 16.19-7.09l-7.65-4.42c-2.02 2.21-5.09 3.5-8.54 3.5-4.79 0-8.86-2.5-10.37-6.5h28.02c.22-1.12.35-2.28.35-3.5 0-10.79-7.96-17.99-19-17.99zm-9.45 14.5c1.25-3.99 4.67-6.5 9.45-6.5 4.79 0 8.21 2.51 9.45 6.5h-18.9zm-39.03 3.5c0 6 3.92 10 10 10 4.12 0 7.21-1.87 8.8-4.92l7.68 4.43c-3.18 5.3-9.14 8.49-16.48 8.49-11.05 0-19-7.2-19-18s7.96-18 19-18c7.34 0 13.29 3.19 16.48 8.49l-7.68 4.43c-1.59-3.05-4.68-4.92-8.8-4.92-6.07 0-10 4-10 10zm82.48-29v46h-9v-46h9zM37.59.25l36.95 64H.64l36.95-64zm92.38 5l-27.71 48-27.71-48h10.39l17.32 30 17.32-30h10.39zm58.91 12v9.69c-1-.29-2.06-.49-3.2-.49-5.81 0-10 4-10 10v14.8h-9v-34h9v9.2c0-5.08 5.91-9.2 13.2-9.2z"/>
              </svg>
              <span className="sr-only">Consumer Reports</span>
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
