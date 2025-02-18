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
                <path fill="#1A1A1A" d="M30.8,15.7c0-4.1-3.9-5.4-7.2-5.3v0.4c2,0.2,3.5,1,3.5,2.3c0,0.9-0.7,2.1-2.6,2.1c-1.6,0-4.1-0.9-6.6-1.7
                  c-2.7-0.9-5.2-1.8-7.3-1.8c-4.1,0-7.3,3.1-7.3,6.9c0,3.1,2.4,4.1,3.3,4.5l0.1-0.2c-0.6-0.4-1-0.9-1-2.2c0-1.1,0.8-2.6,2.9-2.6
                  c1.9,0,4.4,0.9,7.8,1.8c2.9,0.8,6,1.6,7.7,1.8v6.7l-3.2,2.7l3.2,2.8v9.2c-1.7,1-3.6,1.3-5.3,1.3c-3.1,0-5.9-0.9-8.2-3.4l8.7-4.2
                  V22.1L8.7,26.9c1.1-2.8,3.2-4.9,5.5-6.3l-0.1-0.2C7.8,22.1,2,27.9,2,35.1C2,43.7,8.9,50,16.8,50c8.6,0,13.6-6.7,13.5-13.8h-0.2
                  c-1.3,2.7-3.3,5.3-5.7,6.7v-9l3.4-2.7l-3.4-2.7v-6.7C27.6,21.7,30.8,19.6,30.8,15.7L30.8,15.7z M12.9,39.3l-2.5,1.3
                  c-1.5-2-2.5-4.7-2.5-8.3c0-1.5,0.2-3.5,0.7-4.9l4.4-2L12.9,39.3L12.9,39.3z M52.8,27.5l-1.7,1.3l-5-4.5l-5.9,4.5V11.4l-8,5.5
                  c0.9,0.3,2,0.8,2,2.9V44l-2.7,2.1l0.3,0.3l1.4-1l4.7,4.3l6.4-4.2L44,45.1l-1.6,1.1L40.2,44V29.4l1.5-1.1l3.5,3V44
                  c0,8-1.8,9.7-5.4,11v0.2c6,0.3,11.4-1.8,11.4-12.1V29.3l1.8-1.5L52.8,27.5L52.8,27.5z M63.5,49.6l9.2-7.4l-0.3-0.4l-4.8,3.8L62,41.3
                  v-2.7l9.6-6.8l-4.8-7.5l-10.7,5.9v13.9l-2.1,1.6l0.3,0.3l2-1.6L63.5,49.6L63.5,49.6z M62,38V27.5l4.6,7.3L62,38L62,38z M110.9,13.7
                  c0-0.7-0.2-1.2-0.4-2h-0.2c-0.7,1.8-1.4,2.7-3.4,2.7c-1.8,0-3.2-1.1-4-1.9c0,0.1-6.1,7-6.1,7l0.3,0.3l1.7-2c1.3,1,2.5,2.2,5.4,2.2
                  v17.7L91.9,16.2c-1-1.6-2.6-4-5.5-4c-3.3,0-5.9,2.9-5.5,7.7h0.2c0.3-1.2,1-2.7,2.4-2.7c1.2,0,2.1,1.1,2.7,2.1v6.9
                  c-3.8,0-6,1.8-6,4.8c0,1.3,0.9,4,3.5,4.4v-0.2c-0.4-0.4-0.7-0.7-0.7-1.4c0-1.2,0.9-1.8,2.4-1.8c0.3,0,0.6,0.1,0.8,0.1v9
                  c-4.5,0.1-8,2.5-8,6.8c0,4,3.5,5.9,7.1,5.7v-0.2c-2.3-0.3-3.4-1.4-3.4-3.1c0-1.8,1.3-2.8,3-2.8c1.7,0,2.9,1.1,4,2.3l6.1-6.8
                  l-0.3-0.3l-1.6,1.8c-2.3-2.1-3.8-3-6.5-3.4V19.9l17.1,29.8h0.9V20C108,19.8,110.9,17.4,110.9,13.7L110.9,13.7z M116.7,49.6l9.2-7.4
                  l-0.3-0.4l-4.8,3.8l-5.6-4.4v-2.7l9.6-6.8l-4.8-7.5l-10.7,5.9v13.9l-2.1,1.6l0.3,0.3l2-1.6L116.7,49.6L116.7,49.6z M115.3,38V27.5
                  l4.6,7.3L115.3,38L115.3,38z M158.7,26.7l-1.4,1.1l-4-3.4l-4.7,4.2l1.9,1.8v15.8l-4.8-3.3V30.1l1.7-1.2l-4.9-4.6l-4.6,4.2l1.9,1.8
                  v15.3l-0.3,0.2l-4.5-3.3V30c0-2.9-1.5-3.8-3.3-4.9c-1.6-1-2.4-1.9-2.4-3.3c0-1.6,1.4-2.3,1.9-2.5c-1.6-0.1-6.1,1.6-6.2,5.7
                  c-0.1,2.1,1,3,2,4c1.1,1,2.1,2,2.1,3.7V45l-2.2,1.7l0.3,0.3l2.1-1.6l5.4,4.4l5.2-3.6l5.7,3.6l11.1-6.6V28.9l2.5-1.9L158.7,26.7
                  L158.7,26.7z M195.9,14.7l-2.1,1.9l-4.7-4.1l-6.4,5.2v-4.8h-0.4v34.7c-0.7-0.1-2.2-0.5-3.8-0.8v-29c0-2.1-1.5-5-5.3-5
                  c-3.9,0-6.2,3.2-6.2,6h0.2c0.2-1.3,1.1-2.4,2.3-2.4c1.3,0,2.4,0.8,2.4,3.6v8.3c-3.6,0.2-5.8,2.4-5.8,4.8c0,1.4,0.9,3.9,3.6,4v-0.2
                  c-0.9-0.4-1.1-0.9-1.1-1.4c0-1.2,1.2-1.6,2.8-1.6h0.4v13.3c-3.1,1.1-4.5,3.1-4.5,5.7c0,3.5,2.8,6.3,7,6.3c2.9,0,5-0.5,7.7-1.1
                  c2.2-0.5,4.5-1,5.8-1c1.6,0,2.3,0.7,2.3,1.9c0,1.5-0.6,2.2-1.4,2.5v0.2c3.5-0.7,5.5-2.7,5.5-5.8c0-3.2-3.1-5.2-6.5-5.2
                  c-1.8,0-5,0.6-7.6,1.2c-2.9,0.7-5.5,1-6.4,1c-1.5,0-3.3-0.7-3.3-2.6c0-1.8,1.5-3.2,5.1-3.2c2,0,3.9,0.3,6.3,0.9
                  c2.6,0.6,4.3,1.3,6.6,1.3c3.1,0,5.6-1.1,5.6-5.6V17.1l2.3-2.1L195.9,14.7L195.9,14.7z M187.2,28.6c-0.6,0.6-1.2,1.1-2.3,1.1
                  c-1.2,0-1.8-0.6-2.3-1.1V18.2l1.5-1.2l3.1,2.6V28.6L187.2,28.6z M187.2,33.6c-0.5-0.5-1.2-1-2.3-1c-1.1,0-1.9,0.6-2.3,1v-4.4
                  c0.5,0.4,1.2,1,2.3,1c1.1,0,1.8-0.5,2.3-1V33.6L187.2,33.6z M187.2,44c0,1.7-0.9,3.6-3.1,3.6c-0.4,0-1.2-0.1-1.5-0.1V34.1
                  c0.5-0.5,1.2-1.1,2.3-1.1c1.1,0,1.7,0.5,2.3,1.1V44L187.2,44z M205.2,49.6l10.3-6.4v-14l-6.7-4.9l-10.3,5.9v13.9l-2,1.6l0.2,0.3
                  l1.7-1.4L205.2,49.6L205.2,49.6z M204.5,42.4V27.4l5.2,3.8v14.9L204.5,42.4L204.5,42.4z M235.2,24.6c-0.8,0.6-1.5,0.9-2.3,0.9
                  c-0.8,0-1.8-0.5-2.3-1.2c0,0.1-3.8,4.1-3.8,4.1l-3.8-4.1l-6.3,4.3l0.2,0.4l1.7-1.1l2.3,2.5V44l-2.7,2.1l0.3,0.3l1.4-1l5.1,4.3
                  l6.5-4.3l-0.2-0.3l-1.7,1l-2.6-2.4V28.8c1.1,1.2,2.3,2.2,3.7,2.2C233.1,31,234.9,27.9,235.2,24.6L235.2,24.6z M259.6,44.7l-1.9,1.2
                  L247,30l0.6-0.8c1.2,0.7,2.2,1.7,4.4,1.7c2.2,0,5-2.3,5.3-6.6c-0.6,0.8-1.7,1.7-3.5,1.7c-1.3,0-2.6-0.9-3.4-1.7L243.1,35l9.6,14.7
                  l7-4.6L259.6,44.7L259.6,44.7z M246.6,45.1l-1.6,1.1l-2.2-2.2V11.4l-8,5.5c0.9,0.3,2,0.8,2,2.9V44l-2.7,2.1l0.3,0.3l1.4-1l4.7,4.3
                  l6.4-4.2L246.6,45.1L246.6,45.1z M293.5,15.7c0-4.1-3.9-5.4-7.2-5.3v0.4c2,0.2,3.5,1,3.5,2.3c0,0.9-0.7,2.1-2.6,2.1
                  c-1.6,0-4.1-0.9-6.6-1.7c-2.7-0.9-5.2-1.8-7.3-1.8c-4.1,0-7.3,3.1-7.3,6.9c0,3.1,2.4,4.1,3.3,4.5l0.1-0.2c-0.6-0.4-1-0.9-1-2.2
                  c0-1.1,0.8-2.6,2.9-2.6c1.9,0,4.4,0.9,7.8,1.8c2.9,0.8,6,1.6,7.7,1.8v6.7l-3.2,2.7l3.2,2.8v9.2c-1.7,1-3.6,1.3-5.3,1.3
                  c-3.1,0-5.9-0.9-8.2-3.4l8.7-4.2V22.1l-10.7,4.7c1.1-2.8,3.2-4.9,5.5-6.3l-0.1-0.2c-6.3,1.7-12.1,7.5-12.1,14.7
                  c0,8.6,6.9,14.9,14.8,14.9c8.6,0,13.6-6.7,13.5-13.8h-0.2c-1.3,2.7-3.3,5.3-5.7,6.7v-9l3.4-2.7l-3.4-2.7v-6.7
                  C290.3,21.7,293.5,19.6,293.5,15.7L293.5,15.7z M275.5,39.3l-2.5,1.3c-1.5-2-2.5-4.7-2.5-8.3c0-1.5,0.2-3.5,0.7-4.9l4.4-2
                  L275.5,39.3L275.5,39.3z M300,14.1l-4.4,3.7l3.8,4.3l4.4-3.7L300,14.1L300,14.1z M306.8,45.1l-1.6,1.1l-2.2-2.2V29.3l1.9-1.5
                  l-0.3-0.3l-1.6,1.2l-3.7-4.4l-6.1,4.2l0.2,0.4l1.5-1l2,2.5V44l-2.7,2.1l0.3,0.3l1.4-1l4.7,4.3l6.4-4.2L306.8,45.1L306.8,45.1z
                  M340.8,44.9l-1.5,1l-2.4-2.3V29.3l1.9-1.5l-0.3-0.3l-1.7,1.3l-5-4.5l-5.7,4.4l-5-4.4l-5.6,4.4l-3.8-4.4l-6.1,4.2l0.2,0.4l1.5-1
                  l2.2,2.5v13.5l-1.7,1.7l4.8,4.1l4.7-4.2l-1.9-1.8V29.2l1.3-0.9l3.5,3v12.6l-1.6,1.7l4.9,4.1l4.6-4.2l-1.9-1.8V29.2l1.2-1l3.5,3.1
                  v12.4l-1.4,1.5l4.9,4.5l6.5-4.4L340.8,44.9L340.8,44.9z M358.5,41.9l-4.8,3.8l-5.6-4.4v-2.7l9.6-6.8l-4.8-7.5l-10.7,5.9v14.2
                  l7.3,5.3l9.2-7.4L358.5,41.9L358.5,41.9z M348.1,38V27.5l4.6,7.3L348.1,38L348.1,38z M377,36l-4.1-3.1c2.7-2.4,3.7-5.4,3.7-7.6
                  c0-0.3-0.1-0.9-0.1-1.4h-0.2c-0.4,1.1-1.5,2.1-3.1,2.1c-1.6,0-2.6-0.9-3.6-2l-9.4,5.2v7.6l3.6,2.8c-3.6,3.2-4.3,5.2-4.3,7
                  c0,1.9,1.1,3.4,2.9,4.1l0.2-0.3c-0.5-0.4-0.9-0.7-0.9-1.6c0-0.7,0.7-1.8,2.3-1.8c2.1,0,3.3,1.4,4,2.2c0-0.1,9-5.5,9-5.5V36L377,36z
                  M374.9,29.8c-1.4,2.5-4.5,5-6.4,6.4l-2.3-1.9v-7.4c0.9,2,2.8,3.7,5.2,3.7C372.9,30.6,373.8,30.3,374.9,29.8L374.9,29.8z M371,46.4
                  c-1.1-2.4-3.3-4.1-5.9-4.1c-0.6,0-2.5-0.1-4.1,1c1-1.6,3.8-4.5,7.5-6.7l2.5,2.1V46.4L371,46.4z"/>
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
