﻿import type { Metadata, Viewport } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import { Analytics } from '@vercel/analytics/next'
import type { ReactNode } from 'react'
import './globals.css'
import { AnnouncementBar } from '@/components/announcement-bar'

export const metadata: Metadata = {
  title: {
    default: 'TechFlow',
    template: '%s | TechFlow',
  },
  description: 'Innovative gadgets that transform your daily life',
  applicationName: 'TechFlow',
  robots: { index: true, follow: true },
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'TechFlow',
    title: 'TechFlow',
    description:
      'Innovative gadgets that transform your daily life. Free shipping from $50, extended warranty and weekly deals.',
    images: [
      {
        url: '/placeholder.jpg',
        width: 1200,
        height: 630,
        alt: 'TechFlow',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'TechFlow',
    description:
      'Innovative gadgets that transform your daily life. Free shipping from $50, extended warranty and weekly deals.',
    images: ['/placeholder.jpg'],
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#000000',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" dir="ltr">
      <body id="app-root" className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        <AnnouncementBar />
        {children}
        <Analytics />
      </body>
    </html>
  )
}
