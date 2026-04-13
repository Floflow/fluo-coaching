// ─────────────────────────────────────────
// Methode — Les 4 étapes en grille 2×2
// Référence visuelle : fluo-accueil.html — styles .method-grid / .method-step
// ─────────────────────────────────────────

const etapes = [
  {
    num: '01',
    titre: 'Identifier',
    desc: "On met des mots sur ce qui ne va plus. Pas pour te plaindre — pour comprendre d'où vient le décalage entre ce que tu fais et ce que tu es.",
  },
  {
    num: '02',
    titre: 'Mieux te comprendre',
    desc: "On explore tes valeurs, tes motivations profondes, tes forces réelles. Ce qui te fait avancer quand tout le reste s'efface.",
  },
  {
    num: '03',
    titre: 'Explorer les possibles',
    desc: "On ouvre le champ des possibles sans filtre. Aucune idée n'est trop folle, aucune piste n'est écartée trop vite.",
  },
  {
    num: '04',
    titre: 'Décider sereinement',
    desc: "Tu repars avec un plan d'action construit par toi-même — pas un conseil de ma part, mais ta propre clarté retrouvée.",
    dark: true,
  },
]

export default function Methode() {
  return (
    <section
      className="section section-alt"
      id="methode"
      data-section="methode"
    >
      <div className="container">

        <p className="label fade-in" style={{ marginBottom: '0.5rem' }}>
          Comment ça marche
        </p>
        <h2
          className="section-title fade-in"
          style={{ marginBottom: '3rem', maxWidth: '540px' }}
        >
          Un chemin en 4 étapes,<br />
          à ton rythme
        </h2>

        {/* Grille 2×2 */}
        <div className="method-grid fade-in fade-in-delay-1">
          {etapes.map((e) => (
            <div
              key={e.num}
              className="method-step"
              style={e.dark ? { background: 'var(--bg-dark)' } : undefined}
            >
              <p className="method-step-num" style={e.dark ? { color: 'var(--fluo)' } : undefined}>
                {e.num}
              </p>
              <h3 className="method-step-title" style={e.dark ? { color: '#fff' } : undefined}>
                {e.titre}
              </h3>
              <p className="method-step-desc" style={e.dark ? { color: 'rgba(255,255,255,0.5)' } : undefined}>
                {e.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
