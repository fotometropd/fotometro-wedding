'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

export function HeroSection() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  })

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"])
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0])

  return (
    <section ref={ref} className="relative h-[100dvh] min-h-[600px] flex items-center justify-center overflow-hidden bg-obsidian">

      {/* Background Image — PRIORITY: loads immediately, affects LCP */}
      <motion.div style={{ y }} className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=2069&auto=format&fit=crop"
          alt="Luksuzna fotografija vjenčanja — Mladenka i mladoženja"
          fill
          priority
          quality={95}
          sizes="100vw"
          className="object-cover object-center motion-safe:animate-slow-zoom"
        />
      </motion.div>

      {/* Refined gradient overlays for maximum text legibility and luxury feel */}
      <div className="absolute inset-0 z-1 bg-obsidian/30" />
      <div className="absolute inset-0 z-1 bg-gradient-to-b from-obsidian/60 via-obsidian/20 to-obsidian/80" />

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
          <span className="block italic">Vjenčanja koja</span>
          <span className="block mt-2 text-gold-light">traju zauvijek</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          className="font-body text-white/90 text-base sm:text-lg md:text-xl max-w-2xl mx-auto mb-10 sm:mb-12 font-light leading-relaxed drop-shadow-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          Ekskluzivna fotografija, cineastično filmovanje i snimanje dronom.
          Više od 20 godina umjetnosti čuvanja vaših najljepših uspomena.
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
