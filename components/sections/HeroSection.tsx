'use client'

import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'

const MOBILE_IMAGES = [
  '/images/gallery/fotometrowedding (49).jpg',
  '/images/gallery/fotometrowedding (48).jpg',
  '/images/gallery/fotometrowedding (87).jpg',
  '/images/gallery/fotometrowedding (12).jpg',
  '/images/gallery/fotometrowedding (77).jpg',
]

const DESKTOP_IMAGES = [
  '/images/gallery/fotometrowedding (88).jpg',
  '/images/gallery/fotometrowedding (7).jpg',
  '/images/gallery/fotometrowedding (80).jpg',
  '/images/gallery/fotometrowedding (9).jpg',
  '/images/gallery/fotometrowedding (39).jpg',
]

export function HeroSection() {
  const [mobileIndex, setMobileIndex] = useState(0)
  const [desktopIndex, setDesktopIndex] = useState(0)

  useEffect(() => {
    // We run two separate interval timers so they fade independently
    const mobileTimer = setInterval(() => {
      setMobileIndex((prev) => (prev + 1) % MOBILE_IMAGES.length)
    }, 5000)

    const desktopTimer = setInterval(() => {
      setDesktopIndex((prev) => (prev + 1) % DESKTOP_IMAGES.length)
    }, 5000)

    return () => {
      clearInterval(mobileTimer)
      clearInterval(desktopTimer)
    }
  }, [])

  return (
    <section className="relative w-full h-[100dvh] overflow-hidden bg-obsidian">

      {/* MOBILE SLIDER (Only visible on small screens) */}
      <div className="absolute inset-0 z-0 md:hidden block">
        <AnimatePresence initial={false}>
          <motion.div
            key={mobileIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 2, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            <Image
              src={MOBILE_IMAGES[mobileIndex]}
              alt="Fotometro Wedding Mobile Hero"
              fill
              priority
              quality={100}
              className="object-cover object-center"
              sizes="100vw"
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* DESKTOP SLIDER (Only visible on medium screens and larger) */}
      <div className="absolute inset-0 z-0 hidden md:block">
        <AnimatePresence initial={false}>
          <motion.div
            key={desktopIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 2, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            <Image
              src={DESKTOP_IMAGES[desktopIndex]}
              alt="Fotometro Wedding Desktop Hero"
              fill
              priority
              quality={100}
              className="object-cover object-[center_35%]"
              sizes="100vw"
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Subtle top gradient ONLY so the white navbar text is legible on light images */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-black/40 to-transparent z-10 pointer-events-none" />
    </section>
  )
}
