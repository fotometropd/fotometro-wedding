import { Metadata } from 'next'
import { HeroSection } from '@/components/sections/HeroSection'
import { FeaturedStories } from '@/components/sections/FeaturedStories'
import { ServicesSection } from '@/components/sections/ServicesSection'
import { AboutMinimalSection } from '@/components/sections/AboutMinimalSection'
import { LocalizedIntro } from '@/components/sections/LocalizedIntro'

// High-value target cities for the Balkans
const targetCities = [
  // Bosnia & Herzegovina
  { slug: 'banja-luka', name: 'Banja Luci', shortName: 'Banja Luka' },
  { slug: 'sarajevo', name: 'Sarajevu', shortName: 'Sarajevo' },
  { slug: 'mostar', name: 'Mostaru', shortName: 'Mostar' },
  { slug: 'tuzla', name: 'Tuzli', shortName: 'Tuzla' },
  { slug: 'prijedor', name: 'Prijedoru', shortName: 'Prijedor' },
  { slug: 'bihac', name: 'Bihaću', shortName: 'Bihać' },
  { slug: 'zenica', name: 'Zenici', shortName: 'Zenica' },
  { slug: 'bijeljina', name: 'Bijeljini', shortName: 'Bijeljina' },
  { slug: 'doboj', name: 'Doboju', shortName: 'Doboj' },
  { slug: 'trebinje', name: 'Trebinju', shortName: 'Trebinje' },
  { slug: 'brcko', name: 'Brčkom', shortName: 'Brčko' },

  // Regional Capitals
  { slug: 'zagreb', name: 'Zagrebu', shortName: 'Zagreb' },
  { slug: 'beograd', name: 'Beogradu', shortName: 'Beograd' },

  // Coastal Croatia (Destination Weddings)
  { slug: 'split', name: 'Splitu', shortName: 'Split' },
  { slug: 'dubrovnik', name: 'Dubrovniku', shortName: 'Dubrovnik' },
  { slug: 'zadar', name: 'Zadru', shortName: 'Zadar' },
  { slug: 'sibenik', name: 'Šibeniku', shortName: 'Šibenik' },
  { slug: 'makarska', name: 'Makarskoj', shortName: 'Makarska' },
  { slug: 'rovinj', name: 'Rovinju', shortName: 'Rovinj' },
  { slug: 'opatija', name: 'Opatiji', shortName: 'Opatija' },
]

type Params = Promise<{ city: string }>

export async function generateStaticParams() {
  return targetCities.map((city) => ({
    city: city.slug,
  }))
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const resolvedParams = await params
  const citySlug = resolvedParams.city

  const cityObj = targetCities.find(c => c.slug === citySlug) || { name: citySlug.replace('-', ' '), shortName: citySlug.replace('-', ' ') }
  const cityName = cityObj.name

  return {
    title: `Svadbeni Fotograf i Snimanje Vjenčanja u ${cityName} | Fotometro`,
    description: `Luksuzno fotografisanje i filmsko snimanje vjenčanja u ${cityName}. Najljepša vjenčanja zabilježena za vječnost. Rezervišite vaš termin.`,
    alternates: {
      canonical: `https://fotometrowedding.com/vjencanja/${citySlug}`
    }
  }
}

export default async function CityLandingPage({ params }: { params: Params }) {
  const resolvedParams = await params
  const citySlug = resolvedParams.city

  const cityObj = targetCities.find(c => c.slug === citySlug) || { name: citySlug.replace('-', ' '), shortName: citySlug.replace('-', ' ') }

  return (
    <>
      <HeroSection />
      <LocalizedIntro cityName={cityObj.name} shortName={cityObj.shortName} />
      <ServicesSection />
      <FeaturedStories />
      <AboutMinimalSection />
    </>
  )
}
