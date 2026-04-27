import { Metadata } from 'next'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { ContactSection } from '@/components/sections/ContactSection'

export const metadata: Metadata = {
  title: 'Ekskluzivna Fotografija Vjenčanja',
  description: 'Profesionalna i umjetnička fotografija vjenčanja. Od predsvadbenog (engagement) sessiona do luksuznih Wedding Book-ova. Rezervišite vaš termin.',
}

export default function PhotographyServicePage() {
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
                <p className="text-eyebrow text-gold">Fotografija Vjenčanja</p>
                <h1 className="font-heading font-medium leading-[1.1] mb-6 mt-4" style={{ fontSize: 'clamp(40px, 6vw, 72px)' }}>
                  Vaša priča ispričana <span className="italic text-gold-light">kroz objektiv</span>
                </h1>
                <div className="w-16 h-px bg-gold/50 my-8" />
                <p className="font-body text-cream/80 text-lg leading-relaxed">
                  Naš pristup fotografiji nije puko bilježenje događaja. Mi hvatamo emocije.
                  Trudimo se biti potpuno neprimjetni kako bismo zabilježili one najiskrenije, 
                  spontane trenutke — suzu u oku oca, tajni pogled mladenaca i eksploziju radosti na podijumu.
                </p>
                <p className="font-body text-cream/80 text-lg leading-relaxed mt-4">
                  Više od 20 godina iskustva naučilo nas je da svako vjenčanje ima svoj jedinstven ritam. 
                  Naš cilj je da taj ritam zauvijek sačuvamo u bezvremenskim fotografijama visoke rezolucije.
                </p>
              </ScrollReveal>

              <ScrollReveal delay={0.2}>
                <div className="pt-8 border-t border-white/10 mt-8">
                  <h3 className="font-heading text-2xl text-white mb-6">Šta izdvaja našu ponudu?</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-4">
                      <span className="text-gold mt-1">✦</span>
                      <div>
                        <strong className="block font-body text-white mb-1">Predsvadbeni (Engagement) Session</strong>
                        <span className="font-body text-cream/60 text-sm">Opušteno fotografisanje prije vjenčanja kako bismo se upoznali i razbili tremu pred kamerom.</span>
                      </div>
                    </li>
                    <li className="flex items-start gap-4">
                      <span className="text-gold mt-1">✦</span>
                      <div>
                        <strong className="block font-body text-white mb-1">Luksuzni Wedding Book</strong>
                        <span className="font-body text-cream/60 text-sm">Premium, ručno uvezani albumi sa visokokvalitetnom štampom koji će se prenositi generacijama.</span>
                      </div>
                    </li>
                    <li className="flex items-start gap-4">
                      <span className="text-gold mt-1">✦</span>
                      <div>
                        <strong className="block font-body text-white mb-1">Obrada na najvišem nivou</strong>
                        <span className="font-body text-cream/60 text-sm">Svaka isporučena fotografija prolazi kroz detaljnu kolor-korekciju u našem prepoznatljivom stilu.</span>
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
                  src="/images/gallery/fotometro-wedding-130.jpg"
                  alt="Luksuzni Wedding Book i prelijepa mlada"
                  fill
                  className="object-cover rounded-sm shadow-2xl"
                />
                <div className="absolute -bottom-10 -left-10 w-48 h-48 border-4 border-obsidian hidden sm:block">
                  <Image
                    src="/images/gallery/fotometro-wedding-135.jpg"
                    alt="Spontani osmijeh mladenaca"
                    fill
                    className="object-cover"
                  />
                </div>
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
