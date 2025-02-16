export type PriceTier = '$' | '$$' | '$$$' | '$$$$'

export interface PriceRange {
  tier: PriceTier
  min: number
  max: number
  label: string
}

export interface Product {
  name: string
  priceTier: PriceTier
  priceRange: string
  whyBifl: string
  link: string
}

export interface Category {
  id: string
  title: string
  description: string
  lastUpdated: string
  priceRanges: Record<PriceTier, string>
  products: Product[]
}

export interface SearchResult {
  type: 'category' | 'product'
  category: string
  item: string
  link: string
} 