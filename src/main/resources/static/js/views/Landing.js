export default function Landing(props) {
    console.log("The frontend did it. HER FAULT");
    return `
          <head>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1">
            <title>Landing Page</title>
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi" crossorigin="anonymous">
            <link href="/css/landing.css" rel="stylesheet">
          </head>
          <body>  
          <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-OERcA2EqjJCMA+/3y+gxIOqMEjwtxJY7qPCqsdltbNJuaOe923+mo//f6V8Qbsw3" crossorigin="anonymous"></script>
            
            <div class="container">
              <div class="row">
                <div class="col-sm-6" id="leftHalf">
                    
                </div>
                <div class="col-sm-6" id="rightHalf">
                    <!--  This is the sign up card              -->
                    <div class="aboutTSU">
                      <h3 class="card-header underline">About TSUmami</h3>
                      <div class="">
<!--                      TODO: get p tag renamed in about.css so that we can style other p tags-->
                        <p class="landingAboutText">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci alias aliquid corporis cum cumque cupiditate debitis impedit, inventore itaque libero nihil nobis numquam obcaecati, odio odit omnis optio porro possimus praesentium, provident ratione repellat rerum sed tenetur vero vitae voluptate voluptatem. Alias eius ipsa pariatur perferendis veniam vero voluptas, voluptatem.</p>
                        <a href="/login" data-link className="my-link" class="btn btn-primary">Signup with Google!</a>
                      </div>
                    </div>
<!--                <button><a href="/login" data-link className="my-link">Signup via Google!</a></button>-->
                    </div>
                  </div>
                </div>
          </body>
    `;
}

