#!/bin/bash

# Script de déploiement rapide sur Netlify
# Ce script crée un dépôt GitHub et le connecte à Netlify

echo "🚀 Déploiement de Notion Consulting Landing Page"
echo "=================================================="
echo ""

# Vérifier si un remote GitHub existe déjà
if git remote | grep -q origin; then
    echo "✅ Remote GitHub déjà configuré"
else
    echo "❌ Aucun remote GitHub configuré"
    echo ""
    echo "📝 Instructions pour créer un dépôt GitHub :"
    echo "1. Allez sur https://github.com/new"
    echo "2. Créez un nouveau dépôt (par exemple: notion-consulting-landing)"
    echo "3. Ne cochez PAS 'Initialize with README'"
    echo "4. Copiez l'URL du dépôt"
    echo ""
    read -p "Entrez l'URL du dépôt GitHub (ex: https://github.com/username/repo.git): " REPO_URL
    
    if [ ! -z "$REPO_URL" ]; then
        git remote add origin "$REPO_URL"
        echo "✅ Remote ajouté : $REPO_URL"
    fi
fi

echo ""
echo "🔨 Build du projet..."
npm run build

if [ $? -eq 0 ]; then
    echo "✅ Build réussi !"
else
    echo "❌ Erreur lors du build"
    exit 1
fi

echo ""
echo "📤 Push vers GitHub..."
git branch -M main
git push -u origin main

if [ $? -eq 0 ]; then
    echo "✅ Code poussé sur GitHub !"
else
    echo "❌ Erreur lors du push"
    exit 1
fi

echo ""
echo "🎉 Projet prêt pour Netlify !"
echo ""
echo "📋 Prochaines étapes :"
echo "1. Allez sur https://app.netlify.com"
echo "2. Cliquez sur 'Add new site' > 'Import an existing project'"
echo "3. Choisissez GitHub et sélectionnez votre dépôt"
echo "4. Netlify détectera automatiquement Next.js"
echo "5. Cliquez sur 'Deploy site'"
echo ""
echo "⏱️  Le déploiement prendra ~2-3 minutes"
echo "🌐 Vous obtiendrez une URL type: https://random-name-123.netlify.app"
echo ""

