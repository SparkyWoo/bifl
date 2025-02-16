/* eslint-disable @typescript-eslint/no-explicit-any */

import { notFound } from 'next/navigation'
import { getAllCategories } from '@/app/lib/categories'
import { compileMDX } from 'next-mdx-remote/rsc'
import fs from 'fs'
import path from 'path'
import { Metadata } from 'next'
import React from 'react'
import { Category, Product } from '@/app/lib/types'

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
    <div className="max-w-4xl space-y-6">
      <div>
        <h1 className="text-xl font-medium text-gray-900">{content.title}</h1>
        <p className="text-sm text-gray-500 mt-1">
          Last updated: {new Date(content.lastUpdated).toLocaleDateString()}
        </p>
      </div>

      <div className="bg-white border border-gray-200 rounded-md p-4">
        <h2 className="text-sm font-medium text-gray-900 mb-3">Price Ranges</h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
          {Object.entries(content.priceRanges).map(([tier, range]) => (
            <div key={tier} className="bg-gray-50 rounded-md px-3 py-2 text-sm">
              <span className="font-medium text-gray-900">{tier}</span>
              <span className="ml-2 text-gray-600">{range}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white border border-gray-200 rounded-md overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200" role="table" aria-label="Products in category">
            <thead className="bg-gray-50">
              <tr>
                {['Product Name', 'Price Tier', 'Price Range', 'Why It&apos;s BIFL', 'Link'].map((header) => (
                  <th 
                    key={header}
                    scope="col" 
                    className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider whitespace-nowrap"
                  >
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {content.products?.map((product) => (
                <tr key={product.name} className="hover:bg-gray-50">
                  <td className="px-3 py-2 text-sm font-medium text-gray-900 whitespace-nowrap">
                    {product.name}
                  </td>
                  <td className="px-3 py-2 text-sm text-gray-500 whitespace-nowrap">
                    {product.priceTier}
                  </td>
                  <td className="px-3 py-2 text-sm text-gray-500 whitespace-nowrap">
                    {product.priceRange}
                  </td>
                  <td className="px-3 py-2 text-sm text-gray-500">
                    <div className="line-clamp-3 max-w-md">
                      {product.whyBifl}
                    </div>
                  </td>
                  <td className="px-3 py-2 text-sm text-gray-500 whitespace-nowrap">
                    <a 
                      href={product.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-3 py-1 rounded-md bg-blue-50 text-blue-600 hover:bg-blue-100 transition-colors"
                      aria-label={`Buy ${product.name}`}
                    >
                      <svg 
                        className="w-4 h-4 mr-1" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path 
                          strokeLinecap="round" 
                          strokeLinejoin="round" 
                          strokeWidth={2} 
                          d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" 
                        />
                      </svg>
                      Buy
                    </a>
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