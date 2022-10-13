
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
            e.preventDefault()
            let userInput2 = userInput.value;
            getAPI(userInput2);
        }
    })
}

function getAPI(userSearch) {
    return fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=d2ecbe1149a34180a752204407a10c5b&query=${userSearch}&number=5`).then(resp => {
        return resp.json();
    }).then(food => {
        let recipeArray = [];
        for (let i = 0; i < 5; i++) {
            recipeArray.push(food.results[i])
        }
        console.log(recipeArray)
        let html = "";
        recipeArray.forEach(function (recipe, index) {
            html += `
                <div class="home-recipe-card">
                    <div class="home-card-image">
                        <img src="${recipe.image}" class="home-card-img" alt="Recipe Image">
                    </div>
                    <div class="home-card-body">
                        <h3 data-id="${recipe.id}" class="home-card-title">${recipe.title}
                        </h3>                 
                    </div>
                </div>
            `
        })
        const recipesContainer = document.querySelector("#search-results");
        recipesContainer.innerHTML = html;

        return Promise.resolve();
        //dont delete this
    }).catch(erre => {
        console.log(erre);
        return Promise.reject();
    });
}