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
  const randomlyGeneratedArray = [];
  for (let i = 0; i < 10; i++) {
    randomlyGeneratedArray.push(Math.floor(Math.random() * 11));
  }

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
            <div className="flex flex-row items-end gap-4">
              <input
                type="text"
                className="input-field-underline"
                placeholder="Number of elements..."
              />
              <button className="button button-gray">Generate Array</button>
            </div>

            <div className="flex flex-col">
              <p className="font-medium">
                Randomly Generated Array:{" "}
                <span className="font-normal">{randomlyGeneratedArray}</span>
                <div className="flex flex-row flex-wrap gap-1">
                  <button className="button button-green">Sort</button>
                  <button className="button button-yellow">Reverse</button>
                  <button className="button button-red">Generate</button>
                  <button className="button button-blue">Copy</button>
                  <button className="button button-gray">Clear</button>
                </div>
              </p>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Arrays;
