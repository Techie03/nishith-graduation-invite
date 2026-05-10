import { motion } from 'framer-motion'
import UNTLogo from './UNTLogo'

export default function Footer() {
  return (
    <footer id="footer" style={{ position: 'relative', paddingBottom: '2.5rem', paddingTop: '2rem', paddingLeft: '1.5rem', paddingRight: '1.5rem' }}>
      {/* Thin divider */}
      <div style={{ maxWidth: '768px', margin: '0 auto 2rem' }}>
        <div style={{ width: '100%', height: '1px', background: 'var(--color-border)' }} />
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        style={{
          maxWidth: '768px',
          margin: '0 auto',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '1.5rem',
        }}
      >
        {/* UNT Logo centered */}
        <UNTLogo size={48} color="#00853e" style={{ opacity: 0.5 }} />

        {/* Text row */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '1.5rem',
          flexWrap: 'wrap',
        }}>
          <p style={{
            fontFamily: 'Cormorant Garamond, serif',
            fontSize: '14px',
            fontWeight: 400,
            color: 'var(--color-text-muted)',
            letterSpacing: '0.05em',
          }}>
            Nishith Chowdary Mareddy
          </p>

          <span style={{
            width: '3px',
            height: '3px',
            borderRadius: '50%',
            background: 'var(--color-gold-dim)',
            opacity: 0.5,
          }} />

          <p style={{
            fontFamily: 'Inter, sans-serif',
            fontSize: '11px',
            fontWeight: 300,
            color: 'var(--color-text-muted)',
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
          }}>
            University of North Texas
          </p>
        </div>

        {/* Copyright */}
        <p style={{
          fontFamily: 'Inter, sans-serif',
          fontSize: '10px',
          fontWeight: 300,
          color: 'rgba(85, 85, 85, 0.5)',
          letterSpacing: '0.1em',
        }}>
          © 2026 — Commencement Celebration
        </p>
      </motion.div>
    </footer>
  )
}
