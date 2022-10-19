// import {recipeID} from './Meals.js'
// let recipeId;

// let data;
// let testURL = `https://api.spoonacular.com/recipes/716429/ingredients?apiKey=808d821061f04a7789e651ba3ac9bb5f`

// let apiRecipeImg = [];
// let apiRecipeIngredients = [];
// let apiCookingInstructions = [];

let recipe;
let recipeInfo;
// let html;
// let html2;

export default function recipesHTML(props) {
    recipe=props.recipes
    // data = props.data;
    return `
         <main>
                <h1>Recipe</h1>
                <div id="recipe-apiData" class="d-flex flex-row justify-content-evenly">header code here</div>
                <div id="recipe-apiData2" class="d-flex flex-row justify-content-evenly"></div>
                <div id="recipe-apiData3" class="d-flex flex-column justify-content-evenly"></div>
        </main>
 `;
}

export function recipesEvent() {
    // perhaps this is where I can call the recipe ID from meals.js
    //uncomment below to activate API call!! Only comment out if not wanting to automatically make the call
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

    //comment out line below after testing
    getAPI(918034
    );

    //uncomment below after testing
    // getAPI(recipe.id);

    // at this point getAPI will have finished

    console.log("Hello recipeSelectedHandler");
    // alert("stuffs")
    // }
    // })
}

export function getAPI(userSelectedID) {
    console.log("Hello getAPI");

        // the ID below will instead be called recipeID and be pulled from meals.js
    let SERVICE_URL = `https://api.spoonacular.com/recipes/`+userSelectedID+`/information`;
    const request_url = SERVICE_URL + "?" + "apiKey=" + SPOONACULAR_API;
    // let recipeSlot = [];
    https://api.spoonacular.com/food/jokes/random + SPOONACULAR_API;
    //request_url is our full api call url
    recipeInfo  =
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
            recipeInfo = food;
                populateRecipeInfo();
        }
        )}

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
                        <div>${recipeIngredientList[j].amount} ${recipeIngredientList[j].measures.us.unitLong}</div>
                        <img id="recipeIngredientImg" src="${imgR}" alt="img">
                        <div>${recipeIngredientList[j].name}</div>
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
