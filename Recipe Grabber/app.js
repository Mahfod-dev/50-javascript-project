// https://www.edamam.com/
const API_KEY ="5ffdf7c6421cf9e51bc6f67ec5051a6c"
const API_ID = "4ea99e3c"
const recipeURL = "https://api.edamam.com/api/recipes/v2?type=public&q=" 

const form = document.querySelector('form')
const inputRecipe = document.querySelector('.search-input')
const containerResult = document.querySelector('.search-result')


form.addEventListener('submit',(e)=>{
    e.preventDefault()
    const recipe = inputRecipe.value

    fetchDataRecipes(recipe)
    inputRecipe.value = ''
})


async function fetchDataRecipes(recipe) {
    const response = await fetch(`${recipeURL}${recipe}&app_id=${API_ID}&app_key=${API_KEY}`)
    const {hits} = await response.json()
    console.log(hits);
    displayRecipes(hits);

}

function displayRecipes(recipeResult) {
  let recipeEl = "" 
recipeResult?.map((recipeResult)=>{
      
    recipeEl +=  ` <div class="item">
      <img src="${recipeResult.recipe.image}" />
      <div class="content-wrapper">
        <h2 class="recipe-title">${recipeResult.recipe.label}</h2>
        <a href="${
          recipeResult.recipe.url
        }" target="_blank" class="view-recipe">View Recipe</a>
      </div>
      <div class="recipe-desc">
        <p class="item-data">Calories: ${recipeResult.recipe.calories.toFixed(
          2
        )}</p>
        <p class="item-data">Diet Label: ${recipeResult.recipe.dietLabels}</p>
        <p class="item-data">Health Label: ${
          recipeResult.recipe.healthLabels
        }</p>
        <p class="item-data">Source: ${recipeResult.recipe.source}</p>
      </div>
  </div>
    `;

    containerResult.innerHTML = recipeEl
    
}).join('')

  

    
}

displayRecipes()
