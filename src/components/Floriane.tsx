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
                J&rsquo;ai navigué différents milieux professionnels, avec des étapes parfois surprenantes.
                Attirée par des missions à impact social, j&rsquo;ai commencé mon parcours au Cambodge dans une entreprise sociale,
                en tant que business developer. Je me suis ensuite passionnée de tech et j&rsquo;ai travaillé à Londres au sein
                d&rsquo;un grand groupe en tant que développeuse web. Enfin, en quête de sens, j&rsquo;ai réalisé que j&rsquo;avais
                toujours été animée par le fait d&rsquo;aider les gens qui m&rsquo;entourent à mettre en lumière ce qui compte
                vraiment pour eux. C&rsquo;est pourquoi j&rsquo;ai décidé d&rsquo;en faire mon métier et de devenir coach professionnelle.
              </p>
              <p>
                Chaque accompagnement depuis me confirme que c&rsquo;était le bon choix. Ce qui me touche le plus&nbsp;?
                Voir le potentiel de chacun émerger au fil des séances. Les idées qui se dessinent et se transforment
                en un plan d&rsquo;action concret. Te sentir gagner en confiance et en énergie.
              </p>
              <p>
                Chaque étape de mon parcours faisait sens sur le moment et m&rsquo;a menée où je suis aujourd&rsquo;hui.
                Et c&rsquo;est exactement ce que je t&rsquo;aide à (re)trouver&nbsp;: cette clarté intérieure qui permet de décider sereinement.
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
                Nos motivations évoluent. Ce qui était juste hier ne l&rsquo;est plus
                forcément aujourd&rsquo;hui. C&rsquo;est normal — et c&rsquo;est là
                qu&rsquo;on commence à travailler ensemble.
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
