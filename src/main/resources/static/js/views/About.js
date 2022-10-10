export default function About(props) {
    let Person = [
        {
            "pictures": "../../img/matthew.png",
            "vetStatus": "Full Stack Developer & Army Veteran",
            "firstName": "Matthew",
            "lastName": "Grayson",
            "linkedIn": "matthewagrayson",
            "github": "Matthew-Grayson",
            "alumniLink": "https://alumni.codeup.com/web-developers",
            "resume": "matthewgrayson"
        },
        {
            "pictures": "../../img/shaquielle.png",
            "vetStatus": "Full Stack Developer & Army Veteran",
            "firstName": "Shaquielle",
            "lastName": "Robbins",
            "linkedIn": "shaquiellerobbins",
            "github": "shaquiellerobbins",
            "alumniLink": "https://alumni.codeup.com/web-developers",
            "resume": "shaquiellerobbins"

        },
        {
            "pictures": "../../img/ryan.png",
            "vetStatus": "Full Stack Developer & Air Force Veteran",
            "firstName": "Ryan",
            "lastName": "Yoshimura",
            "linkedIn": "ryanskyoshimura",
            "github": "RSKYoshi",
            "alumniLink": "https://alumni.codeup.com/web-developers",
            "resume": "ryanyoshimura"
        },
        {
            "pictures": "../../img/ashley.png",
            "vetStatus": "Full Stack Developer & Army Veteran",
            "firstName": "Ashley",
            "lastName": "Martinez",
            "linkedIn": "ashmar32",
            "github": "ashmar32",
            "alumniLink": "https://alumni.codeup.com/web-developers",
            "resume": "ashleymartinez"
        },
        {
            "pictures": "../../img/miguel.png",
            "vetStatus": "Full Stack Developer & Army Veteran",
            "firstName": "Miguel",
            "lastName": "Guzman",
            "linkedIn": "miguelguzmanwd",
            "github": "MiguelAGuzman",
            "alumniLink": "https://alumni.codeup.com/web-developers",
            "resume": "miguelguzman"
        }
    ]
    let html = `<header>
        <h1>About Page things</h1>
    </header>
    <div class="container wrapper">
        <div class="row duh">`;

    for (let i = 0; i <= 4; i++) {
    html += `
                <section class="about-card shadow-1">
                    <div class="card">
                        <img src="${Person[i].pictures}" class="ppl-img" alt="img">
                        <div class="card-body profile-card">
                            <h4 class="card-title">
                               ${Person[i].firstName}<br>${Person[i].lastName}
                            </h4>
                        </div>
                        <div class="social-links">
                            <a href="www.linkedin.com/in/${Person[i].linkedIn}"><i class="linkedin">L</i></a>
                            <a href="https://github.com/${Person[i].github}"><i class="github">G</i></a>
                            <a href="${Person[i].alumniLink}"><i class="alumni">A</i></a>
                            <a href="${Person[i].resume}.venuscohort.com"><em>R</em></a>
                        </div>
                    </div>
                                        <span>${Person[i].vetStatus}</span>

                </section>
    `}
    html += `   
        </div>
        </div>`;
        return html;
}