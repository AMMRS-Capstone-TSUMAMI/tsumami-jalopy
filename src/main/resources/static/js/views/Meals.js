import createView from "../createView.js";
// TODO: create breakpoints
// TODO: create event listener for search boxes
// TODO: create API Request for
// TODO:
// TODO:
let results;
export default function Meals(props) {
    return `
<div class="container g-0">
    <div id="meals-header" class="container g-0">
        <div class="row g-0">
            <div class="col d-flex mx-0 my-3" style="justify-content: left">
                <h1>Meal Planner</h1>
            </div>
        </div>
    </div>
    <div id="meals-main" class="container g-5">
        <div class="row">
            <div class="col-2">
                <div id="meals-search-recipes" class="row">
                    <div class="col">
                    <form>
                        <div class="mb-3">
                            <label for="meals-recipe-search" class="form-label">Search Recipes</label>
                            <input type="search" class="form-control" id="meals-recipe-search" placeholder="Ex. Keto Sushi">
                        </div>
                         <div id="recipe-button" class="mb-3">
                            <button class="btn btn-secondary d-none">Search</button>
                        </div>
                    </form>
                     <form>
                        <div class="mb-3">
                            <label for="meals-favorite-recipe-search" class="form-label">Search Favorites</label>
                            <input type="search" class="form-control" id="meals-favorite-search" placeholder="Favorites">
                        </div>
                    </form>
                        <!--                        TODO: Collapsible-->
                        <!--                            TODO: Search Recipes-->
                        <!--                                TODO: Search Results data-recipe-id-->
                        <!--                            TODO: Search Favorite Recipes-->
                        <!--                                TODO: Search Results-->
                    </div>
                </div>
            </div>
            <div class="col-10">
                <div id="meals-calendar" class="row">
                    <div class="col">
                        <ul>
                            <li class="timeslot-name"></li>
                            <li class="meals-calendar-border">Monday</li>
                            <li class="meals-calendar-border">Tuesday</li>
                            <li class="meals-calendar-border">Wednesday</li>
                            <li class="meals-calendar-border">Thursday</li>
                            <li class="meals-calendar-border">Friday</li>
                            <li class="meals-calendar-border">Saturday</li>
                            <li class="meals-calendar-border">Sunday</li>
                        </ul>
                        <ul class="meals-calendar-row">
                            <li class="timeslot-name morning">
                                <i class="bi bi-brightness-alt-high-fill"></i>
                            </li>
                            <li class="meals-calendar-border" id="day1-slot1">
<!--                                id = 649280-->
<!--                                title = "Lasagna Silvia"-->
<!--                                image = "https://spoonacular.com/recipeImages/649280-312x231.jpg"-->
                                    <div class="card meal-card" style="background-image: url(https://spoonacular.com/recipeImages/649280-312x231.jpg)">
                                        <div class="card-body"></div>
                                        <div class="card-footer">Lasagna Silvia</div>
                                    </div>
<!--                                    <div class="recipe-card" style="background-image: url(https://spoonacular.com/recipeImages/649280-312x231.jpg)">Lasagna Silvia</div>-->
<!--                                    <div class="recipe-card" style="background-image: url(https://spoonacular.com/recipeImages/649280-312x231.jpg)">Lasagna Silvia</div>-->
                            </li>
                            <li class="meals-calendar-border" id="day2-slot1"></li>
                            <li class="meals-calendar-border" id="day3-slot1"></li>
                            <li class="meals-calendar-border" id="day4-slot1"></li>
                            <li class="meals-calendar-border" id="day5-slot1"></li>
                            <li class="meals-calendar-border" id="day6-slot1"></li>
                            <li class="meals-calendar-border" id="day7-slot1"></li>
                        </ul>
                        <ul class="meals-calendar-row">
                            <li class="timeslot-name noon">
                                <i class="bi bi-brightness-high-fill"></i>
                            </li>
                            <li class="meals-calendar-border" id="day1-slot2"></li>
                            <li class="meals-calendar-border" id="day2-slot2"></li>
                            <li class="meals-calendar-border" id="day3-slot2"></li>
                            <li class="meals-calendar-border" id="day4-slot2"></li>
                            <li class="meals-calendar-border" id="day5-slot2"></li>
                            <li class="meals-calendar-border" id="day6-slot2"></li>
                            <li class="meals-calendar-border" id="day7-slot2"></li>
                        </ul>
                        <ul class="meals-calendar-row">
                            <li class="timeslot-name evening">
                                <i class="bi bi-moon-fill evening"></i>
                            </li>
                            <li class="meals-calendar-border" id="day1-slot3"></li>
                            <li class="meals-calendar-border" id="day2-slot3"></li>
                            <li class="meals-calendar-border" id="day3-slot3"></li>
                            <li class="meals-calendar-border" id="day4-slot3"></li>
                            <li class="meals-calendar-border" id="day5-slot3"></li>
                            <li class="meals-calendar-border" id="day6-slot3"></li>
                            <li class="meals-calendar-border" id="day7-slot3"></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div> 
    `;
}

export function MealsEvent() {
    prepareSearchFields();
    console.log("MealsEvent Complete");
}

function prepareSearchFields() {
    const recipeField = document.querySelector("#meals-recipe-search");
    const recipeBtn = document.querySelector("#recipe-button")
    const favoriteRecipeField = document.querySelector("#meals-favorite-recipe-search");
    recipeBtn.addEventListener("click", (event) => {
        console.log("submitted");
        console.log(recipeField.value);
        fetchRecipes(recipeField.value);
    })
}

async function fetchRecipes(query) {
    const request = {
        method: "GET",
        headers: {
            'Content-Type': 'application/json'
        }
    }
    let data = await fetch(`${SEARCH_RECIPES}?&query=${query}&number=${MAX_RESULTS}&apiKey=${SPOONACULAR_TOKEN}`, request)
        .then(function(response) {
            if(!response.ok) {
                console.log("Error Finding Recipe: " + response.status);
            } else {
                console.log("Search Complete");
                return response.json()
            }
        });
    console.log(data.results);
    results = data.results;
    populateResults();
}

function populateResults() {
    let html = "";
    let id,
        title,
        image;
    results.forEach(result => {
        id = result.id;
        title = result.title;
        image = result.image;
        console.log(id);
        console.log(title);
        console.log(image);
    })
}

function addResultListeners() {

}

function searchFavoriteRecipes() {

}

