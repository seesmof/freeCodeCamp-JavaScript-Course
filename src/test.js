const cat = "cat";
const bat = "bat";
const mat = "mat";
const rat = "rat";
const regex = /[a-e]at/gi;
console.log(
  `${cat.match(regex)} ${bat.match(regex)} ${mat.match(regex)} ${rat.match(
    regex
  )}`
);
