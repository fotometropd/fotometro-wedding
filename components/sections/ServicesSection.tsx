'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { SectionHeading } from '@/components/ui/SectionHeading'

const services = [
  {
    id: 'fotografisanje',
    eyebrow: '01',
    title: 'Fotografija vjenčanja',
    description: 'Svaki pogled, svaka suza, svaki zagrljaj — uhvaćeni u savršenom trenutku. Fotografije koje ćete čuvati generacijama.',
    href: '/usluge/fotografisanje',
    imageSrc: '/images/services/photography.jpg',
    imageAlt: 'Profesionalna fotografija vjenčanja',
  },
  {
    id: 'snimanje',
    eyebrow: '02',
    title: 'Video produkcija vjenčanja',
    description: 'Vrhunsko filmsko snimanje koje priča vašu jedinstvenu priču. Dostupni smo za vjenčanja u cijeloj BiH i širom Evrope.',
    href: '/usluge/snimanje',
    imageSrc: '/images/services/videography.jpg',
    imageAlt: 'Video produkcija vjenčanja Prijedor',
  },
  {
    id: 'dron',
    eyebrow: '03',
    title: 'Snimanje dronom',
    description: 'Spektakularne perspektive iz zraka pomoću DJI Avata drona. Najljepši predjeli Bosne i Hercegovine ili Evrope viđeni iz nebeskog ugla.',
    href: '/usluge/dron',
    imageSrc: '/images/services/drone.jpg',
    imageAlt: 'Snimanje vjenčanja dronom Bosna',
  },
]

export function ServicesSection() {
  return (
    <section id="usluge" className="py-24 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">

        <ScrollReveal>
          <SectionHeading
            eyebrow="Naše usluge"
            title="Kompletan doživljaj vašeg vjenčanja"
            subtitle="Od prvog kadra do finalne isporuke — sve što vam treba na jednom mjestu"
          />
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-8 mt-16">
          {services.map((service, index) => (
            <ScrollReveal key={service.id} delay={index * 0.15}>
              <Link href={service.href} className="group block">
                <div className="relative overflow-hidden aspect-[3/4] mb-6">
                  <Image
                    src={service.imageSrc}
                    alt={service.imageAlt}
                    fill
                    loading="lazy"
                    quality={85}
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    placeholder="blur"
                    blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAA..."
                  />
                  <div className="absolute inset-0 bg-obsidian/20 group-hover:bg-obsidian/10 transition-colors duration-500" />

                  {/* Number overlay */}
                  <div className="absolute top-6 left-6">
                    <span className="font-heading text-white/30 font-light" style={{ fontSize: '80px', lineHeight: 1 }}>
                      {service.eyebrow}
                    </span>
                  </div>
                </div>

                <div className="space-y-3">
                  <h3 className="font-heading font-light text-obsidian text-2xl group-hover:text-gold transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="font-body text-stone text-sm leading-relaxed">
                    {service.description}
                  </p>
                  <div className="flex items-center gap-2 font-body text-xs tracking-widest uppercase text-gold">
                    <span>Saznajte više</span>
                    <span className="w-6 h-px bg-gold group-hover:w-10 transition-all duration-300" />
                  </div>
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
