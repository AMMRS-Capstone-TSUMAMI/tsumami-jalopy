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
                <div id="recipe-apiData"></div>
            </div>
        </main>
 `;
}

export function recipesEvent() {
    // perhaps this is where I can call the recipe ID from meals.js
    //uncomment below to activate API call!! Only comment out if not wanting to automatically make the call
    // recipeSelectedHandler();
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
    // let recipeSlot = [];

    //request_url is our full api call url
    fetch(request_url).then(resp => {
        //the resp is the data and below is the json format of the data from the api
        return resp.json();
        //food at this point is the usable json data. Can name whatever
    }).then(food => {
        console.log(food);
        //? means look for this thing if exists as a key (needs further research)
        console.log(food?.image);
        // for (let i = 0; i < food.length; i++) {
        //     recipeSlot.push(food.results)
        // }
        // console.log("logging recipeSlot here");
        // console.log(recipeSlot)
        let html = "";
        let id,
            title,
            image;

        // food.forEach(apiData2 => {

            id = food.id;
            title = food.title;
            image = food.image;
            console.log(id);
            console.log(title);
            console.log(image);
        // for (let i = 0; i < 5; i++) {
            html = `
                <div class="home-recipe-card">
                    <div class="home-card-image">
                        <img src="${image}" class="home-card-img" alt="Recipe Image">
                    </div>
                    <h3 data-id="${id}" class="home-card-title">${title}</h3>
                </div>
            `
        // }

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

        const recipesContainer = document.querySelector("#recipe-apiData");
        recipesContainer.innerHTML = html;

        // Promise.resolve();
        //dont delete this
    // }).catch(erre => {
        // console.log(erre);
        // Promise.reject();
    // });
})}
