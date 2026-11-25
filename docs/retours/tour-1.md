# Retours client · tour 1

| | |
|---|---|
| Reçus le | 2026-11-25 |
| Source | Retour d'Aude transmis par Thomas dans Codex |
| Version relue | Site public et branche `main`, commit `baee85283418f67d49ed54e7a99b545e11f06250` |
| Validation | Thomas a validé les trois suppressions proposées : « supprime tout ces points » |
| Branche | `retours/tour-1` |
| Aperçu | À confirmer après publication de la branche ; sous-domaine Cloudflare absent du dépôt |

## Points

| # | Page et endroit | Retour du client (texte exact) | Type | Action | Statut |
|---|---|---|---|---|---|
| R1 | Accueil, bloc Diététique · nutrition ; page Équipe ; fichiers publics | « il faut enlever toutes les références à Marine Boni. » | modification | Retirer son nom de l'accueil, sa fiche complète et son lien Doctolib de la page Équipe, puis supprimer le fichier de son portrait. | fait |

## Corrections de forme apportées aux textes du client

Aucune. Sur l'accueil, la liste restante est « Julie Basset · Emilie Grasset ».

## Questions pour le client

Aucune.

## Non retenus

Aucun.

## Hors périmètre, à voir avec Thomas

Aucun.

## Vérifications

- [x] `npm run build` : 10 pages générées ; `npm run preview` : réponse HTTP 200 sur le port local 4322
- [x] Accueil et page Équipe contrôlés à 375 px et à 1280 px ; les deux fiches restantes s'affichent sur une colonne sur mobile et deux colonnes sur ordinateur
- [x] Absence des références supprimées dans les sources publiques et le site généré
- [x] Portrait supprimé du dossier public et du site généré
- [x] Sept autres fiches et sept liens Doctolib conservés
- [x] Aucun `AGENTS.md`, brief ou tour précédent présent dans le dépôt
