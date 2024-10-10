// Recipe data
const recipes = [{
        id: 1,
        title: "Pav Bhaji",
        image: "img/pav-bhaji.jpg",
        category: "Breakfast",
        description: "A delicious spicy blend of mashed vegetables in a thick gravy."
    },
    {
        id: 2,
        title: "Dhokla",
        image: "img/dhokla.jpg",
        category: "Breakfast",
        description: "A steamed savory cake made with gram flour, tempered with mustard seeds."
    },
    // Add more recipes
];

// Function to display recipes on the home page
function displayRecipes(recipeList = recipes) {
    const recipeSection = document.getElementById('recipe-list');
    recipeSection.innerHTML = '';

    recipeList.forEach(recipe => {
        const recipeCard = document.createElement('div');
        recipeCard.classList.add('recipe-card');

        recipeCard.innerHTML = `
            <img src="${recipe.image}" alt="${recipe.title}">
            <h3>${recipe.title}</h3>
            <p>${recipe.category}</p>
            <button onclick="goToRecipeDetail(${recipe.id})">View Recipe</button>
        `;

        recipeSection.appendChild(recipeCard);
    });
}

// Function to search for recipes
function searchRecipe() {
    const input = document.getElementById('search-input').value.toLowerCase();
    const filteredRecipes = recipes.filter(recipe =>
        recipe.title.toLowerCase().includes(input)
    );
    displayRecipes(filteredRecipes);
}

// Function to navigate to the recipe detail page
function goToRecipeDetail(recipeId) {
    window.location.href = `recipe.html?id=${recipeId}`;
}

// Display all recipes on page load
displayRecipes();