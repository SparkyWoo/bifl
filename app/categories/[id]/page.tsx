/* eslint-disable @typescript-eslint/no-explicit-any */

import { notFound } from 'next/navigation'
import { getAllCategories } from '@/app/lib/categories'
import { compileMDX } from 'next-mdx-remote/rsc'
import fs from 'fs'
import path from 'path'
import { Metadata } from 'next'
import React from 'react'
import { Category, Product } from '@/app/lib/types'
import Link from 'next/link'

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

  return frontmatter
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
    <div className="space-y-6">
      <div className="flex flex-col space-y-4">
        <Link
          href="/"
          className="text-sm text-blue-500 hover:text-blue-600 flex items-center w-fit"
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
              d="M10 19l-7-7m0 0l7-7m-7 7h18" 
            />
          </svg>
          Back to Categories
        </Link>

        <div>
          <h1 className="text-lg font-medium text-gray-900">{content.title}</h1>
          <p className="text-sm text-gray-500 mt-1">
            Last updated: {new Date(content.lastUpdated).toLocaleDateString()}
          </p>
        </div>
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
                    className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {content.products?.map((product) => (
                <tr key={product.name} className="hover:bg-gray-50">
                  <td className="px-3 py-2 text-sm font-medium text-gray-900">
                    {product.name}
                  </td>
                  <td className="px-3 py-2 text-sm text-gray-500">
                    {product.priceTier}
                  </td>
                  <td className="px-3 py-2 text-sm text-gray-500">
                    {product.priceRange}
                  </td>
                  <td className="px-3 py-2 text-sm text-gray-500 max-w-md">
                    <div className="line-clamp-3">
                      {product.whyBifl}
                    </div>
                  </td>
                  <td className="px-3 py-2 text-sm text-gray-500">
                    <a 
                      href={product.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-blue-500 hover:text-blue-600"
                      aria-label={`Buy ${product.name}`}
                    >
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