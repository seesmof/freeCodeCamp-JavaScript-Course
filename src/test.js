const sumEvenNumbers = (array = 0) => {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0) {
      sum += array[i];
    }
  }
  return sum;
};

const arrays = [[1, 4, 7, 3, 9], [0, 2, 5, 8, 6], [3, 7, 1, 4, 9], []];

for (let i = 0; i < arrays.length; i++) {
  console.log(`Sum for array ${i + 1} is ${sumEvenNumbers(arrays[i])}`);
}
