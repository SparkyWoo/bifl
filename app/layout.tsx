import * as React from 'react'
import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Instrument_Sans } from "next/font/google";
import "./globals.css";
import { getAllCategories } from "./lib/categories";
import Link from "next/link";
import { CategoryListClient } from "./components/CategoryList";

const jakarta = Plus_Jakarta_Sans({ 
  subsets: ["latin"],
  variable: '--font-jakarta',
});

const instrument = Instrument_Sans({
  subsets: ["latin"],
  variable: '--font-instrument',
});

export const metadata: Metadata = {
  title: {
    template: '%s | BuyWhoa',
    default: 'BuyWhoa - Durable Product Recommendations',
  },
  description: "Curated recommendations for long-lasting, high-quality products that are worth the investment.",
  keywords: "BIFL, buy it for life, durable products, long-lasting products, quality products",
};

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
    <html lang="en" className={`${jakarta.variable} ${instrument.variable} font-sans antialiased`}>
      <body className="min-h-screen bg-gray-50 text-gray-900 text-sm">
        <div className="min-h-screen flex flex-col">
          <header className="bg-white border-b border-gray-200 sticky top-0 z-10">
            <div className="mx-auto px-4 py-3">
              <h1 className="text-lg font-display tracking-tight text-gray-900">
                <Link href="/" className="hover:text-gray-600 transition-colors">
                  BuyWhoa
                </Link>
              </h1>
            </div>
          </header>
          <div className="flex-1 flex">
            <CategoryList />
            <main className="flex-1 min-h-[calc(100vh-8.5rem)]">
              <div className="p-6">
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
      </body>
    </html>
  );
}
