
🍽️ Nutritional Recipe Finder
Welcome to Nutritional Recipe Finder — a full-stack web application that allows users to search for recipes based on ingredients and view their nutritional information including calories, carbs, and protein!

🚀 Features
🔎 Search for recipes by entering one or more ingredients

🥗 View recipe images, titles, and basic nutritional info

⚡ Fast and responsive front-end built with React and Chakra UI

🔥 Backend powered by Node.js and Express

🧠 Integrated with the Spoonacular API for real recipe data

🎯 Organized and clean project structure (frontend & backend separated)

🛠️ Tech Stack
Frontend: React.js, Chakra UI

Backend: Node.js, Express.js

API Integration: Spoonacular API

Database: (No database used - live API fetching)

Version Control: Git & GitHub

📂 Project Structure
Edit
nrf-app/
├── client/               # React frontend
│   ├── public/
│   └── src/
│       ├── components/
│       │   ├── Header.js
│       │   ├── IngredientInput.js
│       │   ├── RecipeCard.js
│       ├── pages/
│       │   └── Home.js
│       ├── App.js
│       ├── index.js
│       └── App.css
├── server/                # Node.js backend
│   ├── routes/
│   │   └── recipeRoutes.js
│   ├── controllers/
│   │   └── recipeController.js
│   ├── .env
│   ├── server.js
├── .gitignore
├── README.md
⚙️ Installation and Setup
Clone the repository


git clone https://github.com/YOUR-USERNAME/YOUR-REPO-NAME.git
cd YOUR-REPO-NAME
Set up the backend


cd server
npm install
touch .env
In the .env file, add your Spoonacular API key:


SPOONACULAR_API_KEY=your_api_key_here
Start the backend server:

bash
npm run dev
Set up the frontend

bash
cd ../client
npm install
npm start


✍️ Author
Ali Haji

