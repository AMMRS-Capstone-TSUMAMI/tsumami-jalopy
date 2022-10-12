export default function About(props) {
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
            "background": "https://images.unsplash.com/photo-1486162928267-e6274cb3106f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60\" alt=\"Brohm Lake",
            "quotes": '"From one thing, know ten thousand things"' + '― Miyamoto Musashi'


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
            "background": "https://images.unsplash.com/photo-1486162928267-e6274cb3106f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60\" alt=\"Brohm Lake",
            "quotes": '"From one thing, know ten thousand things"' + '― Miyamoto Musashi'


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
            "background": "https://images.unsplash.com/photo-1486162928267-e6274cb3106f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60\" alt=\"Brohm Lake",
            "quotes": '"From one thing, know ten thousand things"' + '― Miyamoto Musashi'


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
            "background": "https://images.unsplash.com/photo-1486162928267-e6274cb3106f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60\" alt=\"Brohm Lake",
            "quotes": '"From one thing, know ten thousand things"' + '― Miyamoto Musashi'
        },
        {
            "pictures": "../../img/miguel.png",
            "vetStatus": "Full Snack Developer & Coast Guard Veteran",
            "firstName": "Miguel",
            "lastName": "Guzman",
            "linkedIn": "miguelguzmanwd",
            "github": "MiguelAGuzman",
            "alumniLink": "https://alumni.codeup.com/web-developers",
            "resume": "miguelguzman",
            "background": "https://images.unsplash.com/photo-1486162928267-e6274cb3106f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60\" alt=\"Brohm Lake",
            "quotes": '"Wooh"' + '-Rick Flair'
        }
    ]




    console.log(`
          <a href="https://www.flaticon.com/free-icons/resume" title="resume icons">Resume icons created by nawicon - Flaticon</a>
          <a href="https://www.flaticon.com/free-icons/linkedin" title="linkedin icons">Linkedin icons created by Freepik - Flaticon</a>
          <a href="https://www.flaticon.com/free-icons/rubber-duck" title="rubber duck icons">Rubber duck icons created by Talha Dogar - Flaticon</a>
          <a href="https://www.flaticon.com/free-icons/github" title="github icons">Github icons created by Dave Gandy - Flaticon</a>
    `)




    let html = `<header>
        <h1>About Us (rename to something cool)</h1>
</header>
    <div class="container wrapper">
        <div class="row duh">`;

            for (let i = 0; i <= 4; i++) {
                html += `
<div class="flip-card-container" style="--hue: 220">
  <div class="flip-card">
    <div class="card-front">
      
      <ul>
        <figure>
        <div class="img-bg"></div>
        <img src="${Developer[i].background}" alt="img">
      </figure>
        <figcaption> <img src="${Developer[i].pictures}" class="ppl-img" alt="img"></figcaption>
        <li> ${Developer[i].firstName}<br>${Developer[i].lastName}</li>
        <li> <span>${Developer[i].vetStatus}</span></li>
        <li> <span>${Developer[i].quotes}</span></li>

      </ul>
    </div>
    <div class="card-back">
      <figure>
        <div class="img-bg"></div>
        <img src="${Developer[i].background}" alt="img">
      </figure>
      <button id="about-card-cardback-btn">
          <a data-link href="https://linkedin.com/in/${Developer[i].linkedIn}" target="_blank"><img data-passthru src="img/linkedinResized.png" alt="img"></a>
          <a data-link href="https://github.com/${Developer[i].github}" target="_blank"><img data-passthru src="img/github-signResized.png" alt="img"></a>
          <a data-link href="${Developer[i].alumniLink}" target="_blank"><img data-passthru src="img/rubber-duckResized.png" alt="img"></a>
          <a data-link href="https://${Developer[i].resume}.venuscohort.com" target="_blank"><img data-passthru src="img/resumeResized.png" alt="img"></a>
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


