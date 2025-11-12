# Company Signup - Test Technique

Application Nuxt 3 pour la création de compte entreprise, intégrée à partir de la maquette Figma.

## Stack Technique

- **Nuxt 3** - Framework Vue.js
- **Nuxt UI** - Composants UI
- **TypeScript** - Typage statique
- **i18n** - Internationalisation (Français)
- **Tailwind CSS** - Styling (via Nuxt UI)

## Installation

```bash
# Installer les dépendances
npm install

# Lancer le serveur de développement
npm run dev

# Build pour la production
npm run build

# Preview de la production
npm run preview
```

## Structure du Projet

```
company-signup/
├── assets/
│   └── css/
│       └── main.css          # Styles globaux
├── components/
│   ├── CompanySignupForm.vue  # Formulaire principal
│   ├── ProgressIndicator.vue # Indicateur de progression
│   └── SidebarPreview.vue     # Aperçu de la sidebar
├── locales/
│   └── fr.json               # Traductions françaises
├── pages/
│   └── index.vue             # Page principale
├── app.vue                   # Composant racine
├── nuxt.config.ts            # Configuration Nuxt
└── package.json              # Dépendances
```

## Fonctionnalités

### Page de Création de Compte Entreprise

- **Indicateur de progression** : Affiche les 3 étapes du processus
- **Upload de logo** : Gestion de l'upload d'image (PNG/JPEG, max 5Mo)
- **Formulaire complet** :
  - Nom de l'entreprise (requis)
  - Description de l'entreprise
  - Site internet (avec préfixe https://)
  - Adresse du siège social
  - Secteur d'activité
- **Sidebar de prévisualisation** : Aperçu de l'interface WINK

## Design

- **Desktop First** : Optimisé pour écrans ≥1024px
- **Design System** : Respect exact de la maquette Figma
- **Couleurs** : Bleu (#2563eb) pour les éléments actifs, gris pour les éléments inactifs
- **Typographie** : Police Inter

## Développement

Le projet utilise les patterns Nuxt 3 :

- **Composables** : Pour la logique réutilisable
- **Composants** : Découpage modulaire
- **Pages** : Routing automatique
- **i18n** : Gestion des traductions

## Notes

- Le formulaire est actuellement en mode développement
- L'intégration avec l'API backend (Fastify/PostgreSQL) est à implémenter
- La validation côté client est basique, à compléter selon les besoins
