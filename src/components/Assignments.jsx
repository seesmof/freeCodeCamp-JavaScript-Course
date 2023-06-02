import React, { useRef } from "react";

const Assignments = () => {
  const outputNumber = 3 + 4;
  const inputBoxOne = useRef(null);
  const inputBoxTwo = useRef(null);
  const resetValues = () => {
    inputBoxOne.current.value = "";
    inputBoxTwo.current.value = "";
  };
  const addition = () => {
    const firstNumber = Number(inputBoxOne.current.value);
    const secondNumber = Number(inputBoxTwo.current.value);
    if (
      isNaN(firstNumber) ||
      isNaN(secondNumber) ||
      firstNumber === "" ||
      secondNumber === ""
    ) {
      alert("Whoops... You didn't enter a number");
      resetValues();
      return;
    }
    const result = firstNumber + secondNumber;
    const output = firstNumber + " + " + secondNumber + " = " + result;
    alert(output);
    resetValues();
  };
  const subtraction = () => {
    const firstNumber = Number(inputBoxOne.current.value);
    const secondNumber = Number(inputBoxTwo.current.value);
    if (
      isNaN(firstNumber) ||
      isNaN(secondNumber) ||
      firstNumber === "" ||
      secondNumber === ""
    ) {
      alert("Whoops... You didn't enter a number");
      resetValues();
      return;
    }
    const result = firstNumber - secondNumber;
    const output = firstNumber + " - " + secondNumber + " = " + result;
    alert(output);
    resetValues();
  };
  const multiplication = () => {
    const firstNumber = Number(inputBoxOne.current.value);
    const secondNumber = Number(inputBoxTwo.current.value);
    if (
      isNaN(firstNumber) ||
      isNaN(secondNumber) ||
      firstNumber === "" ||
      secondNumber === ""
    ) {
      alert("Whoops... You didn't enter a number");
      resetValues();
      return;
    }
    const result = firstNumber * secondNumber;
    const output = firstNumber + " * " + secondNumber + " = " + result;
    alert(output);
    resetValues();
  };
  const division = () => {
    const firstNumber = Number(inputBoxOne.current.value);
    const secondNumber = Number(inputBoxTwo.current.value);
    if (
      isNaN(firstNumber) ||
      isNaN(secondNumber) ||
      firstNumber === "" ||
      secondNumber === ""
    ) {
      alert("Whoops... You didn't enter a number");
      resetValues();
      return;
    }
    const result = firstNumber / secondNumber;
    const output = firstNumber + " / " + secondNumber + " = " + result;
    alert(output);
    resetValues();
  };

  return (
    <section class="section-template">
      <h2 class="section-heading">Assignments</h2>

      <p>The number is equal to {outputNumber}</p>

      <div class="flex flex-col gap-2 pt-3">
        <div class="flex flex-col gap-4 sm:flex-row sm:gap-6">
          <input
            type="text"
            id="input-box-one"
            class="input-field-underline"
            placeholder="Enter first number..."
            ref={inputBoxOne}
          />
          <input
            type="text"
            id="input-box-two"
            class="input-field-underline"
            placeholder="Enter second number..."
            ref={inputBoxTwo}
          />
        </div>
        <div class="mt-3 flex flex-row flex-wrap items-center gap-1 sm:gap-2">
          <button
            class="button-blue button"
            id="addition-button"
            onClick={addition}
          >
            Add
          </button>
          <button
            class="button-red button"
            id="subtraction-button"
            onClick={subtraction}
          >
            Subtract
          </button>
          <button
            class="button-green button"
            id="multiplication-button"
            onClick={multiplication}
          >
            Multiply
          </button>
          <button
            class="button-yellow button"
            id="division-button"
            onClick={division}
          >
            Divide
          </button>
          <button
            class="button-gray button"
            id="reset-button"
            onClick={resetValues}
          >
            Reset
          </button>
        </div>
      </div>
    </section>
  );
};

export default Assignments;
