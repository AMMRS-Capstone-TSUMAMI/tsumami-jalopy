export default function Home(props) {
    console.log("The frontend did it. HER FAULT");
    return `
        <main>
            <section>
                <div class="container">
                    <h1 class="brand">Search Recipe</h1>
                    <form>
                        <input type="text" placeholder="Search Your Recipe...">
                    </form>
                    <div class="search-result">
                        <div class="item">
                            <img src="../../img/food_landing.jpeg" alt="">
                            <div class="flex-container">
                                <h1 class="title">This is a recipe</h1>
                                <a href="#">View Recipe</a>
                            </div>
                            <p class="item-data">Calories: 120</p>
                        </div>
                        <div class="item">
                            <img src="../../img/food_landing.jpeg" alt="">
                            <div class="flex-container">
                                <h1 class="title">This is a recipe</h1>
                                <a href="#">View Recipe</a>
                            </div>
                            <p class="item-data">Calories: 120</p>
                        </div>
                        <div class="item">
                            <img src="../../img/food_landing.jpeg" alt="">
                            <div class="flex-container">
                                <h1 class="title">This is a recipe</h1>
                                <a href="#">View Recipe</a>
                            </div>
                            <p class="item-data">Calories: 120</p>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    `;
}