import "/index.css";

// COMMENTS
// JavaScript is awesome!
/* JavaScript is awesome! */

// VARIABLES
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
