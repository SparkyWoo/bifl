import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Buy It For Life - Durable Product Recommendations",
  description: "Curated recommendations for long-lasting, high-quality products that are worth the investment.",
  keywords: "BIFL, buy it for life, durable products, long-lasting products, quality products",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="min-h-screen bg-white">
          <header className="border-b">
            <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
              <h1 className="text-2xl font-bold tracking-tight text-gray-900">
                Buy It For Life
              </h1>
            </div>
          </header>
          <main>
            <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
              {children}
            </div>
          </main>
          <footer className="border-t">
            <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
              <p className="text-center text-sm text-gray-600">
                Last updated: {new Date().toLocaleDateString()}
                <br />
                <span className="mt-2 block">
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
