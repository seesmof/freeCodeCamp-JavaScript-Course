const A4 = "haaaah";
const A3 = "haaah";
const A100 = `a${"a".repeat(100)}h`;
const regex = /ha{3}h/gi;
console.log(A100.match(regex));
console.log(A3.match(regex));
console.log(A4.match(regex));
