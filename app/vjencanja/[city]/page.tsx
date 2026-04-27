import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { cities } from '@/lib/cities-data'
import { HeroSection } from '@/components/sections/HeroSection'
import { GallerySection } from '@/components/sections/GallerySection'
import { ServicesSection } from '@/components/sections/ServicesSection'
import { ContactSection } from '@/components/sections/ContactSection'

interface Props {
  params: {
    city: string
  }
}

// Statically generate a page for every city in our database at build time
export function generateStaticParams() {
  return cities.map((city) => ({
    city: city.slug,
  }))
}

// Dynamically generate SEO metadata for each city
export function generateMetadata({ params }: Props): Metadata {
  const city = cities.find((c) => c.slug === params.city)

  if (!city) {
    return { title: 'Not Found' }
  }

  return {
    title: `Fotograf za Vjenčanja ${city.name} | Najbolje Snimanje i Video Produkcija`,
    description: `Tražite vrhunskog fotografa za vjenčanja u ${city.name}? Fotometro nudi ekskluzivnu fotografiju, filmsko snimanje i snimanje dronom. Rezervišite svoj termin na vrijeme!`,
    keywords: [
      `snimanje vjenčanja ${city.name}`,
      `fotograf za svadbe ${city.name}`,
      `svadbeni fotograf ${city.name}`,
      `video produkcija vjenčanja ${city.name}`,
      `snimanje dronom ${city.name}`,
      `vjenčanje ${city.name}`,
      `najbolji fotograf u ${city.name}`
    ],
    openGraph: {
      title: `Moderna Fotografija i Snimanje Vjenčanja u ${city.name}`,
      description: `Profesionalni fotograf i snimatelj za vjenčanja u ${city.name} (${city.region}). Više od 20 godina iskustva.`,
      url: `https://fotometrowedding.com/vjencanja/${city.slug}`,
    }
  }
}

export default function CityWeddingPage({ params }: Props) {
  const city = cities.find((c) => c.slug === params.city)

  if (!city) {
    notFound()
  }

  // Create localized Schema.org specifically for this city
  const localSchema = {
    '@context': 'https://schema.org',
    '@type': ['LocalBusiness', 'Photographer'],
    '@id': `https://fotometrowedding.com/vjencanja/${city.slug}/#business`,
    name: `Fotometro Wedding - ${city.name}`,
    description: `Moderna fotografija, filmsko snimanje i snimanje dronom za vjenčanja u ${city.locative}, ${city.region}.`,
    url: `https://fotometrowedding.com/vjencanja/${city.slug}`,
    telephone: '+38765679112',
    email: 'fotomeropd@gmail.com',
    areaServed: {
      '@type': 'City',
      name: city.name,
    },
    address: {
      '@type': 'PostalAddress',
      addressLocality: city.name,
      addressRegion: city.region,
      addressCountry: 'BA',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: city.lat,
      longitude: city.lng,
    },
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localSchema) }}
      />

      <HeroSection
        cityTitle={
          <>
            <span className="block italic">Vjenčanja u {city.locative}</span>
            <span className="block mt-2 text-gold-light">koja traju zauvijek</span>
          </>
        }
        citySubtitle={
          <>
            Tražite savršenog fotografa i snimatelja u <strong>{city.locative}</strong>?
            Moderna fotografija, filmsko snimanje i snimanje dronom.
            Više od 20 godina čuvamo najljepše uspomene širom regije.
          </>
        }
      />
      <GallerySection />
      <ServicesSection />
      <ContactSection />
    </>
  )
}
