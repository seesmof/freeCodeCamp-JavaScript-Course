import "/index.css";

// COMMENTS
// JavaScript is awesome!
/* JavaScript is awesome! */

// VARIABLES
var inputBox = document.getElementById("variables-alert-input-box");
var variablesSubmitButton = document.getElementById(
  "variables-alert-submit-button"
);
variablesSubmitButton.addEventListener("click", function () {
  let inputBoxValue = inputBox.value;
  if (inputBoxValue === "") {
    alert("Whoops... You didn't enter anything");
    return;
  }
  let outputText = "You just said:  " + inputBoxValue;
  alert(outputText);
  inputBox.value = "";
});

var myName;

// ASSIGNMENTS

// calculations are performed before the variable is assigned with the value

var a;
a = 7;
let numberOutputParagraph = document.querySelector("#assignment-number");
numberOutputParagraph.innerHTML = numberOutputParagraph.innerHTML.replace(
  "_",
  '<span class="font-medium">_</span>'
);
numberOutputParagraph.innerHTML = numberOutputParagraph.innerHTML.replaceAll(
  "_",
  a
);

// Assigning the Value of One Variable to Another

var a;
a = 7;
var b;
b = a;

let firstNumber = document.querySelector("#assignments-first-num-input-box");
let secondNumber = document.querySelector("#assignments-second-num-input-box");
let assignmentsSubmitButton = document.querySelector(
  "#assignments-submit-button"
);
assignmentsSubmitButton.addEventListener("click", function () {
  let firstNumberValue = firstNumber.value;
  let secondNumberValue = secondNumber.value;
  if (firstNumberValue === "" || secondNumberValue === "") {
    alert("Whoops... You didn't enter anything");
    return;
  } else if (isNaN(firstNumberValue) || isNaN(secondNumberValue)) {
    alert("Whoops... You didn't enter a number");
    return;
  }
  let resultingNumber =
    parseInt(firstNumberValue) + parseInt(secondNumberValue);
  let outputText =
    firstNumberValue + " + " + secondNumberValue + " = " + resultingNumber;
  alert(outputText);
  firstNumber.value = "";
  secondNumber.value = "";
});

// Initializing Variables with the Assignment Operator
