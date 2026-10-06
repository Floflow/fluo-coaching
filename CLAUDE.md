# Site Fluo Coaching : mémoire du projet

Site vitrine de Fluo Coaching (Floriane Perrin, coach certifiée et consultante en bilan de compétences). En ligne sur https://www.fluocoaching.com.

Ce fichier est lu automatiquement par Claude Code à chaque session. Les fichiers importés ci-dessous font partie de la mémoire du projet :

@docs/etat-du-site.md
@docs/charte-design.md
@docs/ton-editorial.md

## Règles de travail (non négociables)

1. Le code de `src/` est la source de vérité. Les fichiers de `references/` sont des archives (maquettes HTML d'avril 2026, cahier des charges v1.3) : utiles pour retrouver une intention, mais périmés sur plusieurs points (tarif, structure, version de Next.js). Ne jamais les prendre pour la règle quand ils contredisent le code.
2. Proposer avant d'implémenter : pour un texte ou une mise en page, montrer 2 ou 3 options à Floriane et attendre son choix.
3. Corrections courtes et ciblées. Ne pas reformater ni « améliorer » ce qui n'a pas été demandé.
4. Toute nouvelle page reprend l'identité complète du site (Header, Footer, variables CSS, alternance des fonds). Jamais une version simplifiée.
5. Pas de nouvelle dépendance npm sans accord.
6. Ne jamais supprimer un fichier sans accord explicite.
7. Ne jamais afficher, copier ou committer le contenu de `.env.local`.
8. Après une modification : lancer `npm run build` pour vérifier que rien ne casse, puis dire à Floriane quoi regarder dans le navigateur (`npm run dev`, http://localhost:3000).
9. Mettre à jour `docs/etat-du-site.md` quand une modification change ce qui est en ligne (nouvelle page, nouveau tarif, nouvelle section, point réglé).

## Commandes

- `npm run dev` : site en local sur http://localhost:3000
- `npm run build` : vérifie que le site compile (à faire avant chaque push)
- Mise en ligne : `git push` sur `main`. Vercel déploie automatiquement en 1 à 2 minutes.

## Messages de commit

En français, préfixés par le type, au format déjà utilisé dans l'historique :
`content:` (textes), `style:` (visuel), `feat:` (nouvelle section ou page), `fix:` (correction), `asset:` (images, logos), `seo:` (métadonnées), `docs:` (ce fichier et `docs/`).
Exemple : `content: mettre à jour la biographie dans la section qui suis-je`
