/* eslint-disable @typescript-eslint/no-explicit-any */

import { notFound } from 'next/navigation'
import { getAllCategories } from '@/app/lib/categories'
import { compileMDX } from 'next-mdx-remote/rsc'
import fs from 'fs'
import path from 'path'
import { Metadata } from 'next'
import React from 'react'

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

export default async function CategoryPage(props: any) {
  const { id } = props.params
  const filePath = path.join(process.cwd(), 'app/content/categories', `${id}.mdx`)

  if (!fs.existsSync(filePath)) {
    notFound()
  }

  const fileContent = fs.readFileSync(filePath, 'utf8')
  const { content, frontmatter } = await compileMDX<MDXFrontmatter>({
    source: fileContent,
    options: { parseFrontmatter: true }
  })

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-lg font-medium text-gray-900">{frontmatter.title}</h1>
        <p className="text-sm text-gray-500 mt-1">
          Last updated: {new Date(frontmatter.lastUpdated).toLocaleDateString()}
        </p>
      </div>

      <div className="bg-white border border-gray-200 rounded-md p-4">
        <h2 className="text-sm font-medium text-gray-900 mb-3">Price Ranges</h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
          {Object.entries(frontmatter.priceRanges).map(([tier, range]) => (
            <div key={tier} className="bg-gray-50 rounded-md px-3 py-2 text-sm">
              <span className="font-medium text-gray-900">{tier}</span>
              <span className="ml-2 text-gray-600">{range}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="prose prose-sm max-w-none">
        {content}
      </div>
    </div>
  )
} 