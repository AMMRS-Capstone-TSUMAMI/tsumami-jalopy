//sedentary: little to no exercise
//light: light exercise/sports 1-3 days per week
//moderate: moderate exercise/sports 3-5 days per week
//high: intense exercise/sports 6-7 days per week
const activityFactor = {
    sedentary: 1.2,
    light: 1.375,
    moderate: 1.55,
    high: 1.725,
}
const macroAllocations = {
    ectomorph: {
        fat: .2,
        carbs: .55,
        protein: .25
    },
    mesomorph: {
        fat: 3,
        carbs: .4,
        protein: .3
    },
    endomorph: {
        fat: .4,
        carbs: .25,
        protein: .35
    }
}

//calculate calorie recommendations based on Mifflin St Jeor equation: P = 10m + 6.25h + 5a + s
function calculateCalorieRecommendation(gender, weight, height, age, activityLevel) {
    const m = weight * 2.205 * 10;
    const h = height * 2.54 * 6.25;
    const a = age * 5
    const aF = activityFactor[activityLevel]
    const s = gender === 'male' ? 5 : -161;
    return (m + h + a + s) * aF;

}

function calculateMacrosInGrams(calories, macroAllocation) {
    return {
        fat: calories * macroAllocation.fat / 9,
        carbs: calories * macroAllocation.carbs / 4,
        protein: calories * macroAllocation.protein / 4
    }
}

//fetch that returns json
async function fetchJSON(url, request) {
    return await fetch(url, request)
        .then(function(response) {
            if(!response.ok) {
                console.log(response.status);
            } else {
                return response.json()
            }
        }).then(function(data) {
            return data
        })
}
//fetch that returns text
async function fetchText(url, request) {
    await fetch(url, request)
        .then(function(response) {
            if(!response.ok) {
                console.log(`fetch returned status code: ${response.status}`);
                console.log(response.statusText);
            } else {
                return response.text()
            }
        })
}

//method adds or subtracts days from a Date object
Date.prototype.addDays = function(days) {
    let date = new Date(this.valueOf());
    date.setDate(date.getDate() + days);
    return date;
}

//method converts Date object to YYYY-MM-DD format
Date.prototype.ISO = function() {
    let date = new Date(this.valueOf());
    date = `${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()}`
    return date;
}
