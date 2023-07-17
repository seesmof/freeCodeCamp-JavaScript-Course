const person = {
  name: "Harry",
  age: 21,
};

const greet = `Hello ${person.name}! You are ${person.age} years old.`;
const sayHello = () => {
  console.log(greet);
};

sayHello();
