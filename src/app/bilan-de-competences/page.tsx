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
    "Un accompagnement structuré pour comprendre pourquoi tu n'avances plus, et décider sereinement de la suite. Éligible CPF. 1 750 € TTC.",
}

// ─── Données ───────────────────────────────

type Phase = {
  num: string
  eyebrow: string
  titre: string
  desc: string
  listeTitre?: string
  items: string[]
}

const phases: Phase[] = [
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
    desc: "On rassemble tout le travail réalisé dans un document de synthèse, que l'on construit ensemble.",
    listeTitre: 'Ce que contient ton document',
    items: [
      'Analyse de tes compétences',
      'Définition de ton projet professionnel',
      "Ton plan d'action : conditions et moyens pour le réaliser",
      'Alternatives si besoin',
    ],
  },
]

const essentiel = [
  { label: 'Durée',      valeur: '13\u00a0h ensemble',        sub: '+ 11\u00a0h de travail personnel, variable selon tes besoins' },
  { label: 'Format',     valeur: 'À distance',                sub: 'Individuel, à ton rythme' },
  { label: 'Plateforme', valeur: 'e-coaching Associates',     sub: 'Questionnaires, tests, outils et ressources' },
]

const garanties = [
  'Coach certifiée',
  'Consultante en bilan de compétences',
  'Partenaire d’un organisme certifié Qualiopi',
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
                <p className="page-intro-sub page-intro-lead fade-in fade-in-delay-2">
                  À l&rsquo;issue du bilan, tu seras capable de mettre en lumière :
                </p>
                <ul className="page-intro-list fade-in fade-in-delay-3">
                  <li>Tes besoins et tes motivations essentielles</li>
                  <li>Ce qui te freine aujourd&rsquo;hui et les ressources sur lesquelles tu peux t&rsquo;appuyer</li>
                  <li>Un plan d&rsquo;action concret pour avancer sereinement</li>
                </ul>
                <div className="page-intro-actions fade-in fade-in-delay-4">
                  <CalendlyButton className="btn-primary" dataTrack="cta-bilan-intro">
                    Séance découverte gratuite <span className="btn-arrow">→</span>
                  </CalendlyButton>
                  <a href="#financement" className="text-link" data-track="link-bilan-financement">
                    Voir les solutions de financement
                  </a>
                </div>
              </div>

              {/* Carte « L'essentiel » droite */}
              <div className="page-intro-card fade-in fade-in-delay-2">
                <p className="label">L&rsquo;essentiel</p>
                <dl className="essentiel-list">
                  {essentiel.map((ligne) => (
                    <div key={ligne.label} className="essentiel-row">
                      <dt>{ligne.label}</dt>
                      <dd>
                        <span className="essentiel-value">{ligne.valeur}</span>
                        <span className="essentiel-sub">{ligne.sub}</span>
                      </dd>
                    </div>
                  ))}
                  <div className="essentiel-row">
                    <dt>Tarif</dt>
                    <dd className="essentiel-tarif">
                      <span className="badge badge-fluo">Éligible CPF</span>
                      <span className="essentiel-prix">1&nbsp;750&nbsp;€&nbsp;TTC</span>
                    </dd>
                  </div>
                </dl>
              </div>

            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════
            2. LE PARCOURS EN 3 PHASES
        ══════════════════════════════════════ */}
        <section className="section section-alt" id="phases" data-section="phases">
          <div className="container">
            <div style={{ maxWidth: '760px', margin: '0 auto', textAlign: 'center', marginBottom: '4rem' }}>
              <p className="label fade-in">Le parcours pas à pas</p>
              <h2 className="section-title fade-in" style={{ marginTop: '0.5rem' }}>
                Un accompagnement structuré<br />
                en <span className="hl">3 phases</span>
              </h2>
              <p className="fade-in fade-in-delay-1" style={{
                fontSize: '1rem', fontWeight: 300, color: 'var(--text-mid)', lineHeight: 1.8,
                maxWidth: '600px', margin: '1rem auto 0',
              }}>
                Chaque phase a un objectif précis. Tu avances à ton rythme, avec un suivi individualisé à chaque étape.
              </p>
            </div>

            <div className="phase-band phase-band-before fade-in">
              <p className="phase-band-label">Avant</p>
              <p className="phase-band-title">Entretien découverte gratuit</p>
              <p className="phase-band-text">
                On se rencontre, je réponds à toutes tes questions et on évalue ensemble si le bilan te correspond.
              </p>
            </div>

            <div className="phases-grid">
              {phases.map((phase, i) => (
                <div key={phase.num} className={`phase-card fade-in${i > 0 ? ` fade-in-delay-${i}` : ''}`}>
                  <div className="phase-head">
                    <p className="num-mark">{phase.num}</p>
                    <p className="phase-eyebrow">{phase.eyebrow}</p>
                  </div>
                  <h3 className="phase-title">{phase.titre}</h3>
                  <p className="phase-desc">{phase.desc}</p>
                  <hr className="phase-sep" />
                  {phase.listeTitre && <p className="phase-eyebrow phase-list-title">{phase.listeTitre}</p>}
                  <ul className="list-square phase-list">
                    {phase.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="phase-band phase-band-after fade-in">
              <p className="phase-band-label">6 mois après</p>
              <p className="phase-band-title">Rendez-vous de suivi</p>
              <p className="phase-band-text">
                On fait le point : où tu en es, ce qui a avancé, ce qui reste à ajuster.
              </p>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════
            3. FLORIANE / CONFIANCE
        ══════════════════════════════════════ */}
        <section className="section" id="floriane" data-section="floriane-bilan">
          <div className="container">
            <div className="floriane-trust-grid">

              <div className="floriane-trust-text">
                <p className="label fade-in">Pourquoi me faire confiance</p>
                <h2 className="section-title fade-in fade-in-delay-1" style={{ marginTop: '0.5rem' }}>
                  Une méthode éprouvée.<br />
                  Un regard <span className="hl">neuf.</span>
                </h2>
                <div className="floriane-trust-body fade-in fade-in-delay-2">
                  <p>
                    Je travaille en partenariat avec DB Consulting, organisme de formation certifié Qualiopi. J&rsquo;ai été formée à leur méthode par des coachs eux-mêmes consultants en bilan de compétences, avec une expérience solide du terrain. La méthode est rigoureuse et a fait ses preuves.
                  </p>
                  <p>
                    Il n&rsquo;est pas forcément nécessaire de tout changer pour trouver ce qui te correspond. Il n&rsquo;existe pas de modèle universel de réussite, seulement le tien. Mon rôle est de t&rsquo;apporter un cadre, du recul et de la lucidité pour que tu puisses décider sereinement de la suite.
                  </p>
                </div>
                <ul className="trust-pills fade-in fade-in-delay-3" style={{ listStyle: 'none' }}>
                  {garanties.map((g) => (
                    <li key={g} className="trust-pill">{g}</li>
                  ))}
                </ul>
              </div>

              <figure className="trust-quote fade-in fade-in-delay-1">
                <span className="trust-quote-mark" aria-hidden="true">“</span>
                <blockquote>
                  En pleine période d&rsquo;incertitude, j&rsquo;avais besoin d&rsquo;une méthode et d&rsquo;un regard extérieur pour m&rsquo;aider à me recentrer, à écarter les doutes. […] J&rsquo;en sors sereine et grandie.
                </blockquote>
                <figcaption>
                  <strong>Bérengère S.</strong> · Responsable communication, 35 ans
                </figcaption>
              </figure>

            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════
            4. FINANCEMENT
        ══════════════════════════════════════ */}
        <section className="section section-alt" id="financement" data-section="financement">
          <div className="container">

            <div style={{ maxWidth: '760px', margin: '0 auto', textAlign: 'center', marginBottom: '4rem' }}>
              <p className="label fade-in">Financement</p>
              <h2 className="section-title fade-in" style={{ marginTop: '0.5rem' }}>
                Comment <span className="hl">financer</span> ton bilan
              </h2>
              <p className="fade-in fade-in-delay-1" style={{
                fontSize: '1rem', fontWeight: 300, color: 'var(--text-mid)', lineHeight: 1.8, marginTop: '1rem',
              }}>
                Bonne nouvelle : plusieurs solutions existent, selon ta situation.
              </p>
            </div>

            {/* Deux cadres côte à côte — CPF / alternatives */}
            <div className="financement-grid">

              {/* Cadre 1 — Avec ton CPF */}
              <div className="financement-card fade-in">
                <h3 className="financement-card-title">Avec ton CPF</h3>
                <div className="financement-card-text">
                  <p>
                    Tu cotises chaque année sur ton Compte Personnel de Formation, et tu peux l&rsquo;utiliser
                    pour financer ton bilan directement depuis{' '}
                    <a
                      href="https://www.moncompteformation.gouv.fr"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      moncompteformation.gouv.fr
                    </a>
                    . Si tu es dans le privé ou en recherche d&rsquo;emploi, tu n&rsquo;as l&rsquo;accord de
                    personne à demander. Dans le secteur public, l&rsquo;accord de ta hiérarchie peut être
                    nécessaire.
                  </p>
                  <p>
                    Si tes crédits ne couvrent pas la totalité, tu complètes le reste par carte bleue au
                    moment de la réservation sur la plateforme.
                  </p>
                </div>
                <p className="financement-note">
                  <strong>Une chose à savoir :</strong> depuis mars 2026, mobiliser son CPF suppose un reste à charge de{' '}
                  <strong>150&nbsp;€</strong>. Ce montant reste
                  à ta charge même si tes crédits suffisent, donc compte 150 € dans tous les cas. Seuls les
                  demandeurs d&rsquo;emploi en sont exonérés.
                </p>
              </div>

              {/* Cadre 2 — Sans passer par ton CPF */}
              <div className="financement-card fade-in fade-in-delay-1">
                <h3 className="financement-card-title">Sans passer par ton CPF</h3>
                <p className="financement-card-intro">
                  Tu ne peux pas utiliser ton CPF ou tu préfères une autre voie ?
                  Voici les possibilités.
                </p>
                <div>
                  {optionsFinancement.map((opt) => (
                    <div key={opt.titre} className="financement-option">
                      <h4>{opt.titre}</h4>
                      <p>{opt.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* Note — CEP */}
            <div className="cep-grid fade-in fade-in-delay-2">
              <p className="cep-question">
                Pas sûr d&rsquo;avoir besoin d&rsquo;un bilan complet ?
              </p>
              <p className="cep-text">
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
