import {isLoggedIn} from "../../auth.js";

export default function Navbar(props) {
    if(isLoggedIn()) {
        return `
<nav class="navbar navbar-expand-sm">
    <div class="container-fluid">
        <a class="navbar-brand" data-link href="/about">
            <img src="/img/logo-sm.png" data-passthru alt="tsUmami" height="40" class="d-inline-block align-text-top">
        </a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0" >
                <li class="nav-item">
                    <a class="nav-link active" style="color: white" data-link aria-current="true" href="/meals">Meal Planner</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link active" style="color: white" data-link href="/me">My Account</a>
                </li> 
                <li class="nav-item">
                    <a class="nav-link active" style="color: white" data-link href="/logout">Logout</a>
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
