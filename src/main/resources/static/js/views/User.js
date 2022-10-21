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

    //going thru trophy array and pushing added trophies to it
    for (let trophy of trophies) {
        userTrophiesIds.push(trophy.id)
    }

    for (let chefLevel of chefLevels) {
        userChefLevelsIds.push(chefLevel.id)
    }

    console.log(userTrophiesIds)
    console.log(trophies);
    console.log(chefLevels);

    return `
        <h1>Update Info</h1>
        
       <!--                    //FORM #1-->
<!--                    //weight input-->
                    <form>
                    <div class="form-row">
                    <div class="form-group col-md-6">
                        <label for="inputWeight">Weight</label>
                    <input type="text" class="form-control" id="inputWeight" placeholder="Weight">
                    </div>
                    </div>
                
                  
                  
<!--                    //fitness level input-->
                      <div class="form-row">
                    <div class="form-group col-md-6">
                        <label for="inputActivityLevel">Activity Level</label>
                    <select id="inputActivityLevel" class="form-control">
                        <option selected>Choose...</option>
                        <option>A Little</option>
                        <option>Middle</option>
                        <option>A Ton</option>
                        </select>
                    </div>
                  </div>
                  
 

<!--                    diet type input-->
                    <div class="form-row">
                    <div class="form-group col-md-6">
                        <label for="inputDietType">Diet Type</label>
                    <select id="inputDietType" class="form-control">
                        <option selected>Choose...</option>
                        <option>Paleo</option>
                        <option>Keto</option>
                        <option>Anything Else</option>
                        </select>
                    </div>
                    </div>
                    
                              

<!--                    //calories information-->
                      <div class="form-row">
                    <div class="form-group col-md-6">
                        <label for="inputCalories">Calories Goal</label>
                    <input type="text" class="form-control" id="inputCalories" placeholder="Calorie Goal">
                    </div>
                       </div>
                   
<!--                    //protein input-->
                      <div class="form-row">
                    <div class="form-group col-md-6">
                        <label for="inputProtein">Protein Goal</label>
                    <input type="text" class="form-control" id="inputProtein" placeholder="Protein Goal">
                    </div>
                    </div>
<!--                    //carbs input-->
                     <div class="form-row">
                    <div class="form-group col-md-6">
                        <label for="inputCarbs">Carbs Goal</label>
                    <input type="text" class="form-control" id="inputCarbs" placeholder="Carb Goal">
                    </div>
                    </div>
<!--                    //fat input-->
                      <div class="form-row">
                    <div class="form-group col-md-6">
                        <label for="inputFat">Fat Goal</label>
                    <input type="text" class="form-control" id="inputFat" placeholder="Fat Goal">
                    </div>
                    </div>
<!--                    //submit button-->
                  <button type="submit" id="submitBtn">Submit</button>
                  </form>
            
  </body>
</html>
<!--    working on achievement displays-->
        <div class="container-fluid achievement-background">
            <h2 class="underline achievement-header">My Achievements</h2>
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
                    
                        <div class="card trophy-card trophy-earned m-2 tt" data-bs-placment="bottom" data-bs-title=${JSON.stringify(currentTrophy.description)} data-desc=${currentTrophy.description.replace(/\s/g , "-")}>
                          <div class="card-body">
                            <img src="/img/earnedTrophy.png" class="trophy-icon"> 
                          </div>
                          <div class="card-body">
                            <h6 class="trophy-title text-center">${currentTrophy.title}</h6>
                          </div>
                        </div>      
          `
    }
    return `<div class="card trophy-card trophy-unearned m-2 tt" data-bs-title=${JSON.stringify(currentTrophy.description)} data-desc=${currentTrophy.description.replace(/\s/g , "-")}>
                    <div class="trophy-unearned-overlay">
                      <div class="card-body">
                        <img src="/img/newunearned.png" class="trophy-icon"> 
                      </div>
                      <div class="card-body">
                        <h6 class="trophy-title text-center">${currentTrophy.title}</h6>
                      </div>
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
        // const allergiesField = document.querySelector("#inputAllergies");
        // const restrictionsField = document.querySelector("#inputRestrictions");
        // const preferencesField = document.querySelector("#inputPreferences");
        const activityLevelField = document.querySelector("#inputActivityLevel");
        // const weightGoalField = document.querySelector("#inputWeightGoal");
        // const bodyTypeField = document.querySelector("#inputBodyType");
        const dietTypeField = document.querySelector("#inputDietType");
        const caloriesField = document.querySelector("#inputCalories");
        const proteinField = document.querySelector("#inputProtein");
        const carbsField = document.querySelector("#inputCarbs");
        const fatField = document.querySelector("#inputFat");
        // changed names of fields to match database
        let updateUser = {
            // height: heightField.value,
            weight: weightField.value,
            // allergies: allergiesField.value,
            // restrictions: restrictionsField.value,
            // preferences: preferencesField.value,
            activityLevel: activityLevelField.value,
            // weightGoal: weightGoalField.value,
            // bodyType: bodyTypeField.value,
            diet: dietTypeField.value,
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
                createView("/me");
            })
    })
}


// changed to export to be used elsewhere
export function awardUserATrophy(trophyId) {
    console.log('inside awardUserATrophy function')

    let requestHeader = {
        method: 'PATCH',
        headers: getHeaders()
    }

    fetch('http://localhost:8080/api/users/addTrophy/' + trophyId, requestHeader).then(response => {
        console.log('inside fetch')
        console.log(response)
    }).finally(function (){
        console.log("trophy added successfully")
        //function that will append a toast to the body on page
        // moreToast()
    })
}

// maybe make this an await function
export function checkAndAddTrophy(usersTrophyArray, trophyId) {
    console.log('inside checkAndAddTrophy function')
    for (let i = 0; i < usersTrophyArray.length; i++) {
        if (usersTrophyArray[i].id === trophyId) {
            return;
        }
    }
    awardUserATrophy(trophyId);
}



// function moreToast() {
//
//     var newElement = document. createElement("div"); newElement. innerHTML = ``
//
//     const toastLiveExample = document.getElementById('liveToast')
//     const toast = new bootstrap.Toast(toastLiveExample)
//
//     toast.show()
// }}


