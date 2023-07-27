const add = (a, b) => {
  return a + b;
};

const multiplyByTwo = (x) => x * 2;

const greet = (person = `Hello, ${person}`);

const getFullName = (firstName, lastName, middleName = "") =>
  `${lastName} ${firstName} ${middleName}`;

const user = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
  address: {
    city: "New York",
    country: "USA",
  },
};

const {
  firstName,
  lastName,
  address: { city },
} = user;
const userInfo = { firstName, lastName, city, isAdult: true };

class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  getArea() {
    return this.width * this.height;
  }
}
const rectangle = new Rectangle(5, 10);
console.log(rectangle.getArea());
