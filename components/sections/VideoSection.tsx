'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { ScrollReveal } from '@/components/ui/ScrollReveal'

// Replace with real YouTube video ID
const YOUTUBE_VIDEO_ID = 'YOUR_YOUTUBE_VIDEO_ID'

export function VideoSection() {
  const [isLoaded, setIsLoaded] = useState(false)
  
  return (
    <section className="py-24 bg-obsidian overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-8">
        
        <ScrollReveal>
          <div className="text-center mb-12">
            <p className="text-eyebrow mb-4">Showreel</p>
            <h2 className="font-heading font-light italic text-cream" style={{ fontSize: 'clamp(32px, 5vw, 60px)' }}>
              Osjetite magiju našeg rada
            </h2>
            <p className="font-body text-cream/60 mt-4 max-w-lg mx-auto">
              Kratki isječak koji prikazuje našu viziju i stil — emotivno, cineastično, vječno.
            </p>
          </div>
        </ScrollReveal>
        
        {/* Video facade — thumbnail shown first, iframe loads on click */}
        <ScrollReveal delay={0.2}>
          <div className="relative aspect-video bg-charcoal cursor-pointer group overflow-hidden"
            onClick={() => setIsLoaded(true)}
          >
            {!isLoaded ? (
              <>
                {/* Thumbnail - loads instantly with next/image */}
                <Image
                  src={`https://img.youtube.com/vi/${YOUTUBE_VIDEO_ID}/maxresdefault.jpg`}
                  alt="Fotometro Wedding — showreel vjenčanja"
                  fill
                  loading="lazy"
                  quality={85}
                  sizes="(max-width: 1280px) 100vw, 1024px"
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-obsidian/40 group-hover:bg-obsidian/30 transition-colors duration-500" />
                
                {/* Play button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div
                    className="w-20 h-20 rounded-full border-2 border-white/80 flex items-center justify-center backdrop-blur-sm bg-white/10"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="white">
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                  </motion.div>
                </div>
              </>
            ) : (
              // Actual YouTube iframe — only loads after user click
              <iframe
                src={`https://www.youtube.com/embed/${YOUTUBE_VIDEO_ID}?autoplay=1&rel=0&modestbranding=1`}
                title="Fotometro Wedding Showreel"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 w-full h-full"
                loading="lazy"
              />
            )}
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
