'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { testimonials } from '@/lib/testimonials-data'

export function TestimonialsSection() {
  const [active, setActive] = useState(0)
  
  return (
    <section className="py-24 bg-linen">
      <div className="max-w-4xl mx-auto px-4 sm:px-8">
        
        <ScrollReveal>
          <SectionHeading
            eyebrow="Utisci klijenata"
            title="Šta kažu mladenci"
            centered
          />
        </ScrollReveal>
        
        {/* Main testimonial */}
        <div className="mt-16 relative">
          {/* Decorative quote mark */}
          <div className="absolute -top-8 left-0 font-heading text-gold/20 font-light leading-none select-none" style={{ fontSize: '160px' }}>
            &ldquo;
          </div>
          
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="relative z-10"
            >
              <blockquote className="font-heading font-light italic text-obsidian leading-relaxed text-center" style={{ fontSize: 'clamp(20px, 2.5vw, 28px)' }}>
                &ldquo;{testimonials[active].text}&rdquo;
              </blockquote>
              
              <div className="flex flex-col items-center mt-8 gap-2">
                <div className="w-8 h-px bg-gold" />
                <p className="font-body font-medium text-obsidian text-sm">{testimonials[active].name}</p>
                <p className="font-body text-stone text-xs tracking-wider uppercase">{testimonials[active].location} · {testimonials[active].year}</p>
                
                {/* Star rating */}
                <div className="flex gap-1 mt-1">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} width="12" height="12" viewBox="0 0 24 24" fill="#C9A96E">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                    </svg>
                  ))}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
        
        {/* Dots navigation */}
        <div className="flex gap-3 justify-center mt-12">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setActive(index)}
              className={`transition-all duration-300 ${
                index === active
                  ? 'w-8 h-1.5 bg-gold'
                  : 'w-1.5 h-1.5 rounded-full bg-silk hover:bg-stone'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
