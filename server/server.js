const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");

dotenv.config(); // Load environment variables

const app = express();
const port = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json()); // To parse JSON bodies

// Routes
const recipeRoutes = require("./routes/recipeRoutes");
app.use("/api", recipeRoutes); // Mount recipeRoutes on /api

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
