import { Metadata } from 'next'
import { ContactSection } from '@/components/sections/ContactSection'

export const metadata: Metadata = {
  title: 'Kontakt | Fotometro Wedding',
  description: 'Kontaktirajte nas za rezervaciju vašeg termina za fotografisanje i filmovanje vjenčanja.',
}

export default function KontaktPage() {
  return (
    <div className="pt-24 min-h-screen bg-obsidian">
      
      <div className="text-center py-16 px-4">
        <h1 className="font-heading font-light text-cream text-5xl md:text-7xl mb-6">
          Radujemo se <span className="text-gold">vašoj priči</span>
        </h1>
      </div>

      {/* Reuse the Contact component */}
      <div className="-mt-24">
        <ContactSection />
      </div>
      
    </div>
  )
}
