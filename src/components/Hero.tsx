// ─────────────────────────────────────────
// Hero — Fluo Coaching
// Référence visuelle : fluo-accueil.html
// ─────────────────────────────────────────

import HeroCanvas from './HeroCanvas'
import CalendlyButton from './CalendlyButton'

export default function Hero() {
  return (
    <section
      className="hero"
      data-section="hero"
      style={{
        padding: '6rem 0 5rem',
        overflow: 'hidden',
        position: 'relative',
        background: 'var(--bg)',
      }}
    >
      {/* Canvas fond — carrés en chaos (masqué sur mobile) */}
      <div
        aria-hidden="true"
        className="hero-canvas-wrap"
        style={{
          position: 'absolute',
          inset: 0,
          pointerEvents: 'none',
          overflow: 'hidden',
        }}
      >
        <HeroCanvas />
      </div>

      <div className="container">
        <div style={{ maxWidth: '720px', position: 'relative', zIndex: 1 }}>

          <p className="hero-label fade-in" style={{
            fontSize: '11px',
            fontWeight: 500,
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
            color: 'var(--text-light)',
            marginBottom: '1.5rem',
          }}>
            Coach certifiée · Bilan de compétences
          </p>

          <h1 className="hero-title fade-in fade-in-delay-1" style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(2.8rem, 5.5vw, 4.4rem)',
            fontWeight: 700,
            lineHeight: 1.08,
            color: 'var(--text)',
            marginBottom: '1.5rem',
            letterSpacing: '-0.02em',
          }}>
            Tu ne te reconnais<br />
            plus dans ton travail.<br />
            Prenons le temps de comprendre{' '}
            <span className="hl">pourquoi.</span>
          </h1>

          <p className="hero-sub fade-in fade-in-delay-2" style={{
            fontSize: '1.1rem',
            fontWeight: 300,
            color: 'var(--text-mid)',
            lineHeight: 1.75,
            marginBottom: '2.5rem',
            maxWidth: '480px',
          }}>
            Ce qui semblait juste hier ne te ressemble plus tout à fait aujourd&rsquo;hui.
            Ce bilan de compétences t&rsquo;aidera à y voir plus clair et décider
            sereinement de la suite.
          </p>

          <div className="hero-ctas fade-in fade-in-delay-3" style={{
            display: 'flex',
            alignItems: 'center',
            gap: '1rem',
            flexWrap: 'wrap',
          }}>
            <CalendlyButton className="btn-primary" dataTrack="cta-hero">
              Séance découverte gratuite <span className="btn-arrow">→</span>
            </CalendlyButton>
            <a href="#bilan" className="btn-secondary">
              Découvrir le bilan
            </a>
          </div>

        </div>
      </div>
    </section>
  )
}
