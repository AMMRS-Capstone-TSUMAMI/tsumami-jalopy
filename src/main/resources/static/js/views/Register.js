import createView from "../createView.js"
import {isRegistered} from "../auth.js";




export default function Register(props) {

    if(isRegistered()){
        createView("/meals");
        return;
    }

    return `


<form id="regForm" action="">

<h1>Register:</h1>

<!-- One "tab" for each step in the form: -->
<label for="inputHeight">Height</label>
<input type="text" class="form-control" id="inputHeight" placeholder="Height">
<label for="inputWeight">Height</label>
<input type="text" class="form-control" id="inputWeight" placeholder="Weight">
</div>

<div class="tab">Restrictions & Preferences:
<label for="inputAllergies">Allergies</label>
<input type="text" class="form-control" id="inputAllergies"  placeholder="Allergies">
<label for="inputRestrictions">Restrictions</label>
<input type="text" class="form-control" id="inputRestrictions" placeholder="Restrictions">
<label for="inputPreferences">Preferences</label>
<input type="text" class="form-control" id="inputPreferences" placeholder="Preferences">
</div>

<div class="tab">Fitness Level & Weight Goals:
<label for="inputFitnessLevel">Fitness Level</label>
<input type="text" class="form-control" id="inputFitnessLevel" placeholder="Fitness Level">
<label for="inputWeightGoal">Weight Goal</label>
<input type="text" class="form-control" id="inputWeightGoal" placeholder="Weight Goal">
</div>

<div class="tab">Body Type & Diet Type:
<label for="inputBodyType">Body Type</label>
<input type="text" class="form-control" id="inputBodyType" placeholder="Body Type">
<label for="inputDietType">Diet Type</label>
<input type="text" class="form-control" id="inputDietType" placeholder="Diet Type">
</div>

<div class="tab">Recommended Values:
<label for="inputCalories">Calories</label>
<input type="text" class="form-control" id="inputCalories" placeholder="Calories">
<label for="inputProtein">Protein</label>
<input type="text" class="form-control" id="inputProtein" placeholder="Protein">
<label for="inputCarbs">Carbs</label>
<input type="text" class="form-control" id="inputCarbs" placeholder="Carbs">
<label for="inputFat">Fat</label>
<input type="text" class="form-control" id="inputFat" placeholder="Fat">
</div>

<div style="overflow:auto;">
<div style="float:right;">
<button type="button" id="prevBtn" onclick="nextPrev(-1)">Previous</button>
<button type="button" id="nextBtn" onclick="nextPrev(1)">Next</button>
</div>
</div>

<!-- Circles which indicates the steps of the form: -->
<div style="text-align:center;margin-top:40px;">
  <span class="step"></span>
  <span class="step"></span>
  <span class="step"></span>
  <span class="step"></span>
  <span class="step"></span>
</div>

</form>

`;
}

let currentTab = 0; // Current tab is set to be the first tab (0)
showTab(currentTab); // Display the current tab

function showTab(n) {
    // This function will display the specified tab of the form ...
    let x = document.getElementsByClassName("tab");
    console.log(x[n]);
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
    } else {
        document.getElementById("nextBtn").innerHTML = "Next";
    }
    // ... and run a function that displays the correct step indicator:
    fixStepIndicator(n)
}

function nextPrev(n) {
    // This function will figure out which tab to display
    const x = document.getElementsByClassName("tab");
    // Exit the function if any field in the current tab is invalid:
    if (n === 1 && !validateForm()) return false;
    // Hide the current tab:
    x[currentTab].style.display = "none";
    // Increase or decrease the current tab by 1:
    currentTab = currentTab + n;
    // if you have reached the end of the form... :
    if (currentTab >= x.length) {
        //...the form gets submitted:
        document.getElementById("regForm").submit();
        return false;
    }
    // Otherwise, display the correct tab:
    showTab(currentTab);
}

function validateForm() {
    // This function deals with validation of the form fields
    let x, y, i, valid = true;
    x = document.getElementsByClassName("tab");
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
    const registerButton = document.querySelector("#register-btn");
    registerButton.addEventListener("click", function(event) {

        const usernameField = document.querySelector("#username");
        const emailField = document.querySelector("#email");
        const passwordField = document.querySelector("#password");

        let newUser = {
            username: usernameField.value,
            email: emailField.value,
            password: passwordField.value
        }

        // console.log(newUser);

        let request = {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(newUser)
        }

        fetch(USER_API_BASE_URL + "/create", request)
            .then(response => {
                console.log(response.status);
                CreateView("/");
            })

    })
}