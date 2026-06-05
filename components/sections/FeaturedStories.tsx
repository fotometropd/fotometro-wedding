'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { useRef, useState, useEffect } from 'react'
import { useScroll, useTransform, AnimatePresence } from 'framer-motion'
import { createPortal } from 'react-dom'
import { X } from 'lucide-react'

// Define the exact IDs of files that exist in the gallery folder, statically shuffled for a mixed layout
const availableImageIds = [29, 54, 24, 34, 16, 65, 36, 12, 41, 72, 42, 7, 3, 80, 66, 74, 58, 69, 78, 63, 45, 55, 89, 61, 48, 21, 47, 31, 81, 79, 85, 10, 38, 88, 26, 86, 15, 73, 77, 76, 71, 56, 5, 75, 70, 11, 39, 2, 53, 52, 62, 17, 22, 67, 4, 23, 49, 60, 14, 8, 57, 59, 1, 9, 30, 13, 68, 64, 87, 6]

// Define the landscape IDs based on actual file dimensions
const landscapeIds = new Set([3, 4, 6, 7, 8, 9, 10, 14, 15, 17, 21, 22, 23, 31, 39, 41, 42, 55, 56, 57, 58, 63, 65, 68, 69, 70, 72, 76, 79, 80, 88])

const stories = availableImageIds.map((id, index) => {
  const isLandscape = landscapeIds.has(id);
  
  let aspectRatio = isLandscape ? 'aspect-[3/2]' : (index % 2 === 0 ? 'aspect-[4/5]' : 'aspect-[3/4]');

  return {
    id,
    title: '',
    location: '',
    image: `/images/gallery/fotometrowedding (${id}).jpg`,
    aspectRatio
  }
})

function ParallaxImage({ story, onClick }: { story: any, onClick: () => void }) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start']
  })
  
  const y = useTransform(scrollYProgress, [0, 1], ['-10%', '10%'])

  return (
    <div 
      className={`group block interactive mb-8 break-inside-avoid cursor-pointer`}
      onClick={onClick}
    >
      <div 
        ref={ref}
        className={`relative w-full ${story.aspectRatio} overflow-hidden bg-[#f7f7f7]`}
      >
        <motion.div style={{ y }} className="absolute inset-[-20%] w-[140%] h-[140%]">
          <Image
            src={story.image}
            alt="Svadbeni fotograf Prijedor Bosna"
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

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedImage(null)
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

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
        <div className="columns-1 sm:columns-2 md:columns-3 gap-8">
          {stories.map((story) => (
            <ScrollReveal key={story.id}>
              <ParallaxImage story={story} onClick={() => setSelectedImage(story.image)} />
            </ScrollReveal>
          ))}
        </div>
      </div>

      {typeof window !== 'undefined' && createPortal(
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
        </AnimatePresence>,
        document.body
      )}
    </section>
  )
}
