const express = require('express');
const mongoose = require('mongoose');
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware to parse JSON requests
app.use(express.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost/suivi-commandes', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connecté'))
  .catch(err => {
    console.error('Erreur de connexion à MongoDB:', err);
    process.exit(1); // Exit process with failure
  });

// Example route to get commands
app.get('/api/commands', (req, res) => {
  try {
    res.json([
      { id: 1, details: 'Commande #1: En route' },
      { id: 2, details: 'Commande #2: Livrée' }
    ]);
  } catch (error) {
    // Handle errors in route
    res.status(500).json({ error: 'Une erreur est survenue lors de la récupération des commandes.' });
  }
});

// Centralized error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});