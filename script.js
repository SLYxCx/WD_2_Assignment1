
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

