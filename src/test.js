const big = "big";
const bag = "bag";
const bug = "bug";
const bog = "bog";
const regex = /b[aiu]g/gi;
console.log(
  `${bog.match(regex)}, ${big.match(regex)}, ${bag.match(regex)}, ${bug.match(
    regex
  )}`
);
