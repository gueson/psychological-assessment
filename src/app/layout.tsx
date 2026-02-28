import type { Metadata, Viewport } from 'next'
import { Analytics } from '@vercel/analytics/react'
import '../styles/globals.css'

export const metadata: Metadata = {
  title: '心理测评工具全解析 - 专业心理评估指南',
  description: '专业探索人格测试、能力测试和职业兴趣测试的理论基础与实践应用，为您提供全面的心理测评工具指南，帮助您了解不同类型的心理测评及其应用场景。',
  keywords: '心理测评,人格测试,能力测试,职业兴趣测试,MBTI,大五人格,霍兰德测试,心理评估,心理测验,职业规划,人才选拔',
  authors: [{ name: '心理测评专家' }],
  icons: {
    icon: '/favicon.svg',
  },
  other: {
    'google-site-verification': 'dSvyi8ugxh5gSyQK40vW2UI6EG_luAKTEf3793gGE6c',
  },
  openGraph: {
    title: '心理测评工具全解析',
    description: '专业探索人格测试、能力测试和职业兴趣测试的理论基础与实践应用',
    type: 'website',
    url: 'https://example.com',
    images: [
      {
        url: 'https://example.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: '心理测评工具全解析',
      },
    ],
    siteName: '心理测评工具全解析',
  },
  twitter: {
    card: 'summary_large_image',
    title: '心理测评工具全解析',
    description: '专业探索人格测试、能力测试和职业兴趣测试的理论基础与实践应用',
    images: ['https://example.com/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh-CN">
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
