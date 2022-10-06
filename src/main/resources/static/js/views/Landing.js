export default function Landing(props) {
    console.log("The frontend did it. HER FAULT");
    return `
        <!doctype html>
        <html lang="en">
          <head>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1">
            <title>Landing Page</title>
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi" crossorigin="anonymous">
          </head>
          <body>
          <header>
            <h1>GET PLANNIN' with TSUmami!</h1>
          </header>  
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-OERcA2EqjJCMA+/3y+gxIOqMEjwtxJY7qPCqsdltbNJuaOe923+mo//f6V8Qbsw3" crossorigin="anonymous"></script>
            
            <div class="container text-center">
              <div class="row">
                <div class="col-sm-8">
                    
                </div>
                <div class="col-sm-4">
                    <!--  This is the sign up card              -->
                    <div class="card text-bg-dark">
                      <h5 class="card-header">Signup with TSUmami!</h5>
                      <div class="card-body">
                        <h5 class="card-title">Authorize Google!</h5>
                        <p class="card-text">Seamlessly sign in using your Google account.</p>
                        <a href="/login" data-link className="my-link" class="btn btn-primary">Signup with Google!</a>
                      </div>
                    </div>
                
<!--                <button><a href="/login" data-link className="my-link">Signup via Google!</a></button>-->
                </div>
              </div>
            </div>
            
          </body>
        </html>
    `;
}

//                     <img src="/img/food_landing.jpeg">
// <header>
//     <h1>GET PLANNIN' with TSUmami!</h1>
// </header>
// <main>
//     <div>
//         <p>
//
//             This is the landing page!
//         </p>
//
//     </div>
// </main>