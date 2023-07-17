const person = {
  firstName: "John",
  lastName: "Doe",
  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  },
  set fullName(value) {
    [this.firstName, this.lastName] = value.split(" ");
  },
};

console.log(person.fullName);
person.fullName = "Jane Doe";
console.log(
  `${person.firstName} is ${person.lastName} and she is a ${person.fullName}`
);
