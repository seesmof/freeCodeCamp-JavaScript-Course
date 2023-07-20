const repeatStr = "   row row row your boat   ";
const regex = /^\s[\W\D]*\s$/gm;
const matches = repeatStr.match(regex);
console.log(matches);
