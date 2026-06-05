'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'

const navLinks = [
  { name: 'Početna', href: '/' },
  { name: 'Galerija', href: '/#galerija' },
  { name: 'Usluge', href: '/#usluge' },
  { name: 'Kontakt', href: 'viber://chat?number=%2B38765679112' },
]

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
  }, [isMobileMenuOpen])

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${isScrolled ? 'bg-white/20 backdrop-blur-md py-4 shadow-[0_4px_30px_rgba(0,0,0,0.03)]' : 'bg-transparent py-8'
          }`}
      >
        <div className="max-w-[1400px] mx-auto px-6 sm:px-12 flex items-center justify-between">

          {/* Left Nav (Desktop) */}
          <nav className="hidden md:flex flex-1 items-center gap-8">
            {navLinks.slice(0, 2).map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`font-body text-[10px] tracking-[0.2em] uppercase transition-colors duration-300 relative group py-2 ${isScrolled ? 'text-charcoal hover:text-stone' : 'text-white/90 hover:text-white'}`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Center Logo */}
          <Link href="/" className="flex-shrink-0 flex flex-col items-center justify-center relative z-50 group" onClick={() => setIsMobileMenuOpen(false)}>
            <div className={`font-heading text-2xl sm:text-3xl tracking-[0.15em] transition-colors duration-500 ${isScrolled ? 'text-obsidian' : 'text-white'}`}>
              FOTOMETRO
            </div>
            <div className={`font-body text-[9px] tracking-[0.4em] uppercase mt-1 transition-colors duration-500 ${isScrolled ? 'text-stone' : 'text-white/70'}`}>
              Wedding Photography
            </div>
          </Link>

          {/* Right Nav (Desktop) */}
          <nav className="hidden md:flex flex-1 items-center justify-end gap-8">
            {navLinks.slice(2).map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`font-body text-[10px] tracking-[0.2em] uppercase transition-colors duration-300 relative group py-2 ${isScrolled ? 'text-charcoal hover:text-stone' : 'text-white/90 hover:text-white'}`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden relative z-50 w-10 h-10 flex flex-col items-center justify-center gap-1.5 focus:outline-none"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <span className={`w-6 h-[1px] transition-all duration-300 ${isMobileMenuOpen ? 'bg-obsidian rotate-45 translate-y-[7px]' : isScrolled ? 'bg-obsidian' : 'bg-white'}`} />
            <span className={`w-6 h-[1px] transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : isScrolled ? 'bg-obsidian' : 'bg-white'}`} />
            <span className={`w-6 h-[1px] transition-all duration-300 ${isMobileMenuOpen ? 'bg-obsidian -rotate-45 -translate-y-[7px]' : isScrolled ? 'bg-obsidian' : 'bg-white'}`} />
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: '-10px' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '-10px' }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-40 bg-white flex items-center justify-center"
          >
            <nav className="flex flex-col items-center gap-8">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 + 0.1 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="font-heading font-light text-3xl sm:text-4xl text-obsidian hover:text-stone transition-colors"
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="mt-12 flex flex-col items-center gap-4 text-center"
              >
                <div className="w-12 h-px bg-stone/30" />
                <a href="tel:+38765679112" className="font-body text-xs text-charcoal tracking-widest">+387 65 679 112</a>
                <a href="mailto:fotometropd@gmail.com" className="font-body text-xs text-charcoal tracking-widest">fotometropd@gmail.com</a>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
