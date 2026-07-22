// ─────────────────────────────────────────
// Page Bilan de compétences — Fluo Coaching
// Référence : fluo-bilan-competences.html
// ─────────────────────────────────────────

import type { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Contact from '@/components/Contact'
import CalendlyButton from '@/components/CalendlyButton'
import ParcoursTimeline from '@/components/ParcoursTimeline'

export const metadata: Metadata = {
  title: 'Bilan de compétences — Fluo Coaching',
  description:
    "Un accompagnement structuré pour comprendre pourquoi tu n'avances plus — et décider sereinement de la suite. Éligible CPF. 1 750 € TTC.",
}

// ─── Données ───────────────────────────────

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
    desc: "On fait la synthèse de tout le travail réalisé : analyse des compétences, définition du projet professionnel, conditions et moyens favorisant la réalisation du ou des projets professionnels, alternatives si besoin.",
    desc2: "Tu repars avec un document de synthèse et un plan d'action concret pour la mise en œuvre de ton projet.",
    items: [],
  },
]


const infosBilan = [
  { label: 'Durée',            valeur: '13h ensemble', valeur2: '+ 11h de travail personnel', sub: 'Variable selon les besoins' },
  { label: 'Format',           valeur: 'À distance',   valeur2: '',                           sub: 'Accompagnement individuel, à ton rythme' },
  { label: 'Tarif',            valeur: '1 750 € TTC',  valeur2: '',                           sub: 'Éligible CPF', highlight: true },
  { label: 'Accès plateforme', valeur: 'e-coaching Associates', valeur2: '',                  sub: 'Questionnaires, tests, outils et ressources' },
]

const optionsFinancement = [
  {
    titre: 'Ton employeur',
    desc: 'Ton entreprise peut prendre le bilan en charge, via le plan de développement des compétences ou un congé de reclassement.',
  },
  {
    titre: 'France Travail',
    desc: "Si tu es en recherche d'emploi, France Travail peut parfois financer tout ou partie du bilan. Cependant, les demandes aboutissent rarement et les délais peuvent se compter en mois. Si tu veux tenter, prends rendez-vous directement avec un conseiller.",
  },
  {
    titre: 'Tes fonds propres',
    desc: "Tu peux aussi financer ton bilan toi-même. Le paiement se fait alors en plusieurs fois, et une réduction s'applique en fonction de ta situation. On voit les modalités ensemble lors de l'appel découverte.",
  },
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
                <ParcoursTimeline />
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
                    Je travaille en partenariat avec DB Consulting, organisme de formation certifié Qualiopi. J&rsquo;ai été formée à leur méthode par des coachs eux-mêmes consultants en bilan de compétences, avec une expérience solide du terrain. La méthode est rigoureuse et a fait ses preuves.
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
                        {cell.highlight ? (
                          <span style={{
                            display: 'inline-block',
                            background: 'var(--fluo)',
                            color: 'var(--text)',
                            fontSize: '12px',
                            fontWeight: 600,
                            letterSpacing: '0.04em',
                            padding: '2px 8px',
                            borderRadius: '999px',
                            marginTop: '0.5rem',
                          }}>
                            {cell.sub}
                          </span>
                        ) : (
                          <p className="info-cell-sub">{cell.sub}</p>
                        )}
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

        {/* ══════════════════════════════════════
            5. FINANCEMENT
        ══════════════════════════════════════ */}
        <section className="section section-alt" id="financement" data-section="financement">
          <div className="container">

            <div style={{ maxWidth: '600px', margin: '0 auto', textAlign: 'center', marginBottom: '4rem' }}>
              <p className="label fade-in">Financement</p>
              <h2 className="section-title fade-in" style={{ marginTop: '0.5rem' }}>
                Comment <span className="hl">financer</span><br />
                ton bilan de compétences
              </h2>
              <p className="fade-in fade-in-delay-1" style={{
                fontSize: '1rem', fontWeight: 300, color: 'var(--text-mid)', lineHeight: 1.8, marginTop: '1rem',
              }}>
                Bonne nouvelle : plusieurs solutions existent, selon ta situation.
              </p>
            </div>

            {/* Deux cadres côte à côte — CPF / alternatives */}
            <div className="financement-grid" style={{
              display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.75rem',
              margin: '0 auto 3rem', alignItems: 'stretch',
            }}>

              {/* Cadre 1 — Avec ton CPF */}
              <div className="fade-in" style={{
                position: 'relative', background: 'var(--bg)', border: '1px solid var(--border)',
                borderRadius: 'var(--radius-lg)', padding: '2.25rem', overflow: 'hidden',
              }}>
                <div aria-hidden="true" style={{
                  position: 'absolute', top: 0, left: 0, right: 0, height: '3px', background: 'var(--fluo)',
                }} />
                <h3 style={{
                  fontFamily: 'var(--font-display)', fontSize: '1.25rem', fontWeight: 700,
                  color: 'var(--text)', marginBottom: '1rem',
                }}>
                  Avec ton CPF
                </h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  <p style={{ fontSize: '15px', fontWeight: 300, color: 'var(--text-mid)', lineHeight: 1.75 }}>
                    Tu cotises chaque année sur ton Compte Personnel de Formation, et tu peux l&rsquo;utiliser
                    pour financer ton bilan directement depuis{' '}
                    <a
                      href="https://www.moncompteformation.gouv.fr"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ color: 'var(--text)', textDecoration: 'underline', textUnderlineOffset: '3px' }}
                    >
                      moncompteformation.gouv.fr
                    </a>
                    . Si tu es dans le privé ou en recherche d&rsquo;emploi, tu n&rsquo;as l&rsquo;accord de
                    personne à demander. Dans le secteur public, l&rsquo;accord de ta hiérarchie peut être
                    nécessaire.
                  </p>
                  <p style={{ fontSize: '15px', fontWeight: 300, color: 'var(--text-mid)', lineHeight: 1.75 }}>
                    Si tes crédits ne couvrent pas la totalité, tu complètes le reste par carte bleue au
                    moment de la réservation sur la plateforme.
                  </p>
                </div>
                <div className="floriane-quote" style={{ marginTop: '1.5rem', background: '#fff' }}>
                  <p style={{ fontSize: '14px', fontWeight: 300, color: 'var(--text-mid)', lineHeight: 1.75 }}>
                    Une chose à savoir : depuis mars 2026, mobiliser son CPF suppose un reste à charge de{' '}
                    <strong style={{ color: 'var(--text)', fontWeight: 600 }}>150 €</strong>. Ce montant reste
                    à ta charge même si tes crédits suffisent, donc compte 150 € dans tous les cas. Seuls les
                    demandeurs d&rsquo;emploi en sont exonérés.
                  </p>
                </div>
              </div>

              {/* Cadre 2 — Sans passer par ton CPF */}
              <div className="fade-in fade-in-delay-1" style={{
                position: 'relative', background: 'var(--bg)', border: '1px solid var(--border)',
                borderRadius: 'var(--radius-lg)', padding: '2.25rem', overflow: 'hidden',
              }}>
                <div aria-hidden="true" style={{
                  position: 'absolute', top: 0, left: 0, right: 0, height: '3px', background: 'var(--fluo)',
                }} />
                <h3 style={{
                  fontFamily: 'var(--font-display)', fontSize: '1.25rem', fontWeight: 700,
                  color: 'var(--text)', marginBottom: '0.75rem',
                }}>
                  Sans passer par ton CPF
                </h3>
                <p style={{
                  fontSize: '15px', fontWeight: 300, color: 'var(--text-mid)', lineHeight: 1.75, marginBottom: '1.25rem',
                }}>
                  Tu ne peux pas utiliser ton CPF ou tu préfères une autre voie ?
                  Voici les possibilités.
                </p>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  {optionsFinancement.map((opt, i) => (
                    <div key={opt.titre} style={{
                      paddingTop: i > 0 ? '1rem' : 0,
                      marginTop: i > 0 ? '1rem' : 0,
                      borderTop: i > 0 ? '1px solid var(--border)' : 'none',
                    }}>
                      <h4 style={{
                        fontSize: '15px', fontWeight: 600, color: 'var(--text)', marginBottom: '0.4rem',
                      }}>
                        {opt.titre}
                      </h4>
                      <p style={{ fontSize: '14px', fontWeight: 300, color: 'var(--text-mid)', lineHeight: 1.7 }}>
                        {opt.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* Note — CEP */}
            <div className="fade-in fade-in-delay-2" style={{
              maxWidth: 'var(--max-text)', margin: '0 auto', textAlign: 'center',
              paddingTop: '2.5rem', borderTop: '1px solid var(--border)',
            }}>
              <p style={{
                fontFamily: 'var(--font-display)', fontSize: '1.3rem', fontWeight: 700,
                color: 'var(--text)', marginBottom: '0.75rem',
              }}>
                Pas sûr d&rsquo;avoir besoin d&rsquo;un bilan complet ?
              </p>
              <p style={{ fontSize: '1rem', fontWeight: 300, color: 'var(--text-mid)', lineHeight: 1.8 }}>
                Tu as droit à un conseil en évolution professionnelle (CEP), gratuit, assuré par
                l&rsquo;APEC pour les cadres ou par France Travail si tu es en recherche d&rsquo;emploi.
                C&rsquo;est un premier pas plus léger pour faire le point. Et si tu veux aller plus loin
                ensuite, tu pourras te lancer dans un bilan de compétences.
              </p>
            </div>

          </div>
        </section>


        <Contact />
      </main>
      <Footer />
    </>
  )
}
