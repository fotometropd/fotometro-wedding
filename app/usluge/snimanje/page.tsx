import { Metadata } from 'next'
import Image from 'next/image'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { ContactSection } from '@/components/sections/ContactSection'

export const metadata: Metadata = {
  title: 'Filmsko Snimanje i Video Produkcija Vjenčanja',
  description: 'Vrhunska video produkcija vašeg vjenčanja. Kinematografski kadrovi, vrhunski zvuk i profesionalna montaža. Pretvaramo vaš dan u holivudski film.',
}

export default function VideoServicePage() {
  return (
    <>
      <section className="relative pt-40 pb-20 lg:pt-48 lg:pb-32 bg-obsidian overflow-hidden">
        {/* Background - solid obsidian for premium look */}
        <div className="absolute inset-0 z-0 bg-obsidian" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* Text content */}
            <div className="text-white space-y-8 lg:order-2">
              <ScrollReveal>
                <p className="text-eyebrow text-gold">Video Produkcija</p>
                <h1 className="font-heading font-medium leading-[1.1] mb-6 mt-4" style={{ fontSize: 'clamp(40px, 6vw, 72px)' }}>
                  Kino doživljaj <span className="italic text-gold-light">vašeg dana</span>
                </h1>
                <div className="w-16 h-px bg-gold/50 my-8" />
                <p className="font-body text-cream/80 text-lg leading-relaxed">
                  Zaboravite na dugačke, monotone i dosadne snimke svadbi kakvi su se radili nekada.
                  Mi kreiramo dinamičan, emotivan i vizualno spektakularan video koji ćete sa ponosom puštati iznova i iznova.
                </p>
                <p className="font-body text-cream/80 text-lg leading-relaxed mt-4">
                  Koristimo najsavremeniju filmsku opremu, stabilizatore i posebnu pažnju posvećujemo dizajnu zvuka —
                  jer bez savršenog zvuka vaših zavjeta i govora, video nije potpun.
                </p>
              </ScrollReveal>

              <ScrollReveal delay={0.2}>
                <div className="pt-8 border-t border-white/10 mt-8">
                  <h3 className="font-heading text-2xl text-white mb-6">Šta dobijate kroz video produkciju?</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-4">
                      <span className="text-gold mt-1">✦</span>
                      <div>
                        <strong className="block font-body text-white mb-1">Cinematic Highlight Trailer (3-5 min)</strong>
                        <span className="font-body text-cream/60 text-sm">Eksplozivan, kratki video spot savršen za dijeljenje na društvenim mrežama, montiran u ritmu muzike.</span>
                      </div>
                    </li>
                    <li className="flex items-start gap-4">
                      <span className="text-gold mt-1">✦</span>
                      <div>
                        <strong className="block font-body text-white mb-1">Dokumentarni Film Vjenčanja</strong>
                        <span className="font-body text-cream/60 text-sm">Duža verzija filma koja hronološki i emotivno obuhvata sve najvažnije trenutke vašeg dana u filmskoj boji.</span>
                      </div>
                    </li>
                    <li className="flex items-start gap-4">
                      <span className="text-gold mt-1">✦</span>
                      <div>
                        <strong className="block font-body text-white mb-1">Kristalno čist zvuk (Audio Design)</strong>
                        <span className="font-body text-cream/60 text-sm">Postavljamo nevidljive mikrofone (bubice) mladoženji i snimamo direktan izlaz sa miksete benda za vrhunski kvalitet zvuka.</span>
                      </div>
                    </li>
                  </ul>
                </div>
              </ScrollReveal>
            </div>

            {/* Images */}
            <ScrollReveal direction="left" delay={0.3}>
              <div className="relative aspect-[3/4] w-full max-w-md mx-auto lg:max-w-none lg:order-1">
                <Image
                  src="/images/gallery/fotometro-wedding-140.jpg"
                  alt="Filmsko snimanje vjenčanja kamerom"
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
