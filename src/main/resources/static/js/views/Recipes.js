// import {recipeID} from './Meals.js'
// let recipeId;

// let data;
// let testURL = `https://api.spoonacular.com/recipes/716429/ingredients?apiKey=2b85441825dc47a797c0f3291e25f1a5`


// let apiRecipeImg = [];
// let apiRecipeIngredients = [];
// let apiCookingInstructions = [];

export default function recipesHTML(props) {
    // data = props.data;
    return `
         <main>
            <div>
                <h1>Recipe</h1>
                <div id="recipe-results"></div>
            </div>
        </main>
 `;
}

export function recipesEvent() {
    // perhaps this is where I can call the recipe ID from meals.js
    recipeSelectedHandler();
    console.log("Hello recipesEvent");
    // console.log("${response.json}");
}

function recipeSelectedHandler(e) {
    // this is where I call the user ID from the other page
    // const userInput = document.querySelector('#search-bar');
    // userInput.addEventListener('keypress', function (e) {
    //     if (e.key === 'Enter') {
    //         e.preventDefault()
    // e.preventDefault()
    // let userSelectedID = recipeID;
    // getAPI(userSelectedID);
    // let recipeID = 716429;
    // recipeId = 716429;
    getAPI(716429);

    // at this point getAPI will have finished

    console.log("Hello recipeSelectedHandler");
    // alert("stuffs")
    // }
    // })
}

function getAPI(userSelectedID) {

    console.log("Hello getAPI");

    // the ID below will instead be called recipeID and be pulled from meals.js
    let SERVICE_URL = `https://api.spoonacular.com/recipes/`+userSelectedID+`/information`;
    const request_url = SERVICE_URL + "?" + "apiKey=" + SPOONACULAR_API;

    fetch(request_url).then(resp => {
        return resp.json();
    }).then(food => {
        console.log(food);
        console.log(food?.image);
        let recipeSlot = [];
        // for (let i = 0; i < food.length; i++) {
            recipeSlot.push(food.results)
        // }
        console.log(recipeSlot)
        let html = "";
        for (let i = 0; i < recipeSlot.length; i++) {
            html = `
                <div class="home-recipe-card">
                    <div class="home-card-image">
                        <img src="${recipeSlot[i]?.image}" class="home-card-img" alt="Recipe Image">
                    </div>
                    <h3 data-id="${recipeSlot[i]?.id}" class="home-card-title">${recipeSlot[i]?.title}</h3>
                </div>
            `
        }
        //
        // recipeSlot.forEach(function (recipe, index) {
        //     html += `
        //         <div class="home-recipe-card">
        //             <div class="home-card-image">
        //                 <img src="${recipe?.image}" class="home-card-img" alt="Recipe Image">
        //             </div>
        //             <h3 data-id="${recipe?.id}" class="home-card-title">${recipe?.title}</h3>
        //         </div>
        //     `
        // })

        const recipesContainer = document.querySelector("#recipe-results");
        recipesContainer.innerHTML = html;

        // Promise.resolve();
        //dont delete this
    // }).catch(erre => {
        // console.log(erre);
        // Promise.reject();
    });
}
