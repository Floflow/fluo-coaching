// ─────────────────────────────────────────
// Page Bilan de compétences — Fluo Coaching
// Référence : fluo-bilan-competences.html
// ─────────────────────────────────────────

import type { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import CalendlyButton from '@/components/CalendlyButton'

export const metadata: Metadata = {
  title: 'Bilan de compétences — Fluo Coaching',
  description:
    "Un accompagnement structuré pour comprendre pourquoi tu n'avances plus — et décider sereinement de la suite. Éligible CPF. 1 600 € TTC.",
}

// ─── Données ───────────────────────────────

const parcours = [
  {
    num: '1', active: false,
    titre: 'Entretien découverte gratuit',
    desc: "On se rencontre, j'explique la démarche et on évalue ensemble si le bilan te correspond.",
    last: false,
  },
  {
    num: '2', active: true,
    titre: 'Phase préliminaire',
    desc: 'Analyse de ta demande, définition du cadre et du format adapté.',
    last: false,
  },
  {
    num: '3', active: true,
    titre: "Phase d'investigation",
    desc: 'Exploration de tes compétences, motivations et valeurs. Construction de ton projet.',
    last: false,
  },
  {
    num: '4', active: true,
    titre: 'Phase de conclusion',
    desc: "Synthèse, plan d'action, document final. Tu repars avec de la clarté et une direction.",
    last: true,
  },
]

const phases = [
  {
    num: '01', eyebrow: 'Phase préliminaire',
    titre: 'Analyser la demande',
    desc: "On commence par clarifier ta situation, ta demande et tes besoins. C'est la base de tout accompagnement sur mesure.",
    items: [
      'Échange sur tes attentes et ton contexte',
      'Définition du format adapté à ta situation',
      'Présentation de la charte déontologique',
    ],
  },
  {
    num: '02', eyebrow: "Phase d'investigation",
    titre: 'Construire ton projet',
    desc: "Le cœur du bilan. On explore tes compétences, tes motivations, tes valeurs — pour faire émerger un projet professionnel cohérent.",
    items: [
      'Identification de tes compétences et aptitudes',
      'Exploration de tes motivations et valeurs',
      'Construction et vérification du projet',
      "Élaboration d'alternatives si besoin",
    ],
  },
  {
    num: '03', eyebrow: 'Phase de conclusion',
    titre: 'Décider de la suite',
    desc: "On fait la synthèse de tout le travail réalisé. Tu repars avec un plan d'action concret que tu as construit toi-même.",
    items: [
      'Synthèse des compétences et du projet',
      "Plan d'action pour la mise en œuvre",
      'Document de synthèse — ta seule propriété',
    ],
  },
]

const livrables = [
  {
    titre: 'Un document de synthèse complet',
    desc: "Analyse de tes compétences, définition de ton projet, conditions de réalisation. Il t'appartient entièrement — confidentiel.",
    svg: <path d="M13.5 2h-11A1.5 1.5 0 001 3.5v9A1.5 1.5 0 002.5 14h11a1.5 1.5 0 001.5-1.5v-9A1.5 1.5 0 0013.5 2zM4 5.5h8v1.5H4V5.5zm0 3h6V10H4V8.5z" fill="#1E3830"/>,
  },
  {
    titre: "Un plan d'action concret",
    desc: "Que tu as construit toi-même, grâce au questionnement. Pas un plan générique — le tien, ancré dans ta réalité.",
    svg: <path d="M8 1a7 7 0 100 14A7 7 0 008 1zm.75 4.75V8.5H11v1.5H7.25V5.75h1.5z" fill="#1E3830"/>,
  },
  {
    titre: 'La clarté pour décider sereinement',
    desc: 'Pas de saut dans le vide. Un choix conscient, appuyé sur une vraie connaissance de toi-même.',
    svg: <path d="M8 1.5a6.5 6.5 0 100 13 6.5 6.5 0 000-13zm3.03 4.97L7.5 10l-2.03-2.03 1.06-1.06L7.5 7.88l2.47-2.47 1.06 1.06z" fill="#1E3830"/>,
  },
  {
    titre: 'Accès à la plateforme pendant 1 an',
    desc: "Questionnaires, tests, outils et ressources disponibles tout au long de l'accompagnement et après.",
    svg: <path d="M2 3.5A1.5 1.5 0 013.5 2h9A1.5 1.5 0 0114 3.5v2A1.5 1.5 0 0112.5 7h-9A1.5 1.5 0 012 5.5v-2zm0 7A1.5 1.5 0 013.5 9h9a1.5 1.5 0 011.5 1.5v2a1.5 1.5 0 01-1.5 1.5h-9A1.5 1.5 0 012 12.5v-2z" fill="#1E3830"/>,
  },
  {
    titre: 'Un rendez-vous de suivi à 6 mois',
    desc: 'On se retrouve 6 mois après la fin du bilan pour faire le point — voir où tu en es, ce qui a avancé, ce qui reste à ajuster.',
    svg: <path d="M5 1a1 1 0 00-1 1v1H3a2 2 0 00-2 2v9a2 2 0 002 2h10a2 2 0 002-2V5a2 2 0 00-2-2h-1V2a1 1 0 10-2 0v1H6V2a1 1 0 00-1-1zM3 7h10v7H3V7zm2 2v2h2V9H5zm4 0v2h2V9H9z" fill="#1E3830"/>,
  },
]

const infosBilan = [
  { label: 'Durée',            valeur: "Jusqu'à 24h",  sub: 'Variable selon tes besoins' },
  { label: 'Format',           valeur: 'Individuel',    sub: 'En ligne ou présentiel' },
  { label: 'Tarif',            valeur: '1 600 € TTC',  sub: 'Particuliers' },
  { label: 'Accès plateforme', valeur: '1 an complet', sub: 'Outils & questionnaires' },
]

// ─── Page ──────────────────────────────────

export default function BilanDeCompetences() {
  return (
    <>
      <Header />
      <main>

        {/* ══════════════════════════════════════
            1. INTRO
        ══════════════════════════════════════ */}
        <section className="page-intro" data-section="intro-bilan">
          <div className="container">
            <div className="page-intro-inner">

              {/* Texte gauche */}
              <div className="page-intro-text">
                <p className="label fade-in">Accompagnement individuel · Éligible CPF</p>
                <h1 className="page-intro-title fade-in fade-in-delay-1">
                  Bilan de compétences
                </h1>
                <p className="page-intro-sub fade-in fade-in-delay-2">
                  Un accompagnement structuré pour comprendre où tu en es, explorer les possibles
                  et décider sereinement de la suite — avec un plan d&rsquo;action que tu auras
                  construit toi-même.
                </p>
                <p className="page-intro-sub fade-in fade-in-delay-2" style={{ marginTop: '-0.75rem', marginBottom: 0 }}>
                  À l&rsquo;issue du bilan, tu seras capable de mettre en lumière :
                </p>
                <ul className="page-intro-list fade-in fade-in-delay-3">
                  <li>Tes besoins liés au travail et les leviers de ta motivation</li>
                  <li>Tes préférences innées, forces et axes de développement</li>
                  <li>Les étapes concrètes de ton plan d&rsquo;action</li>
                </ul>
                <div className="fade-in fade-in-delay-4">
                  <CalendlyButton className="btn-primary" dataTrack="cta-bilan-intro">
                    Séance découverte gratuite <span className="btn-arrow">→</span>
                  </CalendlyButton>
                </div>
              </div>

              {/* Carte timeline droite */}
              <div className="page-intro-card fade-in fade-in-delay-2">
                <p style={{
                  fontSize: '10px', fontWeight: 500, letterSpacing: '0.12em',
                  textTransform: 'uppercase', color: 'var(--text-light)', marginBottom: '1.5rem',
                }}>
                  Le parcours pas à pas
                </p>
                <div className="methode-timeline">
                  {parcours.map((step) => (
                    <div key={step.num} className="timeline-step">
                      <div className="timeline-left">
                        <div className={`timeline-dot${step.active ? ' active' : ''}`}>
                          <span>{step.num}</span>
                        </div>
                        {!step.last && <div className="timeline-line" />}
                      </div>
                      <div className="timeline-content">
                        <h4>{step.titre}</h4>
                        <p>{step.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════
            2. LES 3 PHASES
        ══════════════════════════════════════ */}
        <section className="section section-alt" id="phases" data-section="phases">
          <div className="container">
            <div style={{ maxWidth: '600px', margin: '0 auto', textAlign: 'center', marginBottom: '4rem' }}>
              <p className="label fade-in">La méthode</p>
              <h2 className="section-title fade-in" style={{ marginTop: '0.5rem' }}>
                Un accompagnement structuré<br />
                en <span className="hl">3 phases</span>
              </h2>
              <p className="fade-in fade-in-delay-1" style={{
                fontSize: '1rem', fontWeight: 300, color: 'var(--text-mid)', lineHeight: 1.8, marginTop: '1rem',
              }}>
                Chaque phase a un objectif précis. Tu avances à ton rythme, avec un suivi individualisé à chaque étape.
              </p>
            </div>
            <div className="phases-grid">
              {phases.map((phase, i) => (
                <div key={phase.num} className={`phase-card fade-in${i > 0 ? ` fade-in-delay-${i}` : ''}`}>
                  <p className="phase-num">{phase.num}</p>
                  <p className="phase-eyebrow">{phase.eyebrow}</p>
                  <h3 className="phase-title">{phase.titre}</h3>
                  <p className="phase-desc">{phase.desc}</p>
                  <ul style={{ listStyle: 'none', marginTop: '1rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    {phase.items.map((item, j) => (
                      <li key={j} style={{
                        fontSize: '14px', fontWeight: 300, color: 'var(--text-mid)',
                        paddingLeft: '1rem', position: 'relative', lineHeight: 1.5,
                      }}>
                        <span style={{ position: 'absolute', left: 0, color: 'var(--text-light)', fontSize: '12px' }}>—</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════
            3. CE QUE TU REPARS AVEC
        ══════════════════════════════════════ */}
        <section className="section" id="livrables" data-section="livrables">
          <div className="container">
            <p className="label fade-in">À la fin du bilan</p>
            <h2 className="section-title fade-in fade-in-delay-1" style={{ marginTop: '0.5rem', marginBottom: '3rem' }}>
              Tu repars avec des décisions<br />
              qui <span className="hl">te ressemblent</span>
            </h2>
            <div style={{ marginTop: '3.5rem' }}>
              <ul className="livrables-list">
                {livrables.map((l, i) => (
                  <li key={i} className={`livrable-item fade-in${i > 0 ? ` fade-in-delay-${Math.min(i, 5)}` : ''}`}>
                    <div className="livrable-icon" aria-hidden="true">
                      <svg viewBox="0 0 16 16" fill="none" width="16" height="16">
                        {l.svg}
                      </svg>
                    </div>
                    <div className="livrable-text">
                      <h4>{l.titre}</h4>
                      <p>{l.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════
            4. FLORIANE / CONFIANCE
        ══════════════════════════════════════ */}
        <section className="section section-alt" id="floriane" data-section="floriane-bilan">
          <div className="container">
            <div className="floriane-trust-grid">

              <div className="floriane-trust-text">
                <p className="label fade-in">Pourquoi me faire confiance</p>
                <h2 className="section-title fade-in fade-in-delay-1" style={{ marginTop: '0.5rem' }}>
                  Une méthode<br />
                  éprouvée. Un<br />
                  regard <span className="hl">neuf.</span>
                </h2>
                <p className="fade-in fade-in-delay-2" style={{
                  fontSize: '1rem', fontWeight: 300, color: 'var(--text-mid)', lineHeight: 1.8, marginTop: '1.5rem',
                }}>
                  Il n&rsquo;est pas nécessaire de tout changer pour trouver ce qui te correspond.
                  Il n&rsquo;existe pas de modèle universel de réussite — seulement le tien.
                  Mon rôle est de t&rsquo;apporter un cadre, du recul et de la lucidité pour que
                  tu puisses décider sereinement de la suite.
                </p>
              </div>

              <div className="floriane-trust-card-wrap">
                <div className="floriane-trust-card fade-in fade-in-delay-1">
                  <div className="info-grid">
                    {infosBilan.map((cell) => (
                      <div key={cell.label} className="info-cell">
                        <p className="info-cell-label">{cell.label}</p>
                        <p className="info-cell-value">{cell.valeur}</p>
                        <p className="info-cell-sub">{cell.sub}</p>
                      </div>
                    ))}
                  </div>
                  <CalendlyButton
                    className="btn-primary"
                    style={{ width: '100%', justifyContent: 'center', marginTop: '1.5rem' }}
                    dataTrack="cta-bilan-floriane"
                  >
                    Séance découverte gratuite <span className="btn-arrow">→</span>
                  </CalendlyButton>
                </div>
              </div>

            </div>
          </div>
        </section>


      </main>
      <Footer />
    </>
  )
}
