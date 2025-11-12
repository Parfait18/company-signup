# Company Signup - Test Technique

Application Nuxt 3 pour la création de compte entreprise, intégrée à partir de la maquette Figma.

## Stack Technique

- **Nuxt 3** (v3.20.1) - Framework Vue.js avec SSR
- **Vue 3** (v3.4.15) - Framework JavaScript réactif
- **TypeScript** (v5.3.3) - Typage statique
- **Nuxt UI** (v2.22.3) - Composants UI avec Tailwind CSS
- **Pinia** (v3.0.4) - Gestion d'état
- **@nuxtjs/i18n** (v10.2.0) - Internationalisation (Français)
- **Tailwind CSS** - Styling (via Nuxt UI)
- **Vite** (v7.2.2) - Build tool

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

# Générer une version statique
npm run generate
```

## Structure du Projet

```
company-signup/
├── assets/
│   └── css/
│       └── main.css              # Styles globaux
├── components/
│   ├── CompanySignupForm.vue    # Formulaire principal
│   ├── ProgressIndicator.vue   # Indicateur de progression (stepper)
│   └── SidebarPreview.vue      # Aperçu de la sidebar WINK
├── composables/
│   └── useCompanyForm.ts       # Composable pour la gestion du formulaire
├── stores/
│   └── company.ts              # Store Pinia pour les données de l'entreprise
├── layouts/
│   └── default.vue             # Layout par défaut
├── pages/
│   └── index.vue               # Page principale
├── i18n/
│   └── locales/
│       └── fr.json             # Traductions françaises
├── locales/                    # Ancien dossier (maintenu pour compatibilité)
│   └── fr.json
├── types/
│   ├── imports.d.ts            # Types pour les imports
│   └── vue-shim.d.ts           # Types pour Vue
├── app.vue                     # Composant racine
├── nuxt.config.ts              # Configuration Nuxt
├── tsconfig.json               # Configuration TypeScript
└── package.json                # Dépendances
```

## Fonctionnalités

### Page de Création de Compte Entreprise

#### Indicateur de Progression (Stepper)
- Affichage des 3 étapes du processus d'inscription
- Lignes horizontales connectant les étapes
- États visuels : complété (bleu), actif (bleu), à venir (gris)
- Labels centrés sous chaque étape

#### Upload de Logo
- Gestion de l'upload d'image (PNG/JPEG uniquement)
- Taille maximale : 5 Mo
- Prévisualisation immédiate
- Possibilité de modifier ou supprimer le logo

#### Formulaire Complet
- **Nom de l'entreprise** (requis) - Validation côté client
- **Description de l'entreprise** - Zone de texte avec placeholder
- **Site internet** - Champ avec préfixe https:// automatique
- **Adresse du siège social** - Champ texte libre
- **Secteur d'activité** - Champ texte libre

#### Sidebar de Prévisualisation
- Aperçu en temps réel de l'interface WINK
- Affichage du logo et du nom de l'entreprise
- Menu de navigation simulé
- Mise à jour dynamique selon les données du formulaire

## Architecture

### Gestion d'État

Le projet utilise **Pinia** pour la gestion d'état globale :

- **Store `company`** : Stocke les données de l'entreprise (logo, nom, description, etc.)
- **Composable `useCompanyForm`** : Logique réutilisable pour la gestion du formulaire
  - Validation des champs
  - Gestion des erreurs
  - Upload de logo
  - Soumission du formulaire

### Internationalisation

- Configuration via `@nuxtjs/i18n` v10.2.0
- Fichiers de traduction dans `i18n/locales/`
- Langue par défaut : Français (fr)
- Stratégie : `no_prefix` (pas de préfixe dans l'URL)

### Composants

- **CompanySignupForm** : Formulaire principal avec tous les champs
- **ProgressIndicator** : Stepper avec 3 étapes et lignes de connexion
- **SidebarPreview** : Aperçu de la sidebar WINK avec mise à jour en temps réel

## Design

- **Desktop First** : Optimisé pour écrans ≥1024px
- **Design System** : Respect exact de la maquette Figma
- **Couleurs** :
  - Bleu (#2563eb / blue-600) pour les éléments actifs/complétés
  - Gris pour les éléments inactifs
- **Typographie** : Police Inter (via Nuxt UI)
- **Spacing** : Utilisation de Tailwind CSS pour l'espacement cohérent

## Configuration

### Nuxt Config

- **Modules** : `@pinia/nuxt`, `@nuxt/ui`, `@nuxtjs/i18n`
- **TypeScript** : Mode strict activé avec vérification de types
- **Vite** : Optimisation des dépendances (unhead, @unhead/vue)
- **Compatibilité** : Date de compatibilité 2025-11-11

### i18n Config

- Locales : Français (fr)
- Répertoire : `i18n/locales/`
- Stratégie : `no_prefix`
- Lazy loading : Désactivé (chargement immédiat)

## Développement

Le projet utilise les patterns Nuxt 3 :

- **Composables** : Logique réutilisable (`useCompanyForm`)
- **Stores Pinia** : Gestion d'état globale (`company`)
- **Composants** : Découpage modulaire et réutilisable
- **Pages** : Routing automatique basé sur le système de fichiers
- **Layouts** : Layout par défaut avec header WINK
- **i18n** : Gestion des traductions avec support multilingue

## Scripts Disponibles

- `npm run dev` : Lance le serveur de développement
- `npm run build` : Build pour la production
- `npm run preview` : Preview de la version de production
- `npm run generate` : Génère une version statique
- `npm run postinstall` : Prépare Nuxt après installation

## Notes

- ✅ Le formulaire est fonctionnel avec validation côté client
- ✅ La gestion d'état est implémentée avec Pinia
- ✅ L'internationalisation est configurée (Français)
- ⚠️ L'intégration avec l'API backend (Fastify/PostgreSQL) est à implémenter
- ⚠️ La validation côté serveur doit être ajoutée lors de l'intégration API
- 📝 Les traductions sont centralisées dans `i18n/locales/fr.json`

## Prochaines Étapes

1. Intégration avec l'API backend
2. Ajout de la validation côté serveur
3. Gestion des erreurs API
4. Tests unitaires et E2E
5. Optimisation des performances
