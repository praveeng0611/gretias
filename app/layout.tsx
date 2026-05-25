import type { Metadata } from 'next'
import './globals.css'
import { Providers } from '@/components/Providers'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Gretias — Strategic Consulting & Advisory',
  description: 'Strategic consulting for Automotive, Turnkey Projects, Real Estate, and Plant Setup & Manufacturing Advisory. Clarity in complexity.',
  metadataBase: new URL('https://gretias.gnosisolabs.com'),
  openGraph: {
    title: 'Gretias — Strategic Consulting & Advisory',
    description: 'Automotive Consulting, Turnkey Projects, Real Estate, and Plant Setup & Manufacturing Advisory.',
    url: 'https://gretias.gnosisolabs.com',
    siteName: 'Gretias',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" data-theme="light">
      <body>
        <Providers>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  )
}
