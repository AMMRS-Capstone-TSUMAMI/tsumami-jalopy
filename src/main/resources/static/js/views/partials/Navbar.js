import {isLoggedIn} from "../../auth.js";

export default function Navbar(props) {
    if(isLoggedIn()) {
        return `
            <nav class="d-flex bd-highlight mb-3 mt-1">
                <a href="/about" data-link class="nav-item text-white bg-success badge p-2 bd-highlight">Logo(About)</a>
                <a href="/meals" data-link class="nav-item text-white bg-success badge p-2 bd-highlight">Meals</a>
                <a href="/me" data-link class="nav-item text-white bg-success badge p-2 bd-highlight">Me</a>
                <a href="/logout" data-link class="nav-item text-white bg-success badge p-2 bd-highlight">Logout</a>
            </nav>
    `;
    } else {
        return ""
    }
}