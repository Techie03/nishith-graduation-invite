import { motion } from 'framer-motion'

const milestones = [
  {
    year: '2024',
    title: 'Began Graduate Studies',
    description: 'Enrolled in the M.S. Data Science program at the University of North Texas.',
  },
  {
    year: '2025',
    title: 'Research & Specialization',
    description: 'Deep dive into machine learning, AI, and advanced analytics coursework.',
  },
  {
    year: '2026',
    title: 'Capstone & Graduation',
    description: 'Completed capstone project and earned Master of Science in Data Science.',
  },
]

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] },
  },
}

export default function Journey() {
  return (
    <section id="journey" style={{ padding: '6rem 1.5rem 8rem', position: 'relative' }}>
      <div style={{ maxWidth: '680px', margin: '0 auto' }}>
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
            The Path
          </p>
          <h2 style={{
            fontFamily: 'Cormorant Garamond, serif',
            fontSize: 'clamp(1.5rem, 4vw, 2.25rem)',
            fontWeight: 300,
            color: 'var(--color-text-primary)',
          }}>
            Academic Journey
          </h2>
          <div className="divider" style={{ margin: '1.5rem auto 0' }} />
        </motion.div>

        {/* Timeline */}
        <div style={{ position: 'relative', paddingLeft: '2rem' }}>
          {/* Vertical line */}
          <div style={{
            position: 'absolute',
            left: '4px',
            top: '8px',
            bottom: '8px',
            width: '1px',
            background: 'linear-gradient(to bottom, var(--color-gold-dim), var(--color-border), transparent)',
          }} />

          <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
            {milestones.map((item, i) => (
              <motion.div
                key={i}
                variants={itemVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                style={{ position: 'relative' }}
              >
                {/* Dot */}
                <div style={{
                  position: 'absolute',
                  left: '-2rem',
                  top: '6px',
                  width: '9px',
                  height: '9px',
                  borderRadius: '50%',
                  background: i === milestones.length - 1 ? 'var(--color-gold)' : 'var(--color-border-light)',
                  border: '2px solid var(--color-bg)',
                  boxShadow: i === milestones.length - 1 ? '0 0 12px rgba(201, 168, 76, 0.3)' : 'none',
                }} />

                {/* Content */}
                <div>
                  <span style={{
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '11px',
                    letterSpacing: '0.2em',
                    color: i === milestones.length - 1 ? 'var(--color-gold)' : 'var(--color-text-muted)',
                    fontWeight: 400,
                    textTransform: 'uppercase',
                  }}>
                    {item.year}
                  </span>
                  <h3 style={{
                    fontFamily: 'Cormorant Garamond, serif',
                    fontSize: '1.25rem',
                    fontWeight: 400,
                    color: 'var(--color-text-primary)',
                    marginTop: '6px',
                    marginBottom: '6px',
                  }}>
                    {item.title}
                  </h3>
                  <p style={{
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '13px',
                    fontWeight: 300,
                    color: 'var(--color-text-secondary)',
                    lineHeight: 1.7,
                  }}>
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
