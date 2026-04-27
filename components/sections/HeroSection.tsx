'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'
import { AnimatePresence } from 'framer-motion'

const HERO_IMAGES = [
  '/images/gallery/fotometro-wedding-100.jpg',
  '/images/gallery/fotometro-wedding-120.jpg',
  '/images/gallery/fotometro-wedding-140.jpg',
]

interface HeroSectionProps {
  cityTitle?: React.ReactNode
  citySubtitle?: React.ReactNode
}

export function HeroSection({ cityTitle, citySubtitle }: HeroSectionProps = {}) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const ref = useRef(null)
  
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % HERO_IMAGES.length)
    }, 5000) // Change image every 5 seconds
    return () => clearInterval(timer)
  }, [])

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  })

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"])
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0])

  return (
    <section ref={ref} className="relative h-[100dvh] min-h-[600px] flex items-center justify-center overflow-hidden bg-obsidian">

      {/* Background Slideshow */}
      <motion.div style={{ y }} className="absolute inset-0 z-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            <Image
              src={HERO_IMAGES[currentIndex]}
              alt="Ekskluzivni svadbeni fotograf i snimatelj"
              fill
              priority
              quality={95}
              sizes="100vw"
              className="object-cover object-center motion-safe:animate-slow-zoom"
            />
          </motion.div>
        </AnimatePresence>
      </motion.div>

      {/* Refined gradient overlays for maximum text legibility and luxury feel */}
      <div className="absolute inset-0 z-1 bg-obsidian/40" />
      <div className="absolute inset-0 z-1 bg-gradient-to-b from-obsidian/80 via-transparent to-obsidian/90" />
      {/* Subtle radial overlay directly behind the text for extra pop */}
      <div className="absolute inset-0 z-1 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-obsidian/50 via-transparent to-transparent" />

      {/* Content */}
      <motion.div
        style={{ opacity }}
        className="relative z-10 text-center text-white px-4 sm:px-6 w-full max-w-7xl mx-auto flex flex-col items-center"
      >

        {/* Eyebrow */}
        <motion.div
          className="flex items-center gap-4 mb-6 sm:mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="hidden sm:block h-px w-12 bg-gold/50" />
          <p className="text-eyebrow text-gold tracking-[0.3em] sm:tracking-[0.4em] text-[10px] sm:text-xs font-semibold">
            FOTOMETRO WEDDING
          </p>
          <div className="hidden sm:block h-px w-12 bg-gold/50" />
        </motion.div>

        {/* Main Headline (SEO optimized h1) */}
        <motion.h1
          className="font-heading font-medium text-white leading-[1.05] mb-6 tracking-wide drop-shadow-sm"
          style={{ fontSize: 'clamp(42px, 8vw, 110px)' }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.0, delay: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          {cityTitle ? cityTitle : (
            <>
              <span className="block italic">Mi čuvamo</span>
              <span className="block mt-2 text-gold-light">vaše uspomene</span>
            </>
          )}
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          className="font-body text-white/90 text-base sm:text-lg md:text-xl max-w-3xl mx-auto mb-10 sm:mb-12 font-light leading-relaxed drop-shadow-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          {citySubtitle ? citySubtitle : (
            <>
              Moderna fotografija, filmsko snimanje i snimanje dronom.
              Više od 20 godina stvaramo najljepše uspomene u <strong className="font-medium text-white">Prijedoru</strong>, širom <strong className="font-medium text-white">Bosne i Hercegovine</strong> i <strong className="font-medium text-white">Evrope</strong>.
            </>
          )}
        </motion.p>

        {/* CTAs */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 sm:gap-6 w-full sm:w-auto justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0 }}
        >
          <Link
            href="/galerija"
            className="w-full sm:w-auto px-8 py-4 sm:px-12 sm:py-5 bg-gold text-obsidian font-body font-medium text-xs sm:text-sm tracking-[0.2em] uppercase hover:bg-white hover:text-obsidian transition-all duration-500 text-center shadow-lg shadow-gold/20"
            aria-label="Pregledajte galeriju vjenčanja"
          >
            Pregledajte galeriju
          </Link>
          <Link
            href="/kontakt"
            className="w-full sm:w-auto px-8 py-4 sm:px-12 sm:py-5 border border-white/40 text-white font-body font-medium text-xs sm:text-sm tracking-[0.2em] uppercase hover:bg-white hover:text-obsidian hover:border-white transition-all duration-500 text-center backdrop-blur-sm"
            aria-label="Kontaktirajte nas za rezervaciju"
          >
            Rezervišite termin
          </Link>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-6 sm:bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-3"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
      >
        <span className="text-white/40 font-body text-[10px] tracking-[0.3em] uppercase">Istražite</span>
        <motion.div
          className="w-px h-12 sm:h-16 bg-gradient-to-b from-white/50 to-transparent"
          animate={{ scaleY: [1, 0.4, 1], opacity: [0.8, 0.2, 0.8] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>
    </section>
  )
}
