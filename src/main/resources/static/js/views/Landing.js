export default function Landing(props) {
    console.log("The frontend did it. HER FAULT");
    return `
        <header>
            <h1>HELLO TEST</h1>
        </header>
        <main>
            <div>
                <p>
                <a href="/login" data-link class="my-link">Login via Google</a>
                    This is the home page text.
                </p>    
                <button>View profile</button>
            </div>
        </main>
    `;
}