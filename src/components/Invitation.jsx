import { motion } from 'framer-motion'
import UNTLogo from './UNTLogo'

export default function Invitation() {
  return (
    <section id="invitation" className="relative" style={{ padding: '8rem 1.5rem 5rem' }}>
      {/* Ambient glow */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          pointerEvents: 'none',
          background: 'radial-gradient(ellipse 50% 40% at 50% 50%, rgba(201, 168, 76, 0.02) 0%, transparent 70%)',
        }}
      />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
        style={{
          position: 'relative',
          zIndex: 10,
          textAlign: 'center',
          maxWidth: '640px',
          margin: '0 auto',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '2rem',
        }}
      >
        {/* UNT Logo above the text */}
        <UNTLogo size={80} glow style={{ opacity: 0.6 }} />

        {/* Decorative line */}
        <div className="divider" />

        <h2
          style={{
            fontSize: 'clamp(1.875rem, 5vw, 3rem)',
            fontWeight: 300,
            color: 'var(--color-text-primary)',
            lineHeight: 1.3,
            fontFamily: 'Cormorant Garamond, serif',
          }}
        >
          All are cordially invited.
        </h2>

        <p
          style={{
            fontSize: '13px',
            letterSpacing: '0.15em',
            color: 'var(--color-text-secondary)',
            fontWeight: 300,
            maxWidth: '28rem',
            lineHeight: 1.7,
            fontFamily: 'Inter, sans-serif',
          }}
        >
          Your presence would mean the world. Join us in celebrating this milestone at the University of North Texas.
        </p>

        {/* Decorative line */}
        <div className="divider" />
      </motion.div>
    </section>
  )
}
