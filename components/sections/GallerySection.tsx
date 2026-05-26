'use client'

import { useState, useCallback } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { galleryImages } from '@/lib/gallery-data'
import { Lightbox } from '@/components/ui/Lightbox'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { SectionHeading } from '@/components/ui/SectionHeading'
import type { GalleryImage } from '@/types'

export function GallerySection({ limit }: { limit?: number } = {}) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)
  
  const displayImages = limit ? galleryImages.slice(0, limit) : galleryImages
  
  const openLightbox = useCallback((index: number) => {
    setLightboxIndex(index)
  }, [])
  
  const closeLightbox = useCallback(() => {
    setLightboxIndex(null)
  }, [])
  
  return (
    <section id="galerija" className="py-32 bg-white">
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-8">
        
        <ScrollReveal>
          <SectionHeading
            eyebrow="Naša galerija"
            title="Svaki kadar — jedna priča"
            subtitle="Odabir naših najljepših trenutaka sa vjenčanja koja smo imali čast zabilježiti"
          />
        </ScrollReveal>
        

        {/* Masonry Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 space-y-4 mt-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
          >
            {displayImages.map((image, index) => (
              <GalleryItem
                key={image.id}
                image={image}
                index={index}
                onClick={() => openLightbox(index)}
                isPriority={index < 6}  // First 6 images load immediately
              />
            ))}
          </motion.div>
        </AnimatePresence>
        
        {/* View All Link - only show if limit is set */}
        {limit && galleryImages.length > limit && (
          <div className="text-center mt-16">
            <a
              href="/galerija"
              className="inline-flex items-center gap-4 px-10 py-4 bg-transparent border border-stone/30 text-charcoal font-body text-[10px] tracking-[0.2em] uppercase hover:border-charcoal transition-all duration-500"
            >
              <span>Pogledajte kompletnu galeriju</span>
            </a>
          </div>
        )}
      </div>
      
      {/* Lightbox */}
      {lightboxIndex !== null && (
        <Lightbox
          images={displayImages}
          initialIndex={lightboxIndex}
          onClose={closeLightbox}
        />
      )}
    </section>
  )
}

// Individual gallery item component
function GalleryItem({
  image,
  index,
  onClick,
  isPriority,
}: {
  image: GalleryImage
  index: number
  onClick: () => void
  isPriority: boolean
}) {
  return (
    <motion.div
      className="break-inside-avoid mb-4 relative group cursor-pointer overflow-hidden"
      style={{ aspectRatio: image.aspectRatio || 'auto' }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, delay: Math.min(index * 0.05, 0.3) }}
      onClick={onClick}
      whileHover={{ scale: 1.005 }}
    >
      <div className="relative w-full overflow-hidden">
        <Image
          src={image.src}
          alt={image.alt}
          width={image.width}
          height={image.height}
          priority={isPriority}
          loading={isPriority ? 'eager' : 'lazy'}
          quality={85}
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
          className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
        />
        
        {/* Hover overlay */}
        <div className="absolute inset-0 bg-white/0 group-hover:bg-white/20 transition-all duration-500 flex items-center justify-center">
          <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="w-12 h-12 border border-white/80 flex items-center justify-center">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5">
                <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7"/>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
