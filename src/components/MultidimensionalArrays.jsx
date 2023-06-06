import React, { useRef, useState } from "react";
import { RxCross1 } from "react-icons/rx";
import { BsCircle } from "react-icons/bs";

// TODO: Add an AI that will play, pass the array to it and tell to make the next move

const MultidimensionalArrays = () => {
  const [winner, setWinner] = useState("");
  const [gameOver, setGameOver] = useState(false);

  const [board, setBoard] = useState([
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
  ]);
  const [cross, setCross] = useState(false);
  const [circle, setCircle] = useState(false);

  const handleButtonClick = (row, col) => {
    if (board[row][col] === "") {
      setBoard((prev) => {
        const newBoard = [...prev];
        newBoard[row][col] = cross ? "X" : "O";
        return newBoard;
      });
      setCross((prev) => !prev);
      setCircle((prev) => !prev);
      checkWinner();
    }
  };

  return (
    <section class="section-template">
      <h2 class="section-heading">Tic Tac Toe</h2>

      <div className="my-4 grid h-52 w-52 grid-cols-3 grid-rows-3 gap-[3px] bg-slate-600">
        <button
          className="tictactoe-button"
          onClick={() => handleButtonClick(0, 0)}
        >
          {board[0][0] === "X" ? (
            <RxCross1 className="h-full w-full" />
          ) : board[0][0] === "O" ? (
            <BsCircle className="h-full w-full" />
          ) : (
            ""
          )}
        </button>
        <button
          className="tictactoe-button"
          onClick={() => handleButtonClick(0, 1)}
        >
          {board[0][1] === "X" ? (
            <RxCross1 className="h-full w-full" />
          ) : board[0][1] === "O" ? (
            <BsCircle className="h-full w-full" />
          ) : (
            ""
          )}
        </button>
        <button
          className="tictactoe-button"
          onClick={() => handleButtonClick(0, 2)}
        >
          {board[0][2] === "X" ? (
            <RxCross1 className="h-full w-full" />
          ) : board[0][2] === "O" ? (
            <BsCircle className="h-full w-full" />
          ) : (
            ""
          )}
        </button>
        <button
          className="tictactoe-button"
          onClick={() => handleButtonClick(1, 0)}
        >
          {board[1][0] === "X" ? (
            <RxCross1 className="h-full w-full" />
          ) : board[1][0] === "O" ? (
            <BsCircle className="h-full w-full" />
          ) : (
            ""
          )}
        </button>
        <button
          className="tictactoe-button"
          onClick={() => handleButtonClick(1, 1)}
        >
          {board[1][1] === "X" ? (
            <RxCross1 className="h-full w-full" />
          ) : board[1][1] === "O" ? (
            <BsCircle className="h-full w-full" />
          ) : (
            ""
          )}
        </button>
        <button
          className="tictactoe-button"
          onClick={() => handleButtonClick(1, 2)}
        >
          {board[1][2] === "X" ? (
            <RxCross1 className="h-full w-full" />
          ) : board[1][2] === "O" ? (
            <BsCircle className="h-full w-full" />
          ) : (
            ""
          )}
        </button>
        <button
          className="tictactoe-button"
          onClick={() => handleButtonClick(2, 0)}
        >
          {board[2][0] === "X" ? (
            <RxCross1 className="h-full w-full" />
          ) : board[2][0] === "O" ? (
            <BsCircle className="h-full w-full" />
          ) : (
            ""
          )}
        </button>
        <button
          className="tictactoe-button"
          onClick={() => handleButtonClick(2, 1)}
        >
          {board[2][1] === "X" ? (
            <RxCross1 className="h-full w-full" />
          ) : board[2][1] === "O" ? (
            <BsCircle className="h-full w-full" />
          ) : (
            ""
          )}
        </button>
        <button
          className="tictactoe-button"
          onClick={() => handleButtonClick(2, 2)}
        >
          {board[2][2] === "X" ? (
            <RxCross1 className="h-full w-full" />
          ) : board[2][2] === "O" ? (
            <BsCircle className="h-full w-full" />
          ) : (
            ""
          )}
        </button>
      </div>

      <div className="flex flex-row items-center gap-2">
        <button className="button bg-blue-600 text-blue-100">Start solo</button>
        <button className="button bg-yellow-500 text-yellow-100 hover:bg-yellow-600">
          Start with AI
        </button>
      </div>
    </section>
  );
};

export default MultidimensionalArrays;
