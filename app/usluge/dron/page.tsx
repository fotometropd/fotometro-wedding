import { Metadata } from 'next'
import Image from 'next/image'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { ContactSection } from '@/components/sections/ContactSection'

export const metadata: Metadata = {
  title: 'Snimanje Vjenčanja Dronom | DJI Avata FPV',
  description: 'Podignite vaše vjenčanje na viši nivo. Koristimo najnoviji FPV dron DJI Avata za spektakularne, dinamične kadrove iz zraka koje niko drugi ne može snimiti.',
}

export default function DroneServicePage() {
  return (
    <>
      <section className="relative pt-40 pb-20 lg:pt-48 lg:pb-32 bg-obsidian overflow-hidden">
        {/* Background - solid obsidian for premium look */}
        <div className="absolute inset-0 z-0 bg-obsidian" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            {/* Text content */}
            <div className="text-white space-y-8">
              <ScrollReveal>
                <p className="text-eyebrow text-gold">DJI Avata Snimanje Dronom</p>
                <h1 className="font-heading font-medium leading-[1.1] mb-6 mt-4" style={{ fontSize: 'clamp(40px, 6vw, 72px)' }}>
                  Vaš dan iz <span className="italic text-gold-light">nebeske perspektive</span>
                </h1>
                <div className="w-16 h-px bg-gold/50 my-8" />
                <p className="font-body text-cream/80 text-lg leading-relaxed">
                  Konvencionalno snimanje dronom je prošlost. Za naše mladence obezbijedili smo 
                  vrhunski **DJI Avata FPV dron** koji omogućava snimanje kadrova od kojih zastaje dah.
                </p>
                <p className="font-body text-cream/80 text-lg leading-relaxed mt-4">
                  Zamislite dinamičan prolaz dronom pravo kroz vrata crkve, proletanje tik iznad vas dok plešete prvi ples, 
                  ili epski kadar vašeg poljupca dok dron kruži oko vas velikom brzinom. FPV tehnologija daje nam 
                  slobodu da letimo kroz uske prostore, provlačimo se kroz masu na bezbjedan način (dron ima ugrađenu zaštitu) i napravimo snimke koji podsjećaju na video igricu.
                </p>
              </ScrollReveal>

              <ScrollReveal delay={0.2}>
                <div className="pt-8 border-t border-white/10 mt-8">
                  <h3 className="font-heading text-2xl text-white mb-6">Zašto izabrati DJI Avata FPV snimanje?</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-4">
                      <span className="text-gold mt-1">✦</span>
                      <div>
                        <strong className="block font-body text-white mb-1">Kinematografski (FPV) letovi unutar sale</strong>
                        <span className="font-body text-cream/60 text-sm">Zahvaljujući prop-guard zaštiti, dron je potpuno bezbjedan za letenje u zatvorenom prostoru, između gostiju i iznad plesnog podijuma.</span>
                      </div>
                    </li>
                    <li className="flex items-start gap-4">
                      <span className="text-gold mt-1">✦</span>
                      <div>
                        <strong className="block font-body text-white mb-1">Spektakularni pejzaži i "Chasing" kadrovi</strong>
                        <span className="font-body text-cream/60 text-sm">Pratimo vaš automobil u pokretu pri visokim brzinama iz uglova koji se koriste u profesionalnim holivudskim potjerama.</span>
                      </div>
                    </li>
                    <li className="flex items-start gap-4">
                      <span className="text-gold mt-1">✦</span>
                      <div>
                        <strong className="block font-body text-white mb-1">Nova dimenzija vašeg Highlight videa</strong>
                        <span className="font-body text-cream/60 text-sm">Ovi dinamični kadrovi iz zraka daju nevjerovatnu energiju i ritam vašem finalnom svadbenom videu. To je onaj wow efekat!</span>
                      </div>
                    </li>
                  </ul>
                </div>
              </ScrollReveal>
            </div>

            {/* Images */}
            <ScrollReveal direction="right" delay={0.3}>
              <div className="relative aspect-[3/4] w-full max-w-md mx-auto lg:max-w-none">
                <Image
                  src="/images/gallery/fotometro-wedding-145.jpg"
                  alt="DJI Dron snimanje iz zraka"
                  fill
                  className="object-cover rounded-sm shadow-2xl"
                />
              </div>
            </ScrollReveal>
            
          </div>
        </div>
      </section>

      {/* Call to Action via Contact Form */}
      <ContactSection />
    </>
  )
}
