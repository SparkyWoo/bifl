import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter',
});

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
    <html lang="en" className={`${inter.variable} font-sans antialiased`}>
      <body className="min-h-screen bg-gray-50 text-gray-900 text-sm">
        <div className="min-h-screen flex flex-col">
          <header className="bg-white border-b border-gray-200">
            <div className="mx-auto max-w-5xl px-4 py-3">
              <h1 className="text-lg font-semibold tracking-tight text-gray-900">
                Buy It For Life
              </h1>
            </div>
          </header>
          <main className="flex-1 py-4">
            <div className="mx-auto max-w-5xl px-4">
              {children}
            </div>
          </main>
          <footer className="bg-white border-t border-gray-200 mt-8">
            <div className="mx-auto max-w-5xl px-4 py-3">
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
