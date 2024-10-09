
// default Tab - Weight
var currentTabText = 'weight';

// Tab select - onClick
function showTab(tabId) {
    var currentTab = document.getElementById(currentTabText);
    var selected = document.getElementById(tabId)
        if (selected.classList.contains('hidden')) {
            currentTab.classList.add('hidden')
            selected.classList.remove('hidden')

            currentTabText = tabId;
            console.log(currentTabText)
        } else {
            console.log(currentTab + 'hidden')
            
        }
}

// Submit Button 
// function submitBtn {
//     console.log('submit')
//  1. Gathers all information and converts it and checks for errors
// }

// Convert Weight
const KgToLbs = input => input * 2.20462;
const LbsToKg = input => input / 2.20462;

function convertWeight() {
    // Get user input from the number field (assuming only one value for simplicity)
    const weightInput = parseFloat(document.querySelector('input[type="number"]').value);
    if (isNaN(weightInput)) {
        alert("Please enter a valid number for weight.");
        return;
    }

    // Check which radio button is selected
    const selectedConversion = document.querySelector('input[name="tabsW"]:checked').value;

    let convertedValue = 0;

    // Apply conversion based on the selected radio button
    if (selectedConversion === "kg") {
        convertedValue = KgToLbs(weightInput);
    } else if (selectedConversion === "lb") {
        convertedValue = LbsToKg(weightInput);
    }

    // Display the result on the page
    const resultsSection = document.getElementById('results');
    resultsSection.innerHTML = `<p>Converted Value: ${convertedValue.toFixed(2)}</p>`;
    console.log(`Converted Value: ${convertedValue}`);
}

// Attach the convertWeight function to the submit button in the weight tab
document.querySelector('#WeightSubmission button').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent form from submitting
    convertWeight();
});


// Convert Distance
// Mock data:
var userInput = [26, 10, 50, -40]; // Seems simplest to make the user input an array of numbers; even if it's one value

var isKmToMi = true; // if set to km → mi (if mi → km set to false) ("is Kilometers To Miles")

// Formulas
const KilometersToMiles = input => input / 1.6;
const MilesToKilometers = input => input * 1.6;

// Conversion: takes in user input array → Goes through each index, converts them based on if isKmToMi is 'true' or 'false'
//      (map instead of forEach - because map is "ideal when you need to transform data and get a new array as the output")
const convertDistance = (userInput) => {
    var convertedArray = [];
    if (isKmToMi) {
        convertedArray = userInput.map(element => KilometersToMiles(element));
    } else {
        convertedArray = userInput.map(element => MilesToKilometers(element));
    }
    return convertedArray;
};

const convertedData = document.createElement("p");
convertedData.innerHTML = convertDistance(userInput);
document.getElementById('results').appendChild(convertedData);
console.log(convertDistance(userInput));

// Convert Temperature
// function convertTemperature {
//     console.log('temperature')
// };

