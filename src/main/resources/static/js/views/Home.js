let recipes;
let food;
let recipeArray;


export default function Home(props) {
    // recipeData=props.recipeData;
    console.log("The frontend did it. HER FAULT");
    // console.log(recipeData);

    return `
        <main>
            <div class="home-container">
                <h1 class="home-title">Search Recipe</h1>
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

    userInput.addEventListener('keypress', async function (e) {
        if (e.key === 'Enter') {
            e.preventDefault()
            let userInput2 = userInput.value;
            await getAPI(userInput2);
        }
    })
}

function getAPI(userSearch) {
    fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${SPOONACULAR_API}&query=${userSearch}&number=12`).then(resp => {
        return resp.json();
    }).then(food => {
        recipeArray = [];
        recipeArray.push(food);
        console.log(food);
        console.log(recipeArray);
        loopRecipesData()
    })
}
function loopRecipesData() {
    console.log(recipeArray);
    for (let i = 0; i < recipeArray.length; i++) {
        //     recipeArray.push(recipes.results)
        // }
        console.log(recipeArray[0].results)

        for (let j = 0; j < recipeArray[0].results.length; j++) {
            let html = "";
            let image = "";
            let title = "";
            let id = "";

            image += recipeArray[0].results[j].image;
            title += recipeArray[0].results[j].title;
            id += recipeArray[0].results[j].id;

            html += `
                <div class="home-recipe-card">
                    <div class="home-card-image">
                        <img src="${image}" class="home-card-img" alt="Recipe Image">
                    </div>
                    <h3 data-id="${id}" class="home-card-title">${title}</h3>
                </div>
            `
            const recipesContainer = document.querySelector("#search-results");
            recipesContainer.innerHTML += html;
        }
    }
}
// console.log(recipeArray)
// recipeArray.forEach(function (recipe, index) {

// })



