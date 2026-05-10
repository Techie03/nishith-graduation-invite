import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import UNTLogo from './UNTLogo'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const links = [
    { label: 'Ceremony', href: '#hero' },
    { label: 'Details', href: '#event-details' },
    { label: 'Journey', href: '#journey' },
    { label: 'RSVP', href: '#invitation' },
  ]

  const scrollTo = (href) => {
    setMobileOpen(false)
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <>
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          padding: '0 2rem',
          height: '72px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          background: scrolled ? 'rgba(5, 5, 5, 0.85)' : 'transparent',
          backdropFilter: scrolled ? 'blur(20px)' : 'none',
          WebkitBackdropFilter: scrolled ? 'blur(20px)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(201, 168, 76, 0.06)' : '1px solid transparent',
          transition: 'background 0.4s ease, backdrop-filter 0.4s ease, border-bottom 0.4s ease',
        }}
      >
        {/* Logo area */}
        <a
          href="#hero"
          onClick={(e) => { e.preventDefault(); scrollTo('#hero') }}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '14px',
            textDecoration: 'none',
          }}
        >
          {/* UNT Logo */}
          <UNTLogo size={36} color="#00853e" />

          <div style={{
            width: '1px',
            height: '24px',
            background: 'rgba(255,255,255,0.08)',
          }} />

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1px' }}>
            <span style={{
              fontFamily: 'Cormorant Garamond, serif',
              fontSize: '15px',
              fontWeight: 500,
              color: 'var(--color-text-primary)',
              letterSpacing: '0.08em',
              lineHeight: 1.2,
            }}>
              Nishith Mareddy
            </span>
            <span style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: '9px',
              fontWeight: 300,
              color: 'var(--color-text-muted)',
              letterSpacing: '0.25em',
              textTransform: 'uppercase',
              lineHeight: 1.2,
            }}>
              M.S. Data Science · 2026
            </span>
          </div>
        </a>

        {/* Desktop Links */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '2rem',
          }}
          className="nav-links-desktop"
        >
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => { e.preventDefault(); scrollTo(link.href) }}
              style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '12px',
                fontWeight: 400,
                color: 'var(--color-text-secondary)',
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                textDecoration: 'none',
                transition: 'color 0.3s ease',
                position: 'relative',
                padding: '4px 0',
              }}
              onMouseEnter={(e) => e.target.style.color = '#c9a84c'}
              onMouseLeave={(e) => e.target.style.color = 'var(--color-text-secondary)'}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="nav-mobile-toggle"
          style={{
            display: 'none',
            background: 'none',
            border: 'none',
            padding: '8px',
            flexDirection: 'column',
            gap: '5px',
          }}
          aria-label="Toggle menu"
        >
          <span style={{
            width: '20px', height: '1px', background: 'var(--color-text-secondary)',
            transition: 'transform 0.3s ease, opacity 0.3s ease',
            transform: mobileOpen ? 'rotate(45deg) translate(2px, 2px)' : 'none',
          }} />
          <span style={{
            width: '20px', height: '1px', background: 'var(--color-text-secondary)',
            transition: 'opacity 0.3s ease',
            opacity: mobileOpen ? 0 : 1,
          }} />
          <span style={{
            width: '20px', height: '1px', background: 'var(--color-text-secondary)',
            transition: 'transform 0.3s ease, opacity 0.3s ease',
            transform: mobileOpen ? 'rotate(-45deg) translate(2px, -2px)' : 'none',
          }} />
        </button>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="nav-mobile-menu"
            style={{
              position: 'fixed',
              inset: 0,
              zIndex: 99,
              background: 'rgba(5, 5, 5, 0.95)',
              backdropFilter: 'blur(30px)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '2rem',
            }}
          >
            {links.map((link, i) => (
              <motion.a
                key={link.label}
                href={link.href}
                onClick={(e) => { e.preventDefault(); scrollTo(link.href) }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08, duration: 0.4 }}
                style={{
                  fontFamily: 'Cormorant Garamond, serif',
                  fontSize: '28px',
                  fontWeight: 300,
                  color: 'var(--color-text-primary)',
                  letterSpacing: '0.1em',
                  textDecoration: 'none',
                  transition: 'color 0.3s ease',
                }}
                onMouseEnter={(e) => e.target.style.color = '#c9a84c'}
                onMouseLeave={(e) => e.target.style.color = 'var(--color-text-primary)'}
              >
                {link.label}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
