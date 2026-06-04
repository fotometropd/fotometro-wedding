'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

export function LocalizedIntro({ cityName, shortName }: { cityName: string, shortName: string }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-10%" })

  return (
    <section id="usluge" className="py-32 sm:py-48 bg-white overflow-hidden border-b border-stone/10">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-12" ref={ref}>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-16 md:gap-8">
          
          {/* Main Huge Text */}
          <h1 className="font-heading font-light text-obsidian leading-[1.05]" style={{ fontSize: 'clamp(48px, 8vw, 110px)' }}>
            <span className="block overflow-hidden pb-2">
              <motion.span 
                className="block"
                initial={{ y: "100%" }}
                animate={isInView ? { y: 0 } : { y: "100%" }}
                transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              >
                Vjenčanja u
              </motion.span>
            </span>
            <span className="block overflow-hidden pb-2 md:ml-32 ml-12">
              <motion.span 
                className="block italic text-stone"
                initial={{ y: "100%" }}
                animate={isInView ? { y: 0 } : { y: "100%" }}
                transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
              >
                {cityName}
              </motion.span>
            </span>
            <span className="block overflow-hidden pb-2">
              <motion.span 
                className="block"
                initial={{ y: "100%" }}
                animate={isInView ? { y: 0 } : { y: "100%" }}
                transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
              >
                i okolini.
              </motion.span>
            </span>
          </h1>

          {/* Location Text */}
          <motion.div 
            className="md:pb-6 flex flex-col gap-6"
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
            transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
          >
            <div className="w-12 h-[1px] bg-stone/40 hidden md:block" />
            <p className="font-body text-[9px] tracking-[0.4em] uppercase text-charcoal leading-loose">
              Dostupni u<br />
              {shortName}
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
