# Task List CRUD API

Une API RESTful simple pour la gestion de tâches, construite avec Node.js et Express.js.

## Technologies Utilisées

- Node.js
- Express.js
- JavaScript

## Installation

1. Clonez le repository
2. Installez les dépendances :
```bash
npm install
```
ou avec pnpm :
```bash
pnpm install
```

## Démarrage

Pour lancer le serveur :
```bash
npx nodemon server.js
```

Le serveur démarrera sur `http://localhost:3000`

## Points d'Accès (Endpoints)

### Tâches

- **GET /tasks** - Récupérer toutes les tâches
- **GET /tasks/:id** - Récupérer une tâche spécifique
- **POST /tasks** - Créer une nouvelle tâche
- **PUT /tasks/:id** - Modifier une tâche existante
- **DELETE /tasks/:id** - Supprimer une tâche

### Format des Données

Structure d'une tâche :
```json
{
  "id": 1,
  "nom": "Nom de la tâche",
  "description": "Description de la tâche",
  "completed": false
}
```

## Exemple d'Utilisation

### Créer une nouvelle tâche

```bash
POST http://localhost:3000/tasks
Content-Type: application/json

{
  "nom": "Faire les courses",
  "description": "Acheter du pain et du lait"
}
```

## Structure du Projet

- `server.js` - Point d'entrée de l'application
- `routes/tasks.routes.js` - Définition des routes pour la gestion des tâches
- `package.json` - Configuration du projet et dépendances
