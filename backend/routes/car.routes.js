// le GPS de l’API. Son role est de dire quand quelqu’un appelle telle URL, quelle fonction doit répondre
const express = require("express"); //On importe Express pour utiliser ses outils.
const router = express.Router();//On crée un routeur ( C'est un mini serveur spécialisé). 
// En entreprise, chaque fonctionnalité a son router
const { getCars } = require("../controllers/car.controller");//On importe la fonction getCars depuis le controller

router.get("/", getCars);//On définit une route. GET → lire des données.
//  / → route racine du module. getCars → fonction appelée quand on visite la route

module.exports = router;//On exporte le router pour l’utiliser ailleur
