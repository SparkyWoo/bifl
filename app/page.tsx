import Link from 'next/link'
import { SearchBox } from './components/SearchBox'
import { getAllCategories } from './lib/categories'

export default async function Home() {
  const categories = await getAllCategories()

  return (
    <div className="space-y-6">
      <div className="mx-auto max-w-2xl">
        <SearchBox categories={categories} />
      </div>

      <div className="space-y-3">
        <h2 className="text-base font-medium text-gray-900">Categories</h2>
        <ul className="divide-y divide-gray-100">
          {categories.map((category) => (
            <li key={category.id}>
              <Link
                href={`/categories/${category.id}`}
                className="flex items-center justify-between px-3 py-2 hover:bg-white rounded-md transition-colors"
              >
                <div>
                  <span className="text-sm font-medium text-gray-900">{category.title}</span>
                  <p className="text-xs text-gray-500 mt-0.5">{category.description}</p>
                </div>
                <span className="text-xs text-gray-400">
                  Updated {new Date(category.lastUpdated).toLocaleDateString()}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="rounded-md bg-white p-4 border border-gray-200 text-sm">
        <h2 className="font-medium text-gray-900 mb-2">About Buy It For Life</h2>
        <p className="text-gray-600 text-sm leading-relaxed">
          Welcome to Buy It For Life (BIFL) - your resource for finding durable, 
          high-quality products that are built to last. Our recommendations are 
          based on extensive research and real-world durability. We focus on items 
          that offer the best value over their lifetime, not just the lowest 
          initial cost.
        </p>
      </div>
    </div>
  )
}
