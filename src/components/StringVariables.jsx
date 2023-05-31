import React, { useRef } from "react";

const StringVariables = () => {
  const firstNameInput = useRef(null);
  const lastNameInput = useRef(null);

  const submitButton = () => {
    const firstName = firstNameInput.current.value;
    const lastName = lastNameInput.current.value;
    alert(`Hello, ${firstName} ${lastName}\nHow are you doin?`);
  };

  return (
    <section class="section-template">
      <h2 class="section-heading">string variables</h2>

      <div class="flex flex-col gap-4 sm:flex-row">
        <input
          type="text"
          id="string-first-name-input"
          class="input-field-underline"
          placeholder="Enter first name..."
          ref={firstNameInput}
        />
        <input
          type="text"
          id="string-last-name-input"
          class="input-field-underline"
          placeholder="Enter last name..."
          ref={lastNameInput}
        />
      </div>
      <button
        class="button-gray button mt-3"
        id="string-submit-button"
        onClick={submitButton}
      >
        Submit
      </button>
    </section>
  );
};

export default StringVariables;
