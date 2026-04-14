// ─────────────────────────────────────────
// Offres — Bilan de compétences + Coaching transition
// Référence visuelle : fluo-accueil.html — section "BILAN DE COMPÉTENCES"
// ─────────────────────────────────────────

const infosBilan = [
  {
    label: 'Durée',
    valeur: '13h ensemble',
    valeur2: '+ 11h de travail personnel',
    detail: 'Variable selon les besoins',
  },
  {
    label: 'Format',
    valeur: 'À distance',
    detail: 'Accompagnement individuel, à ton rythme',
  },
  {
    label: 'Tarif',
    valeur: '1 600 € TTC',
    detail: 'Éligible CPF',
  },
]

export default function Offres() {
  return (
    <section
      className="section"
      id="bilan"
      data-section="bilan"
      style={{ position: 'relative', overflow: 'hidden' }}
    >
      <div className="container" style={{ position: 'relative', zIndex: 1 }}>

        {/* ── Bilan de compétences ── */}
        <div className="fade-in" style={{ position: 'relative', maxWidth: '860px', margin: '0 auto' }}>

          {/* Cadre principal */}
          <div style={{
            position: 'relative',
            textAlign: 'center',
            background: 'var(--bg)',
            border: '1px solid var(--border)',
            borderRadius: 'var(--radius-lg)',
            padding: '4rem 3.5rem 3.5rem',
            boxShadow: '0 8px 48px rgba(30,56,48,0.07)',
            overflow: 'hidden',
          }}>
            {/* Barre fluo en haut */}
            <div aria-hidden="true" style={{
              position: 'absolute',
              top: 0, left: 0, right: 0,
              height: '5px',
              background: 'var(--fluo)',
            }} />

            <div style={{ position: 'relative', zIndex: 1 }}>

              <p className="label" style={{ marginBottom: '0.5rem' }}>
                L&rsquo;accompagnement
              </p>

              <h2 style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(2rem, 4vw, 3rem)',
                fontWeight: 700,
                color: 'var(--text)',
                lineHeight: 1.15,
                marginBottom: '1.5rem',
              }}>
                Bilan de compétences
              </h2>

              <p style={{
                fontSize: '1.05rem',
                fontWeight: 300,
                color: 'var(--text-mid)',
                lineHeight: 1.75,
                marginBottom: '3rem',
                maxWidth: '540px',
                marginLeft: 'auto',
                marginRight: 'auto',
              }}>
                Mets en lumière ce qui compte vraiment pour toi et repars avec
                un plan d&rsquo;action concret et motivant.
              </p>

              {/* Grille infos clés */}
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gap: '1px',
                background: 'var(--border)',
                borderRadius: 'var(--radius-md)',
                overflow: 'hidden',
                marginBottom: '3rem',
              }} className="offre-info-grid">
                {infosBilan.map((info) => (
                  <div key={info.label} style={{
                    background: 'var(--bg)',
                    padding: '2rem 1.5rem',
                    textAlign: 'left',
                  }}>
                    <p style={{
                      fontSize: '11px',
                      fontWeight: 500,
                      letterSpacing: '0.1em',
                      textTransform: 'uppercase',
                      color: 'var(--text-light)',
                      marginBottom: '0.75rem',
                    }}>
                      {info.label}
                    </p>
                    <p style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: '1.3rem',
                      fontWeight: 700,
                      color: 'var(--text)',
                      lineHeight: 1.2,
                    }}>
                      {info.valeur}
                    </p>
                    {info.valeur2 && (
                      <p style={{
                        fontFamily: 'var(--font-display)',
                        fontSize: '1rem',
                        fontWeight: 700,
                        color: 'var(--text)',
                        lineHeight: 1.2,
                        marginTop: '0.2rem',
                      }}>
                        {info.valeur2}
                      </p>
                    )}
                    {info.detail && (
                      <p style={{
                        fontSize: '13px',
                        fontWeight: 300,
                        color: 'var(--text-mid)',
                        marginTop: '0.4rem',
                      }}>
                        {info.detail}
                      </p>
                    )}
                  </div>
                ))}
              </div>

              {/* CTAs */}
              <div style={{
                display: 'flex',
                gap: '1rem',
                flexWrap: 'wrap',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
                <a
                  href="#contact"
                  className="btn-primary"
                  data-track="cta-bilan"
                >
                  Réserver une séance découverte <span className="btn-arrow">→</span>
                </a>
                <a
                  href="/bilan-de-competences"
                  className="btn-secondary"
                  data-track="cta-bilan-page"
                >
                  En savoir plus <span className="btn-arrow">→</span>
                </a>
              </div>

            </div>
          </div>
        </div>


      </div>
    </section>
  )
}
