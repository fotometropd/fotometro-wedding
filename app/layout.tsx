import { Cormorant_Garamond, DM_Sans } from 'next/font/google'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { SmoothScroll } from '@/components/ui/SmoothScroll'
import { CustomCursor } from '@/components/ui/CustomCursor'
import { FloatingViberButton } from '@/components/ui/FloatingViberButton'
import { ScrollToTopButton } from '@/components/ui/ScrollToTopButton'
import { JsonLd } from '@/components/seo/JsonLd'
import './globals.css'
import type { Metadata } from 'next'

// Configure Fonts
const cormorant = Cormorant_Garamond({
  subsets: ['latin', 'latin-ext'],
  weight: ['300', '400', '500', '600'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
  display: 'swap',
})

const dmSans = DM_Sans({
  subsets: ['latin', 'latin-ext'],
  weight: ['400', '500'],
  variable: '--font-dm-sans',
  display: 'swap',
})

// Global Metadata
export const metadata: Metadata = {
  metadataBase: new URL('https://fotometrowedding.com'),
  title: {
    template: '%s | Fotometro Wedding',
    default: 'Fotometro | Fotografisanje vjenčanja',
  },
  description: 'Fotometro iz Prijedora pruža vrhunsku, luksuznu fotografiju i video produkciju za vjenčanja širom Balkana (BiH, Srbija, Hrvatska). Filmsko snimanje, dron i bezvremenske uspomene. Rezervišite odmah!',
  keywords: [
    'Fotometro',
    'Fotometro Prijedor',
    'snimanje vjenčanja Prijedor',
    'fotograf za svadbe Prijedor',
    'fotograf za vjenčanja BiH',
    'svadbeni fotograf Banja Luka',
    'fotografisanje vjenčanja Sarajevo',
    'wedding photographer Balkans',
    'video produkcija vjenčanja Srbija',
    'fotograf za svadbe Hrvatska',
    'snimanje dronom vjenčanja',
    'Фотометро Приједор',
    'свадбени фотограф'
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
    title: 'Fotometro | Najbolji Fotograf za Vjenčanja Prijedor, BiH i Balkan',
    description: 'Fotometro iz Prijedora pruža vrhunsku fotografiju i filmsku video produkciju za vjenčanja širom Balkana. Kontaktirajte nas: +38765679112.',
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
    <html lang="sr" className={`${cormorant.variable} ${dmSans.variable}`}>
      <head>
        <JsonLd />
      </head>
      <body className="antialiased min-h-screen flex flex-col bg-white text-[#111111] font-body selection:bg-[#eeeeee] selection:text-[#111111] relative overflow-x-hidden w-full">
        <CustomCursor />
        {/* Subtle Photographic Film Grain */}
        <svg className="pointer-events-none fixed inset-0 z-[9998] h-full w-full opacity-[0.02]" xmlns="http://www.w3.org/2000/svg">
          <filter id="noiseFilter">
            <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" />
          </filter>
          <rect width="100%" height="100%" filter="url(#noiseFilter)" />
        </svg>

        <SmoothScroll>
          <Navbar />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </SmoothScroll>
        <FloatingViberButton />
        <ScrollToTopButton />
      </body>
    </html>
  )
}
