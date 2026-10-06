# Charte design (telle qu'appliquée dans le code)

Source de vérité : `src/app/globals.css`. Ne jamais écrire une couleur en dur, toujours passer par une variable.

## Concept

« Fluo » = le geste du surligneur jaune : mettre en lumière ce qui compte. Le jaune est une touche qui révèle, jamais une décoration ni un fond de section.
Fil visuel : des carrés qui passent du désordre à l'alignement (`HeroCanvas`, `FloatCanvas`).
Ambiance : pro et chaleureuse. Ni corporate froid, ni « développement personnel » rose et lisse.

## Couleurs (variables CSS)

| Variable | Valeur | Usage |
|---|---|---|
| `--bg` | `#F8F5EF` crème | fond principal |
| `--bg-alt` | `#EDEAE0` sable | sections alternées (`.section-alt`) |
| `--bg-dark` | `#1E3830` vert forêt | section contact, footer (`.section-dark`) |
| `--text` | `#1E3830` | titres, texte principal |
| `--text-mid` | `#4A7060` | corps de texte |
| `--text-light` | `#8AAE9E` | labels, méta |
| `--border` | `#C8D9D2` | bordures |
| `--fluo` | `#FFFF33` | surlignage, bouton principal, logo |
| `--fluo-soft` | jaune à 25 % | surlignage doux |
| `--fluo-dark` | `#CCCC00` | survol |
| `--fluo-num` | `#F9F002` | numéros 01/02/03 (`Douleurs.tsx`, `.method-step-num`, `.phase-num`, `.testimonial-quote-mark`) — jaune légèrement différent de `--fluo`, voulu tel quel |
| `--anthracite` | `#1A1A17` | liens du menu et `.logo-tagline-top` dans `Header.tsx` — distinct de `--text`, voulu tel quel |

Rayons : `--radius-sm` 4px, `--radius-md` 10px, `--radius-lg` 20px. Largeur max `--max-width` 1400px, texte `--max-text` 640px, espacement de section `--space-section` 7rem.

## Typographie

- Titres : Playfair Display 700 (italique pour citations) via `var(--font-display)`.
- Texte : DM Sans 300 / 400 / 500 via `var(--font-body)`. Corps de texte souvent en 300.
- Jamais Arial, Inter, Roboto ni police système.

## Règles de mise en page

- Alternance crème / sable d'une section à l'autre, de façon prévisible. Le vert forêt est réservé à la section contact et au footer.
- Le surlignage jaune : uniquement dans les titres, 1 à 3 mots maximum, jamais dans le corps de texte.
- Le site doit rester propre sur mobile : burger menu sous 900px, tagline du logo masquée sous 1100px, `.container` à 1.25rem de marge sous 640px.

## Classes à réutiliser (dans `globals.css`)

- Mise en page : `.container`, `.section`, `.section-alt`, `.section-dark`
- Titres : `.label` (petit sur-titre en capitales), `.section-title`, `.section-title-dark`, `.page-intro-title`
- Surlignage : `.hl` (standard, pseudo-élément `::before` en `z-index: -1` pour ne pas couper les jambages), `.hl-dark` (sur fond vert), `.hl-soft` (doux)
- Boutons : `.btn-primary` (jaune), `.btn-secondary` (contour), `.btn-ghost-light` (sur fond sombre), `.btn-fluo-dark`, flèche animée avec `<span className="btn-arrow">→</span>`
- Badges : `.badge` + `.badge-fluo` / `.badge-outline` / `.badge-outline-light`
- Animations : `.fade-in` + `.fade-in-delay-1` à `-5` (déclenchées par `ScrollObserver`)
- Formulaires : `.form`, `.form-row`, `.form-group`, `.form-label`, `.form-input`, `.form-textarea`, `.form-check` (variantes `-light`)
- Page bilan : `.page-intro*`, `.phases-grid`, `.phase-card`, `.info-grid`, `.info-cell*`, `.cta-section`
- Pages légales : `.legal-hero`, `.legal-hero-inner`, `.legal-eyebrow`, `.legal-hero-meta`, `.legal-body`, `.legal-intro`, `.legal-toc`, `.legal-section`, `.sec-num`, `.legal-info-table`, `.legal-note`, `.legal-table`, `.ph` (placeholder à remplir)

## Recettes

**Nouvelle page :** dossier `src/app/<url>/page.tsx`, exporter `metadata` (title « … — Fluo Coaching », description au tutoiement), structure `<Header /> <main>…</main> <Footer />`, sections avec `className="section"` ou `"section section-alt"` en alternance et un `data-section="nom"`. Ajouter le lien dans le Header et/ou le Footer si besoin (menu desktop ET menu mobile du Header).

**Nouvelle page légale :** copier la structure de `src/app/charte-ethique/page.tsx` (`legal-hero` puis `legal-body`), avec `robots: 'noindex, nofollow'`, et ajouter le lien dans `Footer.tsx`.

**Bouton de réservation :** `<CalendlyButton className="btn-primary" dataTrack="cta-xxx">Séance découverte <span className="btn-arrow">→</span></CalendlyButton>`.

**Commentaire d'en-tête de composant** (convention existante) :
```
// ─────────────────────────────────────────
// NomDuComposant — rôle en une ligne
// ─────────────────────────────────────────
```
Ajouter `data-section` sur chaque `<section>` et `data-track` sur chaque bouton d'action (prévu pour des statistiques plus tard).

## Logo et images

- Logo en SVG inline dans `Header.tsx` (version claire, O sur pastille jaune) et `Footer.tsx` (version sombre, O jaune). Fichiers aussi dans `public/images/logo-clair.*` et `logo-sombre.*`.
- Photo : `public/images/floriane.jpg` (et `floriane-carre.jpg`).
- Favicons à la racine de `public/` et dans `src/app/` (`icon.png`, `apple-icon.png`, `favicon.ico`).
