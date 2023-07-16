const person = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
  city: "New York",
};

const printPersonInfo = ({
  firstName: firstOne,
  lastName: lastOne,
  age: oldOne,
  city: whereOne,
}) => {
  console.log(`First One: ${firstOne}`);
  console.log(`Last One: ${lastOne}`);
  console.log(`Old One: ${oldOne}`);
  console.log(`Where One: ${whereOne}`);
};

printPersonInfo(person);
