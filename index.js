import "/index.css";

function capitalize(word) {
  return word[0].toUpperCase() + word.substring(1).toLowerCase();
}

// # COMMENTS
{
  // JavaScript is awesome!
  /* JavaScript is awesome! */
}
// # VARIABLES
{
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
}
// # ASSIGNMENTS
{
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
}
// # Assigning the Value of One Variable to Another
{
  var a;
  a = 7;
  var b;
  b = a;

  let firstNumber = document.querySelector("#assignments-first-num-input-box");
  let secondNumber = document.querySelector(
    "#assignments-second-num-input-box"
  );

  function assignmentsResetInputs() {
    firstNumber.value = "";
    secondNumber.value = "";
  }

  let assignmentsResetButton = document.querySelector(
    "#assignments-reset-button"
  );
  assignmentsResetButton.addEventListener("click", function () {
    assignmentsResetInputs();
  });

  let assignmentsDivisionButton = document.querySelector(
    "#assignments-division-button"
  );
  assignmentsDivisionButton.addEventListener("click", function () {
    let firstNumberValue = firstNumber.value;
    let secondNumberValue = secondNumber.value;

    if (firstNumberValue === "" || secondNumberValue === "") {
      alert("Whoops... You didn't enter anything");
      assignmentsResetInputs();
      return;
    } else if (isNaN(firstNumberValue) || isNaN(secondNumberValue)) {
      alert("Whoops... You didn't enter a number");
      assignmentsResetInputs();
      return;
    }

    let resultingNumber =
      parseInt(firstNumberValue) / parseInt(secondNumberValue);
    let outputText =
      firstNumberValue + " / " + secondNumberValue + " = " + resultingNumber;

    alert(outputText);
    assignmentsResetInputs();
  });

  let assignmentsMultiplicationButton = document.querySelector(
    "#assignments-multiplication-button"
  );
  assignmentsMultiplicationButton.addEventListener("click", function () {
    let firstNumberValue = firstNumber.value;
    let secondNumberValue = secondNumber.value;

    if (firstNumberValue === "" || secondNumberValue === "") {
      alert("Whoops... You didn't enter anything");
      assignmentsResetInputs();
      return;
    } else if (isNaN(firstNumberValue) || isNaN(secondNumberValue)) {
      alert("Whoops... You didn't enter a number");
      assignmentsResetInputs();
      return;
    }

    let resultingNumber =
      parseInt(firstNumberValue) * parseInt(secondNumberValue);
    let outputText =
      firstNumberValue + " * " + secondNumberValue + " = " + resultingNumber;

    alert(outputText);
    assignmentsResetInputs();
  });

  let assignmentsSubtractionButton = document.querySelector(
    "#assignments-subtraction-button"
  );
  assignmentsSubtractionButton.addEventListener("click", function () {
    let firstNumberValue = firstNumber.value;
    let secondNumberValue = secondNumber.value;

    if (firstNumberValue === "" || secondNumberValue === "") {
      alert("Whoops... You didn't enter anything");
      assignmentsResetInputs();
      return;
    } else if (isNaN(firstNumberValue) || isNaN(secondNumberValue)) {
      alert("Whoops... You didn't enter a number");
      assignmentsResetInputs();
      return;
    }

    let resultingNumber =
      parseInt(firstNumberValue) - parseInt(secondNumberValue);
    let outputText =
      firstNumberValue + " - " + secondNumberValue + " = " + resultingNumber;

    alert(outputText);
    assignmentsResetInputs();
  });

  let assignmentAdditionButton = document.querySelector(
    "#assignments-addition-button"
  );
  assignmentAdditionButton.addEventListener("click", function () {
    let firstNumberValue = firstNumber.value;
    let secondNumberValue = secondNumber.value;

    if (firstNumberValue === "" || secondNumberValue === "") {
      alert("Whoops... You didn't enter anything");
      assignmentsResetInputs();
      return;
    } else if (isNaN(firstNumberValue) || isNaN(secondNumberValue)) {
      alert("Whoops... You didn't enter a number");
      assignmentsResetInputs();
      return;
    }

    let resultingNumber =
      parseInt(firstNumberValue) + parseInt(secondNumberValue);
    let outputText =
      firstNumberValue + " + " + secondNumberValue + " = " + resultingNumber;

    alert(outputText);
    assignmentsResetInputs();
  });
}
// # Initializing Variables with the Assignment Operator
{
  var a = 9;
}
// # Declare String Variables
{
  var myFirstName = "John";
  var myLastName = "Doe";

  let stringsFirstNameInput = document.querySelector(
    "#string-first-name-input"
  );
  let stringsLastNameInput = document.querySelector("#string-last-name-input");
  let stringsSubmitButton = document.querySelector("#string-submit-button");

  function stringsResetInputs() {
    stringsFirstNameInput.value = "";
    stringsLastNameInput.value = "";
  }

  stringsSubmitButton.addEventListener("click", function () {
    let firstNameValue = stringsFirstNameInput.value;
    let lastNameValue = stringsLastNameInput.value;

    if (firstNameValue === "" || lastNameValue === "") {
      alert("Whoops... You didn't enter anything");
      stringsResetInputs();
      return;
    }

    let outputText =
      "Hello, " +
      capitalize(firstNameValue).replace(/\s+/g, " ").trim() +
      " " +
      capitalize(lastNameValue).replace(/\s+/g, " ").trim() +
      "\nHow are you doing?";
    alert(outputText);
    stringsResetInputs();
  });
}
// # Understanding Uninitialized Variables
{
  var a = 5;
  var b = 10;
  var c = "I am a";

  a = a + 1;
  b = b + 5;
  c = c + " String!";
}
// # Understanding Case Sensitivity in Variables
{
  var studlyCapVar;
  var properCamelCase;
  var titleCaseOver;

  studlyCapVar = 10;
  properCamelCase = "A String";
  titleCaseOver = 9000;
}
// # Explore Differences Between the var and let Keywords
{
  // if you declare a variable with var it can be overwritten without any errors
  // `let` keyword was introduced in ES6 update
  // with let you cannot overwrite existing variables

  var catName = "Oliver";
  var catSound = "Meow!";

  catName = "Luna";
  catSound = "Meow!";

  /*
let catName = "Oliver";
let catSound = "Meow!";

cannot override these now
*/
}
// # Declare a Read-Only Variable with the const Keyword
{
  const FCC = "freeCodeCamp"; // Change this line
  let fact = "is cool!"; // Change this line
  fact = "is awesome!";
  console.log(FCC, fact); // Change this line

  let constsParagraph = document.querySelector("#consts-paragraph");
  constsParagraph.innerHTML = FCC + " " + fact;
}
// # Add Two Numbers with JavaScript
{
  const sum = 10 + 10;
}
// # Subtract One Number from Another with JavaScript
{
  const difference = 45 - 33;
}
// # Multiply Two Numbers with JavaScript
{
  const product = 8 * 10;
}
// # Divide One Number by Another with JavaScript
{
  const quotient = 66 / 33;
}
// # Increment a Number with JavaScript
{
  let myVarIncrement = 87;
  myVarIncrement++;
}
// # Decrement a Number with JavaScript
{
  let myVarDecrement = 11;
  myVarDecrement--;
}
// # Create Decimal Numbers with JavaScript
{
  let decimalsMyDecimal = 3.14;
}
// # Finding a Remainder in JavaScript
{
  const remainder = 11 % 3;
}
{
  // Only change code below this line
  const myName = "Sees";
  const myStr = "My name is " + myName + " and I am well!";
}
{
  // Change code below this line
  const someAdjective = "so much fun!";
  let myStr = "Learning to code is ";
  myStr += someAdjective;
}
{
  // Setup
  let lastNameLength = 0;
  const lastName = "Lovelace";

  // Only change code below this line
  lastNameLength = lastName.length;
}
{
  // Setup
  let firstLetterOfLastName = "";
  const lastName = "Lovelace";

  // Only change code below this line
  firstLetterOfLastName = lastName[0]; // Change this line
}
{
  // Setup
  let myStr = "Jello World";

  // Only change code below this line
  myStr = "Hello World"; // Change this line
  // Only change code above this line
}
{
  // Setup
  const lastName = "Lovelace";

  // Only change code below this line
  const thirdLetterOfLastName = lastName[2]; // Change this line
}
{
  // Setup
  const lastName = "Lovelace";

  // Only change code below this line
  const lastLetterOfLastName = lastName[lastName.length - 1]; // Change this line
}
{
  // Setup
  const lastName = "Lovelace";

  // Only change code below this line
  const secondToLastLetterOfLastName = lastName[lastName.length - 2]; // Change this line
}
{
  const myNoun = "dog";
  const myAdjective = "big";
  const myVerb = "ran";
  const myAdverb = "quickly";

  // Only change code below this line
  const wordBlanks =
    "The " + myAdjective + " " + myNoun + " " + myVerb + " " + myAdverb + "."; // Change this line
  // Only change code above this line
}
{
  // Only change code below this line
  const myArray = ["string", 10];
}
