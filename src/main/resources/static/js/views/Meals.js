import {getHeaders, getMe, getUser, isLoggedIn, setLoggedInUserInfo} from "../auth.js";
import createView from "../createView.js";
import {checkAndAddTrophy, getUserData} from "./User.js";

// TODO: use UTC date
// TODO: transmit date to backend when meal is added
// TODO:
// TODO:
let today = new Date;
let me;
// let trophyId;
let intolerances;
let diet;
let nutrition;
let startDay;
let plan;
let results;
let timeslotId;
let summaries;
export default function Meals(props) {
    me = props.me;
    intolerances = me.intolerances;
    diet = me.diet;
    getStartDay(today)
    return `
<div class="container g-0">
    <!--    <div id="meals-header" class="container g-0">-->
    <!--        <div class="row g-0">-->
    <!--            <div class="col d-flex mx-0 my-3" style="justify-content: left">-->
    <!--                <h1>Meal Planner</h1>-->
    <!--            </div>-->
    <!--        </div>-->
    <!--    </div>-->
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
<!--                         <form>-->
<!--                            <div class="mb-3">-->
<!--                                <label for="meals-favorite-recipe-search" class="form-label">Search Favorites</label>-->
<!--                                <input type="search" class="form-control" id="meals-favorite-search" placeholder="Favorites">-->
<!--                            </div>-->
<!--                        </form>-->
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
                       <ul class="calendar-day">
                            <li class="timeslot-name"></li>
                            <li class="meals-calendar">Monday</li>
                            <li class="meals-calendar">Tuesday</li>
                            <li class="meals-calendar">Wednesday</li>
                            <li class="meals-calendar">Thursday</li>
                            <li class="meals-calendar">Friday</li>
                            <li class="meals-calendar">Saturday</li>
                            <li class="meals-calendar">Sunday</li>
                        </ul>
                        <ul class="meals-calendar-row slot-morning">
                            <li class="timeslot-name morning">
                                <i class="bi bi-brightness-alt-high-fill"></i>
                            </li>
                            <li class="meals-calendar timeslot top-left" data-slot="11"></li>
                            <li class="meals-calendar timeslot top" data-slot="21"></li>
                            <li class="meals-calendar timeslot top" data-slot="31"></li>
                            <li class="meals-calendar timeslot top" data-slot="41"></li>
                            <li class="meals-calendar timeslot top" data-slot="51"></li>
                            <li class="meals-calendar timeslot top" data-slot="61"></li>
                            <li class="meals-calendar timeslot top-right" data-slot="71"></li>
                        </ul>
                        <ul class="meals-calendar-row slot-noon">
                            <li class="timeslot-name noon">
                                <i class="bi bi-brightness-high-fill"></i>
                            </li>
                            <li class="meals-calendar timeslot left" data-slot="12"></li>
                            <li class="meals-calendar timeslot" data-slot="22"></li>
                            <li class="meals-calendar timeslot" data-slot="32"></li>
                            <li class="meals-calendar timeslot" data-slot="42"></li>
                            <li class="meals-calendar timeslot" data-slot="52"></li>
                            <li class="meals-calendar timeslot" data-slot="62"></li>
                            <li class="meals-calendar timeslot right" data-slot="72"></li>
                        </ul>
                        <ul class="meals-calendar-row slot-evening">
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
                        <ul class="meals-calendar-row summaries">
                            <li class="timeslot-name"></li>
                            <li class="meals-calendar summary bottom-left" data-summary="1"></li>
                            <li class="meals-calendar summary bottom" data-summary="2"></li>
                            <li class="meals-calendar summary bottom" data-summary="3"></li>
                            <li class="meals-calendar summary bottom" data-summary="4"></li>
                            <li class="meals-calendar summary bottom" data-summary="5"></li>
                            <li class="meals-calendar summary bottom" data-summary="6"></li>
                            <li class="meals-calendar summary bottom-right" data-summary="7"></li>
                        </ul>
                        <div style="text-align: center">Legend: <i class="bi bi-brightness-alt-high-fill"></i>:morning&#9;<i class="bi bi-brightness-high-fill"></i>:noon&#9;<i class="bi bi-moon-fill evening" style="font-size: .8rem"></i>:evening
                        </div>
                    </div>
                </div> 
            </div>
        </div>
    </div>
</div> 
    `;
}

export async function MealsEvent() {
    await checkAndAddTrophy(me.trophies, 1);
    console.log(me)
    me = await getMe();
    console.log(me);
    prepareSearchFields();
    addCalendarListeners();
    await fetchCalendarEntries().then(async() => {
        await populateCalendar()
    }).then(() => {
        addMealCardListeners()
    })
    await fetchSummaries().then(async () => {
        populateSummaries()
    })
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
    let URL = `${SEARCH_RECIPES}?query=${query}&number=${MAX_RESULTS}&apiKey=${SPOONACULAR_API}`
    if(intolerances.length > 0) {
        URL += `&intolerances=${intolerances.map((el) => el.name).join(",")}`
    }
    if(diet !== "no diet" && diet !== null)
        URL += `&diet=${diet}`
    let data = await fetch(URL, request)
        .then(async function(response) {
            if(!response.ok) {
                console.log("Error Finding Recipe: " + response.status);
            } else {
                console.log("Search Complete");
                me = await getMe();
                checkAndAddTrophy(me.trophies, 2)
                getUserData().then(data => me = data);
                return response.json()
            }
        });
    console.log(data.results);
    results = data.results;
    populateResults();
}
async function fetchNutrition(id) {
    const request = {
        method: "GET",
        headers: {
            'Content-Type': 'application/json'
        }
    }
    let URL = `${RECIPES}/${id}/nutritionWidget.json?apiKey=${SPOONACULAR_API}`
    let data = await fetch(URL, request)
        .then(async function(response) {
            if(!response.ok) {
                console.log("Error Finding Nutrition Facts: " + response.status);
            } else {
                console.log("Search Complete");
                return response.json()
            }
        });
    console.log(data);
    nutrition = data;
}

async function fetchSummaries() {
    const request = {
        method: "GET",
        headers: getHeaders()
    }
    summaries = await fetch(`${BACKEND_HOST_URL}/api/plans/summary?startDate=${startDay.ISO()}`, request)
        .then(function(response) {
            if(!response.ok) {
                console.log("Error Finding Summary: " + response.status);
            } else {
                console.log("Populated Summaries");
                return response.json()
            }
        }).then(function(data) {
            return data
        })

}
function populateSummaries () {
    summaries.forEach((summary) => {
        let day = summary[0];
        let calories = summary[1];
        let fat = summary[2];
        let carbs = summary[3];
        let protein = summary[4];
        let target = document.querySelector(`[data-summary="${day}"]`)
        target.innerHTML = `
        <div class="calories">Calories: ${calories}</div>
        <div class="fat">Fat: ${fat}g</div>
        <div class="carbs">Carbs: ${carbs}g</div>
        <div class="protein">Protein: ${protein}g</div>
        `

    })
}

function populateResults() {
    const recipeResults = document.querySelector("#meals-recipe-search-results")
    let html = "";
    let id,
        recipeId,
        title,
        image;
    results.forEach(result => {
        id = `r${Math.random().toString(36).slice(2)}`;
        recipeId = result.id;
        title = result.title;
        image = result.image;

        html += `
<div class="card meal-card" id="${id}" data-recipe-id="${recipeId}" data-title="${title}" data-image="${image}" draggable="true" style="background-image: url(${image})">
    <div class="meal-overlay" style="display: none">
        <i class="bi bi-info-circle-fill info" data-recipe-id="${recipeId}"></i>
<!--        <i class="bi bi-heart-fill save" data-recipe-id="${recipeId}"></i>-->
        <i class="bi bi-trash3-fill delete" data-recipe-id="${recipeId}"></i>
    </div>
    <div class="card-body"></div>
    <div class="card-footer p-1">${title}</div>
</div>
        `
    })
    recipeResults.innerHTML = html;
    addMealCardListeners()
}

async function addRecipe(recipeId, recipeName, image, startDate, dayNum, timeslot, calories, fat, carbs, protein) {
    //todo update data-slot-id in html
    const request = {
        method: "POST",
        headers: getHeaders()
    }
    timeslotId = await fetch(`${BACKEND_HOST_URL}/api/plans/post?recipeId=${recipeId}&dayNum=${dayNum}&image=${image}&recipeName=${recipeName}&startDate=${startDay.ISO()}&timeslot=${timeslot}&calories=${calories}&fat=${fat}&carbs=${carbs}&protein=${protein}`, request)
        .then(function (response) {
            if (response.status !== 200) {
                console.log(`fetch returned status code: ${response.status}`);
                console.log(response.statusText);
            } else {
                console.log("Entry removed.");
                return response.json();
            }
        }).then(function (data) {
            return data
        });
}
async function deleteRecipe(planTimeslotId, recipeId) {
    const request = {
        method: "DELETE"
    }
    await fetch(`${BACKEND_HOST_URL}/api/plans/delete?planTimeslotId=${planTimeslotId}&recipeId=${recipeId}`, request)
        .then(function(response) {
            if(response.status !== 200) {
                console.log(`fetch returned status code: ${response.status}`);
                console.log(response.statusText);
            } else {
                console.log("Entry removed.");
                return response.text();
            }
        })
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
        headers: getHeaders()
    }
    plan = await fetch(`${BACKEND_HOST_URL}/api/plans/get?startDate=${startDay.ISO()}`, request)
        .then(function(response) {
            if(!response.ok) {
                console.log("Error Finding Recipe: " + response.status);
            } else {
                console.log("Populated Recipes");
                return response.json()
            }
        }).then(function(data) {
            return data
        })
}

function populateCalendar() {
    for(let i = 0; i < plan.length; i++) {
        let target = document.querySelector(`[data-slot="${plan[i][0]}"]`),
            id = "r" + Math.random().toString(36).slice(2),
            slotId = plan[i][1],
            recipeId = plan[i][2],
            title = plan[i][3],
            image = plan[i][4],
            calories = plan[i][5],
            fat = plan[i][6],
            carbs = plan[i][7],
            protein = plan[i][8];
        target.innerHTML += `
        <div class="card meal-card" id="${id}" data-slot-id="${slotId}" data-recipe-id="${recipeId}" data-title="${title}" data-image="${image}" data-calories="${calories}" data-carbs="${carbs}" data-fat="${fat}" data-protein="${protein}" draggable="true" style="background-image: url(${image})">
            <div class="meal-overlay" style="display: none">              
                <i class="bi bi-info-circle-fill info" data-recipe-id="${recipeId}"></i>
<!--                <i class="bi bi-heart-fill save" data-recipe-id="${recipeId}"></i>-->
                <i class="bi bi-trash3-fill delete" data-recipe-id="${recipeId}" data-slot-id="${slotId}"></i>
            </div>
            <div class="card-body"></div>
            <div class="card-footer p-1">${title}</div>
        </div>
        `

    }
    let summaryClasses = document.querySelectorAll(".summary");
    summaryClasses.forEach((summary) => {
        summary.innerHTML = `
        <div class="calories">Calories: </div>
        <div class="fat">Fat: </div>
        <div class="carbs">Carbs: </div>
        <div class="protein">Protein: </div>`
    })
}

function generateCalendarWeek(start) {
    let end = start.addDays(6);
    return `${start.toDateString()} - ${end.toDateString()}`;
}
function updateCalendarWeek(newStart) {
    let timeslots = document.querySelectorAll(".timeslot");
    timeslots.forEach(slot => slot.innerHTML = "");
    fetchCalendarEntries().then(() =>
        populateCalendar()).then(() =>
        addMealCardListeners());
    console.log(plan);
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
    let overlay;
    mealCards.forEach(card => {
        card.addEventListener("dragstart", drag)
        card.children[1].addEventListener("click", () => {
            card.children[0].style.display = "flex";
        })
        card.children[0].addEventListener("click", () => {
            card.children[0].style.display = "none";
        })
    })
    let infoBtns = document.querySelectorAll(".info")
    infoBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            let recipeId = btn.dataset.recipeId;
            console.log(recipeId);
            createView(`/recipes/${recipeId}`)
        })
    })
    let delBtns = document.querySelectorAll(".delete")
    delBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            let recipeCard = btn.parentElement.parentElement;
            let recipeId = btn.dataset.recipeId;
            let slotId = btn.dataset.slotId;
            deleteRecipe(slotId, recipeId).then(() => {
                recipeCard.outerHTML = "";
            })
        })

    })
}
function toggleOverlay(element) {
    element.children[0].style = "flex";
}

function allowDrop(e) {
    e.preventDefault();
}
function drag(e) {
    e.dataTransfer.setData("text", e.target.id);
    if(this.dataset.slotId) {
        console.log(`The slotId is ${this.dataset.slotId}`);
        deleteRecipe(this.dataset.slotId, this.dataset.recipeId)
    } else {
        console.log("This doesn't have a slotId");
    }
    if(!this.dataset.calories) {
        fetchNutrition(this.dataset.recipeId).then(() => {
            this.dataset.calories = Math.round(Number.parseFloat(nutrition.calories)).toString();
            this.dataset.carbs = Math.round(Number.parseFloat(nutrition.carbs)).toString();
            this.dataset.fat = Math.round(Number.parseFloat(nutrition.fat)).toString();
            this.dataset.protein = Math.round(Number.parseFloat(nutrition.protein)).toString();
        })
    }
}

//Sedentary: little or no exercise
//Moderate: exercise 4-5 times per week.
//Active: daily exercise or intense exercise 3-4 times per week.
//Very Active: intense exercise 6-7 times per week.
const activityReference = {
    sedentary: {boy: 1, girl: 1, man: 1, woman: 1},
    moderate: {boy: 1.13, girl: 1.16, man: 1.11, woman: 1.12},
    active: {boy: 1.26, girl: 1.31, man: 1.25, woman: 1.27},
    veryActive: {boy: 1.42, girl: 1.56, man: 1.48, woman: 1.45}
}
function calculateCalorieRecommendation(gender, weight, height, age, activityLevel) {
    //set coefficients for age(a), activityLevel(PA), mass(m), and height(h)
    let base, a, PA, m, h;
    if(!gender || !weight || !height || !age || !activityLevel) {
        console.log(`Unable to calculate `)
    }
    let mass = weight * 2.205;
    if(gender === "male" && age > 18) {
        base = 662;
        a = age * 9.53;
        PA = activityReference[activityLevel].man;
        m = mass * 15.91;
        h = height * 539.6;
    }
    if(gender === "female" && age > 18) {
        base = 354;
        a = age * 6.91;
        PA = activityReference[activityLevel].woman;
        m = mass * 9.36;
        h = height * 726;
    }
    if(gender === "male" && age >= 3 && age <= 18) {
        base = 88.5;
        a = age * 61.9;
        PA = activityReference[activityLevel].boy;
        m = mass * 26.7;
        h = height * 903;
    }
    if(gender === "female" && age >= 3 && age <= 18) {
        base = 135.3;
        a = age * 30.8;
        PA = activityReference[activityLevel].girl;
        m = mass * 10;
        h = height * 934;
    }
    if(age < 3) {
        return (89 * mass) - 80;
    }
    return base - a + (PA * (m * h));
}



async function drop(e) {
    e.preventDefault();
    let data = e.dataTransfer.getData("text");
    console.log(data);
    let el = document.querySelector(`#${data}`)
    e.currentTarget.appendChild(document.getElementById(data));
    let recipeId = el.dataset.recipeId;
    let recipeName = el.dataset.title;
    let image = el.dataset.image;
    let startDate = startDay.ISO()
    let dayNum = el.parentElement.dataset.slot[0];
    let timeslot = el.parentElement.dataset.slot[1];
    let calories = el.dataset.calories;
    let fat = el.dataset.fat;
    let carbs = el.dataset.carbs;
    let protein = el.dataset.protein;
    await addRecipe(recipeId, recipeName, image, startDate, dayNum, timeslot, calories, fat, carbs, protein).then(() => {
        el.dataset.slotId = timeslotId;
    }).then(async () => {
        await fetchSummaries().then(async () => {
            populateSummaries()
        })
    })
}