const getNumber = (number) => {
  return new Promise((resolve, reject) => {
    if (typeof number === "number") {
      resolve(number);
    }
    reject("ERROR: The value is not a number");
  });
};

console.log(getNumber(5));
console.log(getNumber("Hi"));
