const testingString =
  "The quick brown fox jumps over the lazy dog. This is a sentence that contains numbers like 123 and 456. It also has some special characters like !@#$%^&*(). This is a medium-sized text that you can use to test your regular expression in JavaScript. Hopefully, it will help you ensure that your regular expression works as expected.";

const regex = /f/g;

console.log(testingString.match(regex));
