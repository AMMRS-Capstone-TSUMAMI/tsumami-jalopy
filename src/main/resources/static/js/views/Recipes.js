import createView from "../createView.js"
let data;

// let apiRecipeImg = [];
// let apiRecipeIngredients = [];
// let apiCookingInstructions = [];

export default function recipesHTML(props) {
    data = props.data;
    return `
     <div id="recipe-results"></div>
 `;
}

export function recipesEvent() {
    // displayRecipesHandler()
    getAPI().then(r => {});
    console.log("${response.json}");
}

// function displayRecipesHandler(e) {
    // const userSelectedRecipe = document.querySelector('#search-bar');
    // userInput.addEventListener('keypress', function (e) {
    //     if (e.key === 'Enter') {
    //         e.preventDefault()
    //         let userInput = userSelectedRecipe.value;
    //         getAPI(apiRecipeID);
        // }
    // })
// }

function getAPI(userSearch) {
    return fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${SPOONACULAR_API}&query=${userSearch}&number=5`).then(resp => {
        https://api.spoonacular.com/recipes/{id}/information
            return resp.json();
    }).then(food => {
        let recipeArray = [];
        for (let i = 0; i < 5; i++) {
            recipeArray.push(food.results[i])
        }
        let html = "";
        {
            html = `
                <div>
                    <div>Recipes</div>
                    <div>
                        <img src="${recipe.image}" class="home-card-img" alt="Recipe Image">
                    </div>
                    <h3 data-id="${recipe.id}" class="home-card-title">${recipe.title}</h3>
                        <div id="ingredient-list">
                            ingredient list here
                        </div>
                    <div id="cooking-instructions">
                        Cooking instructions here
                    </div>
                </div>
            `
        }

        const recipesContainer = document.querySelector("#recipe-results");
        recipesContainer.innerHTML = html;
        return Promise.resolve();


        //dont delete this
    }).catch(error => {
        console.log(error);
        return Promise.reject();
    });
}
