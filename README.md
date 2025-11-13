# Notion Consulting - Landing Page Professionnelle

Landing page moderne et professionnelle construite avec Next.js 14, TypeScript, Tailwind CSS et Framer Motion.

## 🚀 Stack Technologique

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **Framer Motion** (animations)
- **Lucide React** (icônes)

## 📦 Installation

```bash
# Installer les dépendances
npm install

# Ou avec yarn
yarn install

# Ou avec pnpm
pnpm install
```

## 🛠️ Développement

```bash
# Lancer le serveur de développement
npm run dev

# Ou
yarn dev

# Ou
pnpm dev
```

Ouvrez [http://localhost:3000](http://localhost:3000) dans votre navigateur.

## 🏗️ Build

```bash
# Build pour la production
npm run build

# Démarrer le serveur de production
npm run start
```

## 📁 Structure du Projet

```
notion-consulting-landing-page/
├── app/
│   ├── page.tsx              # Page d'accueil (Notion simple)
│   ├── automation/
│   │   └── page.tsx          # Page automatisation (Notion + N8n)
│   ├── layout.tsx            # Layout principal
│   └── globals.css           # Styles globaux
├── components/
│   ├── Navigation.tsx        # Barre de navigation
│   ├── Footer.tsx            # Footer
│   └── ui/
│       ├── Card.tsx          # Composant carte réutilisable
│       ├── Button.tsx        # Composant bouton
│       └── Section.tsx       # Composant section
├── public/                   # Assets statiques (logos)
├── package.json
├── tailwind.config.ts
└── tsconfig.json
```

## 🎨 Caractéristiques

### Design Professionnel
- Interface moderne et épurée
- Animations fluides avec Framer Motion
- Design responsive (mobile, tablette, desktop)
- Gradients sophistiqués
- Effets hover élégants

### Performance
- Next.js App Router pour des performances optimales
- Lazy loading des composants
- Optimisation des images
- Code splitting automatique

### Accessibilité
- Structure sémantique HTML
- Navigation au clavier
- Contraste WCAG AA

## 📄 Pages

### Page Principale (`/`)
- Hero avec accroche forte
- Barre de confiance (logos clients)
- Section problèmes
- Solutions et services
- Statistiques
- Témoignages
- CTA final

### Page Automatisation (`/automation`)
- Focus sur Notion + N8n
- Cas d'usage détaillés
- Avantages de l'automatisation
- Process et résultats

## 🎯 SEO

Le projet inclut :
- Meta tags optimisés
- Open Graph tags
- Structure sémantique
- URLs propres

## 🔧 Personnalisation

### Couleurs
Modifiez les couleurs dans `tailwind.config.ts`:

```typescript
colors: {
  primary: {
    50: '#f5f3ff',
    // ... autres nuances
  },
}
```

### Contenu
- Textes dans les fichiers `.tsx` des pages
- Images dans le dossier `/public`
- Logos clients à remplacer dans `/public`

## 📧 Contact

Pour toute question : contact@notion-consulting.com

## 📝 License

Propriétaire - Tous droits réservés

