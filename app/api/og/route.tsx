import { ImageResponse } from '@vercel/og'
import { NextRequest } from 'next/server'

export const runtime = 'edge'
export const dynamic = 'error'
export const revalidate = false

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url)
    const title = searchParams.get('title') || 'BuyWhoa'
    const description = searchParams.get('description') || 'Expert-Curated Lifetime Products'
    
    return new ImageResponse(
      (
        <div
          style={{
            height: '100%',
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#f9fafb',
            padding: '48px 64px',
          }}
        >
          {/* Logo/Brand Section */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: '24px',
            }}
          >
            <div
              style={{
                fontSize: '48px',
                fontWeight: 600,
                background: 'linear-gradient(to right, #2563eb, #1d4ed8)',
                backgroundClip: 'text',
                color: 'transparent',
                letterSpacing: '-0.025em',
              }}
            >
              BuyWhoa
            </div>
          </div>

          {/* Title */}
          <div
            style={{
              fontSize: '60px',
              fontWeight: 700,
              letterSpacing: '-0.025em',
              lineHeight: 1.2,
              textAlign: 'center',
              marginBottom: '16px',
              color: '#111827',
            }}
          >
            {title}
          </div>

          {/* Description */}
          <div
            style={{
              fontSize: '32px',
              lineHeight: 1.4,
              textAlign: 'center',
              color: '#4b5563',
              maxWidth: '800px',
            }}
          >
            {description}
          </div>

          {/* Footer */}
          <div
            style={{
              position: 'absolute',
              bottom: '48px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: 'calc(100% - 128px)',
              borderTop: '1px solid #e5e7eb',
              paddingTop: '24px',
            }}
          >
            <div
              style={{
                fontSize: '24px',
                color: '#6b7280',
              }}
            >
              buywhoa.com
            </div>
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
      },
    )
  } catch (e: unknown) {
    if (e instanceof Error) {
      console.log(`${e.message}`)
    }
    return new Response(`Failed to generate the image`, {
      status: 500,
    })
  }
} 