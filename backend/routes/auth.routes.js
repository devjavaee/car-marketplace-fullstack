import express from "express";
import { register, login } from "../controllers/auth.controller.js";

const router = express.Router();

router.post("/register", register);
router.post("/login", login);

export default router;
router.post("/login", (req, res) => {
  res.json({ test: "auth route OK" });
});
