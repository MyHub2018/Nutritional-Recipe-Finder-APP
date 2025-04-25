const express = require("express");
const router = express.Router();
const { getRecipes } = require("../controllers/recipeController");

// Define the /api/recipes route
router.post("/recipes", getRecipes);

module.exports = router;
