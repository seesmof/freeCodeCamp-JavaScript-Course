const removeAgeFromObject = (array = []) => {
  for (let i = 0; i < array.length; i++) {
    delete array[i].age;
  }
  return array;
};

let givenArray = [
  {
    name: "Sally",
    age: 19,
  },
  {
    name: "Margo",
    age: 26,
  },
  {
    name: "Peter",
    age: 21,
  },
];

console.log(givenArray);
givenArray = removeAgeFromObject(givenArray);
console.log(givenArray);
