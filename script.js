
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
// function convertWeight(submit) {
//     console.log('weight') // placeholder
//     /*
//   
//     
//     3. For each → convert values
//          Based on radio selection
//     4. Output (console.log to test it's working)
//     5. Add element to the page to display outputs
//     */
// };

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

