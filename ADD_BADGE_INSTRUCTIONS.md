# 📋 Instructions pour ajouter votre badge Notion Academy

## Étape 1 : Télécharger votre badge

1. **Option A - Depuis votre capture d'écran** :
   - Sauvegardez l'image du badge que vous avez partagée
   - Nom du fichier : `notion-academy-badge.png`

2. **Option B - Depuis Notion Academy** :
   - Allez sur https://verify.skilljar.com/c/isxjdrsku599
   - Faites un clic droit sur le badge
   - "Enregistrer l'image sous..."
   - Nom du fichier : `notion-academy-badge.png`

## Étape 2 : Placer le badge dans votre projet

```bash
# Copiez votre image dans le dossier public
cp ~/Downloads/notion-academy-badge.png /Users/ali/DEV/notion-consulting-landing-page/public/
```

Ou simplement glissez-déposez l'image dans le dossier :
`/Users/ali/DEV/notion-consulting-landing-page/public/`

## Étape 3 : Vérifier et déployer

```bash
cd /Users/ali/DEV/notion-consulting-landing-page

# Tester localement
npm run dev

# Puis commit et push
git add public/notion-academy-badge.png
git commit -m "Add: Badge Notion Academy Essentials"
git push origin main
```

---

## ✨ Ce qui a été ajouté sur votre site :

### 📍 **Section Certification** (juste après les logos clients)
- ✅ Badge Notion Academy Essentials affiché
- ✅ Titre "Certification Officielle"
- ✅ Description de la certification
- ✅ Bouton "Vérifier le certificat" avec lien vers Skilljar
- ✅ Date d'obtention : 14 Nov. 2024
- ✅ Design élégant avec ombre et bordure
- ✅ Responsive mobile/tablette/desktop

### 🎨 Style :
- Fond dégradé primary-50 → blanc
- Card blanc avec shadow-lg
- Badge à gauche, contenu à droite
- Animations au scroll

---

## 🚀 Résultat final

La section apparaîtra comme ceci :

```
┌─────────────────────────────────────────────────────────┐
│                                                         │
│   [BADGE]    ✓ Certification Officielle                │
│   NOTION         Notion Academy Essentials             │
│   ACADEMY                                               │
│   ESSENTIALS     Certifié officiellement par Notion ·  │
│                  Formation complète...                  │
│                                                         │
│                  [Vérifier le certificat] 📅 14 Nov.   │
│                                                         │
└─────────────────────────────────────────────────────────┘
```

Cela ajoute énormément de crédibilité à votre landing page ! 🎉

