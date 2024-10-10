// Sample recipes (to be replaced with actual data source)
const recipes = [{
        id: 1,
        title: "Pav Bhaji",
        image: "img/pav bhaji.jpg",
        category: "Breakfast",
        description: "A delicious spicy blend of mashed vegetables in a thick gravy.",
        ingredients: [
            "1 cup mixed vegetables",
            "2 tablespoons pav bhaji masala",
            "1 tablespoon butter",
            "1 onion, chopped",
            "2 tomatoes, chopped"
        ]
    },
    {
        id: 2,
        title: "Dhokla",
        image: "img/dhokla.jpg",
        category: "Breakfast",
        description: "A steamed savory cake made with gram flour, tempered with mustard seeds.",
        ingredients: [
            "1 cup gram flour",
            "1/2 cup yogurt",
            "1 teaspoon mustard seeds",
            "1 teaspoon turmeric",
            "1/2 teaspoon baking soda"
        ]
    },
    {
        id: 3,
        "title": "Porridge Bowl",
        "image": "img/Porridge Bowl.jpg",
        "category": "Breakfast",
        "description": "A nutritious and comforting bowl of warm porridge, perfect for starting your day.",
        "ingredients": [
            "1 cup rolled oats",
            "2 cups milk or almond milk",
            "1 tablespoon honey or maple syrup",
            "1/2 teaspoon vanilla extract",
            "1/4 teaspoon cinnamon",
            "Fresh fruits (e.g., berries, banana slices) for topping",
            "A handful of nuts and seeds (e.g., almonds, chia seeds) for garnish"
        ]
    },
    {
        "id": 4,
        "title": "Overnight Oats",
        "image": "img/Overnight Oats.jpg",
        "category": "Breakfast",
        "description": "A quick and easy breakfast option made by soaking oats overnight, resulting in a creamy and delicious meal.",
        "ingredients": [
            "1/2 cup rolled oats",
            "1/2 cup milk (or any plant-based milk)",
            "1/2 cup Greek yogurt (or any yogurt)",
            "1 tablespoon chia seeds",
            "1 tablespoon honey or maple syrup",
            "1/2 teaspoon vanilla extract",
            "Fresh fruits (e.g., berries, banana slices)",
            "A sprinkle of nuts and seeds (e.g., almonds, walnuts)"
        ]
    },
    {
        "id": 5,
        "title": "Black Forest Breakfast",
        "image": "img/Black Forest breakfast.jpg",
        "category": "Breakfast",
        "description": "A decadent breakfast inspired by the Black Forest cake, featuring chocolate, cherries, and whipped cream.",
        "ingredients": [
            "1 cup granola",
            "1/2 cup Greek yogurt",
            "1/2 cup fresh or canned cherries, pitted and chopped",
            "2 tablespoons cocoa powder",
            "1 tablespoon honey or maple syrup",
            "Whipped cream or coconut cream for topping",
            "A sprinkle of dark chocolate shavings",
            "Fresh mint leaves for garnish (optional)"
        ]
    },


    // Add more recipes as needed
];

// Function to get recipe by ID
function getRecipeById(id) {
    return recipes.find(recipe => recipe.id == id);
}

// Function to display the recipe details
function displayRecipeDetail() {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const recipeId = urlParams.get('id');
    const recipe = getRecipeById(recipeId);
    const recipeDetailSection = document.getElementById('recipe-detail');

    if (recipe) {
        recipeDetailSection.innerHTML = `
            <h2>${recipe.title}</h2>
            <img src="${recipe.image}" alt="${recipe.title}">
            <p><strong>Category:</strong> ${recipe.category}</p>
            <p><strong>Description:</strong> ${recipe.description}</p>
            <h3>Ingredients</h3>
            <ul>
                ${recipe.ingredients.map(ingredient => `<li>${ingredient}</li>`).join('')}
            </ul>
        `;
    } else {
        recipeDetailSection.innerHTML = `<p>Recipe not found.</p>`;
    }
}

// Function to search for recipes
function searchRecipe() {
    const input = document.getElementById('search-input').value.toLowerCase();
    const matchedRecipes = recipes.filter(recipe =>
        recipe.title.toLowerCase().includes(input) ||
        recipe.ingredients.some(ingredient => ingredient.toLowerCase().includes(input))
    );

    if (matchedRecipes.length > 0) {
        // Redirect to recipe detail page with the first matched recipe ID (for demonstration)
        const firstMatchId = matchedRecipes[0].id;
        window.location.href = `Recipe.html?id=${firstMatchId}`;
    } else {
        alert('No recipes found matching your search.');
    }
}

// Display the recipe details on page load
displayRecipeDetail();