# Prompt de démarrage — Fluo Coaching
# À coller dans Claude Code au lancement du projet
# Version 1.0 — 8 avril 2026

---

Tu vas m'aider à construire le site web de Fluo Coaching, une activité de coaching professionnel et bilan de compétences lancée par Floriane.

Les fichiers de référence du projet sont disponibles dans le dossier `/references/` :
- `fluo-bilan-v49B.html` → référence visuelle complète (animations canvas, layout, composants)
- `styleguide-fluo-coaching.html` → charte graphique, variables CSS, composants validés

**Consulte ces deux fichiers avant de coder chaque composant.**

---

## CONTEXTE DU PROJET

**Nom commercial :** Fluo Coaching
**Coach :** Floriane, 35 ans, certifiée ICF, consultante en bilan de compétences
**Phase :** Lancement 2026 — moins d'une dizaine de clients, 3-4 témoignages disponibles
**Stack :** Next.js 14 (App Router) + Tailwind CSS — déployé sur Vercel via GitHub
**Domaines :** fluo-coaching.fr + fluo-coaching.com (achetés chez Gandi.net)

---

## IDENTITÉ VISUELLE — CHARTE À RESPECTER STRICTEMENT

### Palette couleurs (variables CSS — source de vérité dans globals.css)
```css
:root {
  --bg:           #F8F5EF;   /* Fond principal — crème chaud */
  --bg-alt:       #EDEAE0;   /* Fond alternatif — sable doux */
  --bg-dark:      #1E3830;   /* Vert forêt — sections sombres, header, footer */
  --text:         #1E3830;   /* Texte principal */
  --text-mid:     #4A7060;   /* Corps de texte */
  --text-light:   #8AAE9E;   /* Labels / méta */
  --border:       #C8D9D2;   /* Bordures teintées vert */
  --fluo:         #FFFF33;   /* Jaune fluo pur — CTA, surlignage, logo */
  --fluo-dark:    #CCCC00;   /* Fluo hover */
  --radius-sm:    4px;
  --radius-md:    10px;
  --radius-lg:    20px;
  --max-width:    1400px;
  --max-text:     640px;
  --space-section: 7rem;
}
```

### Typographie
- Display/titres : **Playfair Display** (Google Fonts, Bold + Italic) — chargé via `next/font`
- Corps : **DM Sans** (Google Fonts, Light 300 + Regular 400 + Medium 500)
- Jamais Arial, Inter, Roboto ou polices système génériques

### Principes visuels clés
- Ambiance : pro mais chaleureux — ni corporate froid, ni "cucul bilan de compétences"
- Concept fort : **désalignement → alignement** (carrés géométriques qui passent du chaos à l'ordre — voir fluo-bilan-v49B.html pour l'implémentation canvas)
- Le jaune `#FFFF33` est un **surlignage ciblé** : logo, CTA, mots-clés importants. Jamais en fond de section.
- Concept "Fluo" = mise en lumière, pas décoration agressive

---

## OFFRES

### ✅ Bilan de compétences — à intégrer au lancement
- Tarif : 1 800 € TTC — Financement CPF
- Format : le client repart avec un plan d'action construit par lui-même via le questionnement
- Lien CPF externe : `[TODO: Floriane fournit le lien]`
- Page dédiée : `/bilan-de-competences`

### ✅ Coaching en transition professionnelle — à mentionner
- Accompagnement individuel
- Tarif : `[TODO: Floriane confirme le tarif]`
- Mentionné sur landing — page dédiée à prévoir plus tard

### ⏳ Bilan MYWAY — NE PAS publier, préparer seulement
- Tarif : 550 € — Disponible fin 2026
- Page `/bilan-myway` à créer avec `noindex` dans les métadonnées
- Cible : lycéens, étudiants, professionnels

---

## CIBLE & TON ÉDITORIAL

**Cible principale 2026 :** Professionnels trentenaires, bon parcours, compétences reconnues — mais qui ne se retrouvent plus dans ce qu'ils font.

**Hook central :** *"Peur de se planter, de faire le mauvais choix."*

**Douleurs verbatim :**
- "Je ne me reconnais plus dans mon travail"
- "J'ai peur de me tromper pour la suite"
- "J'ai tout bien fait mais je ne m'y retrouve plus"

**Promesse en 4 étapes :** Identifier le décalage → Mieux se comprendre → Explorer les possibles → Décider sereinement

**Ton :** Tutoiement. Empathique, direct, moderne. Phrases courtes. Pas de jargon RH.

**Anglicismes à ne jamais utiliser :** skills, roadmap, next step, coachee, feedback session

---

## STRUCTURE DU SITE

```
/                          → Landing page
/bilan-de-competences      → Page dédiée bilan ✅
/bilan-myway               → Brouillon noindex ⏳
```

### Structure du projet Next.js à créer :
```
fluo-coaching/
├── app/
│   ├── layout.tsx                    ← Layout global + Google Fonts via next/font
│   ├── page.tsx                      ← Landing page
│   ├── bilan-de-competences/
│   │   └── page.tsx
│   └── bilan-myway/
│       └── page.tsx                  ← metadata: { robots: 'noindex' }
├── components/
│   ├── Header.tsx                    ← Logo + nav + bouton CTA Calendly
│   ├── Hero.tsx                      ← Accroche + canvas désalignement/alignement
│   ├── Douleurs.tsx                  ← Miroir des situations vécues
│   ├── Offres.tsx                    ← Cards bilan + coaching
│   ├── Methode.tsx                   ← Grid 4 étapes
│   ├── APropos.tsx                   ← Floriane + placeholder photo
│   ├── Temoignages.tsx               ← 3-4 cards témoignages
│   ├── Reservation.tsx               ← Widget Calendly inline
│   ├── Contact.tsx                   ← Formulaire de contact
│   └── Footer.tsx
├── references/                       ← NE PAS modifier — fichiers source
│   ├── fluo-bilan-v49B.html
│   └── styleguide-fluo-coaching.html
├── styles/
│   └── globals.css                   ← Variables CSS + reset
└── public/
    └── images/
        └── [placeholder — photos Floriane à ajouter]
```

---

## LANDING PAGE — SECTIONS DANS L'ORDRE

1. **Header** — logo "Fluo Coaching" (F en fond fluo) + navigation + bouton CTA "Réserver un appel"
2. **Hero** — accroche forte, hook, animation carrés désalignement→alignement (canvas), 2 CTA
3. **Douleurs** — miroir des 3 situations vécues par la cible — le visiteur se reconnaît
4. **Offres** — Bilan de compétences (priorité) + Coaching transition
5. **Méthode** — Les 4 étapes en grid (Identifier → Comprendre → Explorer → Décider)
6. **À propos** — Floriane, certification ICF, approche — espace `<Image>` placeholder pour photo
7. **Témoignages** — 3-4 cards avec guillemets typographiques en fluo
8. **Réservation** — Section dédiée avec widget Calendly inline
9. **Contact** — Formulaire
10. **Footer** — liens, mentions légales

---

## FORMULAIRE DE CONTACT — CHAMPS (pour intégrations CRM futures)

| Champ | Attributs | Obligatoire |
|---|---|---|
| Prénom | `name="firstname" id="firstname"` | Oui |
| Nom | `name="lastname" id="lastname"` | Oui |
| Email | `name="email" id="email" type="email"` | Oui |
| Téléphone | `name="phone" id="phone" type="tel"` | Non |
| Situation / message | `name="message" id="message"` textarea | Non |
| Consentement RGPD | `name="gdpr" id="gdpr" type="checkbox"` | Oui |

Ajouter `data-section="contact"` sur le `<form>` pour tracking futur.

---

## INTÉGRATION CALENDLY ✅ VALIDÉ

**Outil choisi : Calendly** (plan gratuit)

### Comportement à implémenter
- Widget Calendly **inline** dans la section Réservation
- Bouton CTA "Réserver un appel découverte" dans le header et le hero avec scroll vers la section
- Synchronisation Google Calendar gérée côté Calendly (pas de code à écrire)

### Code d'intégration dans `Reservation.tsx`
```tsx
// Reservation.tsx
// TODO: remplacer CALENDLY_URL par le lien fourni par Floriane après création du compte

'use client'
import { useEffect } from 'react'

export default function Reservation() {
  useEffect(() => {
    const script = document.createElement('script')
    script.src = 'https://assets.calendly.com/assets/external/widget.js'
    script.async = true
    document.body.appendChild(script)
    return () => { document.body.removeChild(script) }
  }, [])

  return (
    <section
      id="reservation"
      data-section="reservation"
      className="/* styles section */"
    >
      {/* TODO: remplacer l'URL ci-dessous par le lien Calendly de Floriane */}
      <div
        className="calendly-inline-widget"
        data-url="https://calendly.com/CALENDLY_URL"
        style={{ minWidth: '320px', height: '700px' }}
      />
    </section>
  )
}
```

### Emplacements du bouton CTA Calendly
1. **Header** — `<a href="#reservation">Réserver un appel →</a>` (scroll anchor)
2. **Hero** — bouton primaire principal
3. **Section Réservation** — widget inline

Ajouter `data-track="calendly-cta"` sur chaque bouton pour tracking futur.

---

## CONVENTIONS DE CODE

```tsx
// ─────────────────────────────────────────
// Section : Hero
// Référence visuelle : fluo-bilan-v49B.html
// ─────────────────────────────────────────
```

- Commentaires clairs sur chaque composant et section
- Variables CSS centralisées dans `globals.css` — ne pas hardcoder les couleurs
- Composants bien séparés et réutilisables — 1 fichier = 1 composant
- `data-section` sur chaque `<section>` pour analytics futurs
- Code lisible et maintenable — Floriane doit pouvoir s'y retrouver
- Pas de librairies inutiles

---

## PREMIÈRE ÉTAPE

Avant de coder quoi que ce soit :

1. Lis `/references/fluo-bilan-v49B.html` pour comprendre les animations et le style visuel
2. Lis `/references/styleguide-fluo-coaching.html` pour la charte complète
3. Propose la commande d'initialisation du projet Next.js
4. Confirme la structure de fichiers
5. Attends ma validation avant de commencer à coder

**On construit page par page, composant par composant, avec validation à chaque étape.**
