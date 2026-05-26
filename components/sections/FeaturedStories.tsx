'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ScrollReveal } from '@/components/ui/ScrollReveal'

const stories = [
  {
    id: 1,
    title: 'Vjenčanje na moru',
    location: 'Hvar, Hrvatska',
    image: '/images/gallery/fotometro-wedding-100.jpg',
    aspectRatio: 'aspect-[3/4]',
    marginTop: 'mt-0'
  },
  {
    id: 2,
    title: 'Planinska idila',
    location: 'Jahorina, BiH',
    image: '/images/gallery/fotometro-wedding-101.jpg',
    aspectRatio: 'aspect-[4/5]',
    marginTop: 'md:mt-32'
  },
  {
    id: 3,
    title: 'Jezero Como',
    location: 'Villa del Balbianello, Italija',
    image: '/images/gallery/fotometro-wedding-102.jpg',
    aspectRatio: 'aspect-[4/5]',
    marginTop: 'mt-0 md:-mt-16'
  },
  {
    id: 4,
    title: 'Urbano vjenčanje',
    location: 'Beograd, Srbija',
    image: '/images/gallery/fotometro-wedding-103.jpg',
    aspectRatio: 'aspect-[3/4]',
    marginTop: 'md:mt-16'
  }
]

export function FeaturedStories() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-[1200px] mx-auto px-6 sm:px-12">
        <div className="grid md:grid-cols-2 gap-x-16 gap-y-24">
          {stories.map((story, index) => (
            <ScrollReveal key={story.id} delay={index % 2 === 0 ? 0 : 0.2}>
              <Link href="/galerija" className={`group block ${story.marginTop}`}>
                <div className={`relative w-full ${story.aspectRatio} overflow-hidden mb-6 bg-[#f7f7f7]`}>
                  <Image
                    src={story.image}
                    alt={story.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition-transform duration-1000 group-hover:scale-[1.03]"
                  />
                  {/* Subtle hover overlay */}
                  <div className="absolute inset-0 bg-white/0 group-hover:bg-white/10 transition-colors duration-500" />
                </div>
                
                <div className="text-center space-y-2">
                  <h3 className="font-heading text-2xl text-[#111111] font-light">{story.title}</h3>
                  <p className="font-body text-[10px] tracking-[0.2em] uppercase text-[#777777]">
                    {story.location}
                  </p>
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>
        
        <div className="mt-32 text-center">
          <Link href="/galerija" className="inline-block border-b border-[#111111] pb-1 font-body text-xs tracking-[0.2em] uppercase text-[#111111] hover:text-[#777777] hover:border-[#777777] transition-colors">
            Pogledajte sve priče
          </Link>
        </div>
      </div>
    </section>
  )
}
