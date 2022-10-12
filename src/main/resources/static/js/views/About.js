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
    let devCustomizations = [
        {
            "background": ""
        },
        {
            "background": ""
        },
        {
            "background": ""
        },
        {
            "background": ""
        },
        {
            "background": ""
        }
    ]



    console.log(`
          <a href="https://www.flaticon.com/free-icons/resume" title="resume icons">Resume icons created by nawicon - Flaticon</a>
          <a href="https://www.flaticon.com/free-icons/linkedin" title="linkedin icons">Linkedin icons created by Freepik - Flaticon</a>
          <a href="https://www.flaticon.com/free-icons/rubber-duck" title="rubber duck icons">Rubber duck icons created by Talha Dogar - Flaticon</a>
          <a href="https://www.flaticon.com/free-icons/github" title="github icons">Github icons created by Dave Gandy - Flaticon</a>
    `)




    let html = `<header>
        <h1>About Page things</h1>
</header>
    <div class="container wrapper">
        <div class="row duh">`;

            for (let i = 0; i <= 4; i++) {
                html += `
<div class="flip-card-container" style="--hue: 220">
  <div class="flip-card">
  </a>
    <div class="card-front">
      <figure>
        <div class="img-bg"></div>
        <img src="https://images.unsplash.com/photo-1486162928267-e6274cb3106f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt="Brohm Lake">
        <figcaption> <img src="${Person[i].pictures}" class="ppl-img" alt="img"></figcaption>
      </figure>
      <ul>
        <li> ${Person[i].firstName}<br>${Person[i].lastName}</li>
        <li> <span>${Person[i].vetStatus}</span></li>
      </ul>
    </div>
    <a>
    <div class="card-back">
      <figure>
        <div class="img-bg"></div>
        <img src="https://images.unsplash.com/photo-1486162928267-e6274cb3106f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt="Brohm Lake">
      </figure>
      <button id="about-card-cardback-btn"> 
          <a data-link href="https://linkedin.com/in/${Person[i].linkedIn}" target="_blank"><img data-passthru src="img/linkedinResized.png" alt="img"></a>
          <a data-link href="https://github.com/${Person[i].github}" target="_blank"><img data-passthru src="img/github-signResized.png" alt="img"></a>
          <a data-link href="${Person[i].alumniLink}" target="_blank"><img data-passthru src="img/rubber-duckResized.png" alt="img"></a>
          <a data-link href="https://${Person[i].resume}.venuscohort.com" target="_blank"><img data-passthru src="img/resumeResized.png" alt="img"></a>
      </button>
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


