const quit = "qu";
const noquit = "qt";
const quRegex = /q(?=u)/gi;
const qRegex = /q(?!u)/gi;
console.log(quit.match(quRegex));
console.log(noquit.match(qRegex));
