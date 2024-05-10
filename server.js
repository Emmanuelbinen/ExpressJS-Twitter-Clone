const express = require("express");
const cors = require("cors");
const tweets = require("./data");

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware pour parser les requêtes JSON
app.use(express.json());

// Middleware pour autoriser les requêtes cross-origin

app.use(cors());

// Démarrage du serveur
app.listen(PORT, () => {
  console.log(`Serveur démarré sur le port ${PORT}`);
});

// Route GET pour récupérer tous les tweets
app.get("/api/tweets", (req, res) => {
  res.json(tweets);
});

// Route POST pour créer un nouveau tweet
app.post("/api/tweets", (req, res) => {
  const newTweet = req.body;

  // Validation du tweet
  if (!newTweet.tweet_text || newTweet.tweet_text.length > 180) {
    return res.status(400).json({ error: "Tweet invalide" });
  }

  tweets.push(newTweet);
  res.status(201).json(newTweet);
});
