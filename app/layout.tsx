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
  title: {
    template: '%s | Fotometro Wedding',
    default: 'Fotometro Wedding | Ekskluzivna fotografija i videografija vjenčanja',
  },
  description: 'Profesionalna fotografija, cineastično snimanje i snimanje dronom DJI Avata. Više od 20 godina iskustva u bilježenju vaših najljepših uspomena.',
  keywords: ['fotografisanje vjenčanja', 'snimanje vjenčanja', 'wedding photographer', 'BiH', 'Prijedor', 'Banja Luka', 'dron snimanje', 'svadba'],
  authors: [{ name: 'Fotometro' }],
  creator: 'Fotometro',
  publisher: 'Fotometro Wedding',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: 'Fotometro Wedding | Ekskluzivna fotografija',
    description: 'Profesionalna fotografija i videografija vjenčanja sa više od 20 godina iskustva.',
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
