# 🚀 Déploiement sur Netlify

## Option 1 : Déploiement via l'interface web Netlify (Recommandé)

### Étape 1 : Créer un dépôt GitHub/GitLab
1. Allez sur [GitHub](https://github.com/new) ou [GitLab](https://gitlab.com)
2. Créez un nouveau dépôt (par exemple : `notion-consulting-landing`)
3. Suivez les instructions pour pousser votre code :

```bash
cd /Users/ali/DEV/notion-consulting-landing-page
git remote add origin https://github.com/VOTRE-USERNAME/notion-consulting-landing.git
git branch -M main
git push -u origin main
```

### Étape 2 : Connecter à Netlify
1. Allez sur [Netlify](https://app.netlify.com)
2. Cliquez sur **"Add new site"** > **"Import an existing project"**
3. Choisissez votre provider Git (GitHub/GitLab/Bitbucket)
4. Sélectionnez votre dépôt `notion-consulting-landing`

### Étape 3 : Configuration du Build
Netlify devrait automatiquement détecter Next.js. Vérifiez que :
- **Build command:** `npm run build`
- **Publish directory:** `.next`
- **Plugin:** `@netlify/plugin-nextjs` (auto-détecté)

### Étape 4 : Déployer
1. Cliquez sur **"Deploy site"**
2. Attendez ~2-3 minutes
3. Votre site sera disponible sur une URL type : `https://random-name-123.netlify.app`

### Étape 5 : Domaine personnalisé (Optionnel)
1. Dans les settings du site > **Domain management**
2. Ajoutez votre domaine personnalisé

---

## Option 2 : Déploiement drag & drop (Plus rapide pour tester)

### Si vous voulez tester rapidement sans Git :

1. Allez sur [Netlify Drop](https://app.netlify.com/drop)
2. Glissez-déposez le dossier `.next` de votre projet
3. Le site sera déployé instantanément !

**Note:** Cette méthode ne permet pas les déploiements automatiques lors des mises à jour.

---

## Option 3 : Via Netlify CLI (après correction)

Si vous voulez réparer le CLI :

```bash
# Mettre à jour Netlify CLI
npm install -g netlify-cli@latest

# Initialiser et déployer
cd /Users/ali/DEV/notion-consulting-landing-page
netlify init
netlify deploy --prod
```

---

## 🎯 Configuration du fichier netlify.toml

Votre projet contient déjà un `netlify.toml` configuré :

```toml
[build]
  command = "npm run build"
  publish = ".next"

[[plugins]]
  package = "@netlify/plugin-nextjs"
```

Cela garantit que :
- ✅ Next.js est correctement buildé
- ✅ Le plugin Next.js est activé
- ✅ Les routes dynamiques fonctionnent
- ✅ Les API routes sont supportées

---

## ⚡ Déploiements automatiques

Une fois connecté à Git :
- Chaque push sur `main` → Déploiement automatique
- Pull requests → Preview deployments
- Rollback facile vers versions précédentes

---

## 🔧 Variables d'environnement

Si vous avez besoin d'ajouter des variables d'environnement :
1. Site settings > Build & deploy > Environment
2. Ajoutez vos variables (API keys, etc.)

---

## 📱 Votre site inclut :

✅ Page principale Notion Consulting  
✅ Page Automatisation (Notion + N8n)  
✅ Navigation responsive  
✅ Design professionnel avec Tailwind  
✅ Animations Framer Motion  
✅ Logos clients (Sweal, iDari, LeadPanda, etc.)  
✅ Optimisé pour mobile/tablette/desktop  

---

## Support

Si vous rencontrez des problèmes :
- Documentation Netlify Next.js : https://docs.netlify.com/frameworks/next-js/
- Support Netlify : https://answers.netlify.com/

