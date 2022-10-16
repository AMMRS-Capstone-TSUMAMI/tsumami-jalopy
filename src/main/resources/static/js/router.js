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
        '/recipes': {
            returnView: recipesHTML,
            state: {},
            uri: '/recipes',
            title: 'Recipes',
            viewEvent: recipesEvent
        }
    };
    return routes[URI];
}

