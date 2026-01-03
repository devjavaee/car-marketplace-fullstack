// 1️⃣ Imports
import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import authRoutes from "./routes/auth.routes.js";
import carRoutes from "./routes/car.routes.js";

// 2️⃣ Config dotenv
dotenv.config();

// 3️⃣ Initialiser Express
const app = express();

// 4️⃣ Middleware pour parser JSON
app.use(express.json());

// 5️⃣ Connecter MongoDB
connectDB();

// 6️⃣ Routes
app.use("/api/auth", authRoutes);
app.use("/api/cars", carRoutes);

// 7️⃣ Port
const PORT = process.env.PORT || 5000;

// 8️⃣ Lancer le serveur
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
