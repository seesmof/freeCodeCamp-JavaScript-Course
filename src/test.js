const quit = "qu";
const noquit = "qt";
const quRegex = /q(?=u)/gi;
const qRegex = /q(?!u)/gi;
console.log(quRegex.test(quit));
console.log(qRegex.test(quit));
