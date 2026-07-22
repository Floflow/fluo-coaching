import type { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Charte Éthique et Déontologique — Fluo Coaching',
  robots: 'noindex, nofollow',
}

const engagements = [
  "Délivrer toutes les informations utiles au bénéficiaire avant le démarrage du bilan de compétences ou de la prestation de coaching.",
  "Engager avec le bénéficiaire une relation qui le responsabilise et le conduit à être acteur de son bilan ou de son accompagnement.",
  "Créer les conditions matérielles assurant la discrétion des échanges.",
  "Respecter la confidentialité des échanges entre l'intervenante et le bénéficiaire.",
  "Ne délivrer la synthèse du bilan de compétences qu'au bénéficiaire et lui en rappeler la confidentialité. En aucun cas, elle ne sera transmise à quiconque, sauf accord écrit du bénéficiaire.",
  "Fonder la démarche d'accompagnement sur la qualité de la relation instaurée, l'écoute et l'utilisation d'outils tels que les questionnaires d'évaluation et tests.",
  "Formaliser dans un contrat ou une convention les modalités de réalisation du bilan ou de la prestation — sauf cas de contractualisation par la plateforme Mon Compte Formation. Le document contractuel est signé par le bénéficiaire, l'intervenante et, s'il y a lieu, le commanditaire.",
  "Accompagner le bénéficiaire tout au long des phases du bilan ou de la prestation au cours d'entretiens individuels.",
  "Adopter une posture neutre sans jugement lors de l'accompagnement du bénéficiaire.",
  "Garantir au bénéficiaire un accompagnement par un même consultant tout au long de son bilan ou de sa prestation.",
  "Rendre accessible au bénéficiaire une synthèse écrite reprenant les éléments essentiels du bilan ou de la prestation.",
  "Évaluer avec le bénéficiaire la qualité de la prestation.",
  "Assurer la professionnalisation de l'intervenante par la mise en place d'actions de formation continue adaptées.",
  "La synthèse de l'intervention est conservée durant 12 mois après la fin du bilan ou de la prestation, comme l'autorise la loi.",
  "Proposer au bénéficiaire du bilan de compétences un suivi à 6 mois pour faire le point sur la concrétisation de son projet professionnel et mettre en place des actions correctives en fonction de l'état d'avancement du projet.",
]

export default function CharteEthique() {
  return (
    <>
      <Header />
      <main>
        <div className="legal-hero">
          <div className="legal-hero-inner">
            <span className="legal-eyebrow">Document légal</span>
            <h1>Charte Éthique et Déontologique</h1>
            <p className="legal-hero-meta">
              Les engagements de Fluo Coaching envers chaque bénéficiaire
            </p>
          </div>
        </div>

        <div className="legal-body">
          <div className="legal-intro">
            <strong>Fluo Coaching</strong>, dans le cadre de son bilan de compétences et de ses
            prestations de coaching, s&rsquo;engage à respecter les principes éthiques et
            déontologiques suivants envers chaque bénéficiaire.
          </div>

          <ol className="engagements" aria-label="Engagements de Fluo Coaching">
            {engagements.map((texte, i) => (
              <li key={i} className="engagement-item">
                <span className="engagement-num">{i + 1}</span>
                <p className="engagement-text">{texte}</p>
              </li>
            ))}

            <li className="engagement-item">
              <span className="engagement-num">16</span>
              <p className="engagement-text">
                Garantir le consentement, la clause de conscience et le secret professionnel.{' '}
                <strong>Clause de conscience</strong> : l&rsquo;intervenante est libre
                d&rsquo;accepter ou de refuser l&rsquo;accompagnement.{' '}
                <strong>Secret professionnel</strong> : l&rsquo;intervenante est tenue au secret
                professionnel, régit par le Code Pénal, pour tout ce qui concerne le
                bénéficiaire du bilan.
              </p>
            </li>
          </ol>
        </div>
      </main>
      <Footer />
    </>
  )
}
