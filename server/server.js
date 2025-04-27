// server.js
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const recipeRoutes = require("./routes/recipeRoutes");

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json()); // Middleware to parse JSON

// Routes
app.use("/api/recipes", recipeRoutes);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
