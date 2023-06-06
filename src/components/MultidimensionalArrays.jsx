import React, { useRef, useState } from "react";
import { RxCross1 } from "react-icons/rx";
import { BsCircle } from "react-icons/bs";

// TODO: Add an AI that will play, pass the array to it and tell to make the next move

const MultidimensionalArrays = () => {
  const [winner, setWinner] = useState("");
  const [gameOver, setGameOver] = useState(false);
  const [gameStarted, setGameStarted] = useState(false);

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

      <div className="mb-2 flex flex-col gap-2">
        <div className="flex flex-col gap-1 pb-2">
          <div
            className={`flex items-center gap-1 text-xl font-medium ${
              winner ? "" : "h-7 w-24 rounded-sm bg-slate-800"
            }`}
            title="Start the game to unhide the contents"
          >
            {winner && `Winner is ${winner}`}
          </div>

          <div
            className={`flex items-center gap-1 font-medium ${
              gameOver ? "" : "h-7 w-16 rounded-sm bg-slate-800"
            }`}
            title="Start the game to unhide the contents"
          >
            {gameOver ? (
              cross ? (
                <div className="">
                  <span className="text-xl text-red-500">X</span> moves
                </div>
              ) : (
                <div className="">
                  <span className="text-xl text-blue-500">O</span> moves
                </div>
              )
            ) : (
              <span>&nbsp;</span>
            )}{" "}
          </div>
        </div>
      </div>
      <div className="flex flex-row items-center gap-2">
        <button title="Play solo" className="button bg-blue-600 text-blue-100">
          Play solo
        </button>
        <button
          title="Play with AI"
          className="button bg-yellow-500 text-yellow-100 hover:bg-yellow-600"
        >
          Play with AI
        </button>
      </div>
    </section>
  );
};

export default MultidimensionalArrays;
