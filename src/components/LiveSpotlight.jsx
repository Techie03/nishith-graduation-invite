import './LiveSpotlight.css'

export default function LiveSpotlight() {
  return (
    <section className="yl-root" aria-label="Featured Live Stream — Graduation Ceremony">

      <div className="yl-header">
        <span className="yl-section-label">Featured Spotlight</span>
        <div className="yl-live-badge" aria-label="Currently broadcasting live">
          <span className="yl-led" aria-hidden="true"></span>
          <span className="yl-live-text">LIVE</span>
        </div>
      </div>

      <div className="yl-divider"></div>

      <div className="yl-title-block">
        <p className="yl-main-title">Graduation Ceremony — Class of 2026</p>
        <p className="yl-sub">
          Nishith Chowdary Mareddy &nbsp;·&nbsp; M.S. Data Science &nbsp;·&nbsp; University of North Texas
        </p>
      </div>

      <div className="yl-spotlight-frame">
        <div className="yl-corner tl"></div>
        <div className="yl-corner tr"></div>
        <div className="yl-corner bl"></div>
        <div className="yl-corner br"></div>
        <div className="yl-top-strip"></div>
        <div className="yl-spotlight-overlay"></div>
        <div className="yl-scanline"></div>
        <div className="yl-iframe-wrap">
          <iframe
            src="https://www.youtube.com/embed/GhSvzl3-y9c?autoplay=1&rel=0&modestbranding=1"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            title="Graduation Ceremony Live Stream — Nishith Chowdary Mareddy"
          ></iframe>
        </div>
      </div>

      <div className="yl-footer">
        <span className="yl-viewing-line">Broadcasting live &nbsp;·&nbsp; UNT Graduation 2026</span>
        <span className="yl-yt-icon">
          <svg width="16" height="11" viewBox="0 0 16 11" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path d="M15.665 1.717A2.01 2.01 0 0 0 14.247.29C13.004 0 8 0 8 0S2.996 0 1.753.29A2.01 2.01 0 0 0 .335 1.717C0 2.97 0 5.5 0 5.5s0 2.53.335 3.783a2.01 2.01 0 0 0 1.418 1.427C2.996 11 8 11 8 11s5.004 0 6.247-.29a2.01 2.01 0 0 0 1.418-1.427C16 8.03 16 5.5 16 5.5s0-2.53-.335-3.783z" fill="#4a3f30"/>
            <path d="M6.364 7.857L10.545 5.5 6.364 3.143v4.714z" fill="#0a0a0a"/>
          </svg>
          YouTube Live
        </span>
      </div>

    </section>
  )
}
