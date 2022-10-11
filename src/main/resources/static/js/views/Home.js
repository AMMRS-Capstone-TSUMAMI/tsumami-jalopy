// import styles from "../../css/home.css";

export default function Home(props) {
    console.log("The frontend did it. HER FAULT");
    return `
        <main>
            <div class="home-container">
                <section>
                    <div class="h-container">
                        <h1 class="home-brand">Search Recipe</h1>
                        <form>
                            <input type="text" placeholder="Search Your Recipe...">
                            <i class="fa-solid fa-magnifying-glass search-icon"></i>
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