import { Metadata } from 'next'
import { GallerySection } from '@/components/sections/GallerySection'
import { ContactSection } from '@/components/sections/ContactSection'

export const metadata: Metadata = {
  title: 'Galerija | Fotometro Wedding',
  description: 'Pregledajte našu galeriju vjenčanih fotografija. Zabilježeni najljepši trenuci sa vjenčanja iz Prijedora, Banja Luke i cijele BiH.',
}

export default function GalerijaPage() {
  return (
    <div className="pt-24 min-h-screen bg-cream">
      
      {/* Header */}
      <div className="text-center py-16 px-4">
        <p className="text-eyebrow text-gold mb-4">Portfolio</p>
        <h1 className="font-heading font-light text-obsidian text-5xl md:text-7xl mb-6">
          Naša Galerija
        </h1>
        <p className="font-body text-stone max-w-2xl mx-auto">
          Zaronite u svijet najiskrenijih emocija. Ispod možete filtrirati fotografije po kategorijama.
        </p>
      </div>

      {/* Reuse the gallery component from homepage */}
      <div className="-mt-16">
        <GallerySection />
      </div>
      
      {/* Contact CTA */}
      <ContactSection />
    </div>
  )
}
