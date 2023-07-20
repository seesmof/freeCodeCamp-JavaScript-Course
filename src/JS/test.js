const wrong = "The sky is silver";
const regex = /silver/;
console.log(wrong.replace(regex, "gold"));
console.log("Code Camp".replace(/(\w+)\s(\w+)/g, "$2 $1"));
