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
{
  // Only change code below this line
  const myArray = [
    ["string", 10],
    ["notstring", 10],
  ];
}
{
  const myArray = [50, 60, 70];

  const myData = myArray[0];
}
{
  // Setup
  const myArray = [18, 64, 99];

  // Only change code below this line
  myArray[0] = 45;
}
{
  const myArray = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [[10, 11, 12], 13, 14],
  ];

  const myData = myArray[2][1];
}
{
  // Setup
  const myArray = [
    ["John", 23],
    ["cat", 2],
  ];

  // Only change code below this line
  myArray.push(["dog", 3]);
}
{
  // Setup
  const myArray = [
    ["John", 23],
    ["cat", 2],
  ];

  // Only change code below this line
  const removedFromMyArray = myArray.pop();
}
{
  // Setup
  const myArray = [
    ["John", 23],
    ["dog", 3],
  ];

  // Only change code below this line
  const removedFromMyArray = myArray.shift();
}
{
  // Setup
  const myArray = [
    ["John", 23],
    ["dog", 3],
  ];
  myArray.shift();

  // Only change code below this line
  myArray.unshift(["Paul", 35]);
}
{
  const myList = [
    ["lettuce", 2],
    ["cheese", 3],
    ["carrots", 4],
    ["orange", 5],
    ["pizza", 6],
    ["mushrooms", 7],
  ];

  const arrayOutput = document.querySelector("#array-list");
  for (let i = 0; i < myList.length; i++) {
    arrayOutput.innerHTML += `<li>- ${myList[i][0]} - ${myList[i][1]}</li>`;
  }

  const priceOutput = document.querySelector("#array-price-output");
  let totalPrice = 0;
  for (let i = 0; i < myList.length; i++) {
    totalPrice += myList[i][1];
  }
  priceOutput.innerHTML = totalPrice;
}
{
  function reusableFunction() {
    console.log("Hi World");
  }
  reusableFunction();
}
{
  function functionWithArgs(a, b) {
    console.log(a + b);
  }
  functionWithArgs(1, 2);
}
{
  function timesFive(num) {
    return num * 5;
  }
  timesFive(5);
}
{
  // Declare the myGlobal variable below this line
  let myGlobal = 10;

  function fun1() {
    // Assign 5 to oopsGlobal here
    oopsGlobal = 5;
  }

  // Only change code above this line

  function fun2() {
    let output = "";
    if (typeof myGlobal != "undefined") {
      output += "myGlobal: " + myGlobal;
    }
    if (typeof oopsGlobal != "undefined") {
      output += " oopsGlobal: " + oopsGlobal;
    }
    console.log(output);
  }
}
{
  function myLocalScope() {
    // Only change code below this line
    let myVar;

    console.log("inside myLocalScope", myVar);
  }
  myLocalScope();

  // Run and check the console
  // myVar is not defined outside of myLocalScope
  console.log("outside myLocalScope", myVar);
}
{
  // Setup
  const outerWear = "T-Shirt";

  function myOutfit() {
    // Only change code below this line
    const outerWear = "sweater";

    // Only change code above this line
    return outerWear;
  }

  myOutfit();
}
{
  // Setup
  let sum = 0;

  function addThree() {
    sum = sum + 3;
  }

  // Only change code below this line
  function addFive() {
    sum = sum + 5;
  }

  // Only change code above this line

  addThree();
  addFive();
}
{
  // Setup
  let processed = 0;

  function processArg(num) {
    return (num + 3) / 5;
  }

  // Only change code below this line
  processed = processArg(7);
}
{
  function nextInLine(arr, item) {
    // Only change code below this line
    arr.push(item);
    item = arr.shift();

    return item;
    // Only change code above this line
  }

  // Setup
  let testArr = [1, 2, 3, 4, 5];

  // Display code
  console.log("Before: " + JSON.stringify(testArr));
  console.log(nextInLine(testArr, 6));
  console.log("After: " + JSON.stringify(testArr));
}
{
  function welcomeToBooleans() {
    // Only change code below this line

    return true; // Change this line

    // Only change code above this line
  }
}
{
  function trueOrFalse(wasThatTrue) {
    // Only change code below this line
    if (wasThatTrue) {
      return "Yes, that was true";
    }
    return "No, that was false";
    // Only change code above this line
  }
}
{
  // Setup
  function testEqual(val) {
    if (val == 12) {
      // Change this line
      return "Equal";
    }
    return "Not Equal";
  }

  testEqual(10);
}
{
  // Setup
  function testStrict(val) {
    if (val === 7) {
      // Change this line
      return "Equal";
    }
    return "Not Equal";
  }

  testStrict(10);
}
{
  // Setup
  function compareEquality(a, b) {
    if (a === b) {
      // Change this line
      return "Equal";
    }
    return "Not Equal";
  }

  compareEquality(10, "10");
}
{
  // Setup
  function testNotEqual(val) {
    if (val != 99) {
      // Change this line
      return "Not Equal";
    }
    return "Equal";
  }

  testNotEqual(10);
}
{
  // Setup
  function testStrictNotEqual(val) {
    if (val !== 17) {
      // Change this line
      return "Not Equal";
    }
    return "Equal";
  }

  testStrictNotEqual(10);
}
{
  function testGreaterThan(val) {
    if (val > 100) {
      // Change this line
      return "Over 100";
    }

    if (val > 10) {
      // Change this line
      return "Over 10";
    }

    return "10 or Under";
  }

  testGreaterThan(10);
}
{
  function testGreaterOrEqual(val) {
    if (val >= 20) {
      // Change this line
      return "20 or Over";
    }

    if (val >= 10) {
      // Change this line
      return "10 or Over";
    }

    return "Less than 10";
  }

  testGreaterOrEqual(10);
}
{
  function testLessThan(val) {
    if (val < 25) {
      // Change this line
      return "Under 25";
    }

    if (val < 55) {
      // Change this line
      return "Under 55";
    }

    return "55 or Over";
  }

  testLessThan(10);
}
{
  function testLessOrEqual(val) {
    if (val <= 12) {
      // Change this line
      return "Smaller Than or Equal to 12";
    }

    if (val <= 24) {
      // Change this line
      return "Smaller Than or Equal to 24";
    }

    return "More Than 24";
  }

  testLessOrEqual(10);
}
{
  function testLogicalAnd(val) {
    // Only change code below this line

    if (val <= 50 && val >= 25) {
      return "Yes";
    }

    // Only change code above this line
    return "No";
  }

  testLogicalAnd(10);
}
{
  function testLogicalOr(val) {
    // Only change code below this line

    if (val < 10 || val > 20) {
      return "Outside";
    }

    // Only change code above this line
    return "Inside";
  }

  testLogicalOr(15);
}
{
  function testElse(val) {
    let result = "";
    // Only change code below this line

    if (val > 5) {
      result = "Bigger than 5";
    } else {
      result = "5 or Smaller";
    }

    // Only change code above this line
    return result;
  }

  testElse(4);
}
{
  function testElseIf(val) {
    if (val > 10) {
      return "Greater than 10";
    } else if (val < 5) {
      return "Smaller than 5";
    } else {
      return "Between 5 and 10";
    }
  }

  testElseIf(7);
}
{
  function orderMyLogic(val) {
    if (val < 5) {
      return "Less than 5";
    } else if (val < 10) {
      return "Less than 10";
    } else {
      return "Greater than or equal to 10";
    }
  }

  orderMyLogic(7);
}
{
  function testSize(num) {
    // Only change code below this line
    if (num < 5) {
      return "Tiny";
    } else if (num < 10) {
      return "Small";
    } else if (num < 15) {
      return "Medium";
    } else if (num < 20) {
      return "Large";
    } else {
      return "Huge";
    }
    // Only change code above this line
  }

  testSize(7);
}
{
  const names = [
    "Hole-in-one!",
    "Eagle",
    "Birdie",
    "Par",
    "Bogey",
    "Double Bogey",
    "Go Home!",
  ];

  function golfScore(par, strokes) {
    // Only change code below this line
    if (strokes == 1) {
      return names[0];
    } else if (strokes <= par - 2) {
      return names[1];
    } else if (strokes == par - 1) {
      return names[2];
    } else if (strokes == par) {
      return names[3];
    } else if (strokes == par + 1) {
      return names[4];
    } else if (strokes == par + 2) {
      return names[5];
    } else {
      return names[6];
    }
    // Only change code above this line
  }

  golfScore(5, 4);
}
{
  function caseInSwitch(val) {
    let answer = "";
    // Only change code below this line

    switch (val) {
      case 1:
        answer = "alpha";
        break;
      case 2:
        answer = "beta";
        break;
      case 3:
        answer = "gamma";
        break;
      case 4:
        answer = "delta";
        break;
      default:
        answer = "none";
    }

    // Only change code above this line
    return answer;
  }

  caseInSwitch(1);
}
{
  function switchOfStuff(val) {
    let answer = "";
    // Only change code below this line

    switch (val) {
      case "a":
        answer = "apple";
        break;
      case "b":
        answer = "bird";
        break;
      case "c":
        answer = "cat";
        break;
      default:
        answer = "stuff";
    }

    // Only change code above this line
    return answer;
  }

  switchOfStuff(1);
}
{
  function sequentialSizes(val) {
    let answer = "";
    // Only change code below this line

    switch (val) {
      case 1:
      case 2:
      case 3:
        answer = "Low";
        break;
      case 4:
      case 5:
      case 6:
        answer = "Mid";
        break;
      case 7:
      case 8:
      case 9:
        answer = "High";
        break;

      default:
        answer = "Invalid";
    }

    // Only change code above this line
    return answer;
  }

  sequentialSizes(1);
}
