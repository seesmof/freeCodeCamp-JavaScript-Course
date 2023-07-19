const first = "Ricky is first and can be found.";
const regex = /^Ricky/;
console.log(first.match(regex));

const second = "You can't find Ricky now";
console.log(regex.test(second));
