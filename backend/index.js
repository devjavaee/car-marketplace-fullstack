const express = require("express");
const app = express();
const PORT = 5000;

const carRoutes = require("./routes/car.routes");

app.use("/api/cars", carRoutes);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
