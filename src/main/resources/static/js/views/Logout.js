import createView from "../createView.js";

export default function Logout(props) {
    return `
       <h1>Logging Out</h1>
    `;
}

export function LogoutEvent() {
    window.setTimeout(function (){
        window.localStorage.removeItem("access_token");
        window.localStorage.removeItem("access_token");
    createView("/login");
},500)
}


