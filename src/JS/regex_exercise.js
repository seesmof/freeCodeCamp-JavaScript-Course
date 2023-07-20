// Write a regex to match a string that starts with 'hello' and ends with 'world'.
const oneText = "hello world";
const oneRegex = /^hello.*world$/g;
const oneOutput = `1. ${oneRegex.test(oneText)}\n`;

// Write a regex to match a string that contains a number.
const twoText = "This text contains numbers such as 321, 945 and 1643.";
const twoRegex = /\d/g;
const twoOutput = `2. ${twoText.match(twoRegex)}\n`;

// Write a regex to match a valid email address. Hint: use quantifiers and character classes.
const threeText = `zo@gafikkar.qa
  kuf@kuovageg.om
  ihci@tawsuwhuj.ee
  ojetuj@dif.ao`;
const threeRegex = /^(\w+){2,}@(\w+){2,}\.(\w+){2,}$/gm;
const threeOutput = `3. ${threeRegex.test(threeText)}\n`;

// Write a regex to match a string that contains only uppercase or lowercase letters.
const fourText =
  "pride division two queen summer struck night student immediately organized held keep model everybody musical number climate split military mainly visitor depth atomic basic";
const fourRegex = /[a-zA-Z]/g;
const fourOutput = `4. ${fourRegex.test(fourText)}\n`;

// Write a regex to match a valid URL. Hint: use quantifiers, character classes and grouping.
const fiveText = "http://wulur.ma/nuksut";
const fiveRegex = /https?:\/\/(www\.)?\w+\.\w+\/\w+/g;
const fiveOutput = `5. ${fiveText.match(fiveRegex)}\n`;

// Write a regex to match a string that contains any word repeated twice, like 'hello hello'.
const sixText =
  "hello hello hello giving wooden form held count author stock relationship advice lie dry cut deer sport out swing excitement atomic topic fuel nearly doing getting path";
const sixRegex = /wut/g;
const sixOutput = `6. ${sixText.match(sixRegex)}\n`;

// Write a regex to match a valid hexadecimal color code like #FFF, #123456.

// Write a regex to match a valid date format like MM/DD/YYYY. Use quantifiers, character classes and grouping.

// Write a regex to match either a valid IPv4 address or IPv6 address.

// Write a regex to validate a password between 6 to 20 characters which contain at least one numeric digit, one uppercase and one lowercase letter.

// Write a regex to extract all hex color values from a string, and return them as an array.

// Write a regex to replace all instances of usernames (@user) in a tweet with actual hyperlinks.

console.log(
  `${oneOutput}${twoOutput}${threeOutput}${fourOutput}${fiveOutput}${sixOutput}`
);
