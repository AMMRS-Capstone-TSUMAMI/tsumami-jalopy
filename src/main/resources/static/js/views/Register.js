import createView from "../createView.js"
import {getHeaders, isRegistered, setLoggedInUserInfo} from "../auth.js";


let currentTab = 0; // Current tab is set to be the first tab (0)

export default function Register(props) {

    if(isRegistered()){
        createView("/meals");
        return ""
    }
    return `


<form id="regForm" action="">

<h1>Register:</h1>

<!-- One "tab" for each step in the form: -->
<div class="tab justify-content-evenly">
<label>Height</label>
<input type="text" class="form-control" id="inputHeight" style="text-align:center;margin:20px;" placeholder="Height">
<label>Weight</label>
<input type="text" class="form-control" id="inputWeight" style="text-align:center;margin:20px;" placeholder="Weight">
</div>


<div class="tab">
<label>Diet Type</label>
                    <select type="text" id="inputDietType" style="text-align:center;margin:20px;" class="form-control">
                  
                        <option selected>Choose...</option>
                        <option>Paleo</option>
                        <option>Keto</option>
                        <option>Vegan</option>
                        </select>

<label>Activity Level</label>
                     <select type="text" id="inputActivityLevel" style="text-align:center;margin:20px;" class="form-control">
                     
                        <option selected>Choose...</option>
                        <option>Sedentary</option>
                        <option>Mildly Active</option>
                        <option>Active</option>
                        </select>
</div>


<div class="tab">
<label>Protein Goal</label>
<input type="text" class="form-control" id="inputProtein" style="text-align:center;margin:20px;" placeholder="Protein Goal">
<label>Carb Goal</label>
<input type="text" class="form-control" id="inputCarbs" style="text-align:center;margin:20px;" placeholder="Carb Goal">
<label>Fat Goal</label>
<input type="text" class="form-control" id="inputFat" style="text-align:center;margin:20px;" placeholder="Fat Goal">
<label>Calorie Goal</label>
<input type="text" class="form-control" id="inputCalories" style="text-align:center;margin:20px;" placeholder="Calorie Goal">
</div>

<div style="overflow:auto;">
<div style="float:right;">
<button type="button" class="button" id="prevBtn">Previous</button>
<button type="button" class="button" id="nextBtn">Next</button>
</div>
</div>

<!-- Circles which indicates the steps of the form: -->
<div style="text-align:center;margin-top:40px;">
  <span class="step"></span>
  <span class="step"></span>
  <span class="step"></span>
</div>

</form>



`;
}

function showTab(n) {
    // This function will display the specified tab of the form ...
    let x = document.getElementsByClassName("tab");
    // console.log(x[n]);
    if (!x[n]) {
        return;
    }
    x[n].style.display = "block";
    // ... and fix the Previous/Next buttons:
    if (n === 0) {
        document.getElementById("prevBtn").style.display = "none";
    } else {
        document.getElementById("prevBtn").style.display = "inline";
    }
    if (n === (x.length - 1)) {
        document.getElementById("nextBtn").innerHTML = "Submit";

        }else {
        document.getElementById("nextBtn").innerHTML = "Next";
    }
    // ... and run a function that displays the correct step indicator:
    if
        (document.getElementById("nextBtn").innerHTML === "Submit") {
    // submitRegistration();
    }
    fixStepIndicator(n)


}

function nextPrev(n) {

    // console.log("n")
    // This function will figure out which tab to display
    const x = document.getElementsByClassName("tab");
    console.log(x[currentTab]);
    // Exit the function if any field in the current tab is invalid:
    if (n === 1 && !validateForm()) return false;
    // Hide the current tab:
    x[currentTab].style.display = "none";
    // Increase or decrease the current tab by 1:
    currentTab = currentTab + n;
    // if you have reached the end of the form... :
    // if (currentTab >= x.length) {
    //     //...the form gets submitted:
    //     document.getElementById("regForm").submit();
    //     return false;
    // }
    // Otherwise, display the correct tab:
    if
    ( n === 1 &&
        document.getElementById("nextBtn").innerHTML === "Submit") {
        submitRegistration();
        return
    }
    showTab(currentTab);
}

function validateForm() {
    // This function deals with validation of the form fields
    var x, y, i, valid = true;
    x = document.getElementsByClassName("tab");
    if (! x[currentTab]){
        return true;
    }
    y = x[currentTab].getElementsByTagName("input");
    // A loop that checks every input field in the current tab:
    for (i = 0; i < y.length; i++) {
        // If a field is empty...
        if (y[i].value === "") {
            // add an "invalid" class to the field:
            y[i].className += " invalid";
            // and set the current valid status to false:
            valid = false;
        }
    }
    // If the valid status is true, mark the step as finished and valid:
    if (valid) {
        document.getElementsByClassName("step")[currentTab].className += " finish";
    }
    return valid; // return the valid status
}

function fixStepIndicator(n) {
    // This function removes the "active" class of all steps...
    let i, x = document.getElementsByClassName("step");
    for (i = 0; i < x.length; i++) {
        x[i].className = x[i].className.replace(" active", "");
    }
    //... and adds the "active" class to the current step:
    x[n].className += " active";
}

export function RegisterEvent(){
    //button from prev code wasn't working used test and functional
    // testButtonListener();
    showTab(currentTab); // Display the current tab
    const prevBtn = document.querySelector("#prevBtn")
    prevBtn.addEventListener("click",function (){
        nextPrev(-1)})
    const nextBtn = document.querySelector("#nextBtn")
    nextBtn.addEventListener("click",function (){
        nextPrev(1)})

    //this if statement wasn't working
    // if (currentTab === 5){
    //     const submitBtn = document.querySelector("#nextBtn")
    //     submitBtn.addEventListener("click",function (){
    //         console.log("is this thing on?")
    //         nextPrev(1)})

    // const registerButton = document.querySelector("#register-btn");
    // registerButton.addEventListener("click", function() {
}


function submitRegistration() {
    // let testBtn = document.querySelector("#test")
    // let lastTab = document.querySelector("#lastTab")
    // if()
    // document.getElementById("nextBtn").addEventListener("click", function (event) {
        console.log("our function for testbtn")



        const heightField = document.querySelector("#inputHeight");
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
        let newUser = {
            height: heightField.value,
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
        console.log(newUser);
        let request = {
            method: "PATCH",
            headers: getHeaders(),
            body: JSON.stringify(newUser)
        }
            //changed endpoint name
        fetch(USER_API_BASE_URL + "/updateUser", request)
            .then(response => {
                console.log(response.status);
                setLoggedInUserInfo();
                createView("/meals");
            })
    // })
}

