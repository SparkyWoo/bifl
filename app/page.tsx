'use client'

import * as React from 'react'
import { motion } from 'framer-motion'

function BackgroundGradient() {
  return (
    <div className="absolute inset-0 overflow-hidden -z-10">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-transparent to-blue-50/5 blur-3xl" />
    </div>
  )
}

export default function HomePage() {
  const fadeUpVariants = {
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

  return (
    <div className="relative min-h-[calc(100vh-8.5rem)] w-full flex flex-col items-center justify-center">
      <BackgroundGradient />
      
      <div className="relative z-10 container mx-auto px-6 max-w-4xl">
        <div className="text-center space-y-6">
          <motion.div
            custom={0}
            variants={fadeUpVariants}
            initial="hidden"
            animate="visible"
            className="space-y-2"
          >
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              Buy It For Life
            </h1>
            <p className="text-lg text-gray-600">
              Curated recommendations for products that stand the test of time
            </p>
          </motion.div>

          <motion.div
            custom={1}
            variants={fadeUpVariants}
            initial="hidden"
            animate="visible"
            className="max-w-2xl mx-auto"
          >
            <div className="prose prose-blue text-gray-600">
              <p className="lead">
                We believe in quality over quantity. Our recommendations focus on durable, well-crafted products 
                that offer the best value over their lifetime, not just the lowest initial cost.
              </p>
            </div>
          </motion.div>

          <motion.div
            custom={2}
            variants={fadeUpVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm"
          >
            {features.map((feature) => (
              <div
                key={feature.title}
                className="p-6 bg-white/50 backdrop-blur-sm border border-gray-200/50 rounded-lg"
              >
                <h3 className="font-medium text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </motion.div>

          <motion.div
            custom={3}
            variants={fadeUpVariants}
            initial="hidden"
            animate="visible"
            className="pt-6"
          >
            <p className="text-sm text-gray-500">
              Browse categories on the left to explore our recommendations
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

const features = [
  {
    title: 'Thoroughly Researched',
    description: 'Each recommendation is backed by extensive research, real-world durability tests, and user experiences.',
  },
  {
    title: 'Lifetime Value',
    description: 'We focus on products that may cost more upfront but save money in the long run through durability and quality.',
  },
  {
    title: 'Transparent Reviews',
    description: 'Clear explanations of why each product is considered "buy it for life" quality, with no hidden agendas.',
  },
]
