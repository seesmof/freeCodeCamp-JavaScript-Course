const soccer = "goooooooooal!";
const g = "gut feeling";
const o = "over the moon";
const go = /go*/gi;

console.log(`${soccer.match(go)} ${g.match(go)} ${o.match(go)}`);
console.log(g.match(go));
