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

export default async function Page({ params }: PageProps) {
  const content = await getCategoryContent(params.id)

  if (!content) {
    notFound()
  }

  return (
    <div className="max-w-4xl space-y-8">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">{content.title}</h1>
        <p className="mt-2 text-base text-gray-600">{content.description}</p>
        <p className="mt-4 text-sm text-gray-500">
          Last updated: {new Date(content.lastUpdated).toLocaleDateString('en-US', { 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric' 
          })}
        </p>
      </div>

      <div className="bg-white border border-gray-200 rounded-lg p-4">
        <h2 className="text-sm font-medium text-gray-900 mb-3">Price Ranges</h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {Object.entries(content.priceRanges).map(([tier, range]) => (
            <div key={tier} className="bg-gray-50 rounded-md px-3 py-2.5 text-sm">
              <span className="font-semibold text-blue-600">{tier}</span>
              <span className="ml-2 text-gray-600">{range}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead>
              <tr className="bg-gray-50">
                <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Product
                </th>
                <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Price Details
                </th>
                <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Why It&apos;s BIFL
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 bg-white">
              {content.products?.map((product) => (
                <tr key={product.name} className="hover:bg-gray-50/50">
                  <td className="px-4 py-4">
                    <a 
                      href={product.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group block"
                    >
                      <div className="font-medium text-gray-900 group-hover:text-blue-600 transition-colors">
                        {product.name}
                      </div>
                      <div className="mt-1 flex items-center text-sm text-gray-500 group-hover:text-blue-500">
                        <span>View on Amazon</span>
                        <svg className="ml-1 w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" />
                        </svg>
                      </div>
                    </a>
                  </td>
                  <td className="px-4 py-4">
                    <div className="flex flex-col">
                      <span className="inline-flex items-center text-sm font-medium text-blue-600">
                        {product.priceTier}
                      </span>
                      <span className="mt-1 text-sm text-gray-600">
                        {product.priceRange}
                      </span>
                    </div>
                  </td>
                  <td className="px-4 py-4">
                    <div className="prose prose-sm max-w-none text-gray-600">
                      <p className="whitespace-pre-line">
                        {product.whyBifl}
                      </p>
                    </div>
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