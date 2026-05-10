import { motion } from 'framer-motion'

const details = [
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
        <line x1="16" y1="2" x2="16" y2="6" />
        <line x1="8" y1="2" x2="8" y2="6" />
        <line x1="3" y1="10" x2="21" y2="10" />
      </svg>
    ),
    label: 'Date',
    value: 'Monday, May 11th, 2026',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
    label: 'Time',
    value: '12:00 PM',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
    label: 'Venue',
    value: 'UNT Coliseum',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
    label: 'Address',
    value: '601 N Texas Blvd, Denton, TX 76201',
  },
]

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] },
  },
}

export default function EventDetails() {
  return (
    <section id="event-details" className="relative py-32 sm:py-40 px-6">
      <div style={{ maxWidth: '768px', margin: '0 auto', width: '100%' }}>
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          style={{ textAlign: 'center', marginBottom: '5rem' }}
        >
          <p
            style={{
              fontSize: '11px',
              letterSpacing: '0.35em',
              textTransform: 'uppercase',
              color: 'var(--color-text-muted)',
              fontWeight: 300,
              marginBottom: '1rem',
              fontFamily: 'Inter, sans-serif',
            }}
          >
            Details
          </p>
          <h2
            style={{
              fontSize: 'clamp(1.5rem, 4vw, 2.25rem)',
              fontWeight: 300,
              color: 'var(--color-text-primary)',
              fontFamily: 'Cormorant Garamond, serif',
            }}
          >
            Event Information
          </h2>
          <div className="divider" style={{ margin: '1.5rem auto 0' }} />
        </motion.div>

        {/* Cards Grid */}
        <motion.div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: '1rem',
            width: '100%',
          }}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {details.map((item, i) => (
            <motion.div
              key={i}
              variants={cardVariants}
              className="glass-card"
              style={{ borderRadius: '12px', padding: '1.5rem 2rem' }}
            >
              <div style={{ color: 'var(--color-gold-dim)', marginBottom: '1rem' }}>
                {item.icon}
              </div>
              <div>
                <p
                  style={{
                    fontSize: '11px',
                    letterSpacing: '0.25em',
                    textTransform: 'uppercase',
                    color: 'var(--color-text-muted)',
                    marginBottom: '0.5rem',
                    fontFamily: 'Inter, sans-serif',
                  }}
                >
                  {item.label}
                </p>
                <p
                  style={{
                    fontSize: '1.125rem',
                    fontWeight: 300,
                    color: 'var(--color-text-primary)',
                    fontFamily: 'Cormorant Garamond, serif',
                  }}
                >
                  {item.value}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
