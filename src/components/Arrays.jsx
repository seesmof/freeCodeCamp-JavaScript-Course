import React, { useRef, useState } from "react";

const Arrays = () => {
  const myList = [
    ["lettuce", 2],
    ["cheese", 3],
    ["carrots", 4],
    ["orange", 5],
    ["pizza", 6],
    ["mushrooms", 7],
  ];

  let randomlyGeneratedArray = [];
  for (let i = 0; i < 10; i++) {
    randomlyGeneratedArray.push(Math.floor(Math.random() * 10));
  }

  const sortArray = () => {
    randomlyGeneratedArray.sort();
    alert(`Sorted! \nYour array is now: ${randomlyGeneratedArray}`);
  };

  const reverseArray = () => {
    randomlyGeneratedArray.reverse();
    alert(`Reversed! \nYour array is now: ${randomlyGeneratedArray}`);
  };

  const generateArray = () => {
    randomlyGeneratedArray = [];
    for (let i = 0; i < 10; i++) {
      randomlyGeneratedArray.push(Math.floor(Math.random() * 10));
    }
    alert(`Regenerated! \nYour array is now: ${randomlyGeneratedArray}`);
  };

  const copyArray = () => {
    navigator.clipboard.writeText(randomlyGeneratedArray.join(""));
    alert(`Copied! \nYour array is: ${randomlyGeneratedArray}`);
  };

  const clearArray = () => {
    randomlyGeneratedArray = [];
    alert(`Cleared! \nYour array is now: ${randomlyGeneratedArray}`);
  };

  return (
    <section class="section-template">
      <h2 class="section-heading">Arrays</h2>

      <div className="flex flex-col gap-4">
        <article className="flex flex-col">
          <p className="mb-2 font-medium">
            My shopping list ({myList.length}):
          </p>
          <p className="">
            {myList.map((item) => {
              return (
                <div>
                  {item[0]} - {item[1]}
                </div>
              );
            })}
          </p>
        </article>

        <article className="flex flex-col">
          <p className="mb-2 font-medium">Array Methods</p>

          <div className="flex flex-col gap-3">
            <p className="">Array: {randomlyGeneratedArray}</p>
            <div className="flex flex-row flex-wrap gap-1">
              <button className="button button-green" onClick={sortArray}>
                Sort
              </button>
              <button className="button button-yellow" onClick={reverseArray}>
                Reverse
              </button>
              <button className="button button-red" onClick={generateArray}>
                Generate
              </button>
              <button className="button button-blue" onClick={copyArray}>
                Copy
              </button>
              <button className="button button-gray" onClick={clearArray}>
                Clear
              </button>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Arrays;
