import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { getAllCategories } from "./lib/categories";
import Link from "next/link";
import { Category } from "./lib/types";

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: "Buy It For Life - Durable Product Recommendations",
  description: "Curated recommendations for long-lasting, high-quality products that are worth the investment.",
  keywords: "BIFL, buy it for life, durable products, long-lasting products, quality products",
};

async function CategoryList() {
  const categories = await getAllCategories()
  
  return (
    <nav className="w-72 border-r border-gray-200 bg-white">
      <div className="sticky top-0">
        <div className="px-4 py-3 border-b border-gray-200 bg-gray-50">
          <h2 className="text-sm font-medium text-gray-500">Categories</h2>
        </div>
        <div className="h-[calc(100vh-8.5rem)] overflow-y-auto px-3 py-3">
          <ul className="space-y-1">
            {categories.map((category: Category) => (
              <li key={category.id}>
                <Link
                  href={`/categories/${category.id}`}
                  className="flex flex-col px-3 py-2 text-sm rounded-md hover:bg-gray-50 transition-colors"
                >
                  <span className="font-medium text-gray-900">{category.title}</span>
                  <span className="text-xs text-gray-500 mt-0.5 line-clamp-2">
                    {category.description}
                  </span>
                  <span className="text-xs text-gray-400 mt-1">
                    Updated {new Date(category.lastUpdated).toLocaleDateString()}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} font-sans antialiased`}>
      <body className="min-h-screen bg-gray-50 text-gray-900 text-sm">
        <div className="min-h-screen flex flex-col">
          <header className="bg-white border-b border-gray-200 sticky top-0 z-10">
            <div className="mx-auto px-4 py-3">
              <h1 className="text-lg font-semibold tracking-tight text-gray-900">
                Buy It For Life
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
                Last updated: {new Date().toLocaleDateString()}
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
