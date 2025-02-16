import Link from 'next/link'
import { SearchBox } from './components/SearchBox'
import { getAllCategories } from './lib/categories'

export default async function Home() {
  const categories = await getAllCategories()

  return (
    <div className="space-y-8">
      <div className="mx-auto max-w-2xl">
        <SearchBox categories={categories} />
      </div>

      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Categories</h2>
        <ul className="space-y-2">
          {categories.map((category) => (
            <li key={category.id}>
              <Link
                href={`/categories/${category.id}`}
                className="block rounded-lg border border-gray-200 px-4 py-3 hover:border-blue-500 hover:bg-gray-50"
              >
                <span className="font-medium">{category.title}</span>
                <span className="ml-2 text-sm text-gray-500">
                  Last updated: {new Date(category.lastUpdated).toLocaleDateString()}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="rounded-lg bg-gray-50 p-6">
        <h2 className="mb-4 text-lg font-semibold">About Buy It For Life</h2>
        <p className="text-gray-600">
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
