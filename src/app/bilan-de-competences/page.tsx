// ─────────────────────────────────────────
// Page Bilan de compétences — Fluo Coaching
// Référence : fluo-bilan-competences.html
// ─────────────────────────────────────────

import type { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Contact from '@/components/Contact'
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
    desc: "On se rencontre, je réponds à toutes tes questions et on évalue ensemble si le bilan te correspond.",
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
    desc: 'Introspection et exploration. Construction de ton projet.',
    last: false,
  },
  {
    num: '4', active: true,
    titre: 'Phase de conclusion',
    desc: "Synthèse du travail effectué. Tu repars avec de la clarté et une direction.",
    last: false,
  },
  {
    num: '5', active: false,
    titre: 'Rendez-vous de suivi à 6 mois',
    desc: "On se retrouve 6 mois après la fin du bilan pour faire le point, voir où tu en es, ce qui a avancé, ce qui reste à ajuster.",
    last: true,
  },
]

const phases = [
  {
    num: '01', eyebrow: 'Phase préliminaire',
    titre: 'Analyser la demande',
    desc: "On commence par clarifier ta situation, ta demande et tes besoins.",
    items: [
      'Échange sur tes attentes et ton contexte',
      'Définition de tes objectifs',
      'Définition du format adapté à ta situation',
      'Présentation de la charte déontologique',
    ],
  },
  {
    num: '02', eyebrow: "Phase d'investigation",
    titre: 'Construire ton projet',
    desc: "On explore ton parcours, tes motivations profondes et tes besoins actuels pour faire émerger un projet professionnel cohérent.",
    items: [
      "Identification des éléments clés de ton parcours",
      'Identification de tes compétences et aptitudes',
      'Analyse de tes motivations et intérêts',
      "Exploration de tes possibilités d'évolution professionnelle",
    ],
  },
  {
    num: '03', eyebrow: 'Phase de conclusion',
    titre: 'Décider de la suite',
    desc: "On fait la synthèse de tout le travail réalisé : analyse des compétences, définition du projet professionnel, conditions et moyens favorisant la réalisation du ou des projets professionnels.",
    desc2: "Tu repars avec un document de synthèse et un plan d'action concret pour la mise en œuvre de ton projet.",
    items: [],
  },
]


const infosBilan = [
  { label: 'Durée',            valeur: '13h ensemble', valeur2: '+ 11h de travail personnel', sub: 'Variable selon les besoins' },
  { label: 'Format',           valeur: 'À distance',   valeur2: '',                           sub: 'Accompagnement individuel, à ton rythme' },
  { label: 'Tarif',            valeur: '1 600 € TTC',  valeur2: '',                           sub: 'Éligible CPF via mon partenariat avec e-Coaching Associates' },
  { label: 'Accès plateforme', valeur: '',              valeur2: '',                           sub: 'Questionnaires, tests, outils et ressources' },
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
                  et décider sereinement de la suite.
                </p>
                <p className="page-intro-sub fade-in fade-in-delay-2" style={{ marginBottom: 0 }}>
                  À l&rsquo;issue du bilan, tu seras capable de mettre en lumière :
                </p>
                <ul className="page-intro-list fade-in fade-in-delay-3">
                  <li>Tes besoins et tes motivations essentielles</li>
                  <li>Ce qui te freine aujourd&rsquo;hui et les ressources sur lesquelles tu peux t&rsquo;appuyer</li>
                  <li>Un plan d&rsquo;action concret pour avancer sereinement</li>
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
                  {'desc2' in phase && <p className="phase-desc" style={{ marginTop: '1rem' }}>{(phase as typeof phase & { desc2: string }).desc2}</p>}
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
            4. FLORIANE / CONFIANCE
        ══════════════════════════════════════ */}
        <section className="section" id="floriane" data-section="floriane-bilan">
          <div className="container">
            <div className="floriane-trust-grid">

              <div className="floriane-trust-text">
                <p className="label fade-in">Pourquoi me faire confiance</p>
                <h2 className="section-title fade-in fade-in-delay-1" style={{ marginTop: '0.5rem' }}>
                  Une méthode<br />
                  éprouvée. Un<br />
                  regard <span className="hl">neuf.</span>
                </h2>
                <div className="fade-in fade-in-delay-2" style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginTop: '1.5rem' }}>
                  <p style={{ fontSize: '1rem', fontWeight: 300, color: 'var(--text-mid)', lineHeight: 1.8 }}>
                    Je travaille en partenariat avec e-Coaching Associates, organisme de formation certifié Qualiopi. J&rsquo;ai été formée à leur méthode par des coachs eux-mêmes consultants en bilan de compétences, avec une expérience solide du terrain. La méthode est rigoureuse et a fait ses preuves.
                  </p>
                  <p style={{ fontSize: '1rem', fontWeight: 300, color: 'var(--text-mid)', lineHeight: 1.8 }}>
                    Il n&rsquo;est pas forcément nécessaire de tout changer pour trouver ce qui te correspond. Il n&rsquo;existe pas de modèle universel de réussite, seulement le tien. Mon rôle est de t&rsquo;apporter un cadre, du recul et de la lucidité pour que tu puisses décider sereinement de la suite.
                  </p>
                </div>
              </div>

              <div className="floriane-trust-card-wrap">
                <div className="floriane-trust-card fade-in fade-in-delay-1">
                  <div className="info-grid">
                    {infosBilan.map((cell) => (
                      <div key={cell.label} className="info-cell">
                        <p className="info-cell-label">{cell.label}</p>
                        {cell.valeur && <p className="info-cell-value">{cell.valeur}</p>}
                        {cell.valeur2 && <p className="info-cell-sub" style={{ marginTop: '2px', color: 'var(--text-mid)' }}>{cell.valeur2}</p>}
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


        <Contact />
      </main>
      <Footer />
    </>
  )
}
