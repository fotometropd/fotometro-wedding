'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { ArrowUp } from 'lucide-react'
import { useState, useEffect } from 'react'

export function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // Show button after scrolling down 500px
      if (window.scrollY > 500) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          onClick={scrollToTop}
          className="md:hidden fixed bottom-6 left-4 z-50 flex items-center justify-center w-12 h-12 bg-white/90 backdrop-blur-sm text-obsidian rounded-full shadow-xl border border-stone/20 hover:bg-white transition-all duration-300"
          initial={{ scale: 0, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0, opacity: 0, y: 20 }}
          transition={{ duration: 0.3 }}
          aria-label="Skroluj na vrh"
        >
          <ArrowUp className="w-5 h-5" strokeWidth={1.5} />
        </motion.button>
      )}
    </AnimatePresence>
  )
}
