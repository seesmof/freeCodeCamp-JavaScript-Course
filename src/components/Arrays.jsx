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

      <p className="mb-2 font-medium">My shopping list ({myList.length}):</p>
      <p className="">
        {myList.map((item) => {
          return (
            <div>
              {item[0]} - {item[1]}
            </div>
          );
        })}
      </p>
    </section>
  );
};

export default Arrays;
