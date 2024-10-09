// default Tab - Weight
var currentTabText = "weight";

// Tab select - onClick
function showTab(tabId) {
  var currentTab = document.getElementById(currentTabText);
  var selected = document.getElementById(tabId);
  if (selected.classList.contains("hidden")) {
    currentTab.classList.add("hidden");
    selected.classList.remove("hidden");

    currentTabText = tabId;
    console.log(currentTabText);
  } else {
    console.log(currentTab + "hidden");
  }
}

function Input() {
  let inputElement;
  if (currentTabText === "distance") {
    inputElement = document.querySelector("#inputDataDistance");
  } else if (currentTabText === "weight") {
    inputElement = document.querySelector("#inputDataWeight");
  } else if (currentTabText === "temperature") {
    inputElement = document.querySelector("#inputDataTemp");
  }

  const inputData = inputElement.value;
  const isValid = /^[0-9.,]+$/.test(inputData);

  if (!isValid) {
    alert("Please enter numbers and commas only.");
    return;
  }
  const userInput = inputData.split(",");
  return userInput;
}

var userInput;
function handleInput() {
  userInput = Input();
  const convertedData = document.createElement("p");

  if (currentTabText === "distance") {
    convertedData.innerHTML = convertDistance(userInput);
    document.getElementById("resultsDistance").appendChild(convertedData);
  } else if (currentTabText === "weight") {
    convertedData.innerHTML = convertWeight(userInput);
    document.getElementById("resultsWeight").appendChild(convertedData);
  } else if (currentTabText === "temperature") {
    convertedData.innerHTML = convertTemp(userInput);
    document.getElementById("resultsTemp").appendChild(convertedData);
  }
}
var isKmToMi;
function handleMi() {
  isKmToMi = false;
}
function handleKm() {
  isKmToMi = true;
}

var isKgToLbs;

function handleKg() {
  isKgToLbs = true;
}

function handleLb() {
  isKgToLbs = false;
}

var isCtoF;
function handleC() {
  isCtoF = true;
}

function handleF() {
  isCtoF = false;
}

const KilometersToMiles = (input) => input / 1.6;
const MilesToKilometers = (input) => input * 1.6;

const convertDistance = (userInput) => {
  var convertedArray = [];
  if (isKmToMi) {
    convertedArray = userInput.map((element) => KilometersToMiles(element));
  } else {
    convertedArray = userInput.map((element) => MilesToKilometers(element));
  }

  return convertedArray;
};

// just use the same pattern as convertDistance from convertWeight & convertTemp

function convertWeight() {
  console.log("From Weight Function" + userInput);
}

function convertTemp() {
  console.log("From Temperature Function" + userInput);
}
