'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

export function IntroSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-10%" })

  return (
    <section id="usluge" className="py-20 sm:py-32 md:py-48 bg-white border-b border-stone/10">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-12" ref={ref}>
        
        {/* 2026 Cinematic Split Layout */}
        <div className="flex flex-col w-full">
          
          {/* Top Line: Fotografišemo */}
          <div className="flex justify-start overflow-hidden pb-6">
            <motion.h1 
              className="font-heading font-light text-obsidian tracking-tight leading-[0.9]"
              style={{ fontSize: 'clamp(50px, 8vw, 120px)' }}
              initial={{ y: "100%" }}
              animate={isInView ? { y: 0 } : { y: "100%" }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            >
              Fotografišemo
            </motion.h1>
          </div>

          {/* Animated Divider */}
          <motion.div 
            className="w-full h-[1px] bg-stone/20"
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            style={{ originX: 0 }}
          />

          {/* Bottom Grid */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-start pt-12 md:pt-16 gap-12">
            
            {/* Location block - Left */}
            <motion.div 
              className="flex flex-col gap-4 order-2 md:order-1"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
            >
              <p className="font-body text-[9px] tracking-[0.4em] uppercase text-stone leading-loose">
                Est. Prijedor<br />
                Bosna i Hercegovina
              </p>
            </motion.div>

            {/* The rest of the phrase - Right */}
            <div className="overflow-hidden order-1 md:order-2 w-full">
              <motion.h2 
                className="font-heading font-light text-obsidian text-right leading-[1.05]"
                style={{ fontSize: 'clamp(40px, 6vw, 90px)' }}
                initial={{ y: "-100%" }}
                animate={isInView ? { y: 0 } : { y: "-100%" }}
                transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
              >
                vaše <span className="italic text-stone">najljepše</span><br/>
                trenutke.
              </motion.h2>
            </div>

          </div>

        </div>
      </div>
    </section>
  )
}
