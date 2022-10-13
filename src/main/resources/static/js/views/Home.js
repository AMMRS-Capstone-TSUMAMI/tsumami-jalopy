

export default function Home(props) {
    console.log("The frontend did it. HER FAULT");

    return `
        <main>
            <div class="home-container">
                <h1 class="home-brand">Search Recipe</h1>
                <form>
                    <input type="text" id="search-bar" placeholder="Search Your Recipe...">
                    <i class="fa-solid fa-magnifying-glass search-icon"></i>
                </form>
                <div id="search-results"></div>
            </div>
        </main>
    `;
}

export function HomeEvents() {
    searchBarHandler()
}


function searchBarHandler(e) {
    const userInput = document.querySelector('#search-bar');

    userInput.addEventListener('keypress', function (e) {
        if (e.key === 'Enter') {
            let userInput2 = userInput.value;
            getAPI(userInput2);
        }
    });

    function getAPI(userSearch) {
        return fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=d2ecbe1149a34180a752204407a10c5b&query=${userWant}&number=5`).then(resp => resp.json()).then(food => {
            let recipeArray = [];
            for (let i = 0; i < 5; i++) {
                recipeArray.push(food.results[i])
            }
            console.log(recipeArray)
            let html = "";
            recipeArray.forEach(function (recipe, index) {
                html += `
            <h3 food-data-id="${recipe.id}" classname="card-title">${recipe.title}</h3>`
            })
            const recipesContainer = document.querySelector("#search-results");
            recipesContainer.innerHTML = html;

            //dont delete this
        }).catch(erre => console.log(erre));
    }

// id
//     :
//     637876
// image
//     :
//     "https://spoonacular.com/recipeImages/637876-312x231.jpg"
// imageType
//     :
//     "jpg"
// title
//     :
//     "Chicken 65"
//         [[Prototype]]
// :
// Object
}