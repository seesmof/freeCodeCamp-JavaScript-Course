import React, { useRef } from "react";

const Constants = () => {
  const FCC = "FreeCodeCamp";
  let fact = "is cool!";
  fact = "is awesome!";
  const sentence = `${FCC} ${fact}`;
  return (
    <section class="section-template">
      <h2 class="section-heading">Constants</h2>

      <p class="fome">{sentence}</p>
    </section>
  );
};

export default Constants;
