import React, { useRef, useState } from "react";
import { RxCross1 } from "react-icons/rx";
import { BsCircle } from "react-icons/bs";

const MultidimensionalArrays = () => {
  return (
    <section class="section-template">
      <h2 class="section-heading">Tic Tac Toe</h2>

      <div className="my-4 grid h-52 w-52 grid-cols-3 grid-rows-3 gap-[3px] bg-slate-600">
        <button className="tictactoe-button"></button>
        <button className="tictactoe-button"></button>
        <button className="tictactoe-button"></button>
        <button className="tictactoe-button"></button>
        <button className="tictactoe-button"></button>
        <button className="tictactoe-button"></button>
        <button className="tictactoe-button"></button>
        <button className="tictactoe-button"></button>
        <button className="tictactoe-button"></button>
      </div>
    </section>
  );
};

export default MultidimensionalArrays;
