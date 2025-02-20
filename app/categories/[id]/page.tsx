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
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="space-y-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">{content.title}</h1>
            <p className="mt-2 text-lg text-gray-600">{content.description}</p>
          </div>

          <div className="space-y-6">
            {content.products.map((product, index) => (
              <div key={index} className="bg-white rounded-lg shadow-sm p-6 space-y-4">
                <div className="flex justify-between items-start">
                  <h2 className="text-xl font-semibold text-gray-900">{product.name}</h2>
                  <div className="text-sm font-medium text-gray-500">
                    {product.priceRange}
                  </div>
                </div>
                <WhyBiflContent content={product.whyBiflContent} />
                <div className="flex justify-end">
                  <a
                    href={product.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  >
                    View on Amazon
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
} 