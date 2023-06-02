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

  const [array, setArray] = useState(randomlyGeneratedArray);

  const sortArray = () => {
    let newArray = randomlyGeneratedArray.sort();
    setArray(newArray);
  };

  const reverseArray = () => {
    let newArray = randomlyGeneratedArray.reverse();
    setArray(newArray);
  };

  const generateArray = () => {
    let newArray = [];
    for (let i = 0; i < 10; i++) {
      newArray.push(Math.floor(Math.random() * 10));
    }
    setArray(newArray);
  };

  const copyArray = () => {
    navigator.clipboard.writeText(randomlyGeneratedArray.join(""));
  };

  const clearArray = () => {
    randomlyGeneratedArray = [];
    setArray(randomlyGeneratedArray);
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
