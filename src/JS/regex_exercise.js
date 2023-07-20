// Write a regex to match a string that starts with 'hello' and ends with 'world'.
const oneText = "hello world";
const oneRegex = /^hello.*world$/;
const oneOutput = `1. ${oneText.match(oneRegex)}`;

// Write a regex to match a string that contains a number.
const twoText = "This text contains numbers such as 321, 945 and 1643.";
const twoRegex = /\d/g;
const twoOutput = `2. ${twoText.match(twoRegex)}`;

// Write a regex to match a valid email address. Hint: use quantifiers and character classes.
const threeText = [
  "zo@gafikkar.qa",
  "kuf@kuovageg.om",
  "ihci@tawsuwhuj.ee",
  "ojetuj@dif.ao",
];
const threeRegex = /^(\w+){2,}@(\w+){2,}\.(\w+){2,}$/;
const threeOutput = `3. ${threeText[0].match(threeRegex)}`;

// Write a regex to match a string that contains only uppercase or lowercase letters.

// Write a regex to match a valid URL. Hint: use quantifiers, character classes and grouping.

// Write a regex to match a string that contains any word repeated twice, like 'hello hello'.

// Write a regex to match a valid hexadecimal color code like #FFF, #123456.

// Write a regex to match a valid date format like MM/DD/YYYY. Use quantifiers, character classes and grouping.

// Write a regex to match either a valid IPv4 address or IPv6 address.

// Write a regex to validate a password between 6 to 20 characters which contain at least one numeric digit, one uppercase and one lowercase letter.

// Write a regex to extract all hex color values from a string, and return them as an array.

// Write a regex to replace all instances of usernames (@user) in a tweet with actual hyperlinks.
