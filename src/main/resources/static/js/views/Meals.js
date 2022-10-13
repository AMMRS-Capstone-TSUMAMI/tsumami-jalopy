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
    <div id="meals-main" class="container g-0">
        <div class="row">
            <div class="col-2 gs-0 ge-3">
                <div id="meals-search-recipes" class="row">
                    <div class="col px-0">
                        <div class="meals-recipe-pane">
                            <div class="meals-recipe-search-pane"></div>
                                <form>
                                    <div class="mb-3">
                                        <label for="meals-recipe-search-field" class="form-label">Search Recipes</label>
                                        <input type="search" class="form-control" id="meals-recipe-search-field" placeholder="Ex. Keto Sushi">
                                    </div>
                                     <div id="recipe-button" class="mb-3">
                                        <button class="btn btn-secondary d-none">Search</button>
                                    </div>
                                </form>
                                <div id="meals-recipe-search-results"></div> 
                        </div>
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
            <div class="col-10 gs-3 ge-0">
                <div id="meals-calendar" class="row">
                    <div class="col ps-1 pe-0">
                        <ul>
                            <li class="timeslot-name"></li>
                            <li class="meals-calendar">Monday</li>
                            <li class="meals-calendar">Tuesday</li>
                            <li class="meals-calendar">Wednesday</li>
                            <li class="meals-calendar">Thursday</li>
                            <li class="meals-calendar">Friday</li>
                            <li class="meals-calendar">Saturday</li>
                            <li class="meals-calendar">Sunday</li>
                        </ul>
                        <ul class="meals-calendar-row">
                            <li class="timeslot-name morning">
                                <i class="bi bi-brightness-alt-high-fill"></i>
                            </li>
                            <li class="meals-calendar timeslot" id="day1-slot1">
                                    <div class="card meal-card" id="649280" draggable="true" style="background-image: url(https://spoonacular.com/recipeImages/649280-312x231.jpg)">
                                        <div class="card-body"></div>
                                        <div class="card-footer">Lasagna Silvia</div>
                                    </div>
                            </li>
                            <li class="meals-calendar timeslot" id="day2-slot1"></li>
                            <li class="meals-calendar timeslot" id="day3-slot1"></li>
                            <li class="meals-calendar timeslot" id="day4-slot1"></li>
                            <li class="meals-calendar timeslot" id="day5-slot1"></li>
                            <li class="meals-calendar timeslot" id="day6-slot1"></li>
                            <li class="meals-calendar timeslot" id="day7-slot1"></li>
                        </ul>
                        <ul class="meals-calendar-row">
                            <li class="timeslot-name noon">
                                <i class="bi bi-brightness-high-fill"></i>
                            </li>
                            <li class="meals-calendar timeslot" id="day1-slot2"></li>
                            <li class="meals-calendar timeslot" id="day2-slot2"></li>
                            <li class="meals-calendar timeslot" id="day3-slot2"></li>
                            <li class="meals-calendar timeslot" id="day4-slot2"></li>
                            <li class="meals-calendar timeslot" id="day5-slot2"></li>
                            <li class="meals-calendar timeslot" id="day6-slot2"></li>
                            <li class="meals-calendar timeslot" id="day7-slot2"></li>
                        </ul>
                        <ul class="meals-calendar-row">
                            <li class="timeslot-name evening">
                                <i class="bi bi-moon-fill evening"></i>
                            </li>
                            <li class="meals-calendar timeslot" id="day1-slot3"></li>
                            <li class="meals-calendar timeslot" id="day2-slot3"></li>
                            <li class="meals-calendar timeslot" id="day3-slot3"></li>
                            <li class="meals-calendar timeslot" id="day4-slot3"></li>
                            <li class="meals-calendar timeslot" id="day5-slot3"></li>
                            <li class="meals-calendar timeslot" id="day6-slot3"></li>
                            <li class="meals-calendar timeslot" id="day7-slot3"></li>
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
    addTimeslotListeners();
    addMealCardListeners()
    console.log("MealsEvent Complete");
}

function prepareSearchFields() {
    const recipeField = document.querySelector("#meals-recipe-search-field");
    const recipeBtn = document.querySelector("#recipe-button")
    const favoriteRecipeField = document.querySelector("#meals-favorite-recipe-field");
    recipeBtn.addEventListener("click", (e) => {
        e.preventDefault()
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
    let data = await fetch(`${SEARCH_RECIPES}?&query=${query}&number=${MAX_RESULTS}&apiKey=${SPOONACULAR_API}`, request)
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
    const recipeResults = document.querySelector("#meals-recipe-search-results")
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

        html += `
<div class="card meal-card" id="${id}" draggable="true" style="background-image: url(${image})">
    <div class="card-body"></div>
    <div class="card-footer">${title}</div>
</div>
        `
    })
    recipeResults.innerHTML = html;
    addMealCardListeners()
}

function addResultListeners() {

}
function addTimeslotListeners() {
    const timeslots = document.querySelectorAll(".timeslot");
    timeslots.forEach(function(timeslot) {
        timeslot.addEventListener("drop", drop)
        timeslot.addEventListener("dragover", allowDrop)
    })
}
function addMealCardListeners() {
    let mealCards = document.querySelectorAll(".meal-card");
    mealCards.forEach(function(mealCard) {
        mealCard.addEventListener("dragstart", drag)
    })
}
function searchFavoriteRecipes() {

}

function allowDrop(e) {
    e.preventDefault();
}
function drag(e) {
    e.dataTransfer.setData("text", e.target.id);
}
function drop(e) {
    e.preventDefault();
    let data = e.dataTransfer.getData("text");
    e.target.appendChild(document.getElementById(data));
}