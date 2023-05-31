import React from "react";

const Variables = () => {
  const handleClick = () => {
    let inputBoxValue = document.getElementById(
      "variables-alert-input-box"
    ).value;
    if (inputBoxValue === "") {
      alert("Whoops... You didn't enter anything");
      return;
    }
    let outputText = "You just said: " + inputBoxValue;
    alert(outputText);
    document.getElementById("variables-alert-input-box").value = "";
  };

  return (
    <section className="section-template">
      <h2 className="section-heading">Variables</h2>

      <input
        type="text"
        id="variables-alert-input-box"
        className="input-field-underline"
        placeholder="Enter something..."
      />
      <button
        className="button-gray button mt-3"
        id="variables-alert-submit-button"
        onClick={handleClick}
      >
        Submit
      </button>
    </section>
  );
};

export default Variables;
