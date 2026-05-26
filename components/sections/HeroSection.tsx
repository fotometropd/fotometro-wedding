'use client'

import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'

const HERO_IMAGES = [
  '/images/gallery/fotometro-wedding-100.jpg',
  '/images/gallery/fotometro-wedding-120.jpg',
  '/images/gallery/fotometro-wedding-140.jpg',
]

export function HeroSection() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % HERO_IMAGES.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section className="relative w-full h-[100dvh] overflow-hidden bg-white">
      {/* Pure Fullscreen Image Slider - Identical to Egle Berruti */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence initial={false}>
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 2, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            <Image
              src={HERO_IMAGES[currentIndex]}
              alt="Fotometro Wedding"
              fill
              priority
              quality={100}
              className="object-cover object-center"
              sizes="100vw"
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Subtle top gradient ONLY so the white navbar text is legible on light images */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-black/20 to-transparent z-10 pointer-events-none" />
    </section>
  )
}
