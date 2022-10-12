
let recipes = []

export default function Home(props) {
    console.log("The frontend did it. HER FAULT");

    return `
        <main>
            <div class="home-container">
                <div class="h-container">
                    <h1 class="home-brand">Search Recipe</h1>
                    <form>
                        <input type="text" id="search-bar" placeholder="Search Your Recipe...">
                        <i class="fa-solid fa-magnifying-glass search-icon"></i>
                    </form>              
                </div>
            </div>
        </main>
    `;
}

// export async function getAPI() {
// //     return fetch(``).then(resp => return resp.json())
// //
//     const request = {
//         method: "GET",
//         headers: {
//             'Content-Type': 'application/json'
//         }
//     }
//     return await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=d2ecbe1149a34180a752204407a10c5b&query=chicken&number=2`, request)
//         .then(function(response) {
//             if(!response.ok) {
//                 console.log("Error Finding Recipe: " + response.status);
//             } else {
//                 console.log("Search Complete");
//                 console.log(response.json());
//                 console.log(response.json()[0]);
//                 console.log(response.json()[0].title);
//                 return response.json();
//             }
//         });
// }
//
//
// function searchBar(e){
//
// //    add event listener to search bar
// //    when event is fired
// //    build a filtered list of movies based on input
// //    update Gallery Div to new HTML
// //    html = searched list
// //     console.log(movies)
//
//     let searchMovie = document.getElementById('search-bar');
//
//     searchMovie.addEventListener('keyup', function () {
//         // e.preventDefault();
//         let userInput = this.value.toLowerCase();
//         let filteredRecipes = [];
//
//         recipes.forEach(function(recipe) {
//             if (recipe.title.toLowerCase().includes(userInput)) {
//                 filteredRecipes.push(recipe);
//             }
//         });
//
//         let html = "";
//         const recipesContainer = document.querySelector("#recipes-container");
//
//         filteredRecipes.forEach(function(recipe) {
//             html += `
//             <div class="recipe-card">
//                 <div class="card-image">
//                     <img src="${recipe.image}" width="25px" height="auto" class="card-img" alt="recipe-image">
//                 </div>
//
//                 <div class="card-body">
//                     <h3 class="card-title">${recipe.title}</h3>
//
//                 </div>
//             </div>
//            `;
//         });
//
//         recipesContainer.innerHTML = html;
//
//     });
// }
// searchBar();
