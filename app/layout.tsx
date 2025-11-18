import type { Metadata, Viewport } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'
import { AnnouncementBar } from '@/components/announcement-bar'

export const metadata: Metadata = {
  title: 'TechFlow',
  description: 'Created with v0',
  generator: 'v0.app',
  applicationName: 'TechFlow',
  robots: { index: true, follow: true },
}

// Next 15: move viewport and themeColor to the dedicated export
export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#000000',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" dir="ltr">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        <AnnouncementBar />
        {children}
        <Analytics />
      </body>
    </html>
  )
}
