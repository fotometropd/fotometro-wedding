import { HeroSection } from '@/components/sections/HeroSection'
import { IntroSection } from '@/components/sections/IntroSection'
import { FeaturedStories } from '@/components/sections/FeaturedStories'
import { AboutMinimalSection } from '@/components/sections/AboutMinimalSection'

export default function Home() {
  return (
    <>
      <HeroSection />
      <IntroSection />
      <FeaturedStories />
      <AboutMinimalSection />
    </>
  )
}
