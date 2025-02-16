import { notFound } from 'next/navigation'
import { getAllCategories } from '@/app/lib/categories'
import { compileMDX } from 'next-mdx-remote/rsc'
import fs from 'fs'
import path from 'path'
import { Metadata } from 'next'

interface MDXFrontmatter {
  title: string
  id: string
  description: string
  lastUpdated: string
  priceRanges: Record<string, string>
}

export const metadata: Metadata = {
  title: 'Category | Buy It For Life',
  description: 'Product recommendations that last a lifetime',
}

export const dynamic = 'force-static'
export const dynamicParams = false

export async function generateStaticParams() {
  const categories = await getAllCategories()
  return categories.map((category) => ({
    id: category.id,
  }))
}

type Props = {
  params: { id: string }
  searchParams: Record<string, string | string[] | undefined>
}

export default function CategoryPage({ params }: Props) {
  const { id } = params
  const filePath = path.join(process.cwd(), 'app/content/categories', `${id}.mdx`)

  if (!fs.existsSync(filePath)) {
    notFound()
  }

  const fileContent = fs.readFileSync(filePath, 'utf8')
  const { content, frontmatter } = compileMDX<MDXFrontmatter>({
    source: fileContent,
    options: { parseFrontmatter: true }
  })

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold">{frontmatter.title}</h1>
        <p className="mt-2 text-gray-600">
          Last updated: {new Date(frontmatter.lastUpdated).toLocaleDateString()}
        </p>
      </div>

      <div className="rounded-lg border border-gray-200 bg-white p-6">
        <h2 className="mb-4 text-lg font-semibold">Price Ranges</h2>
        <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 md:grid-cols-4">
          {Object.entries(frontmatter.priceRanges).map(([tier, range]) => (
            <div key={tier} className="rounded-lg border border-gray-200 p-3">
              <span className="font-medium">{tier}</span>
              <span className="ml-2 text-gray-600">{range}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="prose prose-gray max-w-none">
        {content}
      </div>
    </div>
  )
} 