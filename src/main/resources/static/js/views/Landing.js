export default function Landing(props) {
    console.log("The frontend did it. HER FAULT");
    return `
        <header>
            <h1>GET PLANNIN' with TSUmami!</h1>
        </header>
        <main>
            <div>
                <p>
                
                    This is the landing page!
                </p>    
                <button><a href="/login" data-link class="my-link">Login via Google</a></button>
            </div>
        </main>
    `;
}