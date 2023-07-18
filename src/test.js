const str = "The quick brown fox jumps over the lazy dog";
const stringsToFind = ["fox", "dog"];
const matches = [];

for (const searchString of stringsToFind) {
  let index = str.indexOf(searchString);
  while (index !== -1) {
    matches.push({ searchString, index });
    index = str.indexOf(searchString, index + 1);
  }
}

console.log(matches);
