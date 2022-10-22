import {isLoggedIn} from "../../auth.js";

export default function Navbar(props) {
    if(isLoggedIn()) {
        return `
<nav class="navbar navbar-expand-lg">
    <div class="container-fluid">
        <a class="navbar-brand" data-link href="/about">
            <img src="/img/logo-dark-sm.png" data-passthru alt="tsUmami" height="40" class="d-inline-block align-text-top">
        </a>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                    <a class="nav-link active" data-link aria-current="true" href="/meals">Meal Planner</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link active" data-link href="/me">My Account</a>
                </li> 
                <li class="nav-item">
                    <a class="nav-link active" data-link href="/logout">Logout</a>
                </li>
            </ul>
        </div>
    </div>
</nav>
    `;
    } else {
        return ""
    }
}
