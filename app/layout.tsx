import { Cormorant_Garamond, DM_Sans } from 'next/font/google'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { JsonLd } from '@/components/seo/JsonLd'
import './globals.css'
import type { Metadata } from 'next'

// Configure Fonts
const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
  display: 'swap',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-dm-sans',
  display: 'swap',
})

// Global Metadata
export const metadata: Metadata = {
  metadataBase: new URL('https://fotometrowedding.com'),
  title: {
    template: '%s | Fotometro Wedding',
    default: 'Fotometro Wedding | Moderna Fotografija i Snimanje Vjenčanja Prijedor',
  },
  description: 'Vrhunska fotografija, filmsko snimanje i snimanje dronom. Više od 20 godina iskustva u bilježenju vaših najljepših uspomena u Prijedoru, širom Bosne i Hercegovine i Evrope.',
  keywords: [
    'snimanje vjenčanja Prijedor',
    'fotograf za svadbe Prijedor',
    'fotografisanje vjenčanja BiH',
    'wedding videographer Bosnia',
    'svadbeni fotograf Banja Luka',
    'snimanje dronom vjenčanja BiH',
    'destination wedding photographer Europe',
    'filmsko snimanje svadbi'
  ],
  authors: [{ name: 'Fotometro' }],
  creator: 'Fotometro',
  publisher: 'Fotometro Wedding',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: 'Fotometro Wedding | Moderna Fotografija i Snimanje Vjenčanja',
    description: 'Najbolji fotograf i snimatelj za vjenčanja u Prijedoru i Bosni i Hercegovini. Profesionalna video produkcija i snimanje dronom za klijente širom Evrope.',
    url: 'https://fotometrowedding.com',
    siteName: 'Fotometro Wedding',
    images: [
      {
        url: '/images/og-image.jpg', // Add this later
        width: 1200,
        height: 630,
        alt: 'Fotometro Wedding Portfolio',
      },
    ],
    locale: 'sr_BA',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code', // Replace
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="sr" className={`${cormorant.variable} ${dmSans.variable} scroll-smooth`}>
      <head>
        <JsonLd />
      </head>
      <body className="antialiased min-h-screen flex flex-col bg-cream text-obsidian font-body selection:bg-gold selection:text-obsidian">
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
