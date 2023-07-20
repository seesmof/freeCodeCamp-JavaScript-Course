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
const sevenText = "fdssdf";
const sevenRegex = /gdf/g;
const sevenOutput = `7. ${sevenRegex.test(sevenText)}\n`;

// Write a regex to match a valid date format like MM/DD/YYYY. Use quantifiers, character classes and grouping.
const eightText = "fdsfs";
const eightRegex = /gdffd/g;
const eightOutput = `8. ${eightRegex.test(eightText)}\n`;

// Write a regex to match either a valid IPv4 address or IPv6 address.
const nineText = `53.166.236.108
34.168.187.162
188.106.191.198
98.58.111.16
87b6:b60c:7468:9729:43d5:97d7:88d7:23f7
bf39:e107:f864:b3f3:92b3:a9ed:fa64:b1b7
1bb1:07aa:847b:3643:999a:d8d6:6f03:5210
e973:4c19:2047:c39d:09f5:ff7e:61fd:49b1`;
const nineRegex =
  /\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}|[a-z0-9]{4}:[a-z0-9]{4}:[a-z0-9]{4}:[a-z0-9]{4}:[a-z0-9]{4}:[a-z0-9]{4}:[a-z0-9]{4}:[a-z0-9]{4}/gm;
const nineOutput = `9. ${nineText.match(nineRegex)}\n`;

// Write a regex to validate a password between 6 to 20 characters which contain at least one numeric digit, one uppercase and one lowercase letter.
const tenText = "123456789";
const tenRegex = /fdsa/g;
const tenOutput = `10. ${tenRegex.test(tenText)}\n`;

// Write a regex to extract all hex color values from a string, and return them as an array.
const elevenText = `#879b35
nature smell bottom sit sharp numeral park orange rich place whatever bow cost printed ancient globe industry plan specific running come drawn cotton found
#49d343
buried dig knew bare thus also welcome couple continued sentence bad curve glad soap fighting bag moving when perfectly his sick present entire gas
#4fa90a
fact completely buy welcome hold appropriate taught road die crowd hardly pick surrounded farmer screen lesson open child pass hollow wheat low somebody beat
#6fd570
wool bridge hollow serious map egg having similar duck lower close that shinning interior former supply atom due advice apartment include means current moving
#fd0cea
stiff pie camp highway behavior exclaimed primitive satellites year sure fifteen song metal earlier stems lonely ate lift till thought scientific arrangement rubber phrase
#293f6b
#1b9922
#3ca1f2`;
const elevenRegex = /^#[a-f0-9]{6}|#[a-f0-9]{3}/gi;
const elevenOutput = `11. ${elevenRegex.test(elevenText)}\n`;
const elevenArray = elevenText.match(elevenRegex);
console.log(typeof elevenArray);

// Write a regex to replace all instances of usernames (@user) in a tweet with actual hyperlinks.
const twelveText = `@Chad
@Mabel
@Maria
@Caroline`;
const twelveRegex = /^@[\d\w]*/gm;
const twelveOutput = `12. ${twelveRegex.test(twelveText)}\n`;

console.log(
  `${oneOutput}${twoOutput}${threeOutput}${fourOutput}${fiveOutput}${sixOutput}${sevenOutput}${eightOutput}${nineOutput}${tenOutput}${elevenOutput}${twelveOutput}`
);
