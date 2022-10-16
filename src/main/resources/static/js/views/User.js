import CreateView from "../createView.js"


let me;
export default function prepareUser(props) {
    me = props.me;
    console.log(props);
    let trophies = props.me.trophies;
    let chefLevels = props.me.chefLevels;
    let allTrophies = props.allTrophies;
    let userTrophiesIds = [];

    for (let trophy of trophies) {
        userTrophiesIds.push(trophy.id)
    }
    console.log(userTrophiesIds)
    // console.log(trophies);
    // console.log(chefLevels);

    // make the user's original pw available somewhere in here
    return `
        <h1>Update Info</h1>
        
       <!--                    //FORM #1-->
<!--                    //weight input-->
                    <div class="form-row">
                    <div class="form-group col-md-6">
                        <label for="inputWeight">Weight</label>
                    <input type="text" class="form-control" id="inputWeight" placeholder="Weight">
                    </div>
<!--                    //submit button-->
                     <button type="submit" class="btn btn-primary">Submit</button>
                    </div>
                    </div>
                  </form>
                  </div>
                   </div>
                </div>
                </div>
                  
                  
<!--                //FORM #2-->
                 <h1 class="h3 mb-3 font-weight-normal">Restrictions</h1>
                <form>
<!--                  //allergies input-->
                     <div class="form-row">
                    <div class="form-group col-md-6">
                        <label for="inputAllergies">Allergies</label>
                    <input type="text" class="form-control" id="inputAllergies" placeholder="Allergies">
                    </div>
<!--                    //dietary restrictions input-->
                     <div class="form-row">
                    <div class="form-group col-md-6">
                        <label for="inputRestrictions">Restrictions</label>
                    <input type="text" class="form-control" id="inputRestrictions" placeholder="Restrictions">
                    </div>
<!--                    //food preferences input-->
                    <div class="form-row">
                    <div class="form-group col-md-6">
                        <label for="inputPreferences">Preferences</label>
                    <input type="text" class="form-control" id="inputPreferences" placeholder="Preferences">
                    </div>
<!--                    //other input-->
                     <div class="form-row">
                    <div class="form-group col-md-6">
                        <label for="inputOther">Other</label>
                    <input type="text" class="form-control" id="inputOther" placeholder="Other">
                    </div>
<!--                    //submit button-->
                   <button type="submit" class="btn btn-primary">Submit</button>
                  </div>
                    </div>
                  </form>
                  </div>
                </div>
                </div>
               
                   
                  
<!--                //FORM #3-->
                 <h1 class="h3 mb-3 font-weight-normal">Fitness Level & Weight Goals</h1>
                <form>
<!--                    //fitness level input-->
                      <div class="form-row">
                    <div class="form-group col-md-6">
                        <label for="inputFitnessLevel">Fitness Level</label>
                    <input type="text" class="form-control" id="inputFitnessLevel" placeholder="Fitness Level">
                    </div>
<!--                    //weight goals input-->
                       <div class="form-row">
                    <div class="form-group col-md-6">
                        <label for="inputWeightGoal">Weight Goal</label>
                    <input type="text" class="form-control" id="inputWeightGoal" placeholder="Weight Goal">
                    </div>
<!--                    //submit button-->
                  <button type="submit" class="btn btn-primary">Submit</button>
                  </div>
                    </div>
                  </form>
                  </div>
                  
                   <!--                //FORM #4-->
                 <h1 class="h3 mb-3 font-weight-normal">Restrictions</h1>
                <form>    
<!--                body type input-->
                   <div class="form-row">
                    <div class="form-group col-md-6">
                        <label for="inputBodyType">Body Type</label>
                    <select id="inputBodyType" class="form-control">
                        <option selected>Choose...</option>
                        <option>Ectomorph</option>
                        <option>Endomorph</option>
                        <option>Mesomorph</option>
                        </select>
                    </div>
<!--                    diet type input-->
                    <div class="form-row">
                    <div class="form-group col-md-6">
                        <label for="inputDietType">Body Type</label>
                    <select id="inputDietType" class="form-control">
                        <option selected>Choose...</option>
                        <option>Paleo</option>
                        <option>Keto</option>
                        <option>Anything Else</option>
                        </select>
                    </div>
<!--                    any other diet-->
                     <div class="form-row">
                    <div class="form-group col-md-6">
                        <label for="inputOtherDiet">Other Diet</label>
                    <input type="text" class="form-control" id="inputOtherDiet" placeholder="Other Diet">
                    </div>
                
<!--                #FORM #5-->
                 <h1 class="h3 mb-3 font-weight-normal">Recommended Calories/Macros</h1>
                <form>
<!--                    //calories information-->
                      <div class="form-row">
                    <div class="form-group col-md-6">
                        <label for="inputCalories">Calories</label>
                    <input type="text" class="form-control" id="inputCalories" placeholder="Calories">
                    </div>
<!--                    //protein input-->
                      <div class="form-row">
                    <div class="form-group col-md-6">
                        <label for="inputProtein">Protein</label>
                    <input type="text" class="form-control" id="inputProtein" placeholder="Protein">
                    </div>
<!--                    //carbs input-->
                     <div class="form-row">
                    <div class="form-group col-md-6">
                        <label for="inputCarbs">Carbs</label>
                    <input type="text" class="form-control" id="inputCarbs" placeholder="Carbs">
                    </div>
<!--                    //fat input-->
                      <div class="form-row">
                    <div class="form-group col-md-6">
                        <label for="inputFat">Fat</label>
                    <input type="text" class="form-control" id="inputFat" placeholder="Fat">
                    </div>
<!--                    //submit button-->
                  <button type="submit" class="btn btn-primary">Submit</button>
                  </div>
                    </div>
                  </form>
                  </div>
                  </div>
                </div>
            
  </body>
</html>
        
        <hr>
<!--    working on achievement displays-->
        <div class="trophy-row row">
            <div class="col-6"></div>
            <div class="col-6">
                <div class="trophy-container d-flex flex-wrap justify-content-center">
                    ${allTrophies.map(trophy => `
                    
                         ${appendTrophyHTML(userTrophiesIds, trophy)}
                    
                    `).join("")}
                <div class="trophy-container">
            </div>
        </div>
        
        
        
        
        
        </div>
    `;
}
function appendTrophyHTML (usersTrophies, currentTrophy){
    if (usersTrophies.includes(currentTrophy.id)) {
        return `
                    
                        <div class="card trophy-card m-2 tt" data-bs-placment="bottom" data-bs-title=${JSON.stringify(currentTrophy.description)} data-desc=${currentTrophy.description.replace(/\s/g , "-")}>
                          <div class="card-body">
                            <i class="bi bi-trophy-fill color-gold trophy-icon"></i> 
                          </div>
                          <div class="card-body">
                            <h6 class="trophy-title">${currentTrophy.title}</h6>
                          </div>
                        </div>      
          `
    }
    return `<div class="card trophy-card m-2 tt" data-bs-title=${JSON.stringify(currentTrophy.description)} data-desc=${currentTrophy.description.replace(/\s/g , "-")}>
                      <div class="card-body">
                        <i class="bi bi-trophy-fill color-grey trophy-icon"></i> 
                      </div>
                      <div class="card-body">
                        <h6 class="trophy-title">${currentTrophy.title}</h6>
                      </div>
                    </div>`
}

export function prepareUserJS() {
    // doTogglePasswordHandler();
    // doSavePasswordHandler();
    trophyCardEventListener();
    // console.log(user.posts.length);
}

function trophyCardEventListener() {
    const tooltips = document.querySelectorAll('.tt')
    tooltips.forEach(t => {
        new bootstrap.Tooltip(t)
    })
}

function doSavePasswordHandler() {
    const button = document.querySelector("#updatePassword");
    button.addEventListener("click", function(event) {
        // grab the 3 password field values
        const oldPasswordField = document.querySelector('#oldpassword');
        const newPasswordField = document.querySelector('#newpassword');
        // const confirmPasswordField = document.querySelector('#confirmpassword');
        const oldPassword = oldPasswordField.value;
        const newPassword = newPasswordField.value;
        // const confirmPassword = confirmPasswordField.value;

        const request = {
            method: "PUT",
        }
        const url = `${USER_API_BASE_URL}/${me.id}/updatePassword?oldPassword=${oldPassword}&newPassword=${newPassword}`

        fetch(url, request)
            .then(function(response) {
                CreateView("/");
            });
    });
}

function doTogglePasswordHandler() {
    const button = document.querySelector("#toggleShowPassword");
    button.addEventListener("click", function(event) {
        // grab a reference to confirm password
        const oldPassword = document.querySelector("#oldpassword");
        const newPassword = document.querySelector("#newpassword");
        const confirmPassword = document.querySelector("#confirmpassword");
        if(confirmPassword.getAttribute("type") === "password") {
            confirmPassword.setAttribute("type", "text");
            oldPassword.setAttribute("type", "text");
            newPassword.setAttribute("type", "text");
        } else {
            confirmPassword.setAttribute("type", "password");
            oldPassword.setAttribute("type", "password");
            newPassword.setAttribute("type", "password");
        }
    });
}