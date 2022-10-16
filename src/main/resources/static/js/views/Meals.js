import createView from "../createView.js";
// TODO: use UTC date
// TODO: transmit date to backend when meal is added
// TODO:
// TODO:
let today = new Date;
let startDay;
let plan;
let results;
export default function Meals(props) {
    getStartDay(today)
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
            <div class="col-2 gs-0 ge-3 ps-0">
                <div id="meals-search-recipes" class="row">
                    <div class="col px-0">
                        <div class="meals-recipe-pane">
                            <div class="meals-recipe-search-pane"></div>
                                <form>
                                    <div class="mb-3">
                                        <label for="meals-recipe-search-field" class="form-label">Search Recipes</label>
                                        <input type="search" class="form-control" id="meals-recipe-search-field" placeholder="ex. korean bbq">
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
            <div class="col-10 gs-3 ge-0 pe-0">
                <div id="meals-calendar" class="row">
                    <div class="col ps-1 pe-0">
                        <div id="meals-calendar-header">
                            <i id="week-prev" class="bi bi-caret-left-fill"></i>
                            <span id="meals-calendar-week" data-week-start="${startDay}">${generateCalendarWeek(startDay)}</span>
                            <i id="week-next" class="bi bi-caret-right-fill"></i>
                        </div>
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
                            <li class="meals-calendar timeslot" data-slot="11"></li>
                            <li class="meals-calendar timeslot" data-slot="21"></li>
                            <li class="meals-calendar timeslot" data-slot="31"></li>
                            <li class="meals-calendar timeslot" data-slot="41"></li>
                            <li class="meals-calendar timeslot" data-slot="51"></li>
                            <li class="meals-calendar timeslot" data-slot="61"></li>
                            <li class="meals-calendar timeslot" data-slot="71"></li>
                        </ul>
                        <ul class="meals-calendar-row">
                            <li class="timeslot-name noon">
                                <i class="bi bi-brightness-high-fill"></i>
                            </li>
                            <li class="meals-calendar timeslot" data-slot="12"></li>
                            <li class="meals-calendar timeslot" data-slot="22"></li>
                            <li class="meals-calendar timeslot" data-slot="32"></li>
                            <li class="meals-calendar timeslot" data-slot="42"></li>
                            <li class="meals-calendar timeslot" data-slot="52"></li>
                            <li class="meals-calendar timeslot" data-slot="62"></li>
                            <li class="meals-calendar timeslot" data-slot="72"></li>
                        </ul>
                        <ul class="meals-calendar-row">
                            <li class="timeslot-name evening">
                                <i class="bi bi-moon-fill evening"></i>
                            </li>
                            <li class="meals-calendar timeslot" data-slot="13"></li>
                            <li class="meals-calendar timeslot" data-slot="23"></li>
                            <li class="meals-calendar timeslot" data-slot="33"></li>
                            <li class="meals-calendar timeslot" data-slot="43"></li>
                            <li class="meals-calendar timeslot" data-slot="53"></li>
                            <li class="meals-calendar timeslot" data-slot="63"></li>
                            <li class="meals-calendar timeslot" data-slot="73"></li>
                        </ul>
                    </div>
                </div> 
            </div>
        </div>
    </div>
</div> 
    `;
}

export async function MealsEvent() {
    prepareSearchFields();
    addCalendarListeners();
    await fetchCalendarEntries().then(() => addMealCardListeners())
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
        recipeId,
        title,
        image;
    results.forEach(result => {
        id = Math.random().toString(36).slice(2);
        recipeId = result.id;
        title = result.title;
        image = result.image;
        console.log(recipeId);
        console.log(title);
        console.log(image);

        html += `
<div class="card meal-card" id="${id}" data-recipe-id="${recipeId}" data-title="${title}" data-image="${image}" draggable="true" style="background-image: url(${image})">
    <div class="card-body"></div>
    <div class="card-footer">${title}</div>
</div>
        `
    })
    recipeResults.innerHTML = html;
    addMealCardListeners()
}

function searchFavoriteRecipes() {

}

function getStartDay(date) {
    let day = date.getDay()
    if(day === 0) {
        startDay = date.addDays(-6);
    }
    if(day === 1) {
        startDay = date;
    }
    if(day >= 2) {
        startDay = date.addDays(1 - day);
    }
    return startDay

}
async function fetchCalendarEntries() {
    const request = {
        method: "GET",
        headers: {
            'Content-Type': 'application/json'
        }
    }
    let data = await fetch(`${BACKEND_HOST_URL}/api/plans/planweek?startDate=${startDay.ISO()}&userId=1`, request)
        .then(function(response) {
            if(!response.ok) {
                console.log("Error Finding Recipe: " + response.status);
            } else {
                console.log("Populated Recipes");
                return response.json()
            }
        });
    plan = data;
    populateCalendar();
}

function populateCalendar() {
    for(let i = 0; i < plan.length; i++) {
        let target = document.querySelector(`[data-slot="${plan[i][0]}"]`),
            recipeId = plan[i][1],
            id = Math.random().toString(36).slice(2),
            title = plan[i][2],
            image = plan[i][3];
        target.innerHTML += `
        <div class="card meal-card" id="${id}" data-recipe-id="${recipeId}" draggable="true" style="background-image: url(${image})">
            <div class="card-body"></div>
            <div class="card-footer">${title}</div>
        </div>
        `
    }
}

function generateCalendarWeek(start) {
    let end = start.addDays(6);
    return `${start.toDateString()} - ${end.toDateString()}`;
}
function updateCalendarWeek(newStart) {
    let timeslots = document.querySelectorAll(".timeslot");
    timeslots.forEach(slot => slot.innerHTML = "");
    fetchCalendarEntries().then(() => addMealCardListeners());

}
function incrementWeek() {
    let displayedWeek = document.querySelector("#meals-calendar-week");
    let displayedWeekStart = new Date(displayedWeek.getAttribute("data-week-start"));
    startDay = displayedWeekStart.addDays(7);
    displayedWeek.innerHTML = generateCalendarWeek(startDay);
    displayedWeek.setAttribute("data-week-start", startDay);
    updateCalendarWeek(startDay)
}
function decrementWeek() {
    let displayedWeek = document.querySelector("#meals-calendar-week");
    let displayedWeekStart = new Date(displayedWeek.getAttribute("data-week-start"));
    startDay = displayedWeekStart.addDays(-7);
    displayedWeek.innerHTML = generateCalendarWeek(startDay);
    displayedWeek.setAttribute("data-week-start", startDay);
    updateCalendarWeek(startDay);
}
Date.prototype.addDays = function(days) {
    let date = new Date(this.valueOf());
    date.setDate(date.getDate() + days);
    return date;
}
Date.prototype.ISO = function() {
    let date = new Date(this.valueOf());
    date = `${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()}`
    return date;
}


function addCalendarListeners() {
    const timeslots = document.querySelectorAll(".timeslot");
    timeslots.forEach(function(timeslot) {
        timeslot.addEventListener("drop", drop)
        timeslot.addEventListener("dragover", allowDrop)
    })
    const weekNextBtn = document.querySelector("#week-next")
    weekNextBtn.addEventListener("click", incrementWeek)
    const weekPrevBtn = document.querySelector("#week-prev")
    weekPrevBtn.addEventListener("click", decrementWeek)
}
function addMealCardListeners() {
    let mealCards = document.querySelectorAll(".meal-card");
    mealCards.forEach(function(mealCard) {
        mealCard.addEventListener("dragstart", drag)
    })
}

function allowDrop(e) {
    e.preventDefault();
}
function drag(e) {
    e.dataTransfer.setData("text", e.target.id);
    console.log(`Drag ${e.dataTransfer}`);

}
function drop(e) {
    e.preventDefault();
    let data = e.dataTransfer.getData("text");
    console.log(data);
    e.currentTarget.appendChild(document.getElementById(data));
}