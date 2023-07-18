const str = "The quick brown fox jumps over the lazy dog.";
const pattern = /fox/;

const result = pattern.test(str);
console.log(result);

const search = str.search(pattern);
console.log(`${search ? "matched" : "not matched"}`);
