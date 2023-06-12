class Car {
  constructor(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  }

  start() {
    console.log(`${this.make} ${this.model} started`);
    return `${this.make} ${this.model} started`;
  }
}

const myFirstCar = new Car("Honda", "Mondeo", 1998);
console.log(myFirstCar);
myFirstCar.start();

const mySecondCar = new Car("Toyota", "Corolla", 2001);
mySecondCar.start();
