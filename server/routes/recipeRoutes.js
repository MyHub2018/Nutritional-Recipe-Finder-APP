// routes/recipeRoutes.js
const express = require("express");
const router = express.Router();
const { getRecipes } = require("../controllers/recipeController");

router.post("/", getRecipes);

module.exports = router;
