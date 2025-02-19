'use client'

import * as React from 'react'
import Link from 'next/link'

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  React.useEffect(() => {
    // Log the error to an error reporting service
    console.error('Global Error:', error)
  }, [error])

  return (
    <html>
      <body>
        <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
          <div className="max-w-lg w-full space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-2xl font-semibold text-gray-900">
                Something went wrong!
              </h1>
              <p className="text-gray-600">
                {error.message || 'An unexpected error occurred. Please try again later.'}
              </p>
            </div>
            
            <div className="flex justify-center gap-4">
              <button
                onClick={() => reset()}
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Try again
              </button>
              <Link
                href="/"
                className="inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Go home
              </Link>
            </div>
          </div>
        </div>
      </body>
    </html>
  )
} 