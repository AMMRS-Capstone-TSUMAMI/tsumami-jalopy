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
<div class="form-tab">Name:
                        <label for="inputBirthday">Birthday</label>
                    <input type="text" class="form-control" id="inputBirthday" placeholder="MM/DD/YYY">
  <p><input placeholder="Last name..." oninput="this.className = ''"></p>
</div>

<!--                  <div class="form-row">-->
<!--                        <label for="inputBirthday">Birthday</label>-->
<!--                    <input type="text" class="form-control" id="inputBirthday" placeholder="MM/DD/YYY">-->
<!--                    </div>-->

<div class="tab">Contact Info:
  <p><input placeholder="E-mail..." oninput="this.className = ''"></p>
  <p><input placeholder="Phone..." oninput="this.className = ''"></p>
</div>

<div class="tab">Birthday:
  <p><input placeholder="dd" oninput="this.className = ''"></p>
  <p><input placeholder="mm" oninput="this.className = ''"></p>
  <p><input placeholder="yyyy" oninput="this.className = ''"></p>
</div>

<div class="tab">Login Info:
  <p><input placeholder="Username..." oninput="this.className = ''"></p>
  <p><input placeholder="Password..." oninput="this.className = ''"></p>
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
</div>

</form>










<!--&lt;!&ndash;                    //FORM #1&ndash;&gt;-->
<!--                <h1 class="h3 mb-3 font-weight-normal">Personal Info</h1>-->
<!--                <form>-->
<!--&lt;!&ndash;                  //birthday input&ndash;&gt;-->
<!--                  <div class="form-row">-->
<!--                    <div class="form-group col-md-6">-->
<!--                        <label for="inputBirthday">Birthday</label>-->
<!--                    <input type="text" class="form-control" id="inputBirthday" placeholder="MM/DD/YYY">-->
<!--                    </div>-->
<!--&lt;!&ndash;                    //gender input &ndash;&gt;-->
<!--                  <div class="form-row">-->
<!--                    <div class="form-group col-md-6">-->
<!--                        <label for="inputGender">Gender</label>-->
<!--                    <select id="inputGender" class="form-control">-->
<!--                        <option selected>Choose...</option>-->
<!--                        <option>Male</option>-->
<!--                        <option>Female</option>-->
<!--                        <option>Other</option>-->
<!--                        </select>-->
<!--                    </div>-->
<!--&lt;!&ndash;                    //height input&ndash;&gt;-->
<!--                    <div class="form-row">-->
<!--                    <div class="form-group col-md-6">-->
<!--                        <label for="inputHeight">Height</label>-->
<!--                    <input type="text" class="form-control" id="inputHeight" placeholder="Height">-->
<!--                    </div>-->
<!--&lt;!&ndash;                    //weight input&ndash;&gt;-->
<!--                    <div class="form-row">-->
<!--                    <div class="form-group col-md-6">-->
<!--                        <label for="inputWeight">Weight</label>-->
<!--                    <input type="text" class="form-control" id="inputWeight" placeholder="Weight">-->
<!--                    </div>-->
<!--&lt;!&ndash;                    //submit button&ndash;&gt;-->
<!--                     <button type="submit" class="btn btn-primary">Submit</button>-->
<!--                    </div>-->
<!--                    </div>-->
<!--                  </form>-->
<!--                  </div>-->
<!--                   </div>-->
<!--                </div>-->
<!--                </div>-->
<!--                  -->
<!--                  -->
<!--&lt;!&ndash;                //FORM #2&ndash;&gt;-->
<!--                 <h1 class="h3 mb-3 font-weight-normal">Restrictions</h1>-->
<!--                <form>-->
<!--&lt;!&ndash;                  //allergies input&ndash;&gt;-->
<!--                     <div class="form-row">-->
<!--                    <div class="form-group col-md-6">-->
<!--                        <label for="inputAllergies">Allergies</label>-->
<!--                    <input type="text" class="form-control" id="inputAllergies" placeholder="Allergies">-->
<!--                    </div>-->
<!--&lt;!&ndash;                    //dietary restrictions input&ndash;&gt;-->
<!--                     <div class="form-row">-->
<!--                    <div class="form-group col-md-6">-->
<!--                        <label for="inputRestrictions">Restrictions</label>-->
<!--                    <input type="text" class="form-control" id="inputRestrictions" placeholder="Restrictions">-->
<!--                    </div>-->
<!--&lt;!&ndash;                    //food preferences input&ndash;&gt;-->
<!--                    <div class="form-row">-->
<!--                    <div class="form-group col-md-6">-->
<!--                        <label for="inputPreferences">Preferences</label>-->
<!--                    <input type="text" class="form-control" id="inputPreferences" placeholder="Preferences">-->
<!--                    </div>-->
<!--&lt;!&ndash;                    //other input&ndash;&gt;-->
<!--                     <div class="form-row">-->
<!--                    <div class="form-group col-md-6">-->
<!--                        <label for="inputOther">Other</label>-->
<!--                    <input type="text" class="form-control" id="inputOther" placeholder="Other">-->
<!--                    </div>-->
<!--&lt;!&ndash;                    //submit button&ndash;&gt;-->
<!--                   <button type="submit" class="btn btn-primary">Submit</button>-->
<!--                  </div>-->
<!--                    </div>-->
<!--                  </form>-->
<!--                  </div>-->
<!--                </div>-->
<!--                </div>-->
<!--               -->
<!--                   -->
<!--                  -->
<!--&lt;!&ndash;                //FORM #3&ndash;&gt;-->
<!--                 <h1 class="h3 mb-3 font-weight-normal">Fitness Level & Weight Goals</h1>-->
<!--                <form>-->
<!--&lt;!&ndash;                    //fitness level input&ndash;&gt;-->
<!--                      <div class="form-row">-->
<!--                    <div class="form-group col-md-6">-->
<!--                        <label for="inputFitnessLevel">Fitness Level</label>-->
<!--                    <input type="text" class="form-control" id="inputFitnessLevel" placeholder="Fitness Level">-->
<!--                    </div>-->
<!--&lt;!&ndash;                    //weight goals input&ndash;&gt;-->
<!--                       <div class="form-row">-->
<!--                    <div class="form-group col-md-6">-->
<!--                        <label for="inputWeightGoal">Weight Goal</label>-->
<!--                    <input type="text" class="form-control" id="inputWeightGoal" placeholder="Weight Goal">-->
<!--                    </div>-->
<!--&lt;!&ndash;                    //submit button&ndash;&gt;-->
<!--                  <button type="submit" class="btn btn-primary">Submit</button>-->
<!--                  </div>-->
<!--                    </div>-->
<!--                  </form>-->
<!--                  </div>-->
<!--                  -->
<!--                   &lt;!&ndash;                //FORM #4&ndash;&gt;-->
<!--                 <h1 class="h3 mb-3 font-weight-normal">Restrictions</h1>-->
<!--                <form>    -->
<!--&lt;!&ndash;                body type input&ndash;&gt;-->
<!--                   <div class="form-row">-->
<!--                    <div class="form-group col-md-6">-->
<!--                        <label for="inputBodyType">Body Type</label>-->
<!--                    <select id="inputBodyType" class="form-control">-->
<!--                        <option selected>Choose...</option>-->
<!--                        <option>Ectomorph</option>-->
<!--                        <option>Endomorph</option>-->
<!--                        <option>Mesomorph</option>-->
<!--                        </select>-->
<!--                    </div>-->
<!--&lt;!&ndash;                    diet type input&ndash;&gt;-->
<!--                    <div class="form-row">-->
<!--                    <div class="form-group col-md-6">-->
<!--                        <label for="inputDietType">Body Type</label>-->
<!--                    <select id="inputDietType" class="form-control">-->
<!--                        <option selected>Choose...</option>-->
<!--                        <option>Paleo</option>-->
<!--                        <option>Keto</option>-->
<!--                        <option>Anything Else</option>-->
<!--                        </select>-->
<!--                    </div>-->
<!--&lt;!&ndash;                    any other diet&ndash;&gt;-->
<!--                     <div class="form-row">-->
<!--                    <div class="form-group col-md-6">-->
<!--                        <label for="inputOtherDiet">Other Diet</label>-->
<!--                    <input type="text" class="form-control" id="inputOtherDiet" placeholder="Other Diet">-->
<!--                    </div>-->
<!--                -->
<!--&lt;!&ndash;                #FORM #5&ndash;&gt;-->
<!--                 <h1 class="h3 mb-3 font-weight-normal">Recommended Calories/Macros</h1>-->
<!--                <form>-->
<!--&lt;!&ndash;                    //calories information&ndash;&gt;-->
<!--                      <div class="form-row">-->
<!--                    <div class="form-group col-md-6">-->
<!--                        <label for="inputCalories">Calories</label>-->
<!--                    <input type="text" class="form-control" id="inputCalories" placeholder="Calories">-->
<!--                    </div>-->
<!--&lt;!&ndash;                    //protein input&ndash;&gt;-->
<!--                      <div class="form-row">-->
<!--                    <div class="form-group col-md-6">-->
<!--                        <label for="inputProtein">Protein</label>-->
<!--                    <input type="text" class="form-control" id="inputProtein" placeholder="Protein">-->
<!--                    </div>-->
<!--&lt;!&ndash;                    //carbs input&ndash;&gt;-->
<!--                     <div class="form-row">-->
<!--                    <div class="form-group col-md-6">-->
<!--                        <label for="inputCarbs">Carbs</label>-->
<!--                    <input type="text" class="form-control" id="inputCarbs" placeholder="Carbs">-->
<!--                    </div>-->
<!--&lt;!&ndash;                    //fat input&ndash;&gt;-->
<!--                      <div class="form-row">-->
<!--                    <div class="form-group col-md-6">-->
<!--                        <label for="inputFat">Fat</label>-->
<!--                    <input type="text" class="form-control" id="inputFat" placeholder="Fat">-->
<!--                    </div>-->
<!--&lt;!&ndash;                    //submit button&ndash;&gt;-->
<!--                  <button type="submit" class="btn btn-primary">Submit</button>-->
<!--                  </div>-->
<!--                    </div>-->
<!--                  </form>-->
<!--                  </div>-->
<!--                  </div>-->
<!--                </div>-->
<!--            -->


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