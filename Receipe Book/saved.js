// This function retrieves saved recipes from localStorage and displays them
function displaySavedRecipes() {
    const savedRecipes = JSON.parse(localStorage.getItem('savedRecipes')) || [];

    const savedRecipesContainer = document.getElementById('saved-recipes');

    if (savedRecipes.length === 0) {
        savedRecipesContainer.innerHTML = '<p>No saved recipes yet.</p>';
        return;
    }

    let recipesHtml = '<div class="recipe-list">';
    savedRecipes.forEach(recipe => {
                recipesHtml += `
            <div class="recipe-card">
                <img class="recipe-image" src="${recipe.image}" alt="${recipe.title}">
                <h3 class="recipe-title">${recipe.title}</h3>
                <p class="recipe-description">${recipe.description}</p>
                <ul class="recipe-ingredients">
                    ${recipe.ingredients.map(ingredient => `<li>${ingredient}</li>`).join('')}
                </ul>
            </div>
        `;
    });
    recipesHtml += '</div>';

    savedRecipesContainer.innerHTML = recipesHtml;
}

// Load saved recipes on page load
document.addEventListener('DOMContentLoaded', displaySavedRecipes);