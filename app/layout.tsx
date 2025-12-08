﻿﻿﻿﻿﻿﻿﻿﻿﻿﻿import type { Metadata, Viewport } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'
import { AnnouncementBar } from '@/components/announcement-bar'

export const metadata: Metadata = {
  title: 'TechFlow',
  description: 'Innovative gadgets that transform your daily life',
  generator: 'v0.app',
  applicationName: 'TechFlow',
  robots: { index: true, follow: true },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'TechFlow',
    title: 'TechFlow',
    description:
      'Innovative gadgets that transform your daily life. Free shipping from $50, extended warranty and weekly deals.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'TechFlow',
    description:
      'Innovative gadgets that transform your daily life. Free shipping from $50, extended warranty and weekly deals.',
  },
}

// Next 15: move viewport and themeColor to the dedicated export
export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#000000',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
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
