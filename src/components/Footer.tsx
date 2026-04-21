// ─────────────────────────────────────────
// Footer — Fluo Coaching
// Référence visuelle : fluo-bilan-competences.html / fluo-accueil.html
// ─────────────────────────────────────────

import Link from 'next/link'

export default function Footer() {
  return (
    <footer style={{
      background: 'var(--bg-dark)',
      borderTop: '1px solid rgba(255,255,255,0.06)',
      padding: '3rem 0',
    }}>
      <div className="container">
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '2rem',
          flexWrap: 'wrap',
        }}>

          {/* Logo version fond sombre — O en fluo, FL U en blanc */}
          <Link href="/" aria-label="Fluo Coaching — accueil">
            <svg width="110" height="32" viewBox="0 0 240 88" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <defs>
                <clipPath id="fUTop"><rect x="100" y="0" width="72" height="56"/></clipPath>
                <clipPath id="fUBot"><rect x="100" y="56" width="72" height="36"/></clipPath>
              </defs>
              <text x="4"   y="82" fontFamily="Georgia,serif" fontSize="82" fontWeight="700" fill="rgba(255,255,255,0.75)">F</text>
              <text x="54"  y="82" fontFamily="Georgia,serif" fontSize="82" fontWeight="700" fill="rgba(255,255,255,0.75)">L</text>
              <text x="152" y="82" fontFamily="Georgia,serif" fontSize="82" fontWeight="700" fill="#FFFF33" transform="skewX(-15) translate(16,0)">O</text>
              <text x="100" y="62" fontFamily="Georgia,serif" fontSize="82" fontWeight="700" fill="rgba(255,255,255,0.75)" clipPath="url(#fUTop)">U</text>
              <text x="100" y="62" fontFamily="Georgia,serif" fontSize="82" fontWeight="700" fill="rgba(255,255,255,0.75)" clipPath="url(#fUBot)">U</text>
            </svg>
          </Link>

          <nav style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
            <Link href="/mentions-legales" style={{ fontSize: '12px', fontWeight: 300, color: 'rgba(255,255,255,0.3)', transition: 'color 0.2s' }}>
              Mentions légales
            </Link>
            <Link href="/cgv" style={{ fontSize: '12px', fontWeight: 300, color: 'rgba(255,255,255,0.3)', transition: 'color 0.2s' }}>
              CGV
            </Link>
            <Link href="/cgu" style={{ fontSize: '12px', fontWeight: 300, color: 'rgba(255,255,255,0.3)', transition: 'color 0.2s' }}>
              CGU
            </Link>
            <Link href="/reglement-interieur" style={{ fontSize: '12px', fontWeight: 300, color: 'rgba(255,255,255,0.3)', transition: 'color 0.2s' }}>
              Règlement intérieur
            </Link>
            <Link href="/contact" style={{ fontSize: '12px', fontWeight: 300, color: 'rgba(255,255,255,0.3)', transition: 'color 0.2s' }}>
              Contact
            </Link>
          </nav>

          <p style={{ fontSize: '12px', fontWeight: 300, color: 'rgba(255,255,255,0.2)' }}>
            © 2026 Fluo Coaching · Floriane Perrin de Brichambaut
          </p>

        </div>
      </div>
    </footer>
  )
}
