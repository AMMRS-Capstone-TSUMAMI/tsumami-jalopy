import createView from "../createView.js";
// TODO: create breakpoints
export default function Meals(props) {
    return `
<div class="container g-0">
    <div id="meals-header" class="container g-0">
        <div class="row g-0">
            <div class="col d-flex mx-0 my-3" style="justify-content: center">
                <h1>Meal Planner Page</h1>
            </div>
        </div>
    </div>
    <div id="meals-main" class="container g-5">
        <div class="row">
            <div class="col-2">
                <div id="meals-search-recipes" class="row">
                    <div class="col">
                        <div class="mb-3">
                            <label for="meals-recipe-search" class="form-label">Search Recipes</label>
                            <input type="text" class="form-control" id="meals-recipe-search" placeholder="Ex. Keto Sushi">
                        </div>
                        <div class="mb-3">
                            <label for="meals-favorite-search" class="form-label">Search Favorites</label>
                            <input type="text" class="form-control" id="meals-favorite-search" placeholder="Favorites">
                        </div>

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
                            <li class="tn timeslot-name">
                                Morning
                            </li>
                            <li class="meals-calendar-border" id="day1-slot1"></li>
                            <li class="meals-calendar-border" id="day2-slot1"></li>
                            <li class="meals-calendar-border" id="day3-slot1"></li>
                            <li class="meals-calendar-border" id="day4-slot1"></li>
                            <li class="meals-calendar-border" id="day5-slot1"></li>
                            <li class="meals-calendar-border" id="day6-slot1"></li>
                            <li class="meals-calendar-border" id="day7-slot1"></li>
                        </ul>
                        <ul class="meals-calendar-row">
                            <li class="timeslot-name">
                                Noon
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
                            <li class="timeslot-name">
                                Evening
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
}

