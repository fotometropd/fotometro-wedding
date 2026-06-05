'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

export function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const [isMobile, setIsMobile] = useState(true)

  useEffect(() => {
    const checkMobile = () => {
      const isTouch = window.matchMedia('(pointer: coarse)').matches
      const isSmallScreen = window.innerWidth < 768
      if (isTouch || isSmallScreen) {
        setIsMobile(true)
      } else {
        setIsMobile(false)
      }
    }

    checkMobile()
    window.addEventListener('resize', checkMobile)

    if (isMobile) return

    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
      if (!isVisible) setIsVisible(true)
    }

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (
        target.tagName.toLowerCase() === 'a' ||
        target.tagName.toLowerCase() === 'button' ||
        target.closest('a') ||
        target.closest('button') ||
        target.closest('.interactive')
      ) {
        setIsHovering(true)
      } else {
        setIsHovering(false)
      }
    }

    window.addEventListener('mousemove', updateMousePosition)
    window.addEventListener('mouseover', handleMouseOver)

    return () => {
      window.removeEventListener('resize', checkMobile)
      window.removeEventListener('mousemove', updateMousePosition)
      window.removeEventListener('mouseover', handleMouseOver)
    }
  }, [isVisible, isMobile])

  if (typeof window === 'undefined' || isMobile) return null

  return (
    <>
      {/* Hide default cursor globally ONLY on desktop */}
      <style dangerouslySetInnerHTML={{ __html: '* { cursor: none !important; }' }} />

      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] mix-blend-difference flex items-center justify-center"
        animate={{
          x: mousePosition.x - (isHovering ? 24 : 6),
          y: mousePosition.y - (isHovering ? 24 : 6),
          width: isHovering ? 48 : 12,
          height: isHovering ? 48 : 12,
          opacity: isVisible ? 1 : 0
        }}
        transition={{
          type: 'spring',
          stiffness: 800,
          damping: 35,
          mass: 0.2
        }}
      >
        <div className="w-full h-full bg-white rounded-full flex items-center justify-center relative">
          <motion.span
            className="text-black font-body text-[7px] font-bold uppercase tracking-widest absolute"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: isHovering ? 1 : 0, scale: isHovering ? 1 : 0.5 }}
            transition={{ duration: 0.2 }}
          >
            POGLEDAJ
          </motion.span>
        </div>
      </motion.div>
    </>
  )
}
