const axios = require("axios");

const getRecipes = async (req, res) => {
  const { ingredients } = req.body;

  if (!ingredients || ingredients.length === 0) {
    return res.status(400).json({ message: "Ingredients are required." });
  }

  const apiKey = process.env.SPOONACULAR_API_KEY;  // Ensure you have the API key in .env

  try {
    // Call Spoonacular API
    const response = await axios.get("https://api.spoonacular.com/recipes/findByIngredients", {
      params: {
        ingredients: ingredients.join(","), // Join the array to a comma-separated string
        apiKey: apiKey,
        number: 10,  // Adjust number of recipes to fetch
      },
    });

    return res.json(response.data);  // Send the fetched recipes to the frontend
  } catch (error) {
    console.error("Error fetching recipes:", error);
    return res.status(500).json({ message: "Failed to fetch recipes." });
  }
};

module.exports = { getRecipes };
