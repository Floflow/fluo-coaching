// ─────────────────────────────────────────
// Temoignages — 3 cartes avis clients
// Référence visuelle : fluo-accueil.html — section "TÉMOIGNAGES" (ligne 1553)
// ─────────────────────────────────────────

const temoignages = [
  {
    texte: "Je tournais en rond depuis deux ans. En quelques séances, j'ai enfin compris ce qui avait changé en moi — et j'ai pu décider sans avoir peur de me tromper.",
    auteur: 'Marie L.',
    role: 'Responsable marketing, 34 ans',
  },
  {
    texte: "J'avais tellement d'idées que je n'arrivais plus à choisir. Le bilan m'a aidé à mettre de l'ordre — pas à trouver LA réponse, mais à comprendre ce qui comptait vraiment pour moi.",
    auteur: 'Thomas R.',
    role: 'Ingénieur, 41 ans — reconversion vers le conseil',
  },
  {
    texte: "Après un environnement de travail vraiment difficile, j'avais perdu confiance. Floriane ne m'a pas dit quoi faire — elle m'a aidée à me réapproprier mes propres décisions.",
    auteur: 'Sophie M.',
    role: 'Chargée de projet, 38 ans',
  },
]

export default function Temoignages() {
  return (
    <section
      className="section"
      id="temoignages"
      data-section="temoignages"
    >
      <div className="container">

        <p className="label fade-in" style={{ marginBottom: '0.5rem' }}>
          Ce qu&rsquo;ils en disent
        </p>
        <h2 className="section-title fade-in" style={{ marginBottom: '3rem' }}>
          Avis clients
        </h2>

        <div className="testimonials-grid">
          {temoignages.map((t, i) => (
            <div
              key={i}
              className={`testimonial-card fade-in${i > 0 ? ` fade-in-delay-${i}` : ''}`}
            >
              <span className="testimonial-quote-mark" aria-hidden="true">&ldquo;</span>
              <p className="testimonial-text">{t.texte}</p>
              <p className="testimonial-author">{t.auteur}</p>
              <p className="testimonial-role">{t.role}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
