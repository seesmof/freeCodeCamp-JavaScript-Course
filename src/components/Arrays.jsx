import React, { useRef } from "react";

const Arrays = () => {
  const myList = [
    ["lettuce", 2],
    ["cheese", 3],
    ["carrots", 4],
    ["orange", 5],
    ["pizza", 6],
    ["mushrooms", 7],
  ];

  return (
    <section class="section-template">
      <h2 class="section-heading">Arrays</h2>

      <ul class="list" id="array-list"></ul>
      <p class="pt-2 font-medium">
        The total price is
        <span
          id="array-price-output"
          class="underline underline-offset-4"
        ></span>
      </p>
    </section>
  );
};

export default Arrays;
