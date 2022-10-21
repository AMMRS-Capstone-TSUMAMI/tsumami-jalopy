import Home, {HomeEvents} from "./views/Home.js";
import Landing from "./views/Landing.js";
import About, {aboutEvent} from "./views/About.js";
import Error404 from "./views/Error404.js";
import Loading from "./views/Loading.js";
import Login, {LoginEvent} from "./views/Login.js";
import Register, {RegisterEvent} from "./views/Register.js"
import prepareUserHTML, {prepareUserJS} from "./views/User.js";
import Logout, {LogoutEvent} from "./views/Logout.js";
import Meals, {MealsEvent} from "./views/Meals.js";
import recipesHTML, {recipesEvent} from "./views/Recipes.js";

/**
 * Returns the route object for a specific route based on the given URI
 * @param URI
 * @returns {*}
 */

export default function router(URI) {
    const routes = {
        '/landing': {
            returnView: Landing,
            state: {},
            uri: '/landing',
            title: 'Landing',
        },
        '/': {
            returnView: Home,
            state: {},
            uri: '/',
            title: 'Home',
            viewEvent: HomeEvents
        },
        '/me': {
            returnView: prepareUserHTML,
            state: {
                me: '/api/users/me',
                allTrophies: '/api/trophies/getAllTrophies',
                allChefLevels: '/api/chefLevels/getAllChefLevels',
                macros: '/api/macros'
            },
            uri: '/me',
            title: 'User Info',
            viewEvent: prepareUserJS
        },
        '/login': {
            returnView: Login,
            state: {},
            uri: '/login',
            title: "Login",
            viewEvent: LoginEvent
        },
        '/register': {
            returnView: Register,
            state: {},
            uri: '/register',
            title: "Register",
            viewEvent: RegisterEvent
        },
        '/logout': {
            returnView: Logout,
            state: {},
            uri: '/logout',
            title: "Logout",
            viewEvent: LogoutEvent
        },
        '/meals': {
            returnView: Meals,
            state: {
                me: '/api/users/me'
            },
            uri: '/meals',
            title: 'Meals',
            viewEvent: MealsEvent
        },
        '/about': {
            returnView: About,
            state: {
                me: '/api/users/me'
            },
            uri: '/about',
            title: 'About',
            // backgroundColor: ' var(--text-color)'
            backgroundColor: 'rgb(29, 29, 29)',
            // backgroundImage: "url('https://demos.creative-tim.com/paper-kit-2/assets/img/antoine-barres.jpg');"
            // backgroundImage: "url('\img/norway_fjord_2000x1200.jpeg\');"
            // backgroundImage: "url('\img/ocean-bgResized.jpeg\');"
            viewEvent: aboutEvent
        },
        '/error': {
            returnView: Error404,
            state: {},
            uri: location.pathname,
            title: ' ERROR',
        },
        '/loading': {
            returnView: Loading,
            state: {},
            uri: location.pathname,
            title: 'Loading...',
        },
        '/recipes/:id': {
            returnView: recipesHTML,
            state: {
                recipes: `https://api.spoonacular.com/recipes/:id/information?apiKey=${SPOONACULAR_API}`,
                me: '/api/users/me'
            },
            uri: '/recipes/:id',
            title: 'Recipes',
            viewEvent: recipesEvent
        }
    };

    if(!routes[URI]) {
        for (const routeKey in routes) {
            let keyPieces = routeKey.split("/")
            if (keyPieces.length > 2) {
                let pathVar = keyPieces[2];
                let pathInput = URI.split("/")[2];
                let baseURI = new RegExp(keyPieces[1])
                if (baseURI.test(BACKEND_HOST_URL + URI)) {
                    let foundRoute = routes[routeKey]
                    foundRoute.uri = URI;
                    for (let statePiece in foundRoute.state) {
                        foundRoute.state[statePiece] = foundRoute.state[statePiece].replaceAll(pathVar, pathInput);
                    }
                    return foundRoute
                }
            }
        }
    }
    return routes[URI];
}

