import {checkAndAddTrophy} from "./User.js";
// import {recipeID} from './Meals.js'
// let recipeId;

// let data;
// let testURL = `https://api.spoonacular.com/recipes/716429/ingredients?apiKey=808d821061f04a7789e651ba3ac9bb5f`

// let apiRecipeImg = [];
// let apiRecipeIngredients = [];
// let apiCookingInstructions = [];

// let recipe;
let me;


let recipeInfo;
// let html;
// let html2;

export default function recipesHTML(props) {
    recipeInfo = props.recipes
    console.log(recipeInfo);
    me = props.me;
    return `
            <div id="recipes-page" class="container g-0">
                <div class="row">   
                    <div id="recipes-header" class=""></div>
                    <div class="col-6 g-0">
                        <div id="ingredient-cards" class="row row-cols-3 row-cols-lg-6 g-0 ps-1 pt-5"></div>
                    </div>
                </div>
            </div>
<!--                <h1>Recipe</h1>            -->
<!--            <div id="recipe-apiData" class="d-flex flex-row justify-content-evenly">header code here</div>-->
<!--            <div id="recipe-apiData2" class="d-flex flex-row justify-content-evenly"></div>-->
<!--            <div id="recipe-apiData3" class="d-flex flex-column justify-content-evenly"></div>-->
 `;
}

export function recipesEvent() {
    checkAndAddTrophy(me.trophies, 4);
    populateHeader();
    populateIngredients();
    populateSteps();

    // perhaps this is where I can call the recipe ID from meals.js
    //uncomment below to activate API call!! Only comment out if not wanting to automatically make the call
    // recipeSelectedHandler();
    // populateRecipeInfo();


    // console.log("Hello recipesEvent");
    // console.log("${response.json}");
}

// function recipeSelectedHandler(e) {
// this is where I call the user ID from the other page
// const userInput = document.querySelector('#search-bar');
// userInput.addEventListener('keypress', function (e) {
//     if (e.key === 'Enter') {
//         e.preventDefault()
// e.preventDefault()
// let userSelectedID = recipeID;
// getAPI(userSelectedID);
// let recipeID = 716429;

//comment out line below after testing
// getAPI(918034);

//uncomment below after testing
// getAPI(recipe.id);

// at this point getAPI will have finished

// console.log("Hello recipeSelectedHandler");
// alert("stuffs")
// }
// })
// }

// export function getAPI(userSelectedID) {
//     // console.log("Hello getAPI");
//
//         // the ID below will instead be called recipeID and be pulled from meals.js
//     let SERVICE_URL = `https://api.spoonacular.com/recipes/`+userSelectedID+`/information`;
//     const request_url = SERVICE_URL + "?" + "apiKey=" + SPOONACULAR_API;
//     // let recipeSlot = [];
//     https://api.spoonacular.com/food/jokes/random + SPOONACULAR_API;
//     //request_url is our full api call url
//     recipeInfo  =
//         fetch(request_url).then(resp => {
//         //the resp is the data and below is the json format of the data from the api
//         return resp.json();
//         //food at this point is the usable json data. Can name whatever
//     }).then(food => {
//             console.log(food);
//             //? means look for this thing if exists as a key (needs further research)
//             console.log(food?.image);
//             // for (let i = 0; i < food.length; i++) {
//             //     recipeSlot.push(food.results)
//             // }
//             // console.log("logging recipeSlot here");
//             // console.log(recipeSlot)
//             recipeInfo = food;
//                 populateRecipeInfo();
//         }
//         )}
function populateHeader() {
    let header = document.querySelector("#recipes-header")
    header.innerHTML = `
<h3 id="recipes-card-title" data-id="${recipeInfo.id}">${recipeInfo.title}</h3>
<div class="row">
    <img src="${recipeInfo.image}" id="recipes-card-img" alt="Recipe Image">
</div>
<div class="instruction-div row">
    <ol id="recipe-instructions"></ol>
</div>        
<div>
    <img src="/img/black-marble-cuttingboard.jpg" alt="img" id="recipe-cuttingboard">
</div>
    `;
}
function populateIngredients() {
    let html = "";
    let ingredientCards = document.querySelector("#ingredient-cards")
    let ingredients = recipeInfo.extendedIngredients.map((el) => el);
    for(let i = 0; i < ingredients.length; i++) {
        let image = `https://spoonacular.com/cdn/ingredients_100x100/${ingredients[i].image}`;
        if (ingredients[i].image === null){
            image = "/img/frying-panResized.png"
        }
        html += `

<div class="col">
    <div class="card ingredient-card">
        <div class="card-header">${ingredients[i].measures.us.amount} ${ingredients[i].measures.us.unitShort}</div>
        <div class="card-body p-1">
            <div class="ingredient-img" style="background-image: url(${image})"></div>
        </div>
        <div class="card-footer">${ingredients[i].name}</div>
    </div>
</div>


        `
    }
    ingredientCards.innerHTML = html;
}
function populateSteps() {
    let html = "";
    let stepsList = document.querySelector("#recipe-instructions")
    let steps = recipeInfo.analyzedInstructions[0].steps.map((el) => el.step)
    console.log(`steps`);
    console.log(steps);
    for(let i = 0; i < steps.length; i++) {
        html += `<li>${steps[i]}</li>`
    }
    stepsList.innerHTML = html;
}
function populateRecipeInfo(){

    let html = "";
    let html2 = "";
    let html3 = "";

    let headerRecipeid,
        headerRecipetitle,
        headerRecipeImage;

    // food.forEach(apiData2 => {

    headerRecipeid = recipeInfo.id;
    headerRecipetitle = recipeInfo.title;
    headerRecipeImage = recipeInfo.image;
    console.log(recipeInfo.id);
    console.log(recipeInfo.title);
    console.log(recipeInfo.image);
    // for (let i = 0; i < 5; i++) {
    html = `
            <div>
                <div>
                    <div>
                        <h3 id="recipes-home-card-title" data-id="${headerRecipeid}">${headerRecipetitle}</h3>
                        <img src="${headerRecipeImage}" class="home-card-img" alt="Recipe Image">
                    </div>
                </div>
            </div>
                    `
    let recipeIngredientList = [];

    let recipeInstructionsList = [];

    // recipeIngredientList = recipeInfo.extendedIngredients;
    // recipeInstructions = recipeInfo.analyzedInstructions;
    // recipeInfo;
    // recipeInfo;
    //recipeInfo = json data fetched from API

    console.log(recipeInfo);

    // let ingredientName = "";
    // let ingredientAmount = "";
    // let ingredientImage = "";

    for (let i = 0; i < recipeInfo.extendedIngredients.length; i++) {
        recipeIngredientList.push(recipeInfo.extendedIngredients[i])
    }

    for (let i = 0; i < recipeInfo.analyzedInstructions.length; i++) {
        recipeInstructionsList.push(recipeInfo.analyzedInstructions[i])
    }

    for (let j = 0; j <recipeIngredientList.length ; j++) {
        // ingredientName += recipeIngredientList[j].name;
        // ingredientAmount += recipeIngredientList[j].amount;
        // ingredientImage += recipeIngredientList[j].image;
        //populate recipe ingredients here:

        let imgR = `https://spoonacular.com/cdn/ingredients_100x100/${recipeIngredientList[j].image}`

        if (recipeIngredientList[j].image == null){
            imgR = "/img/frying-panResized.png"
            // imgR = "/img/sauteResized.png"
        }

        html2 += `
                <div>
                    <div>
                        <div>${recipeIngredientList[j].measures.us.amount} ${recipeIngredientList[j].measures.us.unitLong}</div>
                        <img class="recipeIngredientImg" src="${imgR}" alt="img">
                        <div>${recipeIngredientList[j].originalName}</div>
                    </div>
                </div>
                <br><br><br> 
                `
    }


    for (let i = 0; i < recipeInstructionsList.length; i++) {
        for (let j = 0; j <recipeInstructionsList[i].steps.length; j++) {

            html3 += `
                <br><br><br>
                    <div>
                        <div>${recipeInstructionsList[i].steps[j].step}</div>
                    </div>
                    `
        }
    }

    console.log(recipeIngredientList)
    console.log(recipeInstructionsList)

    const recipesContainer1 = document.querySelector("#recipe-apiData");
    recipesContainer1.innerHTML = html;

    const recipesContainer2 = document.querySelector("#recipe-apiData2");
    recipesContainer2.innerHTML = html2;

    const recipesContainer3 = document.querySelector("#recipe-apiData3");
    recipesContainer3.innerHTML = html3;



    // Promise.resolve();
    //dont delete this
    // }).catch(erre => {
    // console.log(erre);
    // Promise.reject();
    // });
}
