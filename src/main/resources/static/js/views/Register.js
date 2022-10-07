import CreateView from "../createView.js"
import {isLoggedIn} from "../auth.js";
import createView from "../createView.js";




export default function Register(props) {

    if(isLoggedIn()){
        createView("/");
        return;
    }

    return `

<!DOCTYPE html>
<html lang="en">
<head>
  <title>Registration Page</title>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css">
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>
</head>
<body>

<!--                    //FORM #1-->
                <h1 class="h3 mb-3 font-weight-normal">Personal Info</h1>
                <form>
<!--                  //birthday input-->
                  <div class="form-row">
                    <div class="form-group col-md-6">
                        <label for="inputBirthday">Birthday</label>
                    <input type="text" class="form-control" id="inputBirthday" placeholder="MM/DD/YYY">
                    </div>
<!--                    //gender input -->
                  <div class="form-row">
                    <div class="form-group col-md-6">
                        <label for="inputGender">Gender</label>
                    <select id="inputGender" class="form-control">
                        <option selected>Choose...</option>
                        <option>Male</option>
                        <option>Female</option>
                        <option>Other</option>
                        </select>
                    </div>
<!--                    //height input-->
                    <div class="form-row">
                    <div class="form-group col-md-6">
                        <label for="inputHeight">Height</label>
                    <input type="text" class="form-control" id="inputHeight" placeholder="Height">
                    </div>
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
`;
}


export function RegisterEvent(){
    const registerButton = document.querySelector("#register-btn");
    registerButton.addEventListener("click", function(event) {

        const usernameField = document.querySelector("#username");
        const emailField = document.querySelector("#email");
        const passwordField = document.querySelector("#password");

        let newUser = {
            userName: usernameField.value,
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