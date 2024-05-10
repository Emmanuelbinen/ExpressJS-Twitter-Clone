const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors()); // Middleware pour autoriser les requêtes cross-origin
app.use(express.json()); // Middleware pour parser les requêtes JSON

// Données de démonstration (à remplacer par une base de données réelle)
const tweets = [
  {
    id: "01",
    tweet_avatar: "CNN-Profile-Photo.png",
    tweet_body: {
      tweet_author_title: "CNN",
      tweet_authors: "CNN",
      tweet_time: "7m",
      tweet_actions: {
        reply: "57",
        retweet: "144",
        react: "184",
        share: "",
      },
      tweet_text:
        "President Joe Biden touted a new agreement reached with the European Union to ease Trump-era tariffs on aluminum and steel as a 'major breakthrough' that would serve to both strengthen the US steel industry and combat the global climate crisis.",
    },
    tweet_time2: [19, 48, 482, 19],
  },
  {
    id: "02",
    tweet_avatar: "Tweet-Profile-Photo2.png",
    tweet_body: {
      tweet_author_title: "The new york times",
      tweet_authors: "nytimes",
      tweet_image: "image3.png",
      tweet_time: "2h",
      tweet_actions: {
        reply: "19",
        retweet: "48",
        react: "482",
        share: "19",
      },
      tweet_text:
        "Gardening boomed during the pandemic. Six Black writers share how it has helped them re-establish, and reimagine, a connection to cultivation and the land.",
    },
  },
  {
    id: "03",
    tweet_avatar: "Tweet-Profile-Photo3.png",
    tweet_body: {
      tweet_author_title: "Twitter",
      tweet_authors: "Twitter",
      tweet_time: "Oct  29",
      tweet_actions: {
        reply: "6.8K",
        retweet: "36.6K",
        react: "267.1K",
        share: "",
      },
      tweet_text: "BIG NEWS lol jk still Twitter",
    },
  },
  {
    id: "04",
    tweet_avatar: "Tweet-Profile-Photo3.png",
    tweet_body: {
      tweet_author_title: "Twitter",
      tweet_authors: "Twitter",
      tweet_time: "Oct  24",
      tweet_actions: {
        reply: "118.k",
        retweet: "785.k",
        react: "3.3M",
        share: "",
      },
      tweet_text: "hello literally everyone",
    },
  },
];

// Route GET pour récupérer tous les tweets
app.get("/api/tweets", (req, res) => {
  res.json(tweets);
});

// Route POST pour créer un nouveau tweet
app.post("/api/tweets", (req, res) => {
  const newTweet = req.body;
  tweets.push(newTweet);
  res.status(201).json(newTweet);
});

// Autres routes pour mettre à jour, supprimer des tweets, gérer les utilisateurs, etc.

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Serveur démarré sur le port ${PORT}`);
});
