import type { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Conditions Générales de Vente — Fluo Coaching',
  robots: 'noindex, nofollow',
}

export default function CGV() {
  return (
    <>
      <Header />
      <main>
        <div className="legal-hero">
          <div className="legal-hero-inner">
            <span className="legal-eyebrow">Document légal</span>
            <h1>Conditions Générales<br />de Vente</h1>
            <p className="legal-hero-meta">
              Applicables aux prestations de coaching individuel — En vigueur au 21.04.2026
            </p>
          </div>
        </div>

        <div className="legal-body">
          <div className="legal-intro">
            Les présentes Conditions Générales de Vente s'appliquent aux prestations de{' '}
            <strong>coaching individuel</strong> engagées directement par{' '}
            <strong>Fluo Coaching</strong> pour le compte d'un Client. Elles ne couvrent pas
            les bilans de compétences financés via le CPF, qui sont réalisés dans le cadre
            d'un partenariat de sous-traitance avec DB Consulting et régis par leurs
            propres conditions. Le fait de s'inscrire ou de passer commande implique
            l'adhésion entière et sans réserve du Client aux présentes CGV.
          </div>

          <nav aria-label="Sommaire">
            <div className="legal-toc">
              <p className="legal-toc-heading">Sommaire</p>
              <ol>
                <li><a href="#designation">Désignation</a></li>
                <li><a href="#objet">Objet et champ d'application</a></li>
                <li><a href="#tarifs">Conditions financières et paiement</a></li>
                <li><a href="#dedit">Dédit et remplacement</a></li>
                <li><a href="#annulation">Annulation, report, absence</a></li>
                <li><a href="#devis">Devis et attestation</a></li>
                <li><a href="#obligations">Obligations et force majeure</a></li>
                <li><a href="#propriete">Propriété intellectuelle</a></li>
                <li><a href="#programme">Descriptif et programme</a></li>
                <li><a href="#confidentialite">Confidentialité</a></li>
                <li><a href="#donnees">Protection des données personnelles</a></li>
                <li><a href="#rgpd">RGPD</a></li>
                <li><a href="#cpf">Bilan de compétences via CPF</a></li>
                <li><a href="#droit">Droit applicable et juridiction</a></li>
              </ol>
            </div>
          </nav>

          <section className="legal-section" id="designation">
            <h2><span className="sec-num">01</span> Désignation</h2>
            <p>
              <strong>Fluo Coaching</strong> est une activité de coaching professionnel
              individuel exercée par Floriane Perrin de Brichambaut, coach certifiée ICF,
              sous le statut de micro-entreprise, basée à Paris — SIRET&nbsp;999&nbsp;460&nbsp;637&nbsp;00013.
              Les prestations de coaching sont dispensées exclusivement en visioconférence.
            </p>
            <p>
              Pour les bilans de compétences financés via le CPF, Fluo Coaching intervient en
              qualité de sous-traitante de <strong>DB Consulting</strong>, organisme
              de formation certifié Qualiopi. Dans ce cadre, la relation contractuelle avec
              le bénéficiaire est établie directement avec DB Consulting.
            </p>
            <p>Dans les paragraphes qui suivent, il est convenu de désigner par :</p>
            <ul>
              <li><strong>Client</strong> : toute personne physique qui s'inscrit ou passe commande d'une prestation de coaching directement auprès de Fluo Coaching.</li>
              <li><strong>Bénéficiaire</strong> : la personne physique qui participe à la prestation.</li>
              <li><strong>Coaching individuel</strong> : accompagnement structuré visant à explorer et clarifier un projet professionnel ou personnel (transition de carrière, prise de poste, développement de potentiel…).</li>
              <li><strong>DB Consulting</strong> : organisme de formation partenaire, certifié Qualiopi, dans le cadre duquel Fluo Coaching réalise les bilans de compétences financés par CPF.</li>
              <li><strong>CGV</strong> : les présentes conditions générales de vente.</li>
            </ul>
          </section>

          <section className="legal-section" id="objet">
            <h2><span className="sec-num">02</span> Objet et champ d'application</h2>
            <p>
              Les présentes CGV régissent exclusivement les prestations de{' '}
              <strong>coaching individuel à financement direct</strong> (paiement personnel,
              prise en charge employeur hors CPF). Elles s'appliquent dès lors qu'un Client
              accepte un devis ou s'inscrit à une prestation auprès de Fluo Coaching.
            </p>
            <p>
              Les bilans de compétences financés via le Compte Personnel de Formation (CPF)
              sont exclus du champ des présentes CGV. Ils relèvent du contrat conclu entre
              le bénéficiaire et DB Consulting, dont les conditions sont disponibles
              directement auprès de cet organisme.
            </p>
          </section>

          <section className="legal-section" id="tarifs">
            <h2><span className="sec-num">03</span> Conditions financières, règlements et modalités de paiement</h2>
            <p>
              Tous les prix sont indiqués en euros. Fluo Coaching n'est pas assujettie à la
              TVA au titre de l'article 293&nbsp;B du CGI (micro-entreprise) — les prix
              affichés sont donc des prix nets, sans TVA.
            </p>
            <p>
              Le règlement du prix de la prestation est à effectuer en échéances selon les
              modalités suivantes :
            </p>
            <div className="table-scroll">
              <table className="legal-table">
                <thead>
                  <tr>
                    <th>Échéance</th>
                    <th>Montant</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Au début de la prestation</td>
                    <td><strong>25 %</strong> du prix total</td>
                  </tr>
                  <tr>
                    <td>En fin de prestation</td>
                    <td><strong>75 %</strong> du prix total (solde)</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p style={{ marginTop: '1rem' }}>
              Toute somme non payée à échéance entraîne de plein droit et sans mise en demeure
              préalable l'application de pénalités d'un montant égal à une fois et demie le
              taux d'intérêt légal.
            </p>
            <div className="legal-note">
              <strong>Moyen de paiement accepté :</strong> Virement bancaire.
            </div>
          </section>

          <section className="legal-section" id="dedit">
            <h2><span className="sec-num">04</span> Dédit et remplacement d'un participant</h2>
            <p>
              En cas de dédit signifié par le Client à Fluo Coaching au moins 7 jours avant
              le démarrage de la prestation, Fluo Coaching offre au Client la possibilité :
            </p>
            <ul>
              <li>De repousser le démarrage de la prestation à une date ultérieure, dûment programmée ;</li>
              <li>De remplacer le bénéficiaire empêché par une autre personne présentant le même profil et les mêmes besoins.</li>
            </ul>
          </section>

          <section className="legal-section" id="annulation">
            <h2><span className="sec-num">05</span> Annulation, report, absence ou interruption d'une prestation</h2>
            <p>
              Toute prestation commencée est due dans son intégralité et fera l'objet d'une
              facturation au Client. En cas d'absence, d'interruption ou d'annulation en cours
              de prestation, la facturation distinguera le prix correspondant aux séances
              effectivement suivies et les sommes dues au titre des séances non honorées.
            </p>
            <p>
              En cas d'annulation avant le démarrage, des frais sont calculés comme suit :
            </p>
            <div className="table-scroll">
              <table className="legal-table">
                <thead>
                  <tr>
                    <th>Délai d'annulation avant le démarrage</th>
                    <th>Frais d'annulation</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Plus de 7 jours ouvrables avant</td>
                    <td>Aucun frais</td>
                  </tr>
                  <tr>
                    <td>Moins de 7 jours ouvrables avant</td>
                    <td><strong>100 %</strong> du prix de la prestation</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p style={{ marginTop: '1rem' }}>
              Toute annulation ou report doit être signalée par écrit à{' '}
              <a href="mailto:floriane@fluocoaching.com" style={{ color: 'var(--text-mid)' }}>
                floriane@fluocoaching.com
              </a>.
            </p>
          </section>

          <section className="legal-section" id="devis">
            <h2><span className="sec-num">06</span> Devis et attestation</h2>
            <p>
              Pour chaque prestation, un devis est adressé par Fluo Coaching au Client. Le
              devis dûment renseigné, daté, signé et revêtu de la mention{' '}
              <em>« Bon pour accord »</em> doit être retourné à Fluo Coaching par tout moyen
              à la convenance du Client (courrier postal, e-mail).
            </p>
            <p>
              À l'issue de la prestation, une attestation de suivi est remise au bénéficiaire.
              Une attestation de présence peut être fournie sur demande.
            </p>
          </section>

          <section className="legal-section" id="obligations">
            <h2><span className="sec-num">07</span> Obligations et force majeure</h2>
            <p>
              Dans le cadre de ses prestations, Fluo Coaching est tenue à une{' '}
              <strong>obligation de moyen</strong> et non de résultat. Fluo Coaching ne pourra
              être tenue responsable en cas d'inexécution de ses obligations résultant d'un
              événement fortuit ou de force majeure.
            </p>
            <p>
              Sont considérés comme cas de force majeure : maladie ou accident de la
              prestataire, grèves, désastres naturels, incendies, interruption des
              télécommunications ou de l'énergie, ou toute autre circonstance échappant au
              contrôle raisonnable de Fluo Coaching.
            </p>
          </section>

          <section className="legal-section" id="propriete">
            <h2><span className="sec-num">08</span> Propriété intellectuelle et copyright</h2>
            <p>
              L'ensemble des contenus et supports utilisés par Fluo Coaching (fiches,
              outils, méthodologies, supports pédagogiques, quelle qu'en soit la forme)
              constituent des œuvres originales protégées par la propriété intellectuelle.
              Le Client et le bénéficiaire s'interdisent d'utiliser, reproduire, exploiter
              ou transformer tout ou partie de ces éléments sans accord exprès de Fluo
              Coaching, notamment à des fins d'animation de prestations similaires.
            </p>
          </section>

          <section className="legal-section" id="programme">
            <h2><span className="sec-num">09</span> Descriptif et programme des prestations</h2>
            <p>
              Les contenus des programmes fournis à titre indicatif peuvent être adaptés par
              Fluo Coaching en fonction du niveau et des besoins du bénéficiaire, ou de la
              dynamique de l'accompagnement.
            </p>
          </section>

          <section className="legal-section" id="confidentialite">
            <h2><span className="sec-num">10</span> Confidentialité et communication</h2>
            <p>
              Fluo Coaching, le Client et le bénéficiaire s'engagent à garder confidentiels
              les documents et informations auxquels ils auraient accès au cours de la
              prestation ou lors des échanges préalables à l'inscription.
            </p>
            <p>
              Fluo Coaching s'engage à ne pas communiquer à des tiers les informations
              transmises par le Client. Cependant, le Client accepte d'être cité par Fluo
              Coaching comme client de ses prestations, à des fins de référence professionnelle.
            </p>
          </section>

          <section className="legal-section" id="donnees">
            <h2><span className="sec-num">11</span> Protection et accès aux informations à caractère personnel</h2>
            <p>
              Le Client est informé que des données à caractère personnel le concernant sont
              collectées et traitées aux fins de suivi de la prestation. Conformément à la
              loi n°78-17 du 6 janvier 1978, il dispose d'un droit d'accès, de modification
              et de rectification de ses données. Fluo Coaching conservera ces données pour
              une durée n'excédant pas la durée nécessaire à l'appréciation de la prestation.
            </p>
          </section>

          <section className="legal-section" id="rgpd">
            <h2><span className="sec-num">12</span> RGPD</h2>
            <p>
              Les informations échangées dans le cadre de la prestation (parcours, projets,
              motivations…) sont conservées dans un dossier sécurisé, sous la responsabilité
              exclusive de Floriane Perrin de Brichambaut, uniquement aux fins de la gestion
              du processus d'accompagnement.
            </p>
            <p>
              Ces données sont accessibles uniquement à Floriane Perrin de Brichambaut et
              sont détruites <strong>3 ans</strong> après le dernier contact. Elles peuvent
              être supprimées à tout moment sur demande du bénéficiaire, par e-mail à{' '}
              <a href="mailto:floriane@fluocoaching.com" style={{ color: 'var(--text-mid)' }}>
                floriane@fluocoaching.com
              </a>.
            </p>
          </section>

          <section className="legal-section" id="cpf">
            <h2><span className="sec-num">13</span> Bilan de compétences via CPF</h2>
            <p>
              Les bilans de compétences financés via le Compte Personnel de Formation (CPF)
              sont réalisés dans le cadre d'un <strong>partenariat de sous-traitance avec
              DB Consulting</strong>, organisme de formation certifié Qualiopi.
            </p>
            <p>Dans ce cadre :</p>
            <ul>
              <li>Le contrat est conclu directement entre le bénéficiaire et <strong>DB Consulting</strong>, qui est le seul interlocuteur contractuel du bénéficiaire ;</li>
              <li>Les conditions générales et le règlement intérieur d'DB Consulting s'appliquent à la relation avec le bénéficiaire ;</li>
              <li>Fluo Coaching intervient en qualité de <strong>sous-traitante</strong> pour la délivrance de la prestation ; elle n'est pas partie au contrat conclu entre le bénéficiaire et DB Consulting ;</li>
              <li>La facturation CPF est gérée par DB Consulting via la plateforme Mon Compte Formation ;</li>
              <li>Tout litige relatif à un bilan CPF doit être adressé à DB Consulting.</li>
            </ul>
            <div className="legal-note">
              Les présentes CGV ne s'appliquent donc <strong>pas</strong> aux bilans de
              compétences réalisés dans ce cadre. Pour toute information, contacter{' '}
              <a href="mailto:floriane@fluocoaching.com" style={{ color: 'var(--text-mid)' }}>
                floriane@fluocoaching.com
              </a>.
            </div>
          </section>

          <section className="legal-section" id="droit">
            <h2><span className="sec-num">14</span> Droit applicable et juridiction compétente</h2>
            <p>
              Les présentes CGV sont régies par le droit français. En cas de litige entre le
              Client et Fluo Coaching, une solution amiable sera recherchée en priorité.
            </p>
            <p>
              Conformément à l'article L.612-1 du Code de la consommation, tout consommateur
              peut recourir gratuitement à un médiateur de la consommation. Fluo Coaching
              propose la médiation auprès de la <strong>SMP — Société de Médiation
              Professionnelle</strong> :{' '}
              <a href="https://www.smp-mediation.fr" target="_blank" rel="noopener" style={{ color: 'var(--text-mid)' }}>
                www.smp-mediation.fr
              </a>.
            </p>
            <p>
              À défaut de résolution amiable, le Tribunal de Paris sera seul compétent.
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </>
  )
}
