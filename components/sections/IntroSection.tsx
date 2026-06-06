'use client'

import { motion, useInView, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'

export function IntroSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-10%" })

  return (
    <section ref={ref} id="intro" className="relative w-full min-h-[100dvh] md:h-[100vh] py-24 md:py-0 flex items-center justify-center overflow-hidden bg-obsidian">

      {/* Background Image (Static for performance) */}
      <motion.div className="absolute inset-0 w-full h-full z-0">
        {/* Desktop Image */}
        <Image
          src="/images/gallery/fotometrowedding (65).jpg"
          alt="Fotografišemo vaše najljepše trenutke"
          fill
          priority
          quality={100}
          className="object-cover object-center opacity-40 hidden md:block"
          sizes="100vw"
        />
        
        {/* Mobile Image */}
        <Image
          src="/images/gallery/fotometrowedding (77).jpg"
          alt="Fotografišemo vaše najljepše trenutke"
          fill
          priority
          quality={100}
          className="object-cover object-center opacity-40 md:hidden block"
          sizes="100vw"
        />
      </motion.div>

      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 sm:px-12 flex flex-col justify-center h-full text-white pt-0 md:pt-20">

        {/* 2026 Cinematic Split Layout */}
        <div className="flex flex-col w-full">

          {/* Top Line: Fotografišemo */}
          <div className="flex justify-start overflow-hidden pb-6 md:pb-10">
            <motion.h1
              className="font-heading font-light tracking-tight leading-[0.9] drop-shadow-2xl"
              style={{ fontSize: 'clamp(46px, 12vw, 150px)' }}
              initial={{ y: "100%" }}
              animate={isInView ? { y: 0 } : { y: "100%" }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            >
              Fotografišemo
            </motion.h1>
          </div>

          {/* Animated Divider */}
          <motion.div
            className="w-full h-[1px] bg-white/20"
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            style={{ originX: 0 }}
          />

          {/* Bottom Grid */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-start pt-12 md:pt-16 gap-8 md:gap-12">

            {/* Location block - Left */}
            <motion.div
              className="flex flex-col gap-4 order-2 md:order-1"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
            >
              <p className="font-body text-[9px] tracking-[0.4em] uppercase text-white/70 leading-loose drop-shadow-md">
                Est. Prijedor<br />
                Bosna i Hercegovina
              </p>
            </motion.div>

            {/* The rest of the phrase - Right */}
            <div className="overflow-hidden order-1 md:order-2 w-full text-right">
              <motion.h2
                className="font-heading font-light leading-[1.05] drop-shadow-2xl"
                style={{ fontSize: 'clamp(38px, 10vw, 120px)' }}
                initial={{ y: "-100%" }}
                animate={isInView ? { y: 0 } : { y: "-100%" }}
                transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
              >
                vaše <span className="italic text-white/70">najljepše</span><br />
                trenutke.
              </motion.h2>
            </div>

          </div>
        </div>

      </div>
    </section>
  )
}
