const A4 = "haaaah";
const A2 = "haah";
const A100 = `h${"a".repeat(100)}h`;
console.log(A100);

const regex = /ha{3,}h/gi;
console.log(A4.match(regex));
console.log(A2.match(regex));
console.log(A100.match(regex));
