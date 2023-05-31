import React, { useRef } from "react";

const Variables = () => {
  const inputBox = useRef(null);
  return (
    <section class="section-template">
      <h2 class="section-heading">Variables</h2>

      <input
        type="text"
        id="variables-alert-input-box"
        class="input-field-underline"
        placeholder="Enter something..."
        ref={inputBox}
      />
      <button
        class="button-gray button mt-3"
        id="variables-alert-submit-button"
      >
        Submit
      </button>
    </section>
  );
};

export default Variables;
