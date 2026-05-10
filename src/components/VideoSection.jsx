import { motion } from 'framer-motion'

export default function VideoSection() {
  return (
    <section id="video" style={{ padding: '6rem 1.5rem 8rem', position: 'relative' }}>
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          style={{ textAlign: 'center', marginBottom: '4rem' }}
        >
          <p style={{
            fontFamily: 'Inter, sans-serif',
            fontSize: '11px',
            letterSpacing: '0.35em',
            textTransform: 'uppercase',
            color: 'var(--color-text-muted)',
            fontWeight: 300,
            marginBottom: '1rem',
          }}>
            Memories
          </p>
          <h2 style={{
            fontFamily: 'Cormorant Garamond, serif',
            fontSize: 'clamp(1.5rem, 4vw, 2.25rem)',
            fontWeight: 300,
            color: 'var(--color-text-primary)',
          }}>
            A Look Back
          </h2>
          <div className="divider" style={{ margin: '1.5rem auto 0' }} />
        </motion.div>

        {/* Video Embed */}
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
          style={{
            position: 'relative',
            width: '100%',
            paddingBottom: '56.25%', // 16:9 aspect ratio
            borderRadius: '12px',
            overflow: 'hidden',
            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)',
            border: '1px solid rgba(201, 168, 76, 0.1)',
          }}
        >
          <iframe 
            src="https://www.youtube.com/embed/GhSvzl3-y9c?si=z1yBdoTCT0e3e8Db&rel=0&modestbranding=1" 
            title="YouTube video player" 
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              border: 0,
            }}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            referrerPolicy="strict-origin-when-cross-origin" 
            allowFullScreen
          />
        </motion.div>
      </div>
    </section>
  )
}
