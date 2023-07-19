const long = /[A-Za-z0-9_]+/;
const short = /\w+/;

const numbers = ["42", "31", "54", "98"];
const names = ["important_var", "this_is_cool", "remember_that"];

numbers.forEach((number) => {
  console.log(number.match(short));
  console.log(number.match(long));
});
console.log(`\n`);
names.forEach((name) => {
  console.log(name.match(short));
  console.log(name.match(long));
});
