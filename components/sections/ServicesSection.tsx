'use client'

import { ScrollReveal } from '@/components/ui/ScrollReveal'

const services = [
  {
    id: '01',
    title: 'Fotografija Vjenčanja',
    description: 'Dokumentujemo vaš najvažniji dan sa fokusom na iskrene emocije, prirodnu svjetlost i bezvremensku estetiku. Kao vodeći svadbeni fotografi u Prijedoru i širom Balkana, stvaramo vizuelno naslijeđe koje traje zauvijek. Naš stil je nenametljiv, elegantan i potpuno posvećen vama.',
    keywords: 'Svadbeni fotograf Prijedor, fotografisanje vjenčanja BiH, destination wedding photographer'
  },
  {
    id: '02',
    title: 'Filmska Video Produkcija',
    description: 'Filmski pristup snimanju vjenčanja koji bilježi atmosferu, suze radosnice i svaki osmijeh. Koristimo najsavremeniju kino-opremu kako bismo vašu priču ispričali kroz pokretnu sliku, stvarajući luksuzni svadbeni film dostojan kino dvorane.',
    keywords: 'Snimanje svadbi, wedding videographer Bosnia, filmsko snimanje vjenčanja'
  },
  {
    id: '03',
    title: 'Snimanje Dronom (DJI Avata)',
    description: 'Podignite vašu priču na viši nivo uz spektakularne kadrove iz zraka. Profesionalno aerial snimanje dronom dodaje epsku dimenziju vašem svadbenom filmu, bilježeći grandioznost lokacije i ljepotu prirode.',
    keywords: 'Snimanje dronom vjenčanja, aerial videography, DJI dron svadbe'
  }
]

export function ServicesSection() {
  return (
    <section id="usluge" className="py-32 sm:py-48 bg-white border-t border-stone/10">
      <div className="max-w-[1200px] mx-auto px-6 sm:px-12">
        
        <ScrollReveal>
          <div className="mb-24 md:mb-32">
            <span className="font-body text-[10px] tracking-[0.4em] uppercase text-stone mb-6 block">Ekspertiza</span>
            <h2 className="font-heading font-light text-obsidian text-4xl sm:text-6xl md:text-7xl leading-tight">
              Umjetnost bilježenja<br />
              <span className="italic text-charcoal">vaših uspomena.</span>
            </h2>
          </div>
        </ScrollReveal>

        <div className="flex flex-col border-t border-stone/20">
          {services.map((service, index) => (
            <ScrollReveal key={service.id} delay={index * 0.1}>
              <div className="group flex flex-col md:flex-row md:items-start justify-between py-12 md:py-16 border-b border-stone/20 transition-colors hover:bg-[#fafafa]">
                
                {/* Left: Number & Title */}
                <div className="md:w-1/3 mb-6 md:mb-0 pr-8">
                  <span className="font-body text-xs text-stone mb-4 block">{service.id}</span>
                  <h3 className="font-heading text-2xl md:text-3xl text-obsidian group-hover:text-gold transition-colors duration-500">
                    {service.title}
                  </h3>
                </div>

                {/* Right: Description & SEO Keywords */}
                <div className="md:w-1/2 flex flex-col justify-between">
                  <p className="font-body text-[#555555] leading-loose font-light mb-8">
                    {service.description}
                  </p>
                  
                  {/* Hidden/Subtle Keywords for SEO */}
                  <p className="font-body text-[9px] uppercase tracking-widest text-stone/50">
                    {service.keywords}
                  </p>
                  
                  <div className="mt-8">
                    <a 
                      href="viber://chat?number=%2B38765679112" 
                      className="inline-block border-b border-obsidian pb-1 font-body text-[10px] tracking-[0.2em] uppercase text-obsidian hover:text-stone hover:border-stone transition-all duration-300"
                    >
                      Rezervišite termin
                    </a>
                  </div>
                </div>
                
              </div>
            </ScrollReveal>
          ))}
        </div>

      </div>
    </section>
  )
}
