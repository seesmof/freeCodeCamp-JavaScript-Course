const repeatRegex = /(\w+) \1 \1/gim;
const repeatStr = "row row row row your boat";
const matches = repeatRegex.exec(repeatStr);
console.log(matches);
