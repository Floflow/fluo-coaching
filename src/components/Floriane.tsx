// ─────────────────────────────────────────
// Floriane — section "Qui suis-je"
// Référence visuelle : fluo-accueil.html — section "FLORIANE" (ligne 1495)
// ─────────────────────────────────────────

export default function Floriane() {
  return (
    <section
      className="section section-alt"
      id="floriane"
      data-section="floriane"
    >
      <div className="container">
        <div className="floriane-grid">

          {/* Photo */}
          <div className="floriane-photo-wrap">
            <div className="floriane-photo fade-in">
              <img
                src="/images/floriane.jpg"
                alt="Floriane Perrin — Coach certifiée ICF"
                style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
              />

            </div>
          </div>

          {/* Contenu */}
          <div className="floriane-content">
            <p className="section-label fade-in">Qui suis-je</p>
            <h2 className="floriane-title fade-in">
              Floriane Perrin<br />
              <span style={{
                fontSize: 'clamp(1.1rem, 2vw, 1.5rem)',
                fontWeight: 400,
                fontStyle: 'italic',
                color: 'var(--text-mid)',
              }}>
                Coach certifiée et Consultante en bilan de compétences
              </span>
            </h2>

            <div className="floriane-bio fade-in">
              <p>
                De mission à impact social au Cambodge à développeuse web à Londres,
                puis coach professionnelle à Paris — mon parcours a de quoi surprendre.
                Mais chaque étape faisait sens sur le moment. Et c&rsquo;est exactement
                ce que je t&rsquo;aide à (re)trouver :{' '}
                <strong>cette clarté intérieure qui permet de décider sereinement.</strong>
              </p>
              <p>
                Je t&rsquo;accompagne avec écoute, bienveillance et non-jugement —
                dans un espace où le rire a toute sa place, parce que se poser des
                questions importantes ne doit pas toujours être pesant.
              </p>
            </div>

            {/* Valeurs */}
            <div className="fade-in fade-in-delay-1" style={{ margin: '1.5rem 0 2rem' }}>
              <p style={{
                fontSize: '11px', fontWeight: 500, letterSpacing: '0.12em',
                textTransform: 'uppercase', color: 'var(--text-light)', marginBottom: '0.75rem',
              }}>
                Mes valeurs fondamentales
              </p>
              <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                {['Curiosité', 'Optimisme', 'Liberté'].map((v) => (
                  <span key={v} style={{
                    fontSize: '13px', fontWeight: 500, color: 'var(--text)',
                    background: 'var(--bg-alt)', border: '1px solid var(--border)',
                    padding: '6px 14px', borderRadius: '20px',
                  }}>
                    {v}
                  </span>
                ))}
              </div>
            </div>

            {/* Citation */}
            <div className="floriane-quote fade-in fade-in-delay-1">
              <p>
                « Nos motivations évoluent. Ce qui était juste hier ne l&rsquo;est plus
                forcément aujourd&rsquo;hui. C&rsquo;est normal — et c&rsquo;est là
                qu&rsquo;on commence à travailler ensemble. »
              </p>
            </div>

            <a
              href="#contact"
              className="btn-primary fade-in fade-in-delay-2"
              style={{ marginTop: '1.5rem', display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}
              data-track="cta-apropos"
            >
              Faisons connaissance <span className="btn-arrow">→</span>
            </a>
          </div>

        </div>
      </div>
    </section>
  )
}
