const getOddNumbers = (array = []) => array.filter((x) => x % 2 !== 0);

const array = [3, 1, 6, 4, 9, 5];
console.log(getOddNumbers(array));
