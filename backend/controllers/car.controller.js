// le cerveau. son role est décider quoi faire quand une route est appelée.
const getCars = (req, res) => {
  res.json({
    message: "Liste des voitures",
    cars: []
  });
};

module.exports = { getCars };

// Déclare une fonction. 
// req = requête (infos envoyées par le client), res = réponse (ce qu’on renvoie)
//On renvoie une réponse JSON
//Format standard des APIs
//cars: [] → pour l’instant, tableau vide (Plus tard, ce sera les données MongoDB)