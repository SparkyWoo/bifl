import * as React from 'react'

export type PriceTier = '$' | '$$' | '$$$' | '$$$$'

export interface PriceRange {
  tier: PriceTier
  min: number
  max: number
  label: string
}

export interface Product {
  name: string
  priceTier: string
  priceRange: string
  whyBifl: string
  whyBiflContent: React.ReactNode
  link: string
}

export interface Category {
  id: string
  title: string
  description: string
  lastUpdated: string
  priceRanges: Record<string, string>
  products: Product[]
}

export interface SearchResult {
  type: 'category' | 'product'
  category: string
  item: string
  link: string
} 