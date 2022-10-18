import {getHeaders} from "../auth.js";
import createView from "../createView.js";


let me;
export default function prepareUser(props) {
    me = props.me;
    console.log(props);
    let trophies = props.me.trophies;
    let allTrophies = props.allTrophies;
    let userTrophiesIds = [];
    let chefLevels = props.me.chefLevels;
    console.log(chefLevels);
    let allChefLevels = props.allChefLevels;
    let userChefLevelsIds = [];

    for (let trophy of trophies) {
        userTrophiesIds.push(trophy.id)
    }

    for (let chefLevel of chefLevels) {
        userChefLevelsIds.push(chefLevel.id)
    }

    // console.log(userTrophiesIds)
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
                        <label for="inputActivityLevel">Fitness Level</label>
                    <input type="text" class="form-control" id="inputActivityLevel" placeholder="Activity Level">
                    </div>
<!--                    //weight goals input-->
                       <div class="form-row">
                    <div class="form-group col-md-6">
                        <label for="inputWeightGoal">Weight Goal</label>
                    <input type="text" class="form-control" id="inputWeightGoal" placeholder="Weight Goal">
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
                  <button type="submit" id="submitBtn">Submit</button>
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
        <div class="achievement-row row">
            <div class="col-6">
                <div class="chef-container">
                    ${allChefLevels.map(chefLevel => `

                         ${appendChefHTML(userChefLevelsIds, chefLevel, me.experiencePoints)}

                    `).join("")}
                </div>
            </div>
            <div class="col-6">
                <div class="trophy-container d-flex flex-wrap justify-content-center">
                    ${allTrophies.map(trophy => `
                    
                         ${appendTrophyHTML(userTrophiesIds, trophy)}
                    
                    `).join("")}
                </div> 
            </div>
            
<!--testing toast-->
<!--<div class="toast-container position-fixed bottom-0 end-0 p-3">-->
<!--  <div id="liveToast" class="toast" role="alert" aria-live="assertive" aria-atomic="true">-->
<!--    <div class="toast-header">-->
<!--          <img src="https://cdn-icons-png.flaticon.com/512/6951/6951856.png" class="rounded me-2" alt="...">-->

<!--      <strong class="me-auto">Bootstrap</strong>-->
<!--      <small>11 mins ago</small>-->
<!--      <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>-->
<!--    </div>-->
<!--    <div class="toast-body">-->
<!--      Hello, world! This is a toast message.-->
<!--    </div>-->
<!--  </div>-->
<!--</div>-->
            
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

function appendChefHTML (usersChefLevels, currentChefLevel, usersXp){
    let usersCurrentXp = usersXp
    let currentChefLevelXpThreshold = currentChefLevel.requiredXp;

    let xpBarPercent = ((usersCurrentXp / currentChefLevelXpThreshold) * 100).toFixed(0) + "%";
    console.log(xpBarPercent)
    if (usersCurrentXp / currentChefLevelXpThreshold * 100 > 100) {
        xpBarPercent = "100%"
    }
    if (usersChefLevels.includes(currentChefLevel.id)) {
        return `
                <div class="chef-card m-2 p-2 tt" data-bs-title=${JSON.stringify(currentChefLevel.description)} data-desc=${JSON.stringify(currentChefLevel.description)}">
                  <div class="d-flex align-items-center justify-content-between">
                      <div class="d-flex">
                        <img src=${JSON.stringify(currentChefLevel.photo)} alt="chef level" class="chef-level-img">                  
                        <h6 class="chef-title mx-3">${currentChefLevel.title} </h6>
                      </div>
                      <div class="w-65">
                          <div class="bar-container">
                              <div class="skills html" id=${"chefLevel" + currentChefLevel.id} style="width: ${xpBarPercent}">${xpBarPercent}</div>
                          </div>
                          <div class="d-flex justify-content-between">
                            <div>123 / 4930</div>
                            <div>${currentChefLevel.description}</div>
                          </div>
                      </div>
                  </div>
                </div>
        `
    }
    return `<div class="chef-card m-2 p-2 tt" data-bs-title=${JSON.stringify(currentChefLevel.description)} data-desc=${JSON.stringify(currentChefLevel.description)}">
                  <div class="d-flex align-items-center justify-content-between">
                      <div class="d-flex">
                        <img src=${JSON.stringify(currentChefLevel.photo)} alt="chef level" class="chef-level-img">                  
                        <h6 class="chef-title mx-3">${currentChefLevel.title} </h6>
                      </div>
                      <div class="w-65">
                          <div class="bar-container">
                              <div class="skills html" id=${"chefLevel" + currentChefLevel.id} style="width: ${xpBarPercent}">${xpBarPercent}</div>
                          </div>
                          <div class="d-flex justify-content-between">
                            <div>123 / 4930</div>
                            <div>${currentChefLevel.description}</div>
                          </div>
                      </div>
                  </div>
                </div>`
}


export function prepareUserJS() {
    // doToggleUserInfoHandler();
    updateUserInfo();
    trophyCardEventListener();
    // console.log(user.posts.length);
    // awardUserATrophy(2);
    // moreToast();
}

function trophyCardEventListener() {
    const tooltips = document.querySelectorAll('.tt')
    tooltips.forEach(t => {
        new bootstrap.Tooltip(t)
    })


}

function updateUserInfo() {
    // let updateUser = {
    //     height: "",
    //     weight: "",
    //     allergies: "",
    //     restrictions: "",
    //     preferences: "",
    //     activityLevel: "",
    //     weightGoal: "",
    //     bodyType: "",
    //     dietType: "",
    //     calories: "",
    //     protein: "",
    //     carbs: "",
    //     fat: ""
    // }
    let submitBtn = document.querySelector("#submitBtn")
    console.log(submitBtn);
    submitBtn.addEventListener("click", function (event) {
        event.preventDefault();
        console.log("is this working?")
//     const button = document.querySelector("#updateUserInfo");
//     button.addEventListener("click", function(event) {
        // grab the 3 password field values

        // const heightField = document.querySelector("#inputHeight");
        const weightField = document.querySelector("#inputWeight");
        const allergiesField = document.querySelector("#inputAllergies");
        // const restrictionsField = document.querySelector("#inputRestrictions");
        // const preferencesField = document.querySelector("#inputPreferences");
        const activityLevelField = document.querySelector("#inputActivityLevel");
        const weightGoalField = document.querySelector("#inputWeightGoal");
        // const bodyTypeField = document.querySelector("#inputBodyType");
        // const dietTypeField = document.querySelector("#inputDietType");
        const caloriesField = document.querySelector("#inputCalories");
        const proteinField = document.querySelector("#inputProtein");
        const carbsField = document.querySelector("#inputCarbs");
        const fatField = document.querySelector("#inputFat");
        // changed names of fields to match database
        let updateUser = {
            // height: heightField.value,
            weight: weightField.value,
            allergies: allergiesField.value,
            // restrictions: restrictionsField.value,
            // preferences: preferencesField.value,
            activityLevel: activityLevelField.value,
            weightGoal: weightGoalField.value,
            // bodyType: bodyTypeField.value,
            // diet: dietTypeField.value,
            calorieGoal: caloriesField.value,
            proteinGoal: proteinField.value,
            carbGoal: carbsField.value,
            fatGoal: fatField.value,
        }

        let request = {
            method: "PATCH",
            headers: getHeaders(),
            body: JSON.stringify(updateUser)
        }
//changed endpoint name
        fetch(USER_API_BASE_URL + "/updateUser", request)
            .then(response => {
                console.log(response.status);
                // createView("/");
            })
    })
}

// }

// function doTogglePasswordHandler() {
//     const button = document.querySelector("#toggleShowPassword");
//     button.addEventListener("click", function(event) {
//         // grab a reference to confirm password
//         const oldPassword = document.querySelector("#oldpassword");
//         const newPassword = document.querySelector("#newpassword");
//         const confirmPassword = document.querySelector("#confirmpassword");
//         if(confirmPassword.getAttribute("type") === "password") {
//             confirmPassword.setAttribute("type", "text");
//             oldPassword.setAttribute("type", "text");
//             newPassword.setAttribute("type", "text");
//         } else {
//             confirmPassword.setAttribute("type", "password");
//             oldPassword.setAttribute("type", "password");
//             newPassword.setAttribute("type", "password");
//         }
//     });
// }
//changed to export to be used elsewhere
// export function awardUserATrophy(trophyId) {
//
//     let requestHeader = {
//         method: 'PATCH',
//         headers: getHeaders()
//     }

    // fetch('http://localhost:8080/api/users/addTrophy/' + trophyId, requestHeader).then(response => {
    //     console.log(response)
    // }).finally(function (){
    //     //function that will append a toast to the body on page
    //     // moreToast()
    // })
// }}
//     )}


// function moreToast() {
//
//     var newElement = document. createElement("div"); newElement. innerHTML = ``
//
//     const toastLiveExample = document.getElementById('liveToast')
//     const toast = new bootstrap.Toast(toastLiveExample)
//
//     toast.show()
// }}