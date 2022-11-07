import createView from "../createView.js"
import {BACKEND_PATCH_OPTIONS,isRegistered, setLoggedInUserInfo} from "../auth.js";


let currentTab = 0; // Current tab is set to be the first tab (0)

export default function Register(props) {

    if(isRegistered()){
        createView("/meals");
        return ""
    } else {
        return `
<form id="regForm" action="">

<h1>Register:</h1>

<!-- One "tab" for each step in the form: -->
<div class="tab justify-content-evenly">
    <input type="text" class="form-control" id="inputHeight" style="text-align:center;margin:20px;" placeholder="Height">
    <input type="text" class="form-control" id="inputWeight" style="text-align:center;margin:20px;" placeholder="Weight">
</div>


<div class="tab">
    <select type="text" id="inputDietType" style="text-align:center;margin:20px;" class="form-control">
        <label>Diet Type</label>
            <option selected value="no diet">No Diet</option>
            <option>Ketogenic</option>
            <option>Paleo</option>
            <option>Pescetarian</option>
            <option>Primal</option>
            <option>Vegan</option>
            <option>Vegetarian</option>
            <option>Lacto-Vegetarian</option>
            <option>Ovo-Vegetarian</option>          
    </select>  
    <select type="text" id="inputActivityLevel" style="text-align:center;margin:20px;" class="form-control">
        <label>Activity Level</label>
            <option value="sedentary" selected>Sedentary</option>
            <option value="light">Light</option>
            <option value="moderate">Moderate</option>
            <option value="high">High</option>
    </select>
</div>
<div class="tab">
    <input type="text" class="form-control" id="inputProtein" style="text-align:center;margin:20px;" placeholder="Protein Goal">
    <input type="text" class="form-control" id="inputCarbs" style="text-align:center;margin:20px;" placeholder="Carb Goal">
    <input type="text" class="form-control" id="inputFat" style="text-align:center;margin:20px;" placeholder="Fat Goal">
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

    showTab(currentTab); // Display the current tab
    const prevBtn = document.querySelector("#prevBtn")
    prevBtn.addEventListener("click",function (){
        nextPrev(-1)})
    const nextBtn = document.querySelector("#nextBtn")
    nextBtn.addEventListener("click",function (){
        nextPrev(1)})
}


async function submitRegistration() {
        const height = document.querySelector("#inputHeight").value;
        const weight = document.querySelector("#inputWeight").value;
        const activityLevel = document.querySelector("#inputActivityLevel").value;
        const diet = document.querySelector("#inputDietType").value;
        let calorieGoal = document.querySelector("#inputCalories").value;
        let proteinGoal = document.querySelector("#inputProtein").value;
        let carbGoal = document.querySelector("#inputCarbs").value;
        let fatGoal = document.querySelector("#inputFat").value;
        let newUser = {height, weight, activityLevel, diet, calorieGoal, proteinGoal, carbGoal, fatGoal}
        console.log(newUser);
        const url = `${USER_API_BASE_URL}/updateUser`;
        await fetch(url, BACKEND_PATCH_OPTIONS(newUser))
            .then(response => {
                console.log(response.status);
                setLoggedInUserInfo();
                createView("/meals");
            })
}

