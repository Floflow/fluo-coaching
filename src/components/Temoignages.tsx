// ─────────────────────────────────────────
// Temoignages — 3 cartes avis clients
// Référence visuelle : fluo-accueil.html — section "TÉMOIGNAGES" (ligne 1553)
// ─────────────────────────────────────────

const temoignages = [
  {
    texte: "En pleine période d'incertitude, j'avais besoin d'une méthode et d'un regard extérieur pour m'aider à me recentrer, à écarter les doutes. Le travail que j'ai fait avec Floriane m'a aidée à aligner mon projet professionnel avec mes envies, mes besoins, mon ambition et à mettre en lumière mes forces, et j'en sors sereine et grandie. Tout le monde devrait faire un bilan de compétences !",
    auteur: 'Bérengère S.',
    role: 'Responsable communication, 35 ans',
  },
  {
    texte: "Quand j'ai commencé à travailler avec Floriane, je traversais une période de transition où je ne savais plus quel chemin emprunter. Je me sentais à la fois perdue et submergée par les possibilités, sans parvenir à choisir. Floriane m'a aidée à y voir plus clair et à me lancer avec plus de clarté et de sérénité. Grâce à son énergie solaire et son écoute attentive, elle a su me mettre en confiance à chaque séance et réveiller mon potentiel. Un immense merci à toi, Floriane !",
    auteur: 'Coline',
    role: '28 ans',
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
