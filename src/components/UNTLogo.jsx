/**
 * UNT Official Diving Eagle Logo.
 * The source image is green (#00853e) on white/transparent.
 * We display it as-is — the white background blends or we use mix-blend-mode.
 */
export default function UNTLogo({ size = 40, style = {}, glow = false }) {
  return (
    <div style={{
      width: size,
      height: Math.round(size * 0.65),
      position: 'relative',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      ...style,
    }}>
      <img
        src="/unt-logo.png"
        alt="University of North Texas"
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'contain',
          mixBlendMode: 'screen',
          filter: glow ? 'drop-shadow(0 0 8px rgba(0, 133, 62, 0.3))' : 'none',
        }}
      />
    </div>
  )
}
