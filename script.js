
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
// function convertDistance {
//     console.log('distance')
// };

// Convert Temperature
// function convertTemperature {
//     console.log('temperature')
// };

