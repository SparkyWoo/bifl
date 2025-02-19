import * as React from 'react'
import { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react'
import './globals.css'
import { getAllCategories } from "./lib/categories";
import Link from "next/link";
import { CategoryListClient } from "./components/CategoryList";

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'BuyWhoa - Expert-Curated Lifetime Products',
  description: 'Expert-curated recommendations for products that truly last a lifetime. We research and test products to find items built to last, focusing on quality, durability, and long-term value.',
  keywords: ['lifetime products', 'durable goods', 'product recommendations', 'quality items', 'long-lasting products'],
  openGraph: {
    title: 'BuyWhoa - Expert-Curated Lifetime Products',
    description: 'Expert-curated recommendations for products that truly last a lifetime.',
    url: 'https://buywhoa.com',
    siteName: 'BuyWhoa',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BuyWhoa - Expert-Curated Lifetime Products',
    description: 'Expert-curated recommendations for products that truly last a lifetime.',
  },
  robots: {
    index: true,
    follow: true,
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
  },
}

async function CategoryList() {
  const categories = await getAllCategories()
  return <CategoryListClient categories={categories} />
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.className}>
      <body className="min-h-screen bg-gray-50 text-gray-900 text-sm">
        <div className="min-h-screen flex flex-col">
          <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
            <div className="mx-auto px-4 py-4 flex items-center justify-between">
              <h1 className="text-2xl font-display font-semibold tracking-tight text-gray-900">
                <Link href="/" className="hover:text-gray-600 transition-colors">
                  BuyWhoa
                </Link>
              </h1>
              <Link 
                href="/about" 
                className="text-sm text-gray-500 hover:text-gray-700 transition-colors"
              >
                About
              </Link>
            </div>
          </header>
          <div className="flex-1 flex relative">
            <CategoryList />
            <main className="flex-1 min-h-[calc(100vh-8.5rem)] w-full">
              <div className="p-4 sm:p-6">
                {children}
              </div>
            </main>
          </div>
          <footer className="bg-white border-t border-gray-200">
            <div className="mx-auto px-4 py-3">
              <p className="text-center text-xs text-gray-500">
                © {new Date().getFullYear()} BuyWhoa
                <br />
                <span className="mt-1 block">
                  This site contains affiliate links. We may earn a commission when you purchase through these links.
                </span>
              </p>
            </div>
          </footer>
        </div>
        <Analytics />
      </body>
    </html>
  );
}
