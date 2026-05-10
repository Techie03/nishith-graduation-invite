import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

function getTimeRemaining() {
  const target = new Date('2026-05-11T12:00:00-05:00').getTime()
  const now = Date.now()
  const diff = Math.max(0, target - now)

  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  }
}

function CountdownUnit({ value, label }) {
  return (
    <div style={{ textAlign: 'center', minWidth: '72px' }}>
      <div style={{
        fontFamily: 'Cormorant Garamond, serif',
        fontSize: 'clamp(2rem, 5vw, 3.5rem)',
        fontWeight: 300,
        color: 'var(--color-text-primary)',
        lineHeight: 1,
        letterSpacing: '0.02em',
      }}>
        {String(value).padStart(2, '0')}
      </div>
      <div style={{
        fontFamily: 'Inter, sans-serif',
        fontSize: '10px',
        fontWeight: 300,
        color: 'var(--color-text-muted)',
        letterSpacing: '0.25em',
        textTransform: 'uppercase',
        marginTop: '8px',
      }}>
        {label}
      </div>
    </div>
  )
}

export default function Countdown() {
  const [time, setTime] = useState(getTimeRemaining)

  useEffect(() => {
    const interval = setInterval(() => setTime(getTimeRemaining()), 1000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section style={{ padding: '5rem 1.5rem 6rem', position: 'relative' }}>
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
        style={{
          maxWidth: '640px',
          margin: '0 auto',
          textAlign: 'center',
        }}
      >
        <p style={{
          fontFamily: 'Inter, sans-serif',
          fontSize: '11px',
          letterSpacing: '0.35em',
          textTransform: 'uppercase',
          color: 'var(--color-text-muted)',
          fontWeight: 300,
          marginBottom: '2.5rem',
        }}>
          Countdown to Commencement
        </p>

        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 'clamp(1rem, 4vw, 2.5rem)',
        }}>
          <CountdownUnit value={time.days} label="Days" />
          <span style={{
            fontFamily: 'Cormorant Garamond, serif',
            fontSize: '2rem',
            color: 'var(--color-gold-dim)',
            fontWeight: 300,
            lineHeight: 1,
            marginBottom: '20px',
          }}>:</span>
          <CountdownUnit value={time.hours} label="Hours" />
          <span style={{
            fontFamily: 'Cormorant Garamond, serif',
            fontSize: '2rem',
            color: 'var(--color-gold-dim)',
            fontWeight: 300,
            lineHeight: 1,
            marginBottom: '20px',
          }}>:</span>
          <CountdownUnit value={time.minutes} label="Minutes" />
          <span style={{
            fontFamily: 'Cormorant Garamond, serif',
            fontSize: '2rem',
            color: 'var(--color-gold-dim)',
            fontWeight: 300,
            lineHeight: 1,
            marginBottom: '20px',
          }}>:</span>
          <CountdownUnit value={time.seconds} label="Seconds" />
        </div>
      </motion.div>
    </section>
  )
}
