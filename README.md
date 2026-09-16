# Portfolio — Mathis Thibaut

Portfolio personnel présentant mon parcours en Administration Systèmes, Réseaux & Sécurité : formation à l'EPSI Lille (BTS SIO option SISR puis Bachelor SysOps — parcours ASRBD) et alternance chez Patoux Equipagri.

Site statique (HTML / CSS / JavaScript vanilla, sans dépendance ni build), hébergé sur GitHub Pages.

**→ https://mathis-thibaut.github.io/**

## Contenu

- Page d'accueil, formation, compétences techniques et bilan de compétences transversales
- 19 projets détaillés (contexte, réalisation, stack, preuves/captures), classés par année : 1ère année, 2ème année, 3ème année (MSPR) et alternance
- Thème clair / sombre automatique selon les préférences du système

## Structure

```
index.html   → page unique (SPA), structure, style et logique de routage
data.js      → contenu des projets et de la formation (séparé pour la lisibilité)
*.jpg        → captures d'écran utilisées dans les fiches projet
```

## Développement local

Aucune dépendance : servir le dossier avec n'importe quel serveur statique, par exemple :

```bash
python -m http.server 5500
```

puis ouvrir `http://localhost:5500`.
