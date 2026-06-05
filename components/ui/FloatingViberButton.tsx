'use client'

import { motion } from 'framer-motion'
import { MessageCircle } from 'lucide-react'

export function FloatingViberButton() {
  // Use the exact Viber URL we used everywhere else
  const viberLink = "viber://chat?number=%2B38765679112"

  return (
    <motion.div
      className="fixed bottom-6 right-4 md:bottom-6 md:right-6 z-50 flex items-center justify-center"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.6, delay: 1.5, ease: [0.16, 1, 0.3, 1] }}
    >
      <a
        href={viberLink}
        className="group relative flex items-center justify-center w-12 h-12 md:w-14 md:h-14 bg-obsidian text-white rounded-full shadow-2xl hover:bg-charcoal transition-all duration-300 hover:scale-105"
        aria-label="Kontaktirajte nas na Viber"
      >
        <MessageCircle className="w-5 h-5 md:w-6 md:h-6" strokeWidth={1.5} />

        {/* Hover Tooltip - Hidden on very small mobile to prevent overflow */}
        <span className="hidden sm:block absolute right-16 px-4 py-2 bg-white text-obsidian text-[10px] font-body tracking-[0.2em] uppercase rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap border border-stone/10">
          Viber Poruka
        </span>

        {/* Notification Dot (Subtle pulse effect) */}
        <span className="absolute top-0 right-0 flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-stone opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-obsidian border-2 border-white"></span>
        </span>
      </a>
    </motion.div>
  )
}
