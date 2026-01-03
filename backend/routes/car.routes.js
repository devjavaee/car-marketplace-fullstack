import express from "express";
import {
  createCar,
  getAllCars,
  getCarById,
  updateCar,
  deleteCar
} from "../controllers/car.controller.js";
import { protect } from "../middleware/auth.middleware.js";

const router = express.Router();

/**
 * @route   GET /api/cars
 * @desc    Récupérer toutes les voitures
 * @access  Public
 */
router.get("/", getAllCars);

/**
 * @route   GET /api/cars/:id
 * @desc    Récupérer une voiture par ID
 * @access  Public
 */
router.get("/:id", getCarById);

/**
 * @route   POST /api/cars
 * @desc    Créer une annonce voiture
 * @access  Privé (utilisateur connecté)
 */
router.post("/", protect, createCar);

/**
 * @route   PUT /api/cars/:id
 * @desc    Modifier une annonce
 * @access  Privé (propriétaire)
 */
router.put("/:id", protect, updateCar);

/**
 * @route   DELETE /api/cars/:id
 * @desc    Supprimer une annonce
 * @access  Privé (propriétaire ou admin)
 */
router.delete("/:id", protect, deleteCar);

export default router;
