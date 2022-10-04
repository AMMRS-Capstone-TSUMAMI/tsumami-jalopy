// export default function Navbar(props) {
//
//     let navbar = `<nav class="d-flex bd-highlight mb-3 mt-1">
//             <a href="/" data-link class="nav-item text-white bg-success badge p-2 bd-highlight">Home<a/>
//             <a href="/register" data-link class="nav-item text-white bg-success badge p-2 bd-highlight">Register</a>
//             <a href="/posts" data-link class="nav-item text-white bg-success badge p-2 bd-highlight">Posts</a>
//     `;
//     if(isLoggedIn()){
//         navbar = `
//             <a href="/" data-link class="nav-item text-white bg-success badge p-2 bd-highlight">Home<a/>
//             <a href="/about" data-link class="nav-item text-white bg-success badge p-2 bd-highlight">About<a/>
//             <a href="/me" data-link class="nav-item text-white bg-success badge p-2 bd-highlight">User</a>
//             <a href="/posts" data-link class="nav-item text-white bg-success badge p-2 bd-highlight">Posts</a>
//             <a href="/logout" data-link class="nav-item text-white bg-success badge p-2 bd-highlight">Logout</a>
//         `;
//     } else {
//         navbar += `
//         <a href="/login" data-link class="nav-item text-white bg-success badge p-2 bd-highlight">Login<a/>
//     `;
//     }
//     navbar += `</nav>`;
//     return navbar;


    // `
    //     <nav>
    //         <a href="/" data-link>Home</a>
    //         <a href="/posts" data-link>Posts</a>
    //         <a id="" href="/about" data-link>About</a>
    //         <a href="/login" data-link>Login</a>
    //         <a href="/register" data-link>Register</a>
    //         <a href="/me" data-link>User</a>
    //     </nav>
    // `;

    export default function Navbar(props) {

        return `<nav class="d-flex bd-highlight mb-3 mt-1">
            <a href="/meals" data-link class="nav-item text-white bg-success badge p-2 bd-highlight">Meals</a>
            <a href="/account" data-link class="nav-item text-white bg-success badge p-2 bd-highlight">Account</a>
            <a href="/about" data-link class="nav-item text-white bg-success badge p-2 bd-highlight">Logo(About)<a/>
            <a href="/logout" data-link class="nav-item text-white bg-success badge p-2 bd-highlight">Logout<a/>
            <a href="/landing" data-link class="nav-item text-white bg-success badge p-2 bd-highlight">Landing<a/>

            </nav>
            `;
    }

