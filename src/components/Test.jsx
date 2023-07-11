import { sculptureList } from "./data.js";
import React from "react";

export default function Gallery() {
  const [index, setIndex] = React.useState(0);

  let sculpture = sculptureList[index];
  return (
    <>
      <button
        onClick={() => {
          setIndex(index === sculptureList.length - 1 ? 0 : index + 1);
        }}
      >
        Next
      </button>
      <h2>
        <i>{sculpture.name} </i>
        by {sculpture.artist}
      </h2>
      <h3>
        ({index + 1} of {sculptureList.length})
      </h3>
      <img src={sculpture.url} alt={sculpture.alt} />
      <p>{sculpture.description}</p>
    </>
  );
}
