import Home from "./views/Home.js";
import Landing from "./views/Landing.js";
import About from "./views/About.js";
import Error404 from "./views/Error404.js";
import Loading from "./views/Loading.js";
import Login, {LoginEvent} from "./views/Login.js";
// import LoginEvent from "./auth.js";
import Register from "./views/Register.js"
import {RegisterEvent} from "./views/Register.js";
import Account, {AccountEvent} from "./views/Account.js";
import Logout, {LogoutEvent} from "./views/Logout.js";
import Meals, {MealsEvent} from "./views/Meals.js";
// import Account from "./views/Account.js";

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
            uri: '/',
            title: 'Landing',
        },
        '/': {
            returnView: Home,
            state: {},
            uri: '/Home',
            title: 'Home',
        },
        '/account': {
            returnView: Account,
            state: {},
            uri: '/account',
            title: "Account",
            viewEvent: AccountEvent
        },
        '/login': {
            returnView: Login,
            state: {},
            uri: '/login',
            title: "Login",
            viewEvent: LoginEvent
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
        // '/dologin': {
        //     returnView: DoLogin,
        //     state: {},
        //     uri: '/dologin',
        //     title: 'DoLogin',
        //     viewEvent: DoLoginEvents
        // }
        // '/meals': {
        //     returnView: Meals,
        //     state: {},
        //     uri: '/meals',
        //     title: 'Meals',
        //     viewEvent: MealsEvent
        // },

        };
    return routes[URI];
}

