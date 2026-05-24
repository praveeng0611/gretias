import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Gretias — IT & Industry Consulting',
  description: 'Strategic consulting for Automotive, Auto Ancillary, and niche IT advisory. Gretias helps businesses navigate complexity with clarity.',
  metadataBase: new URL('https://gretias.gnosisolabs.com'),
  openGraph: {
    title: 'Gretias — IT & Industry Consulting',
    description: 'Automotive, Auto Ancillary & IT Advisory consulting.',
    url: 'https://gretias.gnosisolabs.com',
    siteName: 'Gretias',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
