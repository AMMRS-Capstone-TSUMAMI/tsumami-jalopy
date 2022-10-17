import Home, {HomeEvents} from "./views/Home.js";
import Landing from "./views/Landing.js";
import About from "./views/About.js";
import Error404 from "./views/Error404.js";
import Loading from "./views/Loading.js";
import Login, {LoginEvent} from "./views/Login.js";
import Register, {RegisterEvent} from "./views/Register.js"
import prepareUserHTML, {prepareUserJS} from "./views/User.js";
import Logout, {LogoutEvent} from "./views/Logout.js";
import Meals, {MealsEvent} from "./views/Meals.js";
import recipesHTML, {recipesEvent} from "./views/Recipes.js";
// import User from "./views/User.js";

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
                allTrophies: '/api/trophies/getAllTrophies'
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
            state: {},
            uri: '/meals',
            title: 'Meals',
            viewEvent: MealsEvent
        },
        '/about': {
            returnView: About,
            state: {},
            uri: '/about',
            title: 'About',
            // backgroundColor: 'rgb(29, 29, 29)'
            // backgroundImage: "url('https://demos.creative-tim.com/paper-kit-2/assets/img/antoine-barres.jpg');"
            backgroundImage: "url('\img/norway_fjord_2000x1200.jpeg\');"
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
        // to add recipe Id to route path
        '/recipes/{recipeID}': {
            returnView: recipesHTML,
            state: {
                post: '/api/recipes/:id',
            },
            uri: '/recipes{recipeID}',
            title: 'Recipes',
            viewEvent: recipesEvent
        }
    };



    // if URI does not match precisely then we need to try harder to find a match
    if(!routes[URI]) {
        for(const routeKey in routes) {
            const pattern = new URLPattern({ pathname: routeKey });
            if(pattern.test(BACKEND_HOST_URL + URI)) {
                // console.log(`${URI} MATCHES ${routeKey}`);
                const newPath = pattern.exec(BACKEND_HOST_URL + URI);
                // console.log(newPath);
                const foundRoute = routes[routeKey];
                for(const statePiece in foundRoute.state) {
                    let stateVal = foundRoute.state[statePiece];
                    // replace any found group pieces from newPath
                    for(const pathVar in newPath.pathname.groups) {
                        stateVal = stateVal.replaceAll(`:${pathVar}`, newPath.pathname.groups[pathVar]);
                    }
                    foundRoute.state[statePiece] = stateVal;
                    // console.log("Checking state piece: " + foundRoute.state[statePiece]);
                }
                // modify route.uri
                for(const pathVar in newPath.pathname.groups) {
                    foundRoute.uri = foundRoute.uri.replaceAll(`:${pathVar}`, newPath.pathname.groups[pathVar]);
                }
                console.log(foundRoute);
                return foundRoute;
            }
        }
        // did not find a route matching the URI so let jalopy determine the error route
    }
    return routes[URI];
}

