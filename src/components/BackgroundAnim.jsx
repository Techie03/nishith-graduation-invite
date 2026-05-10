import { useEffect, useRef } from 'react'

/**
 * Lightweight CSS-only ambient background animation.
 * Soft floating gradient orbs that drift slowly — no GPU-heavy canvas needed.
 */
export default function BackgroundAnim() {
  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 0,
        pointerEvents: 'none',
        overflow: 'hidden',
      }}
      aria-hidden="true"
    >
      {/* Orb 1 — top-right gold */}
      <div style={{
        position: 'absolute',
        top: '-15%',
        right: '-10%',
        width: '600px',
        height: '600px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(201, 168, 76, 0.04) 0%, transparent 70%)',
        animation: 'orbFloat1 25s ease-in-out infinite',
      }} />

      {/* Orb 2 — bottom-left green */}
      <div style={{
        position: 'absolute',
        bottom: '-20%',
        left: '-15%',
        width: '700px',
        height: '700px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(0, 133, 62, 0.03) 0%, transparent 70%)',
        animation: 'orbFloat2 30s ease-in-out infinite',
      }} />

      {/* Orb 3 — center gold (very subtle) */}
      <div style={{
        position: 'absolute',
        top: '40%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '500px',
        height: '500px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(201, 168, 76, 0.02) 0%, transparent 60%)',
        animation: 'orbFloat3 20s ease-in-out infinite',
      }} />

      {/* Fine grain noise texture overlay */}
      <div style={{
        position: 'absolute',
        inset: 0,
        opacity: 0.03,
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
        backgroundSize: '128px 128px',
      }} />

      <style>{`
        @keyframes orbFloat1 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(-30px, 40px) scale(1.05); }
          66% { transform: translate(20px, -20px) scale(0.95); }
        }
        @keyframes orbFloat2 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(40px, -30px) scale(1.08); }
          66% { transform: translate(-20px, 25px) scale(0.92); }
        }
        @keyframes orbFloat3 {
          0%, 100% { transform: translate(-50%, -50%) scale(1); opacity: 0.5; }
          50% { transform: translate(-50%, -50%) scale(1.15); opacity: 1; }
        }
      `}</style>
    </div>
  )
}
