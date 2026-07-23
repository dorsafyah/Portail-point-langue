# Portail Point Langue — Rituel d'analyse de la langue (6e)

Application web (PWA) qui **ritualise l'analyse de la langue** au collège, niveau 6e.
Chaque jour, une phrase est soumise aux élèves avec des **consignes clairement énoncées**,
présentées dans un **code couleur distinct de la phrase**. Un **minuteur réglable**
(10 min par défaut, préréglages 8 / 10 / 15 min) cadre le temps d'analyse, et un **corrigé**
peut être révélé à la fin.

Conçue pour un usage **projeté au tableau** : les élèves analysent la phrase sur leur
cahier, puis la classe confronte ses réponses au corrigé.

## Fonctionnalités

- **Rituel (projection)** : phrase du jour en grand, consignes numérotées et colorées par
  notion, minuteur circulaire (démarrer / pause / réinitialiser), affichage du corrigé,
  navigation entre les phrases.
- **Banque de phrases** couvrant la **période 1** : nature des mots, accord sujet-verbe,
  accord dans le groupe nominal, présent de l'indicatif **et ses valeurs**, imparfait de
  l'indicatif, fonctions **COD / COI / attribut du sujet**. Une consigne peut porter sur
  plusieurs notions.
- **Édition** : créez, modifiez, dupliquez ou supprimez vos propres phrases et consignes ;
  choisissez la notion (donc la couleur) et rédigez le corrigé. Import / export en JSON
  pour sauvegarder ou partager votre banque.
- **Thème clair / sombre** : bascule dans l'en-tête (☾ / ☀). Au premier lancement, le
  thème suit celui du système ; votre choix est ensuite mémorisé sur l'appareil.
- **PWA hors-ligne** : après le premier chargement, l'application fonctionne sans réseau ;
  toutes les données sont stockées **localement** sur l'appareil.

## Code couleur des notions

| Notion | Couleur |
| --- | --- |
| Nature des mots | violet |
| Accord sujet-verbe | cyan |
| Accord dans le groupe nominal | vert |
| Présent de l'indicatif et ses valeurs | orange |
| Imparfait de l'indicatif | bleu |
| Fonctions (COD / COI / attribut) | rose |

## Démarrer en développement

```bash
npm install
npm run dev
```

## Construire la version de production

```bash
npm run build      # génère le dossier dist/
npm run preview    # prévisualise la version construite
```

### Déploiement

Le dossier `dist/` est un site statique déployable partout (Netlify, Vercel, un serveur,
GitHub Pages…). Pour un déploiement dans un **sous-dossier** (ex. GitHub Pages), définissez
le chemin de base au moment du build :

```bash
BASE_PATH=/portail-point-langue/ npm run build
```

## Installer comme application

Depuis un navigateur (Chrome, Edge, Safari…), ouvrez le site puis utilisez
« Installer l'application » / « Ajouter à l'écran d'accueil ». L'application s'ouvre alors
en plein écran, idéale pour la vidéoprojection.

## Stack

Vite · React · TypeScript · vite-plugin-pwa (service worker + manifeste). Aucune donnée
n'est envoyée sur un serveur : tout reste sur l'appareil.
