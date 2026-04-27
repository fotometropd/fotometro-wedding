import { HeroSection } from '@/components/sections/HeroSection'
import { GallerySection } from '@/components/sections/GallerySection'
import { ServicesSection } from '@/components/sections/ServicesSection'
import { AboutSection } from '@/components/sections/AboutSection'
import { VideoSection } from '@/components/sections/VideoSection'
import { ProcessSection } from '@/components/sections/ProcessSection'
import { ContactSection } from '@/components/sections/ContactSection'

export default function Home() {
  return (
    <>
      <HeroSection />
      <GallerySection />
      <AboutSection />
      <ServicesSection />
      <VideoSection />
      <ProcessSection />
      <ContactSection />
    </>
  )
}
