import React from "react";

const StringVariables = () => {
  return (
    <section class="section-template">
      <h2 class="section-heading">string variables</h2>

      <div class="flex flex-col gap-4 sm:flex-row">
        <input
          type="text"
          id="string-first-name-input"
          class="input-field-underline"
          placeholder="Enter first name..."
        />
        <input
          type="text"
          id="string-last-name-input"
          class="input-field-underline"
          placeholder="Enter last name..."
        />
      </div>
      <button class="button-gray button mt-3" id="string-submit-button">
        Submit
      </button>
    </section>
  );
};

export default StringVariables;
