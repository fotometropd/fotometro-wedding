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
    image: '/images/gallery/fotometrowedding (1).jpg',
    aspectRatio: 'aspect-[3/4]',
    marginTop: 'mt-0'
  },
  {
    id: 2,
    title: '',
    location: '',
    image: '/images/gallery/fotometrowedding (2).jpg',
    aspectRatio: 'aspect-[4/5]',
    marginTop: 'md:mt-32'
  },
  {
    id: 3,
    title: '',
    location: '',
    image: '/images/gallery/fotometrowedding (3).jpg',
    aspectRatio: 'aspect-[3/4]',
    marginTop: 'mt-0 md:-mt-16'
  },
  {
    id: 4,
    title: '',
    location: '',
    image: '/images/gallery/fotometrowedding (4).jpg',
    aspectRatio: 'aspect-[4/5]',
    marginTop: 'md:mt-32'
  },
  {
    id: 5,
    title: '',
    location: '',
    image: '/images/gallery/fotometrowedding (5).jpg',
    aspectRatio: 'aspect-[3/4]',
    marginTop: 'mt-0 md:-mt-16'
  },
  {
    id: 6,
    title: '',
    location: '',
    image: '/images/gallery/fotometrowedding (6).jpg',
    aspectRatio: 'aspect-[4/5]',
    marginTop: 'md:mt-32'
  },
  {
    id: 7,
    title: '',
    location: '',
    image: '/images/gallery/fotometrowedding (7).jpg',
    aspectRatio: 'aspect-[3/4]',
    marginTop: 'mt-0 md:-mt-16'
  },
  {
    id: 8,
    title: '',
    location: '',
    image: '/images/gallery/fotometrowedding (8).jpg',
    aspectRatio: 'aspect-[4/5]',
    marginTop: 'md:mt-32'
  },
  {
    id: 9,
    title: '',
    location: '',
    image: '/images/gallery/fotometrowedding (9).jpg',
    aspectRatio: 'aspect-[3/4]',
    marginTop: 'mt-0 md:-mt-16'
  },
  {
    id: 10,
    title: '',
    location: '',
    image: '/images/gallery/fotometrowedding (10).jpg',
    aspectRatio: 'aspect-[4/5]',
    marginTop: 'md:mt-32'
  },
  {
    id: 11,
    title: '',
    location: '',
    image: '/images/gallery/fotometrowedding (11).jpg',
    aspectRatio: 'aspect-[3/4]',
    marginTop: 'mt-0 md:-mt-16'
  },
  {
    id: 12,
    title: '',
    location: '',
    image: '/images/gallery/fotometrowedding (12).jpg',
    aspectRatio: 'aspect-[4/5]',
    marginTop: 'md:mt-32'
  },
  {
    id: 13,
    title: '',
    location: '',
    image: '/images/gallery/fotometrowedding (13).jpg',
    aspectRatio: 'aspect-[3/4]',
    marginTop: 'mt-0 md:-mt-16'
  },
  {
    id: 14,
    title: '',
    location: '',
    image: '/images/gallery/fotometrowedding (14).jpg',
    aspectRatio: 'aspect-[4/5]',
    marginTop: 'md:mt-32'
  },
  {
    id: 15,
    title: '',
    location: '',
    image: '/images/gallery/fotometrowedding (15).jpg',
    aspectRatio: 'aspect-[3/4]',
    marginTop: 'mt-0 md:-mt-16'
  },
  {
    id: 16,
    title: '',
    location: '',
    image: '/images/gallery/fotometrowedding (16).jpg',
    aspectRatio: 'aspect-[4/5]',
    marginTop: 'md:mt-32'
  },
  {
    id: 17,
    title: '',
    location: '',
    image: '/images/gallery/fotometrowedding (17).jpg',
    aspectRatio: 'aspect-[3/4]',
    marginTop: 'mt-0 md:-mt-16'
  },
  {
    id: 18,
    title: '',
    location: '',
    image: '/images/gallery/fotometrowedding (18).jpg',
    aspectRatio: 'aspect-[4/5]',
    marginTop: 'md:mt-32'
  },
  {
    id: 19,
    title: '',
    location: '',
    image: '/images/gallery/fotometrowedding (19).jpg',
    aspectRatio: 'aspect-[3/4]',
    marginTop: 'mt-0 md:-mt-16'
  },
  {
    id: 20,
    title: '',
    location: '',
    image: '/images/gallery/fotometrowedding (20).jpg',
    aspectRatio: 'aspect-[4/5]',
    marginTop: 'md:mt-32'
  },
  {
    id: 21,
    title: '',
    location: '',
    image: '/images/gallery/fotometrowedding (21).jpg',
    aspectRatio: 'aspect-[3/4]',
    marginTop: 'mt-0 md:-mt-16'
  },
  {
    id: 22,
    title: '',
    location: '',
    image: '/images/gallery/fotometrowedding (22).jpg',
    aspectRatio: 'aspect-[4/5]',
    marginTop: 'md:mt-32'
  },
  {
    id: 23,
    title: '',
    location: '',
    image: '/images/gallery/fotometrowedding (23).jpg',
    aspectRatio: 'aspect-[3/4]',
    marginTop: 'mt-0 md:-mt-16'
  },
  {
    id: 24,
    title: '',
    location: '',
    image: '/images/gallery/fotometrowedding (24).jpg',
    aspectRatio: 'aspect-[4/5]',
    marginTop: 'md:mt-32'
  },
  {
    id: 25,
    title: '',
    location: '',
    image: '/images/gallery/fotometrowedding (25).jpg',
    aspectRatio: 'aspect-[3/4]',
    marginTop: 'mt-0 md:-mt-16'
  },
  {
    id: 26,
    title: '',
    location: '',
    image: '/images/gallery/fotometrowedding (26).jpg',
    aspectRatio: 'aspect-[4/5]',
    marginTop: 'md:mt-32'
  },
  {
    id: 27,
    title: '',
    location: '',
    image: '/images/gallery/fotometrowedding (27).jpg',
    aspectRatio: 'aspect-[3/4]',
    marginTop: 'mt-0 md:-mt-16'
  },
  {
    id: 28,
    title: '',
    location: '',
    image: '/images/gallery/fotometrowedding (28).jpg',
    aspectRatio: 'aspect-[4/5]',
    marginTop: 'md:mt-32'
  },
  {
    id: 29,
    title: '',
    location: '',
    image: '/images/gallery/fotometrowedding (29).jpg',
    aspectRatio: 'aspect-[3/4]',
    marginTop: 'mt-0 md:-mt-16'
  },
  {
    id: 30,
    title: '',
    location: '',
    image: '/images/gallery/fotometrowedding (30).jpg',
    aspectRatio: 'aspect-[4/5]',
    marginTop: 'md:mt-32'
  },
  {
    id: 31,
    title: '',
    location: '',
    image: '/images/gallery/fotometrowedding (31).jpg',
    aspectRatio: 'aspect-[3/4]',
    marginTop: 'mt-0 md:-mt-16'
  },
  {
    id: 32,
    title: '',
    location: '',
    image: '/images/gallery/fotometrowedding (32).jpg',
    aspectRatio: 'aspect-[4/5]',
    marginTop: 'md:mt-32'
  },
  {
    id: 33,
    title: '',
    location: '',
    image: '/images/gallery/fotometrowedding (33).jpg',
    aspectRatio: 'aspect-[3/4]',
    marginTop: 'mt-0 md:-mt-16'
  },
  {
    id: 34,
    title: '',
    location: '',
    image: '/images/gallery/fotometrowedding (34).jpg',
    aspectRatio: 'aspect-[4/5]',
    marginTop: 'md:mt-32'
  },
  {
    id: 35,
    title: '',
    location: '',
    image: '/images/gallery/fotometrowedding (35).jpg',
    aspectRatio: 'aspect-[3/4]',
    marginTop: 'mt-0 md:-mt-16'
  },
  {
    id: 36,
    title: '',
    location: '',
    image: '/images/gallery/fotometrowedding (36).jpg',
    aspectRatio: 'aspect-[4/5]',
    marginTop: 'md:mt-32'
  },
  {
    id: 37,
    title: '',
    location: '',
    image: '/images/gallery/fotometrowedding (37).jpg',
    aspectRatio: 'aspect-[3/4]',
    marginTop: 'mt-0 md:-mt-16'
  },
  {
    id: 38,
    title: '',
    location: '',
    image: '/images/gallery/fotometrowedding (38).jpg',
    aspectRatio: 'aspect-[4/5]',
    marginTop: 'md:mt-32'
  },
  {
    id: 39,
    title: '',
    location: '',
    image: '/images/gallery/fotometrowedding (39).jpg',
    aspectRatio: 'aspect-[3/4]',
    marginTop: 'mt-0 md:-mt-16'
  },
  {
    id: 40,
    title: '',
    location: '',
    image: '/images/gallery/fotometrowedding (40).jpg',
    aspectRatio: 'aspect-[4/5]',
    marginTop: 'md:mt-32'
  },
  {
    id: 41,
    title: '',
    location: '',
    image: '/images/gallery/fotometrowedding (41).jpg',
    aspectRatio: 'aspect-[3/4]',
    marginTop: 'mt-0 md:-mt-16'
  },
]

import { useRef, useState, useEffect } from 'react'
import { useScroll, useTransform, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'

function ParallaxImage({ story, onClick }: { story: any, onClick: () => void }) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start']
  })
  
  // The image translates slightly slower than the scroll speed for a 3D effect
  const y = useTransform(scrollYProgress, [0, 1], ['-10%', '10%'])

  return (
    <div 
      className="group block interactive mb-8 break-inside-avoid cursor-pointer"
      onClick={onClick}
    >
      <div 
        ref={ref}
        className={`relative w-full ${story.aspectRatio || 'aspect-[3/4]'} overflow-hidden bg-[#f7f7f7]`}
      >
        <motion.div style={{ y }} className="absolute inset-[-20%] w-[140%] h-[140%]">
          <Image
            src={story.image}
            alt={story.title || "Svadbeni fotograf Prijedor Bosna"}
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            className="object-cover transition-transform duration-1000 group-hover:scale-[1.03]"
          />
        </motion.div>
        <div className="absolute inset-0 bg-white/0 group-hover:bg-white/10 transition-colors duration-500" />
      </div>
    </div>
  )
}

export function FeaturedStories() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  // Close lightbox on escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedImage(null)
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  // Lock body scroll when lightbox is open
  useEffect(() => {
    if (selectedImage) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [selectedImage])

  return (
    <section id="galerija" className="py-24 bg-white relative">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-12">
        <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-8">
          {stories.map((story, index) => (
            <ScrollReveal key={story.id} delay={index % 3 === 0 ? 0 : index % 3 === 1 ? 0.15 : 0.3}>
              <ParallaxImage story={story} onClick={() => setSelectedImage(story.image)} />
            </ScrollReveal>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="fixed inset-0 z-[10000] flex items-center justify-center bg-black/95 backdrop-blur-xl cursor-zoom-out"
            onClick={() => setSelectedImage(null)}
          >
            <button 
              className="absolute top-6 right-6 md:top-10 md:right-10 z-[10001] text-white/50 hover:text-white transition-colors p-4 mix-blend-difference"
              onClick={(e) => {
                e.stopPropagation()
                setSelectedImage(null)
              }}
            >
              <X className="w-8 h-8" strokeWidth={1} />
            </button>
            
            <motion.div 
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
              className="relative w-full h-full max-w-[90vw] max-h-[90vh] flex items-center justify-center"
            >
              <Image
                src={selectedImage}
                alt="Fotometro Wedding Fullscreen"
                fill
                unoptimized={true}
                className="object-contain"
                sizes="100vw"
                priority
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
