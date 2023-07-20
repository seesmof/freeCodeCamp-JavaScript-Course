const repeatStr = "row row row your boat";
const regex = /(\w+)\s\1+/gm;
const matches = repeatStr.match(regex);
console.log(matches);
