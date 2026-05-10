import { motion } from 'framer-motion'

const socials = [
  {
    name: 'Email',
    href: 'mailto:nishith374@gmail.com',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <path d="M22 4L12 13L2 4" />
      </svg>
    ),
  },
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/nishith-chowdary-mareddy-b9098a200/',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect x="2" y="9" width="4" height="12" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
  {
    name: 'GitHub',
    href: 'https://www.github.com/Techie03',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
      </svg>
    ),
  },
]

export default function Socials() {
  return (
    <section id="socials" style={{ padding: '0 1.5rem 4rem', position: 'relative' }}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
        style={{
          maxWidth: '400px',
          margin: '0 auto',
          textAlign: 'center',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '1.5rem',
        }}
      >
        <p style={{
          fontFamily: 'Inter, sans-serif',
          fontSize: '11px',
          letterSpacing: '0.35em',
          textTransform: 'uppercase',
          color: 'var(--color-text-muted)',
          fontWeight: 300,
        }}>
          Connect
        </p>

        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '1.25rem',
        }}>
          {socials.map((item) => (
            <a
              key={item.name}
              href={item.href}
              target={item.name !== 'Email' ? '_blank' : undefined}
              rel={item.name !== 'Email' ? 'noopener noreferrer' : undefined}
              aria-label={item.name}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '44px',
                height: '44px',
                borderRadius: '50%',
                border: '1px solid rgba(201, 168, 76, 0.1)',
                color: 'var(--color-text-secondary)',
                textDecoration: 'none',
                transition: 'all 0.3s ease',
                background: 'rgba(17, 17, 17, 0.4)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'rgba(201, 168, 76, 0.3)'
                e.currentTarget.style.color = '#c9a84c'
                e.currentTarget.style.transform = 'translateY(-2px)'
                e.currentTarget.style.boxShadow = '0 8px 24px rgba(0,0,0,0.2), 0 0 16px rgba(201,168,76,0.05)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(201, 168, 76, 0.1)'
                e.currentTarget.style.color = 'var(--color-text-secondary)'
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.boxShadow = 'none'
              }}
            >
              {item.icon}
            </a>
          ))}
        </div>

        {/* Email text link */}
        <a
          href="mailto:nishith374@gmail.com"
          style={{
            fontFamily: 'Inter, sans-serif',
            fontSize: '12px',
            fontWeight: 300,
            color: 'var(--color-text-muted)',
            letterSpacing: '0.1em',
            textDecoration: 'none',
            transition: 'color 0.3s ease',
          }}
          onMouseEnter={(e) => e.target.style.color = '#c9a84c'}
          onMouseLeave={(e) => e.target.style.color = 'var(--color-text-muted)'}
        >
          nishith374@gmail.com
        </a>
      </motion.div>
    </section>
  )
}
