import type { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Mentions Légales — Fluo Coaching',
  robots: 'noindex, nofollow',
}

export default function MentionsLegales() {
  return (
    <>
      <Header />
      <main>
        <div className="legal-hero">
          <div className="legal-hero-inner">
            <span className="legal-eyebrow">Document légal</span>
            <h1>Mentions Légales</h1>
            <p className="legal-hero-meta">
              Conformément aux articles 6-III et 19 de la Loi n°&nbsp;2004-575 du 21 juin 2004
              pour la Confiance dans l'économie numérique (L.C.E.N.)
            </p>
          </div>
        </div>

        <div className="legal-body">
          <div className="legal-intro">
            Conformément aux dispositions des articles 6-III et 19 de la Loi n°&nbsp;2004-575
            du 21 juin 2004 pour la Confiance dans l'économie numérique, nous portons à la
            connaissance des utilisateurs et visiteurs du site{' '}
            <strong>www.fluocoaching.com</strong>{' '}
            les informations suivantes.
          </div>

          <nav aria-label="Sommaire">
            <div className="legal-toc">
              <p className="legal-toc-heading">Sommaire</p>
              <ol>
                <li><a href="#infos-legales">Informations légales</a></li>
                <li><a href="#presentation">Présentation et principe</a></li>
                <li><a href="#accessibilite">Accessibilité</a></li>
                <li><a href="#propriete">Propriété intellectuelle</a></li>
                <li><a href="#liens-cookies">Liens hypertextes et cookies</a></li>
                <li><a href="#donnees">Protection des données personnelles</a></li>
                <li><a href="#responsabilite">Limitation de responsabilité</a></li>
              </ol>
            </div>
          </nav>

          <section className="legal-section" id="infos-legales">
            <h2><span className="sec-num">01</span> Informations légales</h2>

            <h3>1.1 Éditeur du site</h3>
            <div className="legal-info-table">
              <div className="legal-info-row">
                <div className="legal-info-key">Nom commercial</div>
                <div className="legal-info-val">Fluo Coaching</div>
              </div>
              <div className="legal-info-row">
                <div className="legal-info-key">Représentant légal</div>
                <div className="legal-info-val">Floriane Perrin de Brichambaut</div>
              </div>
              <div className="legal-info-row">
                <div className="legal-info-key">Adresse</div>
                <div className="legal-info-val"><span className="ph">[ADRESSE]</span></div>
              </div>
              <div className="legal-info-row">
                <div className="legal-info-key">Code postal</div>
                <div className="legal-info-val"><span className="ph">[CODE POSTAL]</span></div>
              </div>
              <div className="legal-info-row">
                <div className="legal-info-key">Ville</div>
                <div className="legal-info-val">Paris</div>
              </div>
              <div className="legal-info-row">
                <div className="legal-info-key">Téléphone</div>
                <div className="legal-info-val">06 88 41 19 44</div>
              </div>
              <div className="legal-info-row">
                <div className="legal-info-key">Forme juridique</div>
                <div className="legal-info-val">Micro-entreprise</div>
              </div>
            </div>

            <h3>1.2 Activité</h3>
            <div className="legal-info-table">
              <div className="legal-info-row">
                <div className="legal-info-key">SIRET</div>
                <div className="legal-info-val">999 460 637 00013</div>
              </div>
              <div className="legal-info-row">
                <div className="legal-info-key">TVA intracommunautaire</div>
                <div className="legal-info-val">Non assujettie (article 293&nbsp;B du CGI)</div>
              </div>
              <div className="legal-info-row">
                <div className="legal-info-key">Bilans de compétences (CPF)</div>
                <div className="legal-info-val">Réalisés en sous-traitance de e-Coaching Associates — organisme certifié Qualiopi</div>
              </div>
            </div>

            <h3>1.3 Site internet</h3>
            <div className="legal-info-table">
              <div className="legal-info-row">
                <div className="legal-info-key">Domaine</div>
                <div className="legal-info-val">www.fluocoaching.com</div>
              </div>
            </div>

            <h3>1.4 Responsable de la publication</h3>
            <div className="legal-info-table">
              <div className="legal-info-row">
                <div className="legal-info-key">Responsable</div>
                <div className="legal-info-val">Floriane Perrin de Brichambaut</div>
              </div>
              <div className="legal-info-row">
                <div className="legal-info-key">E-mail</div>
                <div className="legal-info-val">floriane@fluocoaching.com</div>
              </div>
              <div className="legal-info-row">
                <div className="legal-info-key">Téléphone</div>
                <div className="legal-info-val">06 88 41 19 44</div>
              </div>
              <div className="legal-info-row">
                <div className="legal-info-key">Tribunal compétent</div>
                <div className="legal-info-val">Tribunal de Paris</div>
              </div>
            </div>

            <h3>1.5 Hébergement</h3>
            <div className="legal-info-table">
              <div className="legal-info-row">
                <div className="legal-info-key">Hébergeur</div>
                <div className="legal-info-val">Vercel Inc.</div>
              </div>
              <div className="legal-info-row">
                <div className="legal-info-key">Adresse</div>
                <div className="legal-info-val">340 S Lemon Ave #4133, Walnut, CA 91789</div>
              </div>
              <div className="legal-info-row">
                <div className="legal-info-key">Site</div>
                <div className="legal-info-val">vercel.com</div>
              </div>
            </div>
          </section>

          <section className="legal-section" id="presentation">
            <h2><span className="sec-num">02</span> Présentation et principe</h2>
            <p>
              Est désigné ci-après <strong>Utilisateur</strong>, tout internaute se connectant
              et utilisant le site www.fluocoaching.com.
            </p>
            <p>
              Floriane Perrin de Brichambaut s'efforce de fournir sur le site les informations
              les plus précises et à jour possibles (sous réserve de modifications apportées
              depuis leur mise en ligne), mais ne saurait garantir l'exactitude, la complétude
              et l'actualité des informations diffusées sur son site, qu'elles soient de son
              fait ou du fait de tiers partenaires qui lui fournissent ces informations. En
              conséquence, l'Utilisateur est invité à s'assurer de l'exactitude des informations
              et à signaler toute modification qu'il jugerait utile. Floriane Perrin de
              Brichambaut n'est en aucun cas responsable de l'utilisation faite de ces
              informations, ni de tout préjudice direct ou indirect pouvant en découler.
            </p>
          </section>

          <section className="legal-section" id="accessibilite">
            <h2><span className="sec-num">03</span> Accessibilité</h2>
            <p>
              Le site www.fluocoaching.com est par principe accessible aux
              utilisateurs 24h/24, 7j/7, sauf interruption programmée ou non pour les besoins
              de sa maintenance ou en cas de force majeure. En cas d'impossibilité d'accès au
              service, Floriane Perrin de Brichambaut s'engage à faire son maximum afin de
              rétablir l'accès au service. N'étant soumise qu'à une obligation de moyen, elle
              ne saurait être tenue responsable de tout dommage, quelle qu'en soit la nature,
              résultant d'une indisponibilité du service.
            </p>
          </section>

          <section className="legal-section" id="propriete">
            <h2><span className="sec-num">04</span> Propriété intellectuelle</h2>
            <p>
              Floriane Perrin de Brichambaut est propriétaire exclusif de tous les droits de
              propriété intellectuelle ou détient les droits d'usage sur tous les éléments
              accessibles sur le site, tant sur la structure que sur les textes, images,
              graphismes, logo, icônes, sons, logiciels…
            </p>
            <p>
              Toute reproduction totale ou partielle du site, représentation, modification,
              publication, adaptation totale ou partielle de l'un quelconque de ces éléments
              est interdite, sauf autorisation écrite préalable de Floriane Perrin de
              Brichambaut. À défaut, elle sera considérée comme constitutive d'une contrefaçon
              et passible de poursuites conformément aux dispositions des articles L.335-2 et
              suivants du Code de la Propriété Intellectuelle.
            </p>
          </section>

          <section className="legal-section" id="liens-cookies">
            <h2><span className="sec-num">05</span> Liens hypertextes et cookies</h2>

            <h3>5.1 Liens hypertextes</h3>
            <p>
              Le site www.fluocoaching.com peut contenir des liens
              hypertextes vers d'autres sites. Floriane Perrin de Brichambaut ne dispose
              d'aucun moyen pour contrôler les sites en connexion avec son site internet et
              ne répond pas de la disponibilité de tels sites et sources externes, ni ne la
              garantit. Elle ne peut être tenue responsable de tout dommage, de quelque nature
              que ce soit, résultant du contenu de ces sites ou sources externes, et notamment
              des informations, produits ou services qu'ils proposent.
            </p>
            <p>
              Si vous naviguez vers un de ces sites, veuillez noter qu'ils possèdent leur
              propre politique de confidentialité et que notre responsabilité s'arrête au moment
              où vous quittez notre site.
            </p>
            <p>
              Les propriétaires de sites internet tiers ne peuvent mettre en place un hyperlien
              en direction de ce site sans l'autorisation expresse et préalable de Floriane
              Perrin de Brichambaut, qui se réserve le droit d'accepter ou de refuser un
              hyperlien sans avoir à en justifier sa décision.
            </p>

            <h3>5.2 Cookies</h3>
            <p>
              L'Utilisateur est informé que lors de ses visites sur le site, un ou des cookies
              sont susceptibles de s'installer automatiquement sur son ordinateur par
              l'intermédiaire de son logiciel de navigation. Un cookie est un bloc de données
              qui ne permet pas d'identifier l'utilisateur, mais qui enregistre des informations
              relatives à la navigation de celui-ci sur le site. Il contient plusieurs données
              stockées sur votre ordinateur dans un simple fichier texte auquel un serveur
              accède pour lire et enregistrer des informations.
            </p>
            <p>
              Le paramétrage du logiciel de navigation permet d'informer de la présence de
              cookies et, le cas échéant, de les refuser, selon les modalités décrites à
              l'adresse suivante :{' '}
              <a href="https://www.cnil.fr" target="_blank" rel="noopener" style={{ color: 'var(--text-mid)', textUnderlineOffset: '3px' }}>
                www.cnil.fr
              </a>.
            </p>

            <h3>5.3 Cookies tiers</h3>
            <p>
              Notre site peut contenir des liens vers ou depuis des sites partenaires et
              d'autres sites tiers. Si vous naviguez vers un de ces sites, veuillez noter
              qu'ils possèdent leur propre politique de confidentialité et que notre
              responsabilité s'arrête au moment où vous quittez notre site. Vérifiez les
              politiques de confidentialité avant de transmettre vos données personnelles à
              des sites tiers.
            </p>
          </section>

          <section className="legal-section" id="donnees">
            <h2><span className="sec-num">06</span> Protection des biens et des personnes — gestion des données personnelles</h2>
            <p>
              L'Utilisateur est informé des réglementations concernant la communication
              marketing, la loi du 21 juin 2014 pour la confiance dans l'Économie Numérique,
              la loi Informatique et Libertés du 06 août 2004 ainsi que du Règlement Général
              sur la Protection des Données (RGPD : n°&nbsp;2016-679).
            </p>

            <h3>6.1 Responsable de la collecte des données personnelles</h3>
            <p>
              Pour les données personnelles collectées dans le cadre de la navigation sur le
              site, le responsable du traitement est Floriane Perrin de Brichambaut. En tant
              que responsable du traitement des données qu'elle collecte, Fluo Coaching
              s'engage à respecter le cadre des dispositions légales en vigueur, notamment à
              établir les finalités de ses traitements de données, à fournir une information
              complète aux visiteurs sur le traitement de leurs données personnelles et à
              maintenir un registre des traitements conforme à la réalité. Fluo Coaching prend
              toutes les mesures raisonnables pour s'assurer de l'exactitude et de la
              pertinence des données personnelles au regard des finalités pour lesquelles elles
              sont traitées.
            </p>

            <h3>6.2 Finalité des données collectées</h3>
            <p>Fluo Coaching est susceptible de traiter tout ou partie des données :</p>
            <ul>
              <li>Pour permettre la navigation sur le site : données de connexion et d'utilisation</li>
              <li>Pour prévenir et lutter contre la fraude informatique (spamming, hacking…) : matériel informatique utilisé pour la navigation, adresse IP, pages visitées</li>
              <li>Pour améliorer la navigation sur le site : données de connexion et d'utilisation</li>
            </ul>
            <p>
              Fluo Coaching ne commercialise pas vos données personnelles, qui sont uniquement
              utilisées par nécessité ou à des fins statistiques et d'analyses.
            </p>
          </section>

          <section className="legal-section" id="responsabilite">
            <h2><span className="sec-num">07</span> Limitation de responsabilité</h2>
            <p>
              Les informations contenues sur ce site sont aussi précises que possible et le
              site est périodiquement remis à jour, mais peut toutefois contenir des
              inexactitudes, des omissions ou des lacunes. Si vous constatez une lacune, une
              erreur ou ce qui paraît être un dysfonctionnement, merci de bien vouloir le
              signaler par e-mail en décrivant le problème de la manière la plus précise
              possible. Fluo Coaching ne peut pas être tenue responsable des lacunes, erreurs
              ou dysfonctionnements engendrés.
            </p>
            <p>
              Tout contenu téléchargé se fait aux risques et périls de l'Utilisateur et sous
              sa seule responsabilité. Par conséquent, Floriane Perrin de Brichambaut ne
              saurait être tenue responsable d'un quelconque dommage subi par l'ordinateur
              de l'Utilisateur ou d'une quelconque perte de données consécutive au
              téléchargement.
            </p>
            <p>
              Les liens hypertextes mis en place dans le cadre du présent site internet en
              direction d'autres ressources présentes sur le réseau Internet ne sauraient
              engager la responsabilité de Floriane Perrin de Brichambaut.
            </p>
            <div className="legal-note">
              <strong>À propos des mentions légales :</strong> Les mentions légales définies
              sur cette page s'appliquent à l'ensemble du présent site internet et sont
              susceptibles d'évoluer sans préavis. L'Utilisateur est invité à les consulter
              régulièrement afin d'en prendre connaissance.
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  )
}
