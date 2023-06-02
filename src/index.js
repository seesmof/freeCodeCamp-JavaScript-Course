import { func } from "prop-types";
import "./index.css";

function capitalize(word) {
  return word[0].toUpperCase() + word.substring(1).toLowerCase();
}

{
  // JavaScript is awesome!
  /* JavaScript is awesome! */
}
{
  var myName;
}
{
  // calculations are performed before the variable is assigned with the value

  var a;
  a = 7;
}
{
  var a;
  a = 7;
  var b;
  b = a;
}
{
  var a = 9;
}
{
  var myFirstName = "John";
  var myLastName = "Doe";
}
{
  var a = 5;
  var b = 10;
  var c = "I am a";

  a = a + 1;
  b = b + 5;
  c = c + " String!";
}
{
  var studlyCapVar;
  var properCamelCase;
  var titleCaseOver;

  studlyCapVar = 10;
  properCamelCase = "A String";
  titleCaseOver = 9000;
}
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
{
  const FCC = "freeCodeCamp"; // Change this line
  let fact = "is cool!"; // Change this line
  fact = "is awesome!";
  console.log(FCC, fact); // Change this line
}
{
  const sum = 10 + 10;
}
{
  const difference = 45 - 33;
}
{
  const product = 8 * 10;
}
{
  const quotient = 66 / 33;
}
{
  let myVarIncrement = 87;
  myVarIncrement++;
}
{
  let myVarDecrement = 11;
  myVarDecrement--;
}
{
  let decimalsMyDecimal = 3.14;
}
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
{
  function chainToSwitch(val) {
    let answer = "";
    // Only change code below this line

    switch (val) {
      case "bob":
        answer = "Marley";
        break;
      case 42:
        answer = "The Answer";
        break;
      case 1:
        answer = "There is no #1";
        break;
      case 99:
        answer = "Missed me by this much!";
        break;
      case 7:
        answer = "Ate Nine";
        break;
    }

    // Only change code above this line
    return answer;
  }

  chainToSwitch(7);
}
{
  function isLess(a, b) {
    // Only change code below this line
    return a < b;
    // Only change code above this line
  }

  isLess(10, 15);
}
{
  // Setup
  function abTest(a, b) {
    // Only change code below this line
    if (a < 0 || b < 0) {
      return undefined;
    }
    // Only change code above this line

    return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
  }

  abTest(2, 2);
}
{
  let count = 0;

  function cc(card) {
    // Only change code below this line
    if (card == 2 || card == 3 || card == 4 || card == 5 || card == 6) {
      count++;
    } else if (
      card == 10 ||
      card == "J" ||
      card == "Q" ||
      card == "K" ||
      card == "A"
    ) {
      count--;
    }

    if (count <= 0) {
      return count + " Hold";
    } else {
      return count + " Bet";
    }
    // Only change code above this line
  }

  cc(2);
  cc(3);
  cc(7);
  cc("K");
  cc("A");
}
{
  const myDog = {
    // Only change code below this line

    name: "Happy Coder",
    legs: 4,
    tails: 1,
    friends: ["freeCodeCamp Campers"],

    // Only change code above this line
  };
}
{
  // Setup
  const testObj = {
    hat: "ballcap",
    shirt: "jersey",
    shoes: "cleats",
  };

  // Only change code below this line
  const hatValue = testObj.hat; // Change this line
  const shirtValue = testObj.shirt; // Change this line
}
{
  // Setup
  const testObj = {
    "an entree": "hamburger",
    "my side": "veggies",
    "the drink": "water",
  };

  // Only change code below this line
  const entreeValue = testObj["an entree"]; // Change this line
  const drinkValue = testObj["the drink"]; // Change this line
}
{
  // Setup
  const testObj = {
    12: "Namath",
    16: "Montana",
    19: "Unitas",
  };

  // Only change code below this line
  const playerNumber = 16; // Change this line
  const player = testObj[playerNumber]; // Change this line
}
{
  // Setup
  const myDog = {
    name: "Coder",
    legs: 4,
    tails: 1,
    friends: ["freeCodeCamp Campers"],
  };

  // Only change code below this line
  myDog["name"] = "Happy Coder";
}
{
  const myDog = {
    name: "Happy Coder",
    legs: 4,
    tails: 1,
    friends: ["freeCodeCamp Campers"],
  };

  myDog.bark = "woof";
}
{
  // Setup
  const myDog = {
    name: "Happy Coder",
    legs: 4,
    tails: 1,
    friends: ["freeCodeCamp Campers"],
    bark: "woof",
  };

  // Only change code below this line
  delete myDog.tails;
}
{
  // Setup
  function phoneticLookup(val) {
    let result = "";

    // Only change code below this line
    const lookup = {
      alpha: "Adams",
      bravo: "Boston",
      charlie: "Chicago",
      delta: "Denver",
      echo: "Easy",
      foxtrot: "Frank",
    };
    result += lookup[val];

    // Only change code above this line
    return result;
  }

  phoneticLookup("charlie");
}
{
  function checkObj(obj, checkProp) {
    // Only change code below this line
    return checkProp in obj ? obj[checkProp] : "Not Found";
    // Only change code above this line
  }
}
{
  const myMusic = [
    {
      artist: "Billy Joel",
      title: "Piano Man",
      release_year: 1973,
      formats: ["CD", "8T", "LP"],
      gold: true,
    },
  ];
  myMusic.push({
    artist: "Billy Joel",
    title: "Piano Man",
    release_year: 1973,
    formats: ["CD", "8T", "LP"],
  });
}
{
  const myStorage = {
    car: {
      inside: {
        "glove box": "maps",
        "passenger seat": "crumbs",
      },
      outside: {
        trunk: "jack",
      },
    },
  };

  const gloveBoxContents = myStorage.car.inside["glove box"];
}
{
  const myPlants = [
    {
      type: "flowers",
      list: ["rose", "tulip", "dandelion"],
    },
    {
      type: "trees",
      list: ["fir", "pine", "birch"],
    },
  ];

  const secondTree = myPlants[1].list[1];
}
{
  // Setup
  const recordCollection = {
    2548: {
      albumTitle: "Slippery When Wet",
      artist: "Bon Jovi",
      tracks: ["Let It Rock", "You Give Love a Bad Name"],
    },
    2468: {
      albumTitle: "1999",
      artist: "Prince",
      tracks: ["1999", "Little Red Corvette"],
    },
    1245: {
      artist: "Robert Palmer",
      tracks: [],
    },
    5439: {
      albumTitle: "ABBA Gold",
    },
  };

  // Only change code below this line
  function updateRecords(records, id, prop, value) {
    if (value === "") {
      delete records[id][prop];
    }
    if (prop !== "tracks" && value !== "") {
      records[id][prop] = value;
    }
    if (prop === "tracks" && value !== "") {
      if (!records[id].hasOwnProperty("tracks")) {
        records[id][prop] = [];
      }
      records[id][prop].push(value);
    }
    return records;
  }

  updateRecords(recordCollection, 5439, "artist", "ABBA");
}
{
  // Setup
  const myArray = [];

  // Only change code below this line
  let i = 5;
  while (i >= 0) {
    myArray.push(i);
    i--;
  }
}
{
  // Setup
  const myArray = [];

  // Only change code below this line
  for (let i = 1; i <= 5; i++) {
    myArray.push(i);
  }
}
{
  // Setup
  const myArray = [];

  // Only change code below this line
  for (let i = 1; i <= 9; i += 2) myArray.push(i);
}
{
  // Setup
  const myArray = [];

  // Only change code below this line
  for (let i = 9; i >= 1; i -= 2) myArray.push(i);
}
{
  // Setup
  const myArr = [2, 3, 4, 5, 6];

  // Only change code below this line
  let total = 0;
  for (let i = 0; i < myArr.length; i++) {
    total += myArr[i];
  }
}
{
  function multiplyAll(arr) {
    let product = 1;
    // Only change code below this line
    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < arr[i].length; j++) {
        product *= arr[i][j];
      }
    }

    // Only change code above this line
    return product;
  }

  multiplyAll([
    [1, 2],
    [3, 4],
    [5, 6, 7],
  ]);
}
{
  // Setup
  const myArray = [];
  let i = 10;

  // Only change code below this line
  do {
    myArray.push(i);
    i++;
  } while (i < 10);
}
{
  function sum(arr, n) {
    // Only change code below this line
    if (n <= 0) {
      return 0;
    }
    return arr[n - 1] + sum(arr, n - 1);
    // Only change code above this line
  }
}
{
  // Setup
  const contacts = [
    {
      firstName: "Akira",
      lastName: "Laine",
      number: "0543236543",
      likes: ["Pizza", "Coding", "Brownie Points"],
    },
    {
      firstName: "Harry",
      lastName: "Potter",
      number: "0994372684",
      likes: ["Hogwarts", "Magic", "Hagrid"],
    },
    {
      firstName: "Sherlock",
      lastName: "Holmes",
      number: "0487345643",
      likes: ["Intriguing Cases", "Violin"],
    },
    {
      firstName: "Kristian",
      lastName: "Vos",
      number: "unknown",
      likes: ["JavaScript", "Gaming", "Foxes"],
    },
  ];

  function lookUpProfile(name, prop) {
    // Only change code below this line
    for (let i = 0; i < contacts.length; i++) {
      if (contacts[i].firstName === name) {
        if (contacts[i].hasOwnProperty(prop)) {
          return contacts[i][prop];
        } else {
          return "No such property";
        }
      }
    }
    let iterCounter = 1;
    for (let i = 0; i < contacts.length; i++) {
      if (iterCounter === contacts.length) {
        return "No such contact";
      }
      if (contacts[i].firstName !== name) {
        iterCounter++;
        continue;
      }
    }
    // Only change code above this line
  }

  lookUpProfile("Akira", "likes");
}
{
  function randomFraction() {
    // Only change code below this line

    return Math.random();

    // Only change code above this line
  }
}
{
  function randomWholeNum() {
    return Math.floor(Math.random() * 10);
  }
}
{
  function randomRange(myMin, myMax) {
    return Math.floor(Math.random() * (myMax - myMin + 1)) + myMin;
  }
}
