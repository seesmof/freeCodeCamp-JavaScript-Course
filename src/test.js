const ending = "This is a never ending story";
const regex = /story$/;
console.log(ending.match(regex));

const notEnding = "Sometimes a story will have to end";
console.log(notEnding.match(regex));
