import createMDX from '@next/mdx'
import remarkGfm from 'remark-gfm'
import { NextConfig } from 'next'

const withMDX = createMDX({
  options: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [],
  },
})

const nextConfig: NextConfig = {
  pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
  experimental: {
    mdxRs: true,
  },
  // Optimize for static export
  output: 'export' as const,
  // Disable image optimization since we're not using images
  images: {
    unoptimized: true,
  },
}

export default withMDX(nextConfig)
