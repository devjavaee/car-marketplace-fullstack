require("dotenv").config();
const express = require("express");
const connectDB = require("./config/db");

const app = express();
const PORT = 5000;

connectDB();

const carRoutes = require("./routes/car.routes");
app.use("/api/cars", carRoutes);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
console.log("MONGO_URI =", process.env.MONGO_URI);
