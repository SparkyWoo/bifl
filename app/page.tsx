'use client'

import * as React from 'react'
import { motion, Variants } from 'framer-motion'

interface Feature {
  title: string
  description: string
  icon: React.ReactNode
}

interface TrustMetric {
  value: string
  label: string
}

const fadeUpVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      delay: 0.2 + i * 0.1,
      ease: [0.25, 0.4, 0.25, 1],
    },
  }),
}

const trustMetrics: readonly TrustMetric[] = [
  { value: '50+', label: 'Categories' },
  { value: '1,000+', label: 'Product Reviews' },
  { value: '10k+', label: 'Happy Users' },
] as const

const features: readonly Feature[] = [
  {
    title: 'Expert Research',
    description: 'Every product is thoroughly researched and vetted by our team of experts and long-term users.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
      </svg>
    )
  },
  {
    title: 'Lifetime Value',
    description: 'We focus on products that save money in the long run through exceptional durability and quality.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
  },
  {
    title: 'User Verified',
    description: 'Real feedback from long-term owners helps us identify truly reliable and lasting products.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" />
      </svg>
    )
  },
] as const

function BackgroundGradient(): React.ReactElement {
  return (
    <div className="absolute inset-0 overflow-hidden -z-10">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-blue-50/5" />
    </div>
  )
}

function TrustSignals(): React.ReactElement {
  return (
    <div className="grid grid-cols-3 gap-8 text-center text-sm text-gray-600 mt-12">
      {trustMetrics.map(({ value, label }) => (
        <div key={label}>
          <div className="font-medium text-2xl text-gray-900 mb-1">{value}</div>
          <div>{label}</div>
        </div>
      ))}
    </div>
  )
}

function FeatureCard({ feature }: { feature: Feature }): React.ReactElement {
  return (
    <div className="p-6 bg-white shadow-sm border border-gray-100 rounded-xl transition-all hover:shadow-md">
      <div className="text-blue-500 mb-3">{feature.icon}</div>
      <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
      <p className="text-gray-600">{feature.description}</p>
    </div>
  )
}

export default function HomePage(): React.ReactElement {
  return (
    <div className="relative min-h-[calc(100vh-8.5rem)] w-full flex flex-col items-center justify-center">
      <BackgroundGradient />
      
      <div className="relative z-10 container mx-auto px-6 max-w-4xl">
        <div className="text-center space-y-8">
          <motion.div
            custom={0}
            variants={fadeUpVariants}
            initial="hidden"
            animate="visible"
            className="space-y-4"
          >
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
              Buy It For Life
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Expert-curated recommendations for products that truly last a lifetime
            </p>
          </motion.div>

          <motion.div
            custom={1}
            variants={fadeUpVariants}
            initial="hidden"
            animate="visible"
            className="max-w-2xl mx-auto"
          >
            <div className="prose prose-lg prose-blue text-gray-600">
              <p className="lead">
                We meticulously research and test products to find items that are built to last. 
                Our recommendations focus on quality, durability, and long-term value — because 
                the best products are the ones you only need to buy once.
              </p>
            </div>
          </motion.div>

          <motion.div
            custom={2}
            variants={fadeUpVariants}
            initial="hidden"
            animate="visible"
          >
            <TrustSignals />
          </motion.div>

          <motion.div
            custom={3}
            variants={fadeUpVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {features.map((feature) => (
              <FeatureCard key={feature.title} feature={feature} />
            ))}
          </motion.div>

          <motion.div
            custom={4}
            variants={fadeUpVariants}
            initial="hidden"
            animate="visible"
            className="pt-8"
          >
            <div className="inline-flex items-center space-x-1 text-sm text-gray-500 bg-gray-50 px-4 py-2 rounded-full">
              <svg 
                className="w-4 h-4" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" 
                />
              </svg>
              <span>Updated daily with new products and reviews</span>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
