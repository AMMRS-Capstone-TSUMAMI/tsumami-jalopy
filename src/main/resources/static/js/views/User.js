import CreateView from "../createView.js"
import {getHeaders} from "../auth.js";


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
                        <label for="inputFitnessLevel">Fitness Level</label>
                    <input type="text" class="form-control" id="inputFitnessLevel" placeholder="Fitness Level">
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
    doSaveUserInfoHandler();
    trophyCardEventListener();
    // console.log(user.posts.length);
    // awardUserATrophy(2);
    moreToast();
}

function trophyCardEventListener() {
    const tooltips = document.querySelectorAll('.tt')
    tooltips.forEach(t => {
        new bootstrap.Tooltip(t)
    })


}

function doSaveUserInfoHandler() {
    const button = document.querySelector("#updateUserInfo");
    button.addEventListener("click", function(event) {
        // grab the 3 password field values
        const oldHeightField = document.querySelector('#oldheight');
        const newHeightField = document.querySelector('#newheight');
        const oldWeightField = document.querySelector('#oldweight');
        const newWeightField = document.querySelector('#newweight');
        const oldAllergiesField = document.querySelector('#oldallergies');
        const newAllergiesField = document.querySelector('#newallergies');
        const oldRestrictionsField = document.querySelector('#oldrestrictions');
        const newRestrictionsField = document.querySelector('#newrestictions');
        const oldPreferencesField = document.querySelector('#oldpreferences');
        const newPreferencesField = document.querySelector('#newpreferences');
        const oldActivityLevelField = document.querySelector('#oldactivitylevel');
        const newActivityLevelField = document.querySelector('#newactivitylevel');
        const oldWeightGoalField = document.querySelector('#oldweightgoal');
        const newWeightGoalField = document.querySelector('#newweightgoal');
        const oldBodyTypeField = document.querySelector('#oldbodytype');
        const newBodyTypeField = document.querySelector('#newbpdytype');
        const oldDietTypeField = document.querySelector('#olddiettype');
        const newDietTypeField = document.querySelector('#newdiettype');
        const oldCaloriesField = document.querySelector('#oldcalories');
        const newCaloriesField = document.querySelector('#newcalories');
        const oldProteinField = document.querySelector('#oldprotein');
        const newProteinField = document.querySelector('#newprotein');
        const oldCarbsField = document.querySelector('#oldcarbs');
        const newCarbsField = document.querySelector('#newcarbs');
        const oldFatField = document.querySelector('#oldfat');
        const newFatField = document.querySelector('#newfat');
        // const confirmPasswordField = document.querySelector('#confirmpassword');
        const oldHeight = oldHeightField.value;
        const newHeight= newHeightField.value;
        const oldWeight = oldWeightField.value;
        const newWeight = newWeightField.value;
        const oldAllergies = oldAllergiesField.value;
        const newAllergies = newAllergiesField.value;
        const oldRestrictions = oldRestrictionsField.value;
        const newRestrictions = newRestrictionsField.value;
        const oldPreferences = oldPreferencesField.value;
        const newPreferences = newPreferencesField.value;
        const oldActivityLevel  = oldActivityLevelField.value;
        const newActivityLevel  = newActivityLevelField.value;
        const oldWeightGoal = oldWeightGoalField.value;
        const newWeightGoal = newWeightGoalField.value;
        const oldBodyType = oldBodyTypeField.value;
        const newBodyType = newBodyTypeField.value;
        const oldDietType = oldDietTypeField.value;
        const newDietType = newDietTypeField.value;
        const oldCalories = oldCaloriesField.value;
        const newCalories = newCaloriesField.value;
        const oldProtein = oldProteinField.value;
        const newProtein= newProteinField.value;
        const oldCarbs = oldCarbsField.value;
        const newCarbs = newCarbsField.value;
        const oldFat = oldFatField.value;
        const newFat = newFatField.value;
        // const confirmPassword = confirmPasswordField.value;

        const request = {
            method: "PATCH",
        }
        const url = `${USER_API_BASE_URL}/${me.id}`

        fetch(url, request)
            .then(function(response) {
                CreateView("/");
            });
    });
}

// function doToggleUserInfoHandler() {
//     const button = document.querySelector("#toggleShowUserInfo");
//     button.addEventListener("click", function(event) {
//         // grab a reference to confirm password
//         const oldHeight= document.querySelector("#oldheight");
//         const newHeight = document.querySelector("#newheight");
//         const oldWeight = document.querySelector("#oldweight");
//         const newWeight = document.querySelector("#newweight");
//         const oldAllergies = document.querySelector("#oldallergies");
//         const newAllergies = document.querySelector("#newallergies");
//         const oldRestrictions = document.querySelector("#oldrestrictions");
//         const newRestrictions = document.querySelector("#newrestrictions");
//         const oldPreferences  = document.querySelector("#oldpreferences");
//         const newPreferences  = document.querySelector("#newpreferences");
//         const oldActivityLevel = document.querySelector("#oldactivitylevel");
//         const newActivityLevel = document.querySelector("#newactivitylevel");
//         const oldWeightGoal = document.querySelector("#oldweightgoal");
//         const newWeightGoal = document.querySelector("#newweightgoal");
//         const oldBodyType = document.querySelector("#oldbodytype");
//         const newBodyType = document.querySelector("#newbodytype");
//         const oldDietType = document.querySelector("#olddiettype");
//         const newDietType = document.querySelector("#newdeittype");
//         const oldCalories= document.querySelector("#oldcalories");
//         const newCalories= document.querySelector("#newcalories");
//         const oldProtein = document.querySelector("#oldprotein");
//         const newProtein= document.querySelector("#newpreotein");
//         const oldCarbs = document.querySelector("#oldcarbs");
//         const newCarbs = document.querySelector("#newcarbs");
//         const oldFat = document.querySelector("#oldfat");
//         const newFat = document.querySelector("#newfat");
//
//         if(oldHeight.getAttribute("type") === "height") {
//             newHeight.setAttribute("type", "text");
//             oldWeight.setAttribute("type", "text");
//             newWeight.setAttribute("type", "text");
//             oldAllergies.setAttribute("type", "text");
//             newAllergies.setAttribute("type", "text");
//             oldRestrictions.setAttribute("type", "text");
//             newRestrictions.setAttribute("type", "text");
//             oldPreferences .setAttribute("type", "text");
//             newPreferences .setAttribute("type", "text");
//             oldActivityLevel.setAttribute("type", "text");
//             newActivityLevel.setAttribute("type", "text");
//             oldWeightGoal.setAttribute("type", "text");
//             newWeightGoal.setAttribute("type", "text");
//             oldBodyType.setAttribute("type", "text");
//             newBodyType.setAttribute("type", "text");
//             oldDietType.setAttribute("type", "text");
//             newDietType.setAttribute("type", "text");
//             oldCalories.setAttribute("type", "text");
//             newCalories.setAttribute("type", "text");
//             oldProtein.setAttribute("type", "text");
//             newProtein.setAttribute("type", "text");
//             oldCarbs.setAttribute("type", "text");
//             newCarbs.setAttribute("type", "text");
//             oldFat.setAttribute("type", "text");
//             newFat.setAttribute("type", "text");
//         } else {
//             oldHeight.setAttribute("type", "height");
//             newHeight.setAttribute("type", "height");
//             oldWeight.setAttribute("type", "weight");
//             newWeight.setAttribute("type", "weight");
//             oldRestrictions.setAttribute("type", "restrictions");
//             newRestrictions.setAttribute("type", "restrictions");
//             oldPreferences.setAttribute("type", "preferences ");
//             newPreferences.setAttribute("type", "preferences ");
//             oldActivityLevel.setAttribute("type", "activitylevel");
//             newActivityLevel.setAttribute("type", "activitylevel");
//             oldWeightGoal.setAttribute("type", "weightgoal");
//             newWeightGoal.setAttribute("type", "weightgoal");
//             oldBodyType.setAttribute("type", "bodytype");
//             newBodyType.setAttribute("type", "bodytype");
//             oldDietType.setAttribute("type", "diettype");
//             newDietType.setAttribute("type", "diettype");
//             oldCalories.setAttribute("type", "calories");
//             newCalories.setAttribute("type", "calories");
//             oldProtein.setAttribute("type", "protein");
//             newProtein.setAttribute("type", "protein");
//             oldCarbs.setAttribute("type", "carbs");
//             newCarbs.setAttribute("type", "carbs");
//             oldFat.setAttribute("type", "fat");
//             newFat.setAttribute("type", "fat");
//         }
//     });
// }

function awardUserATrophy(trophyId) {
    let requestHeader = {
        method: 'PATCH',
        headers: getHeaders()
    }

    fetch('http://localhost:8080/api/users/addTrophy/' + trophyId, requestHeader).then(response => {
        console.log(response)
    }).finally(function (){
        //function that will append a toast to the body on page
        // moreToast()
    })
}

function moreToast() {

    var newElement = document. createElement("div"); newElement. innerHTML = ``

    const toastLiveExample = document.getElementById('liveToast')
    const toast = new bootstrap.Toast(toastLiveExample)

    toast.show()
}