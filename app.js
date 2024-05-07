const express = require("express");
const cors = require("cors");
const app = express();

// Utilisation du middleware cors
app.use(cors());

// Données de démonstration
const users = [
  { id: 1, name: "John" },
  { id: 2, name: "Jane" },
  { id: 3, name: "Bob" },
];

// Route GET pour récupérer tous les utilisateurs
app.get("/api/users", (req, res) => {
  res.json(users);
});

// Route GET pour récupérer un utilisateur par son ID
app.get("/api/users/:id", (req, res) => {
  const user = users.find((u) => u.id === parseInt(req.params.id));
  if (!user) res.status(404).send("Utilisateur non trouvé");
  res.json(user);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Serveur démarré sur le port ${PORT}`);
});
