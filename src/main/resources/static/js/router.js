import Home from "./views/Home.js";
// import Meals from "./views/Meals.js";
import Landing from "./views/Landing.js";
import About from "./views/About.js";
import Error404 from "./views/Error404.js";
import Loading from "./views/Loading.js";
import Login from "./views/Login.js";
import LoginEvent from "./auth.js";
import Register from "./views/Register.js"
import {RegisterEvent} from "./views/Register.js";
import prepareUserHTML, {prepareUserJS} from "./views/Account.js";
import Logout, {LogoutEvent} from "./views/Logout.js";

/**
 * Returns the route object for a specific route based on the given URI
 * @param URI
 * @returns {*}
 */
export default function router(URI) {
    const routes = {
        // '/': {
        //     returnView: Home,
        //     state: {},
        //     uri: '/',
        //     title: 'Home',
        // },
        '/account': {
            returnView: Account,
            state: {},
            uri: '/logout',
            title: "Logout",
            viewEvent: AccountEvent
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
        '/dologin': {
            returnView: DoLogin,
            state: {},
            uri: '/dologin',
            title: 'DoLogin',
            viewEvent: DoLoginEvents
        }
    };

    return routes[URI];
}