// import styles from "../../css/home.css";

export default function Home(props) {
    console.log("The frontend did it. HER FAULT");
    console.log(getAPI());
    console.log(getAPI()[0]);
    console.log(getAPI()[0].title);
    return `
        <main>
            <div class="home-container">
                <section>
                    <div class="h-container">
                        <h1 class="home-brand">Search Recipe</h1>
                        <form>
                            <input type="text" class="search-input" id="search-input" placeholder="Search Your Recipe...">
                            <i class="fa-solid fa-magnifying-glass search-icon" id="search-icon"></i>
                        </form>
                        <div class="home-search-result">
                            <div class="home-item">
                                <img src="../../img/food_landing.jpeg" alt="">
                                <div class="home-flex-container">
                                    <h1 class="home-title">This is a recipe</h1>
                                    <a href="#">View Recipe</a>
                                </div>
                                <p class="home-item-data">Calories: 120</p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </main>
    `;
}

export async function getAPI(){
//     return fetch(``).then(resp => return resp.json())
//
    const request = {
        method: "GET",
    headers: {
    'Content-Type': 'application/json'
    }
}
    return await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=d2ecbe1149a34180a752204407a10c5b&query=chicken&number=2`, request)
        .then(function(response) {
            if(!response.ok) {
                console.log("Error Finding Recipe: " + response.status);
            } else {
                console.log("Search Complete");
                console.log(response.json());
                console.log(response.json()[0]);
                console.log(response.json()[0].title);
                return response.json();
            }
        });
}



// function searchRecipes() {
//     let searchIcon = document.getElementById('search-icon');
//
//     searchIcon.addEventListener("click", function() {
//         let userInput = document.getElementById('search-input');
//         console.log(userInput.value);
//     })
// }
// searchRecipes();

