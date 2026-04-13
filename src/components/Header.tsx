'use client'

// ─────────────────────────────────────────
// Header — Fluo Coaching
// Référence visuelle : fluo-accueil.html
// ─────────────────────────────────────────

import { useState } from 'react'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  function closeMenu() {
    setMenuOpen(false)
  }

  return (
    <header style={{
      position: 'sticky',
      top: 0,
      zIndex: 100,
      background: 'var(--bg)',
      borderBottom: '1px solid var(--border)',
      padding: '1rem 0',
    }}>
      <div className="container">
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '2rem',
        }}>

          {/* Logo */}
          <a href="/" aria-label="Fluo Coaching — accueil" style={{ flexShrink: 0 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 0 }}>

              {/* SVG FLUO */}
              <svg
                width="190"
                height="44"
                viewBox="0 0 240 88"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                style={{ display: 'block', overflow: 'visible' }}
              >
                <defs>
                  <clipPath id="hUTop"><rect x="100" y="0"  width="72" height="56"/></clipPath>
                  <clipPath id="hUBot"><rect x="100" y="56" width="72" height="36"/></clipPath>
                </defs>
                <text x="4"   y="82" fontFamily="Georgia,serif" fontSize="82" fontWeight="700" fill="#1E3830">F</text>
                <text x="54"  y="82" fontFamily="Georgia,serif" fontSize="82" fontWeight="700" fill="#1E3830">L</text>
                {/* Pastille jaune derrière le O */}
                <ellipse cx="175" cy="46" rx="38" ry="38" fill="#FFFF33"/>
                <text x="152" y="82" fontFamily="Georgia,serif" fontSize="82" fontWeight="700" fill="#1E3830"
                      transform="skewX(-15) translate(16,0)">O</text>
                <text x="100" y="62" fontFamily="Georgia,serif" fontSize="82" fontWeight="700" fill="#1E3830"
                      clipPath="url(#hUTop)">U</text>
                <text x="100" y="62" fontFamily="Georgia,serif" fontSize="82" fontWeight="700" fill="#1E3830"
                      clipPath="url(#hUBot)">U</text>
              </svg>

              {/* Séparateur vertical — masqué < 1100px via CSS */}
              <div className="logo-sep" aria-hidden="true" />

              {/* Tagline — masquée < 1100px via CSS */}
              <div className="logo-tagline">
                <span className="logo-tagline-top">Coaching &amp; Bilan de Compétences</span>
                <span className="logo-tagline-sub">Mettre en lumière ce qui compte</span>
              </div>

            </div>
          </a>

          {/* Nav desktop — masquée < 900px */}
          <nav aria-label="Navigation principale" style={{
            display: 'flex',
            alignItems: 'center',
            gap: '2rem',
          }} className="header-nav">
            <a href="/" style={{ fontSize: '13px', fontWeight: 400, color: '#1A1A17', transition: 'color 0.2s' }}>
              Accueil
            </a>
            <a href="/bilan-de-competences" style={{ fontSize: '13px', fontWeight: 400, color: '#1A1A17', transition: 'color 0.2s' }}>
              Bilan de compétences
            </a>
            <a href="/#contact" style={{ fontSize: '13px', fontWeight: 400, color: '#1A1A17', transition: 'color 0.2s' }}>
              Contact
            </a>
          </nav>

          {/* CTA + Burger */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <a
              href="/#contact"
              className="btn-primary"
              data-track="cta-header"
            >
              Séance découverte <span className="btn-arrow">→</span>
            </a>

            {/* Burger mobile */}
            <button
              className={`burger${menuOpen ? ' open' : ''}`}
              aria-label={menuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <span />
              <span />
              <span />
            </button>
          </div>

        </div>
      </div>

      {/* Menu mobile */}
      {menuOpen && (
        <div className="mobile-menu open">
          <nav>
            <a href="/" onClick={closeMenu}>Accueil</a>
            <a href="/bilan-de-competences" onClick={closeMenu}>Bilan de compétences</a>
            <a href="/#contact" onClick={closeMenu}>Contact</a>
          </nav>
          <a
            href="/#contact"
            className="btn-primary"
            onClick={closeMenu}
            style={{ marginTop: '1rem', justifyContent: 'center' }}
          >
            Séance découverte →
          </a>
        </div>
      )}

    </header>
  )
}
