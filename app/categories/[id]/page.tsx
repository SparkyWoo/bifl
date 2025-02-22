/* eslint-disable @typescript-eslint/no-explicit-any */

import * as React from 'react'
import { notFound } from 'next/navigation'
import { getAllCategories } from '../../lib/categories'
import { compileMDX } from 'next-mdx-remote/rsc'
import fs from 'node:fs'
import path from 'node:path'
import { Metadata } from 'next'
import { Category, Product } from '../../lib/types'
import { unstable_cache } from 'next/cache'
import Script from 'next/script'

interface MDXFrontmatter extends Omit<Category, 'id'> {
  products: Product[]
}

interface PageProps {
  params: any;
  searchParams: any;
}

const components = {
  a: ({ href, children }: { href: string; children: React.ReactNode }) => (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-blue-600 hover:text-blue-800 hover:underline"
    >
      {children}
    </a>
  ),
}

// Cache the category content for 1 hour
const getCategoryContent = unstable_cache(
  async (id: string) => {
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
            whyBiflContent: whyBifl,
            link: link?.[2] || '#'
          })
        }
      }
    }

    return {
      ...frontmatter,
      products
    }
  },
  ['category-content'],
  {
    revalidate: 3600,
    tags: ['category-content']
  }
)

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const content = await getCategoryContent(params.id)
  const baseUrl = 'https://buywhoa.com'

  if (!content) {
    return {
      title: 'Not Found | BuyWhoa',
      description: 'Category not found',
      robots: {
        index: false,
        follow: false,
      }
    }
  }

  const canonicalUrl = `${baseUrl}/categories/${params.id}`
  const title = `${content.title} | BuyWhoa - Buy It For Life Products`
  const description = `${content.description} Find the most durable and long-lasting ${content.title.toLowerCase()} that are truly worth your investment.`

  return {
    title,
    description,
    alternates: {
      canonical: canonicalUrl,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
      },
    },
    openGraph: {
      title,
      description,
      url: canonicalUrl,
      type: 'website',
      siteName: 'BuyWhoa',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
    },
  }
}

function generateCategoryJsonLd(category: Category & { products: Product[] }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: category.title,
    description: category.description,
    url: `https://buywhoa.com/categories/${category.id}`,
    mainEntity: {
      '@type': 'ItemList',
      itemListElement: category.products.map((product, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        item: {
          '@type': 'Product',
          name: product.name,
          description: product.whyBifl,
          offers: {
            '@type': 'AggregateOffer',
            priceCurrency: 'USD',
            priceRange: product.priceRange
          }
        }
      }))
    }
  }
}

function generateProductJsonLd(product: Product, categoryTitle: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.name,
    description: product.whyBifl,
    category: categoryTitle,
    offers: {
      '@type': 'AggregateOffer',
      priceCurrency: 'USD',
      priceRange: product.priceRange,
      availability: 'https://schema.org/InStock'
    },
    url: product.link
  }
}

async function WhyBiflContent({ content }: { content: string }) {
  const { content: renderedContent } = await compileMDX({
    source: content,
    components
  })
  return (
    <div className="group relative">
      <div className="text-sm text-gray-600 prose prose-sm max-w-none overflow-hidden">
        <div className="sm:max-h-[2.5em] sm:line-clamp-2 group-hover:max-h-none group-hover:line-clamp-none transition-all duration-200">
          {renderedContent}
        </div>
      </div>
    </div>
  )
}

export const dynamic = 'force-static'

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

  const categoryJsonLd = generateCategoryJsonLd({ ...content, id: params.id })
  const productsJsonLd = content.products.map(product => generateProductJsonLd(product, content.title))

  return (
    <>
      <Script
        id="category-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(categoryJsonLd) }}
      />
      <Script
        id="products-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productsJsonLd) }}
      />
      <div className="space-y-6 px-4 sm:px-6 py-4 sm:py-6">
        <div className="space-y-2">
          <h1 className="text-xl sm:text-2xl font-medium text-gray-900">{content.title}</h1>
          <p className="text-sm text-gray-600">{content.description}</p>
          <p className="text-xs text-gray-500">
            Last updated: {new Date(content.lastUpdated).toLocaleDateString()}
          </p>
        </div>

        {/* Mobile Product List */}
        <div className="block sm:hidden space-y-4">
          {content.products?.map((product) => (
            <div key={product.name} className="bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden">
              <div className="p-4">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="font-medium text-gray-900 text-base">{product.name}</h3>
                  <div className="flex flex-col items-end gap-0.5 shrink-0">
                    <span className="inline-flex items-center px-2 py-1 text-xs font-medium text-blue-700 bg-blue-50 rounded-full">
                      {product.priceTier}
                    </span>
                    <span className="text-xs text-gray-500">
                      {product.priceRange}
                    </span>
                  </div>
                </div>
                
                <div className="mt-3">
                  <h4 className="text-xs font-medium text-gray-500 mb-1">Why It&apos;s BuyWhoa:</h4>
                  <WhyBiflContent content={product.whyBiflContent} />
                </div>
                
                <div className="mt-4 pt-3 border-t border-gray-100">
                  <a
                    href={product.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex w-full items-center justify-center px-4 py-2.5 text-sm font-medium text-blue-600 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors"
                  >
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                    Shop Now
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Desktop Product Table */}
        <div className="hidden sm:block bg-white border border-gray-200 rounded-lg overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full divide-y divide-gray-200 text-sm">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="px-2 py-1.5 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Product
                  </th>
                  <th scope="col" className="px-2 py-1.5 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-28">
                    Price
                  </th>
                  <th scope="col" className="px-2 py-1.5 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Why It&apos;s BuyWhoa
                  </th>
                  <th scope="col" className="relative px-2 py-1.5 w-16">
                    <span className="sr-only">Shop</span>
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {content.products?.map((product) => (
                  <tr key={product.name} className="hover:bg-gray-50">
                    <td className="px-2 py-1.5">
                      <div className="text-sm font-medium text-gray-900">{product.name}</div>
                    </td>
                    <td className="px-2 py-1.5 whitespace-nowrap">
                      <div className="text-xs">
                        <span className="font-medium text-blue-600">{product.priceTier}</span>
                        <span className="text-xs text-gray-500 ml-1">
                          {product.priceRange}
                        </span>
                      </div>
                    </td>
                    <td className="px-2 py-1.5">
                      <WhyBiflContent content={product.whyBiflContent} />
                    </td>
                    <td className="px-2 py-1.5 text-right">
                      <a 
                        href={product.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-2 py-1 text-xs font-medium text-blue-600 hover:text-blue-700"
                      >
                        Shop
                        <svg className="ml-1 w-3.5 h-3.5" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" />
                        </svg>
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  )
} 