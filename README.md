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
