# 🏋️ NeoStats

Un site web moderne et élégant pour suivre votre évolution sportive. Enregistrez vos performances, visualisez votre progression et atteignez vos objectifs !

## ✨ Fonctionnalités

- **Page d'accueil** : Design moderne avec animations et présentation des fonctionnalités
- **Musculation** : Suivi complet de vos séances de musculation
  - Ajout d'exercices avec date, poids, répétitions et séries
  - Calcul automatique du volume total (poids × répétitions × séries)
  - Visualisation de l'évolution avec graphiques interactifs
  - Statistiques détaillées par exercice
  - Filtrage par exercice
  - Historique complet avec possibilité de suppression

## 🚀 Déploiement sur GitHub Pages

1. **Créer un dépôt GitHub** :

   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/votre-username/NeoStats.git
   git push -u origin main
   ```

2. **Activer GitHub Pages** :

   - Allez dans les paramètres de votre dépôt GitHub
   - Dans la section "Pages", sélectionnez la branche `main` comme source
   - Choisissez le dossier `/root`
   - Cliquez sur "Save"

3. **Accéder à votre site** :
   Votre site sera disponible à l'adresse : `https://votre-username.github.io/NeoStats/`

## 📁 Structure du projet

```
NeoStats/
├── index.html          # Page d'accueil
├── musculation.html    # Page musculation
├── css/
│   └── style.css      # Styles principaux
├── js/
│   ├── app.js         # Script principal
│   └── musculation.js # Logique musculation
└── README.md          # Documentation
```

## 🎨 Technologies utilisées

- **HTML5** : Structure du site
- **CSS3** : Styles et animations modernes
- **JavaScript** : Logique et interactions
- **Chart.js** : Graphiques d'évolution (CDN)
- **LocalStorage** : Sauvegarde des données localement

## 📝 Utilisation

1. Ouvrez `index.html` dans votre navigateur
2. Cliquez sur "Musculation" dans le menu
3. Remplissez le formulaire pour ajouter une nouvelle séance :
   - Sélectionnez la date
   - Choisissez l'exercice (ou créez un nouveau)
   - Entrez le poids en kg
   - Entrez le nombre de répétitions
   - Entrez le nombre de séries
4. Cliquez sur "Ajouter" pour sauvegarder
5. Consultez vos statistiques et graphiques d'évolution

## 🔮 Fonctionnalités à venir

- **Courses** : Suivi des temps de course et distances
- **Marche** : Enregistrement des distances parcourues
- **Natation** : Suivi des longueurs et temps
- Export des données en CSV
- Comptes utilisateurs
- Comparaison avec d'autres utilisateurs

## 📄 Licence

Ce projet est open source et disponible sous la licence MIT.

---

Fait avec ❤️ pour tous les sportifs passionnés !
