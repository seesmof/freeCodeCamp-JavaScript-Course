import "/index.css";

// COMMENTS
// JavaScript is awesome!
/* JavaScript is awesome! */

// VARIABLES
let sectionHeading = document.querySelector(".section-heading");
let sectionHeadingText = "# " + sectionHeading.textContent;
sectionHeading.innerHTML = sectionHeadingText;

var inputBox = document.getElementById("variables-alert-input-box");
var submitButton = document.getElementById("variables-alert-submit-button");
submitButton.addEventListener("click", function () {
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
// calculations are performed before the variable is assigned with the value

// Setup
var a;

// Only change code below this line
a = 7;
