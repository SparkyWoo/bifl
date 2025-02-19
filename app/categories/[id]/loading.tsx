import * as React from 'react'

export default function Loading() {
  return (
    <div className="space-y-6 px-4 sm:px-6 py-4 sm:py-6 animate-pulse">
      {/* Header Skeleton */}
      <div className="space-y-2">
        <div className="h-7 bg-gray-200 rounded w-1/3"></div>
        <div className="h-4 bg-gray-200 rounded w-2/3"></div>
        <div className="h-3 bg-gray-200 rounded w-1/4"></div>
      </div>

      {/* Mobile Product List Skeleton */}
      <div className="block sm:hidden space-y-4">
        {[1, 2, 3].map((i) => (
          <div key={i} className="bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden">
            <div className="p-4 space-y-4">
              <div className="flex items-start justify-between gap-3">
                <div className="h-5 bg-gray-200 rounded w-2/3"></div>
                <div className="flex flex-col items-end gap-0.5 shrink-0">
                  <div className="h-5 bg-gray-200 rounded w-16"></div>
                  <div className="h-4 bg-gray-200 rounded w-20"></div>
                </div>
              </div>
              <div className="space-y-2">
                <div className="h-4 bg-gray-200 rounded w-1/4"></div>
                <div className="space-y-1">
                  <div className="h-3 bg-gray-200 rounded w-full"></div>
                  <div className="h-3 bg-gray-200 rounded w-5/6"></div>
                </div>
              </div>
              <div className="h-10 bg-gray-200 rounded"></div>
            </div>
          </div>
        ))}
      </div>

      {/* Desktop Product Table Skeleton */}
      <div className="hidden sm:block bg-white border border-gray-200 rounded-lg overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-3 py-2 w-1/4">
                  <div className="h-4 bg-gray-200 rounded w-20"></div>
                </th>
                <th className="px-3 py-2 w-32">
                  <div className="h-4 bg-gray-200 rounded w-16"></div>
                </th>
                <th className="px-3 py-2">
                  <div className="h-4 bg-gray-200 rounded w-32"></div>
                </th>
                <th className="px-3 py-2 w-20"></th>
              </tr>
            </thead>
            <tbody>
              {[1, 2, 3, 4].map((i) => (
                <tr key={i}>
                  <td className="px-3 py-2">
                    <div className="h-5 bg-gray-200 rounded w-3/4"></div>
                  </td>
                  <td className="px-3 py-2">
                    <div className="h-5 bg-gray-200 rounded w-24"></div>
                  </td>
                  <td className="px-3 py-2">
                    <div className="space-y-1">
                      <div className="h-3 bg-gray-200 rounded w-full"></div>
                      <div className="h-3 bg-gray-200 rounded w-5/6"></div>
                    </div>
                  </td>
                  <td className="px-3 py-2">
                    <div className="h-5 bg-gray-200 rounded w-12 ml-auto"></div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
} 