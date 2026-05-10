import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'

export default function CustomCursor() {
  const cursorRef = useRef(null)
  const [visible, setVisible] = useState(false)
  const pos = useRef({ x: 0, y: 0 })

  useEffect(() => {
    // Skip on touch devices
    if ('ontouchstart' in window) return

    const handleMouseMove = (e) => {
      pos.current = { x: e.clientX, y: e.clientY }
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`
      }
      if (!visible) setVisible(true)
    }

    const handleMouseLeave = () => setVisible(false)
    const handleMouseEnter = () => setVisible(true)

    document.addEventListener('mousemove', handleMouseMove, { passive: true })
    document.addEventListener('mouseleave', handleMouseLeave)
    document.addEventListener('mouseenter', handleMouseEnter)

    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseleave', handleMouseLeave)
      document.removeEventListener('mouseenter', handleMouseEnter)
    }
  }, [visible])

  // Don't render on mobile
  if (typeof window !== 'undefined' && 'ontouchstart' in window) return null

  return (
    <div
      ref={cursorRef}
      className="fixed top-0 left-0 pointer-events-none z-[9998] will-change-transform"
      style={{
        opacity: visible ? 1 : 0,
        transition: 'opacity 0.2s ease',
      }}
    >
      {/* Core dot */}
      <div
        className="relative -translate-x-1/2 -translate-y-1/2"
        style={{
          width: '8px',
          height: '8px',
          borderRadius: '50%',
          background: 'var(--color-gold)',
          boxShadow: '0 0 12px rgba(201, 168, 76, 0.3), 0 0 4px rgba(201, 168, 76, 0.5)',
        }}
      />
    </div>
  )
}
