const express = require("express");
const router = express.Router();

const tasks = [];

// Créer une nouvelle tâche (POST /tasks)
router.post("/", (req, res) => {
    const {nom, description} = req.body;
    const task = {
        id: tasks.length + 1,
        nom: nom,
        description : description,
        completed : false,
    }
    tasks.push(task);
    res.status(201).json(task);
})

// Lire la liste des tâches (GET /tasks)
router.get("/", (req, res) => { 
    res.json({data: tasks})
})

// Afficher une tâche spécifique (GET /tasks/:id)
router.get("/:id", (req, res) => {
    const id = req.params.id;
    const task = tasks.find(element => element.id === parseInt(id));
    if(!task) return res.status(404).send("Cette tâche n'existe pas")
    res.json({data: task})
})

// Modifier une tâche (PUT /tasks/:id)
router.put("/:id", (req, res) => {
    const id = req.params.id;
    const task = tasks.find(element => element.id === parseInt(id));
    
    const {nom, description} = req.body;
    task.nom = nom;
    task.description = description;

    res.json({data: task});
} )

// Supprimer une tâche (DELETE /tasks/:id)

router.delete("/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const taskList = tasks.filter(task => task.id !== id)
    res.json({data: taskList})
})



module.exports = router;

