# Cabinet La Note Bleue · Nantes

Site vitrine du cabinet pluridisciplinaire, construit avec Astro et déployé sur Cloudflare Pages.

## Commandes locales (optionnel)

```bash
npm install   # installer les dépendances
npm run dev   # serveur de dev local (http://localhost:4321)
npm run build # build de production dans dist/
```

## Déploiement

Déploiement automatique sur Cloudflare Pages à chaque push sur la branche `main`.

Config Cloudflare Pages :
- Framework preset : **Astro** (détecté automatiquement)
- Build command : `npm run build`
- Build output directory : `dist`

## Structure

```
src/
  pages/
    index.astro    # page d'accueil
public/
  images/          # images statiques
astro.config.mjs   # config Astro
```

## SEO technique en place

Le projet inclut désormais les éléments suivants :

- `public/robots.txt`
- `public/sitemap.xml`
- `public/favicon.svg`
- `src/pages/404.astro`
- métadonnées SEO et données structurées dans `src/layouts/Layout.astro`

## Vérifications après déploiement

Après chaque mise en ligne, vérifier :

- `https://cabinet-lanotebleue-nantes.fr/robots.txt`
- `https://cabinet-lanotebleue-nantes.fr/sitemap.xml`
- `https://cabinet-lanotebleue-nantes.fr/une-url-inexistante`

Résultat attendu :

- `robots.txt` doit afficher le fichier texte du projet
- `sitemap.xml` doit afficher du XML
- une URL inexistante doit afficher la page 404 du site, et non la page d'accueil

Si une URL inexistante renvoie encore la home, il faut corriger le fallback côté Cloudflare Pages.

## Publication GitHub

Depuis le dépôt local :

```bash
git status
git add .
git commit -m "Improve SEO and page style consistency"
git push origin main
```

Ensuite :

- attendre le déploiement Cloudflare Pages
- vérifier les trois URLs ci-dessus
- ouvrir Google Search Console
- soumettre `https://cabinet-lanotebleue-nantes.fr/sitemap.xml`
- demander une indexation de la page d'accueil et des pages principales
