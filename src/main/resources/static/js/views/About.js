import {checkAndAddTrophy} from "./User.js";
let me;
export default function About(props) {
     me = props.me;
    console.log(me)
    
    let Developer = [
        {
            "pictures": "../../img/matthew.png",
            "vetStatus": "Full Stack Developer & Army Veteran",
            "firstName": "Matthew",
            "lastName": "Grayson",
            "linkedIn": "matthewagrayson",
            "github": "Matthew-Grayson",
            "alumniLink": "https://alumni.codeup.com/web-developers",
            "resume": "matthewgrayson",
            "background": "/img/bg-matthew.png\" alt=\"img",
            "quotes": '"Consider fully; act decisively"' + '<br>' + '― Jigoro Kano'
        },
        {
            "pictures": "../../img/shaquielle.png",
            "vetStatus": "Full Stack Developer & AirForce Veteran",
            "firstName": "Shaquielle",
            "lastName": "Robbins",
            "linkedIn": "shaquiellerobbins",
            "github": "shaquiellerobbins",
            "alumniLink": "https://alumni.codeup.com/web-developers",
            "resume": "shaquiellerobbins",
            "background": "/img/shaquielleAboutBg.jpeg\" alt=\"img",
            "quotes": '"Shoot for the moon. Even if you miss, you\'ll land among the stars"' + '<br>' + '― Norman Vincent Peale'
        },
        {
            "pictures": "../../img/ryan.png",
            "vetStatus": "Full Stack Developer & Air Force Veteran",
            "firstName": "Ryan",
            "lastName": "Yoshimura",
            "linkedIn": "ryanskyoshimura",
            "github": "RSKYoshi",
            "alumniLink": "https://alumni.codeup.com/web-developers",
            "resume": "ryanyoshimura",
            "background": "/img/kaenaBeachResized.jpg\" alt=\"img",
            "quotes": '"From one thing, know ten thousand things"' + '<br>' + '― Miyamoto Musashi'
        },
        {
            "pictures": "../../img/ashley.png",
            "vetStatus": "Full Stack Developer & AirForce Veteran",
            "firstName": "Ashley",
            "lastName": "Martinez",
            "linkedIn": "ashmar32",
            "github": "ashmar32",
            "alumniLink": "https://alumni.codeup.com/web-developers",
            "resume": "ashleymartinez",
            "background": "/img/ashleyBgAbout.jpeg\" alt=\"img",
            "quotes": '"I dwell in possibility"' + '<br>' + '― Emily Dickinson'
        },
        {
            "pictures": "../../img/miguel.png",
            "vetStatus": "Full Stack Developer & Army Veteran",
            "firstName": "Miguel",
            "lastName": "Guzman",
            "linkedIn": "miguelguzmanwd",
            "github": "MiguelAGuzman",
            "alumniLink": "https://alumni.codeup.com/web-developers",
            "resume": "miguelguzman",
            "background": "../../img/rocky-mountain.jpg\" alt=\"Rocky Mountains",
            "quotes": '"But the cream will rise to the top"' + '<br>' + '-Abraham Lincoln'
        }
    ]
    // icon credits
    console.log(`
          <a href="https://www.flaticon.com/free-icons/resume" title="resume icons">Resume icons created by nawicon - Flaticon</a>
          <a href="https://www.flaticon.com/free-icons/linkedin" title="linkedin icons">Linkedin icons created by Freepik - Flaticon</a>
          <a href="https://www.flaticon.com/free-icons/rubber-duck" title="rubber duck icons">Rubber duck icons created by Talha Dogar - Flaticon</a>
          <a href="https://www.flaticon.com/free-icons/github" title="github icons">Github icons created by Dave Gandy - Flaticon</a>
    `)

    let html = `<header>
<!--        <h1 id="about-page-h1">About Us (rename to something cool)</h1>-->
</header>
    <div class="container wrapper">
        <div class="row duh overflow-y-scroll">`;

            for (let i = 0; i <= 4; i++) {
                html += `
    <div class="flip-card-container " style="--hue: 220" xmlns="http://www.w3.org/1999/html">
      <div class="flip-card col-sm-2">
        <div class="card-front">
          <ul>
            <figure>
            <div class="img-bg imgAbout"></div>
            <img class="imgAbout" src="${Developer[i].background}" alt="img">
          </figure>

            <figcaption> <img src="${Developer[i].pictures}" class="ppl-img" alt="img"></figcaption>
            <li id="card-name"> ${Developer[i].firstName}<br>${Developer[i].lastName}</li>
            <li> <span>${Developer[i].vetStatus}</span></li>
            <li class="g-0"> <span>${Developer[i].quotes}</span></li>
            <li>
                <button id="about-card-btn">           
                  <a data-link href="https://linkedin.com/in/${Developer[i].linkedIn}" target="_blank"><img data-passthru src="img/linkedinResized.png" alt="img"></a>
                  <a data-link href="https://github.com/${Developer[i].github}" target="_blank"><img data-passthru src="img/github-signResized.png" alt="img"></a>
                  <a data-link href="${Developer[i].alumniLink}" target="_blank"><img data-passthru src="img/rubber-duckResized.png" alt="img"></a>
                  <a data-link href="https://${Developer[i].resume}.venuscohort.com" target="_blank"><img data-passthru src="img/resumeResized.png" alt="img"></a>
                </button>
            </li>
          </ul>
          
        </div>
        <div class="card-back">
          <figure>
            <div class="img-bg imgAbout"></div>
            <img src="${Developer[i].background}" alt="img">
          </figure>

          <div class="design-container">
            <span class="design design--1"></span>
            <span class="design design--2"></span>
            <span class="design design--3"></span>
            <span class="design design--4"></span>
            <span class="design design--5"></span>
            <span class="design design--6"></span>
            <span class="design design--7"></span>
            <span class="design design--8"></span>
          </div>
        </div>
      </div>
    </div>
    `}
            html += `
        </div>
    </div>`;
        return html;
}

export function aboutEvent () {
    console.log(me.trophies)
    checkAndAddTrophy(me.trophies, 3)
    console.log("is this thing on?")
}


