# État du site (mis à jour le 8 octobre 2026)

Photo de ce qui est réellement en ligne. À mettre à jour à chaque changement visible.

## Stack technique

- Next.js 15.5 (App Router), React 18, TypeScript. Dossier `src/`, alias `@/` vers `src/`.
- Styles : presque tout est dans `src/app/globals.css` (classes maison + variables CSS) et en `style={{ }}` inline dans les composants. Tailwind est installé mais quasiment pas utilisé : ne pas l'introduire dans les composants existants.
- Polices chargées via `next/font/google` dans `src/app/layout.tsx` (Playfair Display, DM Sans).
- Hébergement : Vercel, déploiement automatique à chaque push sur `main` (dépôt GitHub `Floflow/fluo-coaching`).
- Domaines chez Gandi.net : fluocoaching.com (principal, `metadataBase` dans `layout.tsx`).
- Formulaire de contact : route `src/app/api/contact/route.ts`, envoi via SMTP Brevo (nodemailer) vers floriane@fluocoaching.com. Variables `BREVO_SMTP_USER` et `BREVO_SMTP_KEY` dans `.env.local` en local, et dans les réglages Vercel en production.
- Prise de rendez-vous : Calendly, lien `https://calendly.com/floperrindb/30min` (séance découverte gratuite de 30 min). Le lien est écrit en double dans `CalendlyButton.tsx` (pop-up) et `CalendlyInline.tsx` (widget intégré) : modifier les deux.
- Image de partage réseaux sociaux générée par `src/app/opengraph-image.tsx` (logo sur fond blanc).

## Pages en ligne

| URL | Fichier | Contenu |
|---|---|---|
| `/` | `src/app/page.tsx` | Accueil (voir sections ci-dessous) |
| `/bilan-de-competences` | `src/app/bilan-de-competences/page.tsx` | Voir sections ci-dessous |
| `/contact` | `src/app/contact/page.tsx` | Calendly intégré à gauche, formulaire à droite |
| `/mentions-legales` | `src/app/mentions-legales/page.tsx` | Légal, noindex |
| `/cgv` | `src/app/cgv/page.tsx` | Légal, noindex |
| `/cgu` | `src/app/cgu/page.tsx` | Légal, noindex |
| `/charte-ethique` | `src/app/charte-ethique/page.tsx` | Légal, noindex |
| `/reglement-interieur` | `src/app/reglement-interieur/page.tsx` | Légal, noindex |

Navigation du Header : Accueil, Bilan de compétences, Contact + bouton « Séance découverte » (pop-up Calendly).
Footer : les 5 pages légales + Contact, « © 2026 Fluo Coaching · Floriane Perrin de Brichambaut ».

## Page d'accueil, dans l'ordre

| Section | Composant | Fond |
|---|---|---|
| Hero « Tu ne te reconnais plus dans ton travail ? » | `Hero.tsx` + `HeroCanvas.tsx` | crème |
| « Tu te reconnais dans l'une de ces situations » (3 profils) | `Douleurs.tsx` | sable |
| Carte Bilan de compétences (durée, format, tarif) | `Offres.tsx` | crème |
| Qui suis-je (photo, bio, valeurs) | `Floriane.tsx` | sable |
| Avis clients (3 témoignages) | `Temoignages.tsx` | crème |
| Appel découverte + formulaire | `Contact.tsx` | vert forêt |

## Page bilan de compétences, dans l'ordre

| Section | Contenu | Fond |
|---|---|---|
| Intro (`data-section="intro-bilan"`) | Texte + bouton Calendly + lien « Voir les solutions de financement » à gauche, carte « L'essentiel » à droite (durée, format, plateforme, tarif) | crème |
| Parcours (`#phases`) | Bandeau « Avant » (entretien découverte), 3 cartes de phases, bandeau « 6 mois après » (rendez-vous de suivi) | sable |
| Confiance (`#floriane`) | Texte + 3 pastilles (coach certifiée, consultante, partenaire Qualiopi) à gauche, extrait du témoignage de Bérengère S. à droite | crème |
| Financement (`#financement`) | Cadres « Avec ton CPF » et « Sans passer par ton CPF », puis question « Pas sûr d'avoir besoin d'un bilan complet ? » (CEP) | sable |
| Contact | `Contact.tsx` | vert forêt |

Composants globaux (dans `layout.tsx`) : `FloatCanvas.tsx` (carrés flottants qui s'alignent au scroll) et `ScrollObserver.tsx` (animations `fade-in`).
Composants non utilisés, conservés au cas où : `Methode.tsx` (les 4 étapes), `ParcoursTimeline.tsx` (ancienne carte timeline de l'intro du bilan).

## Contenus clés (à garder cohérents partout)

- Offre active : bilan de compétences, individuel, 100 % à distance.
- Durée : 13 h ensemble + 11 h de travail personnel, variable selon les besoins.
- Tarif affiché : 1 750 € TTC, éligible CPF.
- Circuit CPF : sous-traitance avec Dillière Brooks Consulting (DB Consulting), organisme certifié Qualiopi. Fluo Coaching est sous-traitant, pas l'opérateur direct. Les exercices se font sur la plateforme e-coaching Associates.
- Hors CPF (financement direct) : tarif volontairement non affiché sur le site, communiqué lors de l'appel découverte. Les CGV couvrent ce circuit.
- Témoignages en ligne : Bérengère S., Coline M., Clémence H.
- Valeurs affichées : Curiosité, Optimisme, Liberté.

## Ce qui n'est PAS sur le site (volontairement)

- Offre My Way (bilan flash orientation, 550 €) : ne pas créer de page ni la mentionner avant que Floriane le décide (pas avant mi-décembre 2026).
- Coaching en transition professionnelle : retiré du site et des CGV (les CGV portent uniquement sur le bilan en financement direct).

## Points ouverts

- Mentions légales : `[ADRESSE]` et `[CODE POSTAL]` encore en placeholders (classe `.ph`), visibles en ligne.
- Le bouton « Réserver une séance découverte » de `Offres.tsx` fait défiler vers `#contact` alors que les autres boutons ouvrent la pop-up Calendly.
- Idées à venir : page « À propos » longue, brochure PDF du bilan, nouvelles photos.
