const password = "abc123";
const regex = /(?=\w{3,6})(?=\D*\d)/;
console.log(regex.test(password));
