import Navbar from "./views/partials/Navbar.js";

/**
 * Pushes the current URI to the URL bar and sets the HTML of the app div.
 * @param props - the data required for view rendering
 * @param route - the object containing information for the given endpoint
 */
export default function render(props, route) {
    const body = document.querySelector("#indexBody");
    if(route.backgroundColor) {
        body.setAttribute("style", `background-color: ${route.backgroundColor};`);
    } else if(route.backgroundImage){
        body.setAttribute("style", `background-image: ${route.backgroundImage};`);
    } else {
        body.setAttribute("style", `background-color: white`);
    }
    const app = document.querySelector('#app');
    const title = `tsUmami - ${route.title}`;
    document.title = title;
    app.innerHTML = `${Navbar(null)} ${route.returnView(props)}`;
    if (route.viewEvent){
        route.viewEvent();
    }
}
