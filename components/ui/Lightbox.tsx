'use client'

import { useEffect, useCallback, useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import type { GalleryImage } from '@/types'

interface LightboxProps {
  images: GalleryImage[]
  initialIndex: number
  onClose: () => void
}

export function Lightbox({ images, initialIndex, onClose }: LightboxProps) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex)
  
  const goNext = useCallback(() => setCurrentIndex((i) => (i + 1) % images.length), [images.length])
  const goPrev = useCallback(() => setCurrentIndex((i) => (i - 1 + images.length) % images.length), [images.length])
  
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowRight') goNext()
      if (e.key === 'ArrowLeft') goPrev()
    }
    document.addEventListener('keydown', handleKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', handleKey)
      document.body.style.overflow = ''
    }
  }, [onClose, goNext, goPrev])
  
  const current = images[currentIndex]
  
  return (
    <motion.div
      className="fixed inset-0 z-[100] bg-obsidian/95 backdrop-blur-sm flex items-center justify-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      {/* Close button */}
      <button
        className="absolute top-6 right-6 text-white/60 hover:text-white transition-colors z-10"
        onClick={onClose}
      >
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
          <path d="M18 6L6 18M6 6l12 12"/>
        </svg>
      </button>
      
      {/* Counter */}
      <div className="absolute top-6 left-6 font-body text-white/40 text-sm z-10">
        {currentIndex + 1} / {images.length}
      </div>
      
      {/* Image */}
      <div
        className="relative max-w-7xl max-h-[85vh] w-full h-full flex items-center justify-center px-16"
        onClick={(e) => e.stopPropagation()}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            className="relative max-h-[80vh] w-full flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.3 }}
          >
            <Image
              src={current.src}
              alt={current.alt}
              width={current.width}
              height={current.height}
              quality={90}
              priority
              className="max-h-[80vh] w-auto object-contain"
              sizes="(max-width: 1280px) 90vw, 1200px"
            />
          </motion.div>
        </AnimatePresence>
      </div>
      
      {/* Prev/Next */}
      <button
        className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 border border-white/20 text-white/60 hover:text-white hover:border-white/60 transition-colors flex items-center justify-center"
        onClick={(e) => { e.stopPropagation(); goPrev() }}
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M15 18l-6-6 6-6"/>
        </svg>
      </button>
      <button
        className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 border border-white/20 text-white/60 hover:text-white hover:border-white/60 transition-colors flex items-center justify-center"
        onClick={(e) => { e.stopPropagation(); goNext() }}
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M9 18l6-6-6-6"/>
        </svg>
      </button>
    </motion.div>
  )
}
