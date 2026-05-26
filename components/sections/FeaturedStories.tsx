'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ScrollReveal } from '@/components/ui/ScrollReveal'

const stories = [
  {
    id: 1,
    title: '',
    location: '',
    image: '/images/gallery/001.jpg',
    aspectRatio: 'aspect-[3/4]',
    marginTop: 'mt-0'
  },
  {
    id: 2,
    title: '',
    location: '',
    image: '/images/gallery/001_1.jpg',
    aspectRatio: 'aspect-[4/5]',
    marginTop: 'md:mt-32'
  },
  {
    id: 3,
    title: '',
    location: '',
    image: '/images/gallery/002.jpg',
    aspectRatio: 'aspect-[3/4]',
    marginTop: 'mt-0 md:-mt-16'
  },
  {
    id: 4,
    title: '',
    location: '',
    image: '/images/gallery/002_1.jpg',
    aspectRatio: 'aspect-[4/5]',
    marginTop: 'md:mt-32'
  },
  {
    id: 5,
    title: '',
    location: '',
    image: '/images/gallery/003.jpg',
    aspectRatio: 'aspect-[3/4]',
    marginTop: 'mt-0 md:-mt-16'
  },
  {
    id: 6,
    title: '',
    location: '',
    image: '/images/gallery/003_1.jpg',
    aspectRatio: 'aspect-[4/5]',
    marginTop: 'md:mt-32'
  },
  {
    id: 7,
    title: '',
    location: '',
    image: '/images/gallery/004.jpg',
    aspectRatio: 'aspect-[3/4]',
    marginTop: 'mt-0 md:-mt-16'
  },
  {
    id: 8,
    title: '',
    location: '',
    image: '/images/gallery/005.jpg',
    aspectRatio: 'aspect-[4/5]',
    marginTop: 'md:mt-32'
  },
  {
    id: 9,
    title: '',
    location: '',
    image: '/images/gallery/006.jpg',
    aspectRatio: 'aspect-[3/4]',
    marginTop: 'mt-0 md:-mt-16'
  },
  {
    id: 10,
    title: '',
    location: '',
    image: '/images/gallery/007.jpg',
    aspectRatio: 'aspect-[4/5]',
    marginTop: 'md:mt-32'
  },
  {
    id: 11,
    title: '',
    location: '',
    image: '/images/gallery/009.jpg',
    aspectRatio: 'aspect-[3/4]',
    marginTop: 'mt-0 md:-mt-16'
  },
  {
    id: 12,
    title: '',
    location: '',
    image: '/images/gallery/DEJ06268.jpg',
    aspectRatio: 'aspect-[4/5]',
    marginTop: 'md:mt-32'
  },
  {
    id: 13,
    title: '',
    location: '',
    image: '/images/gallery/DEJ06281.jpg',
    aspectRatio: 'aspect-[3/4]',
    marginTop: 'mt-0 md:-mt-16'
  },
  {
    id: 14,
    title: '',
    location: '',
    image: '/images/gallery/DEJ06353.jpg',
    aspectRatio: 'aspect-[4/5]',
    marginTop: 'md:mt-32'
  },
  {
    id: 15,
    title: '',
    location: '',
    image: '/images/gallery/DEJ06358.jpg',
    aspectRatio: 'aspect-[3/4]',
    marginTop: 'mt-0 md:-mt-16'
  },
  {
    id: 16,
    title: '',
    location: '',
    image: '/images/gallery/DEJ06378.jpg',
    aspectRatio: 'aspect-[4/5]',
    marginTop: 'md:mt-32'
  },
  {
    id: 17,
    title: '',
    location: '',
    image: '/images/gallery/DEJ06439.jpg',
    aspectRatio: 'aspect-[3/4]',
    marginTop: 'mt-0 md:-mt-16'
  },
  {
    id: 18,
    title: '',
    location: '',
    image: '/images/gallery/DEJ06472.jpg',
    aspectRatio: 'aspect-[4/5]',
    marginTop: 'md:mt-32'
  },
  {
    id: 19,
    title: '',
    location: '',
    image: '/images/gallery/DEJ06497.jpg',
    aspectRatio: 'aspect-[3/4]',
    marginTop: 'mt-0 md:-mt-16'
  },
  {
    id: 20,
    title: '',
    location: '',
    image: '/images/gallery/DEJ06565.jpg',
    aspectRatio: 'aspect-[4/5]',
    marginTop: 'md:mt-32'
  },
  {
    id: 21,
    title: '',
    location: '',
    image: '/images/gallery/DEJ06599.jpg',
    aspectRatio: 'aspect-[3/4]',
    marginTop: 'mt-0 md:-mt-16'
  },
  {
    id: 22,
    title: '',
    location: '',
    image: '/images/gallery/DEJ06645.jpg',
    aspectRatio: 'aspect-[4/5]',
    marginTop: 'md:mt-32'
  },
  {
    id: 23,
    title: '',
    location: '',
    image: '/images/gallery/DEJ06690.jpg',
    aspectRatio: 'aspect-[3/4]',
    marginTop: 'mt-0 md:-mt-16'
  },
  {
    id: 24,
    title: '',
    location: '',
    image: '/images/gallery/DEJ06707.jpg',
    aspectRatio: 'aspect-[4/5]',
    marginTop: 'md:mt-32'
  },
  {
    id: 25,
    title: '',
    location: '',
    image: '/images/gallery/DEJ06730.jpg',
    aspectRatio: 'aspect-[3/4]',
    marginTop: 'mt-0 md:-mt-16'
  },
  {
    id: 26,
    title: '',
    location: '',
    image: '/images/gallery/DEJ06744.jpg',
    aspectRatio: 'aspect-[4/5]',
    marginTop: 'md:mt-32'
  },
  {
    id: 27,
    title: '',
    location: '',
    image: '/images/gallery/DEJ06751.jpg',
    aspectRatio: 'aspect-[3/4]',
    marginTop: 'mt-0 md:-mt-16'
  },
  {
    id: 28,
    title: '',
    location: '',
    image: '/images/gallery/DEJ06781.jpg',
    aspectRatio: 'aspect-[4/5]',
    marginTop: 'md:mt-32'
  },
  {
    id: 29,
    title: '',
    location: '',
    image: '/images/gallery/DEJ06786.jpg',
    aspectRatio: 'aspect-[3/4]',
    marginTop: 'mt-0 md:-mt-16'
  },
  {
    id: 30,
    title: '',
    location: '',
    image: '/images/gallery/DEJ06812.jpg',
    aspectRatio: 'aspect-[4/5]',
    marginTop: 'md:mt-32'
  },
  {
    id: 31,
    title: '',
    location: '',
    image: '/images/gallery/DEJ07001.jpg',
    aspectRatio: 'aspect-[3/4]',
    marginTop: 'mt-0 md:-mt-16'
  },
  {
    id: 32,
    title: '',
    location: '',
    image: '/images/gallery/DEJ07010.jpg',
    aspectRatio: 'aspect-[4/5]',
    marginTop: 'md:mt-32'
  },
  {
    id: 33,
    title: '',
    location: '',
    image: '/images/gallery/DEJ07011.jpg',
    aspectRatio: 'aspect-[3/4]',
    marginTop: 'mt-0 md:-mt-16'
  },
  {
    id: 34,
    title: '',
    location: '',
    image: '/images/gallery/DEJ07020.jpg',
    aspectRatio: 'aspect-[4/5]',
    marginTop: 'md:mt-32'
  },
  {
    id: 35,
    title: '',
    location: '',
    image: '/images/gallery/DEJ07022.jpg',
    aspectRatio: 'aspect-[3/4]',
    marginTop: 'mt-0 md:-mt-16'
  },
  {
    id: 36,
    title: '',
    location: '',
    image: '/images/gallery/DEJ07023.jpg',
    aspectRatio: 'aspect-[4/5]',
    marginTop: 'md:mt-32'
  },
  {
    id: 37,
    title: '',
    location: '',
    image: '/images/gallery/DEJ07556.jpg',
    aspectRatio: 'aspect-[3/4]',
    marginTop: 'mt-0 md:-mt-16'
  },
  {
    id: 38,
    title: '',
    location: '',
    image: '/images/gallery/DEJ07585.jpg',
    aspectRatio: 'aspect-[4/5]',
    marginTop: 'md:mt-32'
  },
  {
    id: 39,
    title: '',
    location: '',
    image: '/images/gallery/DEJ07687.jpg',
    aspectRatio: 'aspect-[3/4]',
    marginTop: 'mt-0 md:-mt-16'
  },
  {
    id: 40,
    title: '',
    location: '',
    image: '/images/gallery/DEJ09460.jpg',
    aspectRatio: 'aspect-[4/5]',
    marginTop: 'md:mt-32'
  },
  {
    id: 41,
    title: '',
    location: '',
    image: '/images/gallery/DEJ09462.jpg',
    aspectRatio: 'aspect-[3/4]',
    marginTop: 'mt-0 md:-mt-16'
  },
]

export function FeaturedStories() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-[1200px] mx-auto px-6 sm:px-12">
        <div className="grid md:grid-cols-2 gap-x-16 gap-y-24">
          {stories.map((story, index) => (
            <ScrollReveal key={story.id} delay={index % 2 === 0 ? 0 : 0.2}>
              <div className={`group block ${story.marginTop}`}>
                <div className={`relative w-full ${story.aspectRatio} overflow-hidden mb-6 bg-[#f7f7f7]`}>
                  <Image
                    src={story.image}
                    alt={"Fotometro Wedding"}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition-transform duration-1000 group-hover:scale-[1.03]"
                  />
                  <div className="absolute inset-0 bg-white/0 group-hover:bg-white/10 transition-colors duration-500" />
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
