// ─────────────────────────────────────────
// Douleurs — "Tu te reconnais dans l'une de ces situations"
// Référence visuelle : fluo-accueil.html — section "AU BON ENDROIT"
// ─────────────────────────────────────────

const profils = [
  {
    num: '01',
    titre: 'Tu as tout "bien fait" — mais tu ne t\'y retrouves plus',
    items: [
      'Tu ressens un décalage, un manque de sens',
      'Tu te dis "je devrais être reconnaissant·e… mais quelque chose cloche"',
    ],
  },
  {
    num: '02',
    titre: 'Tu sors d\'une période difficile et tu veux repartir autrement',
    items: [
      'Confiance abîmée, peur de refaire une erreur',
      'Tu cherches à retrouver l\'équilibre pro/perso',
      'Tu veux avancer à ton rythme, pas sous pression',
    ],
  },
  {
    num: '03',
    titre: 'Tu as trop d\'idées — et c\'est justement le problème',
    items: [
      'Beaucoup de compétences, beaucoup de possibles',
      'Tu es paralysé·e par le choix, incapable de trancher',
      'Tu cherches de la clarté et une cohérence intérieure',
    ],
  },
]

export default function Douleurs() {
  return (
    <section
      className="section section-alt"
      id="profils"
      data-section="profils"
    >
      <div className="container">

        <p className="label fade-in" style={{ marginBottom: '0.5rem' }}>
          Tu es au bon endroit si…
        </p>
        <h2
          className="section-title fade-in"
          style={{ marginBottom: '3rem' }}
        >
          Tu te reconnais<br />
          dans l&rsquo;une de ces situations
        </h2>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '1.5rem',
        }} className="profils-grid">
          {profils.map((p, i) => (
            <div
              key={p.num}
              className={`profil-card fade-in${i > 0 ? ` fade-in-delay-${i}` : ''}`}
              style={{
                background: 'var(--bg)',
                border: '1px solid var(--border)',
                borderRadius: 'var(--radius-md)',
                padding: '2rem',
              }}
            >
              <p style={{
                fontFamily: 'var(--font-display)',
                fontSize: '3rem',
                fontWeight: 700,
                color: '#F9F002',
                lineHeight: 1,
                marginBottom: '1rem',
              }}>
                {p.num}
              </p>
              <h3 style={{
                fontFamily: 'var(--font-display)',
                fontSize: '1.1rem',
                fontWeight: 700,
                color: 'var(--text)',
                marginBottom: '1rem',
                lineHeight: 1.3,
              }}>
                {p.titre}
              </h3>
              <ul style={{ listStyle: 'none' }}>
                {p.items.map((item, j) => (
                  <li key={j} style={{
                    fontSize: '14px',
                    fontWeight: 300,
                    color: 'var(--text-mid)',
                    paddingLeft: '1rem',
                    position: 'relative',
                    lineHeight: 1.5,
                    marginBottom: j < p.items.length - 1 ? '0.5rem' : 0,
                  }}>
                    <span style={{
                      position: 'absolute',
                      left: 0,
                      color: 'var(--text-light)',
                      fontSize: '12px',
                    }}>—</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
