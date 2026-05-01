import type { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Règlement Intérieur — Fluo Coaching',
  robots: 'noindex, nofollow',
}

export default function ReglementInterieur() {
  return (
    <>
      <Header />
      <main>
        <div className="legal-hero">
          <div className="legal-hero-inner">
            <span className="legal-eyebrow">Document légal</span>
            <h1>Règlement Intérieur</h1>
            <p className="legal-hero-meta">
              Applicable à toutes les prestations de coaching et de bilan de compétences —
              En vigueur au 21.04.2026
            </p>
          </div>
        </div>

        <div className="legal-body">
          <div className="legal-intro">
            Le présent règlement intérieur s'applique à l'ensemble des bénéficiaires d'une
            prestation de coaching ou de bilan de compétences proposée par{' '}
            <strong>Fluo Coaching</strong> (Floriane Perrin de Brichambaut). Pour les bilans
            de compétences financés via le CPF, la prestation est organisée en partenariat
            avec <strong>DB Consulting</strong>, organisme certifié Qualiopi. Un
            exemplaire est remis à chaque bénéficiaire en amont du démarrage de la prestation.
          </div>

          <nav aria-label="Sommaire">
            <div className="legal-toc">
              <p className="legal-toc-heading">Sommaire</p>
              <ol>
                <li><a href="#objet">Objet et champ d'application</a></li>
                <li><a href="#hygiene">Hygiène et sécurité</a></li>
                <li><a href="#comportement">Comportement</a></li>
                <li><a href="#acces">Accès aux sessions</a></li>
                <li><a href="#horaires">Horaires</a></li>
                <li><a href="#sanctions">Sanctions</a></li>
                <li><a href="#garanties">Garanties disciplinaires</a></li>
                <li><a href="#entretien">Convocation pour entretien</a></li>
                <li><a href="#prononce">Prononcé de la sanction</a></li>
                <li><a href="#diffusion">Diffusion du règlement</a></li>
              </ol>
            </div>
          </nav>

          <section className="legal-section" id="objet">
            <h2><span className="sec-num">01</span> Objet et champ d'application du règlement</h2>
            <p>
              Le présent règlement s'applique à toutes les personnes participant à une
              prestation organisée par Fluo Coaching. Un exemplaire est remis à chaque
              bénéficiaire. Le règlement définit les principales mesures applicables en matière
              de santé et sécurité, les règles générales et permanentes relatives à la
              discipline ainsi que la nature et l'échelle des sanctions pouvant être prises
              vis-à-vis des bénéficiaires qui y contreviennent et les garanties procédurales
              applicables lorsqu'une sanction est envisagée. Toute personne doit respecter les
              termes du présent règlement durant toute la durée de la prestation.
            </p>
          </section>

          <section className="legal-section" id="hygiene">
            <h2><span className="sec-num">02</span> Hygiène et sécurité</h2>
            <p>
              La prévention des risques d'accidents et de maladies est impérative et exige de
              chacun le respect total de toutes les prescriptions applicables en matière
              d'hygiène et de sécurité. Dans le cadre des sessions en visioconférence, il est
              impératif de respecter les règles d'hygiène et de sécurité du lieu où est
              réalisée la prestation, notamment le lieu de travail ou le domicile du
              bénéficiaire.
            </p>
            <p>
              Fluo Coaching ne pourra être tenue responsable d'incidents ou d'accidents
              survenus à distance pendant les heures de prestation, et en particulier liés à
              l'utilisation des outils informatiques et d'internet.
            </p>
          </section>

          <section className="legal-section" id="comportement">
            <h2><span className="sec-num">03</span> Comportement</h2>
            <p>
              Il est demandé à tout bénéficiaire d'avoir un comportement garantissant le
              respect des règles élémentaires de savoir-vivre, de savoir-être et le bon
              déroulement des prestations. Tout propos inapproprié (harcèlement, racisme…)
              tenu par le bénéficiaire sur quelque support que ce soit de la prestation est
              passible d'exclusion définitive.
            </p>
          </section>

          <section className="legal-section" id="acces">
            <h2><span className="sec-num">04</span> Accès aux sessions</h2>
            <p>
              L'accès aux sessions se fait exclusivement en visioconférence, via l'outil
              retenu d'un commun accord entre Fluo Coaching et le bénéficiaire{' '}
              Google Meet. Les accès et
              informations de connexion sont remis au bénéficiaire en amont de chaque session.
            </p>
            <div className="legal-note">
              <strong>Connexion :</strong> Le bénéficiaire s'assure de disposer d'une connexion
              internet stable et d'un environnement calme et confidentiel pour chaque session.
            </div>
          </section>

          <section className="legal-section" id="horaires">
            <h2><span className="sec-num">05</span> Horaires</h2>
            <p>
              Les horaires de chaque session sont fixés conjointement par Fluo Coaching et le
              bénéficiaire. Fluo Coaching se réserve, dans les limites imposées par les
              dispositions en vigueur, le droit de modifier les horaires en fonction des
              nécessités, en informant le bénéficiaire suffisamment à l'avance.
            </p>
            <p>
              Les bénéficiaires sont tenus de se conformer aux horaires communiqués. En cas
              d'absence ou de retard, le bénéficiaire doit avertir Fluo Coaching par e-mail
              à <a href="mailto:floriane@fluocoaching.com" style={{ color: 'var(--text-mid)' }}>floriane@fluocoaching.com</a> et justifier son absence. Les
              bénéficiaires ne peuvent s'absenter pendant les heures de prestation, sauf
              circonstances exceptionnelles.
            </p>
            <p>
              Toute absence ou retard non justifié par des circonstances particulières
              constitue une faute passible de sanctions disciplinaires telles que prévues au
              présent règlement. Fluo Coaching ne pourra être tenue responsable par le
              bénéficiaire de n'avoir pas bénéficié des échanges dispensés pendant son absence
              ou ses retards.
            </p>
          </section>

          <section className="legal-section" id="sanctions">
            <h2><span className="sec-num">06</span> Sanctions</h2>
            <p>
              Tout manquement du bénéficiaire à l'une des prescriptions du présent règlement
              intérieur pourra faire l'objet d'une sanction prononcée par Fluo Coaching. Tout
              agissement considéré comme fautif pourra, en fonction de sa nature et de sa
              gravité, faire l'objet de l'une ou l'autre des sanctions suivantes :
            </p>
            <ul>
              <li>Avertissement oral de Fluo Coaching</li>
              <li>Avertissement écrit de Fluo Coaching, avec remontée de l'information à l'employeur le cas échéant</li>
              <li>Exclusion définitive de la prestation avec notification officielle envoyée par e-mail au bénéficiaire et, le cas échéant, à son employeur</li>
            </ul>
          </section>

          <section className="legal-section" id="garanties">
            <h2><span className="sec-num">07</span> Garanties disciplinaires</h2>
            <p>
              Aucune sanction ne peut être infligée au bénéficiaire sans que celui-ci ne soit
              informé dans le même temps et par écrit des griefs retenus contre lui. Lorsque
              Fluo Coaching envisage une sanction, elle convoque le bénéficiaire par lettre
              recommandée avec accusé de réception ou remise à l'intéressé contre décharge,
              en lui indiquant l'objet de la convocation, la date, l'heure et les modalités
              de l'entretien — sauf si la sanction envisagée n'a pas d'incidence sur la
              poursuite de la prestation.
            </p>
          </section>

          <section className="legal-section" id="entretien">
            <h2><span className="sec-num">08</span> Convocation pour un entretien</h2>
            <p>
              Au cours de l'entretien, le bénéficiaire a la possibilité de se faire assister
              par une personne de son choix. La convocation mentionnée à l'article précédent
              fait état de cette faculté. Lors de l'entretien, le motif de la sanction
              envisagée est indiqué au bénéficiaire : celui-ci a alors la possibilité de
              donner toute explication ou justification des faits qui lui sont reprochés.
            </p>
          </section>

          <section className="legal-section" id="prononce">
            <h2><span className="sec-num">09</span> Prononcé de la sanction</h2>
            <p>
              La sanction ne peut intervenir moins d'un jour franc ni plus de 15 jours après
              l'entretien. Elle fait l'objet d'une notification écrite et motivée au
              bénéficiaire sous forme de lettre recommandée ou d'une lettre remise contre
              décharge. Fluo Coaching informe l'employeur de la sanction prise et, le cas
              échéant, l'organisme paritaire prenant en charge les frais de la prestation.
            </p>
          </section>

          <section className="legal-section" id="diffusion">
            <h2><span className="sec-num">10</span> Diffusion du règlement intérieur</h2>
            <p>
              Le règlement intérieur est transmis par e-mail aux bénéficiaires en amont du
              démarrage de la prestation et est consultable à tout moment sur le site{' '}
              www.fluocoaching.com.
            </p>
          </section>

          <div className="legal-signature">
            <strong>Fait à Paris, le 21.04.2026</strong>
            <span>Signé par Floriane Perrin de Brichambaut</span>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
