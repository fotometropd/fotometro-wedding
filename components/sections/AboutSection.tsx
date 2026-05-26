'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { AnimatedCounter } from '@/components/ui/AnimatedCounter'

const stats = [
  { number: 20, suffix: '+', label: 'Godina iskustva' },
  { number: 500, suffix: '+', label: 'Vjenčanja zabilježena' },
  { number: 50, suffix: 'k+', label: 'Fotografija isporučeno' },
  { number: 100, suffix: '%', label: 'Zadovoljnih klijenata' },
]

export function AboutSection() {
  return (
    <section id="o-meni" className="py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* Left: Image with decorative elements */}
          <ScrollReveal direction="left">
            <div className="relative">
              {/* Decorative gold border offset */}
              <div className="absolute -top-4 -left-4 w-full h-full border border-gold/30 pointer-events-none z-0" />

              {/* Main photographer portrait */}
              <div className="relative z-10 overflow-hidden">
                <Image
                  src="/images/gallery/fotometro-wedding-105.jpg"
                  alt="Svadbeni fotograf Prijedor, Bosna i Hercegovina — Fotometro Wedding"
                  width={600}
                  height={750}
                  quality={90}
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="w-full h-auto object-cover"
                />
              </div>

              {/* Small accent image overlapping */}
              <div className="absolute -bottom-8 -right-8 w-48 h-48 overflow-hidden shadow-xl z-20 hidden lg:block">
                <Image
                  src="/images/gallery/fotometro-wedding-110.jpg"
                  alt="Snimanje vjenčanja dronom Bosna i Hercegovina"
                  width={200}
                  height={200}
                  quality={80}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </ScrollReveal>

          {/* Right: Text content */}
          <ScrollReveal direction="right" delay={0.2}>
            <div className="space-y-6">

              <p className="text-eyebrow">O meni</p>

              <h2 className="font-heading font-light text-obsidian" style={{ fontSize: 'clamp(32px, 4vw, 52px)', lineHeight: '1.1' }}>
                Više od dvije decenije<br />
                <em>čuvamo vaše uspomene</em>
              </h2>

              <div className="w-12 h-px bg-gold my-6" />

              <p className="font-body text-charcoal/80 text-lg leading-relaxed">
                Fotometro je studio koji je izrastao iz iskrene ljubavi prema fotografiji i video produkciji. Sa bazom u <strong>Prijedoru</strong>, više od 20 godina provodimo bilježeći vjenčanja širom <strong>Bosne i Hercegovine</strong> i <strong>Evrope</strong>. Za nas, svako vjenčanje je prilika da sačuvamo neponovljive trenutke — suzu radosnicu, iskren osmijeh i poglede koji govore više od riječi.
              </p>

              <p className="font-body text-charcoal/80 leading-relaxed">
                Bilo da planirate vjenčanje u Banjoj Luci, Sarajevu, na primorju ili bilo kojoj evropskoj destinaciji, mi smo tu. Kombinujemo klasičnu fotografiju, vrhunsko filmsko snimanje i najmoderniju tehnologiju snimanja dronom (DJI Avata), kako bismo vam pružili kompletnu vizualnu priču vašeg posebnog dana.
              </p>

              {/* Services mini-list */}
              <ul className="space-y-3 pt-2">
                {[
                  'Profesionalna fotografija vjenčanja',
                  'Filmsko snimanje vjenčanja',
                  'Snimanje dronom — DJI Avata',
                  'Portretna i engagement fotografija',
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 font-body text-charcoal text-sm">
                    <span className="w-4 h-px bg-gold flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>

              <div className="pt-4">
                <a
                  href="/o-meni"
                  className="inline-flex items-center gap-3 font-body text-sm tracking-widest uppercase text-obsidian hover:text-gold transition-colors duration-300 group"
                >
                  <span>Saznajte više o meni</span>
                  <span className="w-8 h-px bg-current transition-all group-hover:w-16" />
                </a>
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mt-24 pt-16 border-t border-silk">
          {stats.map((stat, index) => (
            <ScrollReveal key={stat.label} delay={index * 0.1}>
              <div className="text-center">
                <div className="font-heading font-light text-obsidian mb-1" style={{ fontSize: 'clamp(40px, 5vw, 64px)' }}>
                  <AnimatedCounter end={stat.number} suffix={stat.suffix} />
                </div>
                <p className="font-body text-stone text-sm tracking-wider uppercase">{stat.label}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
