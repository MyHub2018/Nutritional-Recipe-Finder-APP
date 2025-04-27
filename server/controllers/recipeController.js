// controllers/recipeController.js
const axios = require('axios'); // <-- Make sure axios is imported
require('dotenv').config(); // <-- Make sure dotenv is imported to read your .env file

const getRecipes = async (req, res) => {
  const { ingredients } = req.body;

  if (!Array.isArray(ingredients)) {
    return res.status(400).json({ error: "Ingredients must be an array." });
  }

  try {
    const ingredientsQuery = ingredients.join(",");

    const response = await axios.get(`https://api.spoonacular.com/recipes/findByIngredients`, {
      params: {
        ingredients: ingredientsQuery,
        number: 5,
        apiKey: process.env.SPOONACULAR_API_KEY,
      },
    });

    const enrichedRecipes = await Promise.all(
      response.data.map(async (recipe) => {
        const nutritionInfo = await axios.get(`https://api.spoonacular.com/recipes/${recipe.id}/information`, {
          params: {
            apiKey: process.env.SPOONACULAR_API_KEY,
            includeNutrition: true,
          },
        });

        const nutrition = nutritionInfo.data.nutrition.nutrients;

        const calories = nutrition.find((n) => n.name === "Calories")?.amount || "N/A";
        const carbs = nutrition.find((n) => n.name === "Carbohydrates")?.amount || "N/A";
        const protein = nutrition.find((n) => n.name === "Protein")?.amount || "N/A";

        return {
          id: recipe.id,
          title: recipe.title,
          image: recipe.image,
          nutrition: {
            calories,
            carbs,
            protein,
          },
        };
      })
    );

    res.status(200).json(enrichedRecipes);
  } catch (error) {
    console.error("Error fetching recipes:", error.message);
    res.status(500).json({ error: "Internal server error" });
  }
};

module.exports = { getRecipes };
