import React from "react";

const Arrays = () => {
  return (
    <section class="section-template">
      <h2 class="section-heading">Arrays</h2>

      <ul class="list" id="array-list">
        <p class="pb-2 font-medium">Here is my shopping cart list:</p>
      </ul>
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
