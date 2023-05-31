import React from "react";

const Assignments = () => {
  return (
    <section class="section-template">
      <h2 class="section-heading">Assignments</h2>

      <p id="assignment-number">The number is equal to _</p>

      <div class="flex flex-col gap-2 pt-3">
        <div class="flex flex-col gap-4 sm:flex-row sm:gap-6">
          <input
            type="text"
            id="assignments-first-num-input-box"
            class="input-field-underline"
            placeholder="Enter first number..."
          />
          <input
            type="text"
            id="assignments-second-num-input-box"
            class="input-field-underline"
            placeholder="Enter second number..."
          />
        </div>
        <div class="mt-3 flex flex-row flex-wrap items-center gap-1 sm:gap-2">
          <button class="button-blue button" id="assignments-addition-button">
            Add
          </button>
          <button class="button-red button" id="assignments-subtraction-button">
            Subtract
          </button>
          <button
            class="button-green button"
            id="assignments-multiplication-button"
          >
            Multiply
          </button>
          <button class="button-yellow button" id="assignments-division-button">
            Divide
          </button>
          <button class="button-gray button" id="assignments-reset-button">
            Reset
          </button>
        </div>
      </div>
    </section>
  );
};

export default Assignments;
