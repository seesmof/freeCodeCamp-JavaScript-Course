import React, { useRef } from "react";

const MultidimensionalArrays = () => {
  function generateRandomNumber() {
    return Math.floor(Math.random() * 9) + 1;
  }

  const multidimensionalArray = [
    [generateRandomNumber(), generateRandomNumber(), generateRandomNumber()],
    [generateRandomNumber(), generateRandomNumber(), generateRandomNumber()],
    [generateRandomNumber(), generateRandomNumber(), generateRandomNumber()],
  ];

  return (
    <section class="section-template">
      <h2 class="section-heading">Multidimensional Arrays</h2>

      <p>
        {/* output a generated matrix from multidimensionalArray in a square matrix format. i want it to have 3 rows and 3 columns, the end line should only be at the end of a row */}
      </p>
    </section>
  );
};

export default MultidimensionalArrays;
