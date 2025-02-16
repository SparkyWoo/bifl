/* eslint-disable @typescript-eslint/no-explicit-any */

import * as React from 'react'
import { notFound } from 'next/navigation'
import { getAllCategories } from '../../lib/categories'
import { compileMDX } from 'next-mdx-remote/rsc'
import fs from 'node:fs'
import path from 'node:path'
import { Metadata } from 'next'
import { Category, Product } from '../../lib/types'

interface MDXFrontmatter extends Omit<Category, 'id'> {
  products: Product[]
}

interface PageProps {
  params: any;
  searchParams: any;
}

async function getCategoryContent(id: string) {
  const filePath = path.join(process.cwd(), 'app/content/categories', `${id}.mdx`)

  if (!fs.existsSync(filePath)) {
    return null
  }

  const fileContent = fs.readFileSync(filePath, 'utf8')
  const { frontmatter } = await compileMDX<MDXFrontmatter>({
    source: fileContent,
    options: { parseFrontmatter: true }
  })

  // Parse products from the MDX content
  const lines = fileContent.split('\n')
  const tableStartIndex = lines.findIndex(line => line.includes('| Product Name |'))
  const products: Product[] = []

  if (tableStartIndex !== -1) {
    // Skip the header and separator lines
    const dataLines = lines.slice(tableStartIndex + 2)
      .filter(line => line.trim().startsWith('|') && line.trim().endsWith('|'))

    for (const line of dataLines) {
      const cells = line.split('|').map((cell: string) => cell.trim()).filter(Boolean)
      if (cells.length >= 5) {
        const [name, priceTier, priceRange, whyBifl, linkCell] = cells
        const link = linkCell.match(/\[(.*?)\]\((.*?)\)/)
        
        products.push({
          name,
          priceTier,
          priceRange,
          whyBifl,
          link: link?.[2] || '#'
        })
      }
    }
  }

  return {
    ...frontmatter,
    products
  }
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const content = await getCategoryContent(params.id)

  if (!content) {
    return {
      title: 'Not Found | Buy It For Life',
      description: 'Category not found',
    }
  }

  return {
    title: `${content.title} | Buy It For Life`,
    description: content.description,
  }
}

export const dynamic = 'force-static'
export const dynamicParams = false

export async function generateStaticParams() {
  const categories = await getAllCategories()
  return categories.map((category) => ({
    id: category.id,
  }))
}

export default async function CategoryPage({ params }: PageProps) {
  const content = await getCategoryContent(params.id)

  if (!content) {
    notFound()
  }

  return (
    <div className="max-w-[1200px] mx-auto">
      <div className="mb-6 pb-4 border-b">
        <div className="flex items-baseline justify-between">
          <h1 className="text-xl font-medium tracking-tight text-gray-900">{content.title}</h1>
          <div className="text-xs text-gray-500 tabular-nums">
            {Object.entries(content.priceRanges).map(([tier, range]) => (
              <span key={tier} className="ml-3 first:ml-0">
                <span className="font-medium">{tier}</span>
                <span className="ml-1 text-gray-400">{range}</span>
              </span>
            ))}
          </div>
        </div>
        <p className="mt-1 text-xs text-gray-500">
          Last updated: {new Date(content.lastUpdated).toLocaleDateString()}
        </p>
      </div>

      <div className="bg-white border border-gray-200 rounded-md overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200">
          <thead>
            <tr className="bg-gray-50/75">
              <th scope="col" className="py-2 pl-4 pr-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wide w-64">
                Product
              </th>
              <th scope="col" className="px-2 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wide w-20">
                Price
              </th>
              <th scope="col" className="px-2 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wide">
                Why It&apos;s BIFL
              </th>
              <th scope="col" className="py-2 pl-2 pr-4 text-right text-xs font-medium text-gray-500 uppercase tracking-wide w-16">
                Buy
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {content.products?.map((product) => (
              <tr key={product.name} className="hover:bg-gray-50/50">
                <td className="py-2.5 pl-4 pr-2">
                  <div className="font-medium text-sm text-gray-900">{product.name}</div>
                </td>
                <td className="px-2 py-2.5 tabular-nums">
                  <div className="text-xs font-medium text-gray-700">{product.priceTier}</div>
                  <div className="text-xs text-gray-500">{product.priceRange}</div>
                </td>
                <td className="px-2 py-2.5">
                  <div className="text-xs text-gray-600 line-clamp-2">
                    {product.whyBifl}
                  </div>
                </td>
                <td className="py-2.5 pl-2 pr-4 text-right">
                  <a
                    href={product.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex text-xs font-medium text-blue-600 hover:text-blue-700"
                    aria-label={`Buy ${product.name}`}
                  >
                    Buy →
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
} 