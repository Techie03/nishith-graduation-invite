import { useRef, useEffect, Suspense } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { gsap } from 'gsap'
import Scene3D from './Scene3D'

export default function Hero() {
  const sectionRef = useRef(null)
  const imageRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  })

  const imageY = useTransform(scrollYProgress, [0, 1], [0, 80])
  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 0.95])
  const textOpacity = useTransform(scrollYProgress, [0, 0.4], [1, 0])
  const textY = useTransform(scrollYProgress, [0, 0.4], [0, -30])

  // Subtle 3D tilt on mouse move
  useEffect(() => {
    const el = imageRef.current
    if (!el) return

    const handleMove = (e) => {
      const rect = el.getBoundingClientRect()
      const cx = rect.left + rect.width / 2
      const cy = rect.top + rect.height / 2
      const dx = (e.clientX - cx) / rect.width
      const dy = (e.clientY - cy) / rect.height

      gsap.to(el, {
        rotateY: dx * 4,
        rotateX: -dy * 4,
        duration: 0.6,
        ease: 'power2.out',
      })
    }

    const handleLeave = () => {
      gsap.to(el, {
        rotateY: 0,
        rotateX: 0,
        duration: 0.8,
        ease: 'power2.out',
      })
    }

    window.addEventListener('mousemove', handleMove, { passive: true })
    el.addEventListener('mouseleave', handleLeave)

    return () => {
      window.removeEventListener('mousemove', handleMove)
      el.removeEventListener('mouseleave', handleLeave)
    }
  }, [])

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  }

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] },
    },
  }

  const imageReveal = {
    hidden: { opacity: 0, scale: 0.92, y: 40 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] },
    },
  }

  return (
    <section
      ref={sectionRef}
      id="hero"
      style={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '6rem 1.5rem',
        overflow: 'hidden',
      }}
    >
      {/* 3D Background Scene */}
      <Suspense fallback={null}>
        <Scene3D />
      </Suspense>

      {/* Subtle ambient background gradient */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          pointerEvents: 'none',
          background: 'radial-gradient(ellipse 60% 50% at 50% 40%, rgba(201, 168, 76, 0.03) 0%, transparent 70%)',
          zIndex: 2,
        }}
      />

      <motion.div
        style={{
          position: 'relative',
          zIndex: 10,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '3rem',
          maxWidth: '56rem',
          margin: '0 auto',
          width: '100%',
        }}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Small pre-heading */}
        <motion.div variants={fadeUp} style={{ opacity: textOpacity, y: textY }}>
          <p
            style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: '11px',
              letterSpacing: '0.35em',
              textTransform: 'uppercase',
              color: 'var(--color-text-muted)',
              fontWeight: 300,
            }}
          >
            Commencement Ceremony
          </p>
        </motion.div>

        {/* Invitation Image — Hero Centerpiece */}
        <motion.div
          variants={imageReveal}
          style={{
            y: imageY,
            scale: imageScale,
            perspective: 1000,
            position: 'relative',
            width: '100%',
            maxWidth: '520px',
          }}
        >
          <div className="invitation-glow" />
          <div
            ref={imageRef}
            className="invitation-frame"
            style={{
              transformStyle: 'preserve-3d',
              borderRadius: '8px',
              overflow: 'hidden',
            }}
          >
            <img
              src="/invitation.png"
              alt="Graduation Invitation — Nishith Chowdary Mareddy, Master of Science in Data Science, University of North Texas"
              style={{
                width: '100%',
                height: 'auto',
                display: 'block',
                filter: 'drop-shadow(0 25px 50px rgba(0, 0, 0, 0.5))',
              }}
            />
          </div>
        </motion.div>

        {/* Typography Block */}
        <motion.div
          variants={fadeUp}
          style={{
            opacity: textOpacity,
            y: textY,
            textAlign: 'center',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '1.25rem',
          }}
        >
          <h1
            style={{
              fontFamily: 'Cormorant Garamond, serif',
              fontSize: 'clamp(1.875rem, 5vw, 3rem)',
              fontWeight: 300,
              lineHeight: 1.15,
              color: 'var(--color-text-primary)',
            }}
          >
            Master of Science in Data Science
          </h1>

          <div className="divider" style={{ margin: '0 auto' }} />

          <p
            style={{
              fontFamily: 'Cormorant Garamond, serif',
              fontSize: 'clamp(1.125rem, 2.5vw, 1.25rem)',
              fontWeight: 300,
              letterSpacing: '0.05em',
              color: 'var(--color-gold)',
            }}
          >
            Nishith Chowdary Mareddy
          </p>

          <p
            style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: '13px',
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: 'var(--color-text-secondary)',
              fontWeight: 300,
            }}
          >
            University of North Texas · Class of 2026
          </p>
        </motion.div>

        {/* Date */}
        <motion.div variants={fadeUp} style={{ opacity: textOpacity, y: textY }}>
          <p
            style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: '13px',
              letterSpacing: '0.15em',
              color: 'var(--color-text-muted)',
              fontWeight: 300,
            }}
          >
            Monday, May 11th, 2026
          </p>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          variants={fadeUp}
          style={{ opacity: textOpacity, marginTop: '2rem' }}
        >
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            style={{
              width: '1px',
              height: '32px',
              background: 'linear-gradient(to bottom, var(--color-gold-dim), transparent)',
              margin: '0 auto',
            }}
          />
        </motion.div>
      </motion.div>
    </section>
  )
}
