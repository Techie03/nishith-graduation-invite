import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function LoadingScreen({ onComplete }) {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const duration = 2400
    const start = Date.now()
    const ease = (t) => t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2

    const tick = () => {
      const elapsed = Date.now() - start
      const t = Math.min(elapsed / duration, 1)
      setProgress(Math.round(ease(t) * 100))
      if (t < 1) requestAnimationFrame(tick)
    }

    requestAnimationFrame(tick)
  }, [])

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#050505]"
        exit={{ opacity: 0 }}
        transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        {/* Minimal centered content */}
        <div className="flex flex-col items-center gap-10">
          {/* Small elegant text */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.4 }}
            transition={{ duration: 0.6 }}
            className="font-[var(--font-serif)] text-[13px] tracking-[0.3em] uppercase text-[var(--color-text-secondary)]"
            style={{ fontFamily: 'Cormorant Garamond, serif' }}
          >
            Class of 2026
          </motion.p>

          {/* Loading bar */}
          <div className="w-[200px] h-[1px] bg-[var(--color-border)] relative overflow-hidden">
            <motion.div
              className="absolute left-0 top-0 h-full bg-[var(--color-gold)]"
              initial={{ width: '0%' }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.1 }}
            />
          </div>

          {/* Percentage counter */}
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-[12px] tracking-[0.2em] text-[var(--color-text-muted)] font-light tabular-nums"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            {progress}
          </motion.span>
        </div>
      </motion.div>
    </AnimatePresence>
  )
}
