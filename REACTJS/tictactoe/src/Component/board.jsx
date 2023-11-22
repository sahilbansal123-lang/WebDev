import React, { useState, useEffect } from "react";
import Square from "./square";

const Board = () => {
  const [State, setState] = useState(Array(9).fill(null));
  const [isXTurn, setIsXTurn] = useState(true);
  console.log(State);

  const checkWinner = () => {
    const winnerLogic = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let logic of winnerLogic) {
      const [a, b, c] = logic;
      if (State[a] !== null && State[a] === State[b] && State[a] === State[c]) {
        return State[a];
      }
    }
    return false;
  };

  const isWinner = checkWinner();

  const handleClick = (index) => {

    if(State[index] !== null) {
        return;
    }

    const copyState = [...State];
    copyState[index] = isXTurn ? "X" : "O";
    setState(copyState);
    setIsXTurn(!isXTurn);
  };

  const playAgain = () => {
    setState(Array(9).fill(null));
  };

  return (
    <div className="board-container">
      {isWinner ? (
        <>
          {isWinner} Won the Game{" "}
          <button onClick={playAgain}>Play Again</button>
        </>
      ) : (
        <>
          <h2>Player {isXTurn ? "X" : "O"} please Move</h2>

          <div className="board-row">
            <Square onClick={() => handleClick(0)} value={State[0]} />
            <Square onClick={() => handleClick(1)} value={State[1]} />
            <Square onClick={() => handleClick(2)} value={State[2]} />
          </div>
          <div className="board-row">
            <Square onClick={() => handleClick(3)} value={State[3]} />
            <Square onClick={() => handleClick(4)} value={State[4]} />
            <Square onClick={() => handleClick(5)} value={State[5]} />
          </div>
          <div className="board-row">
            <Square onClick={() => handleClick(6)} value={State[6]} />
            <Square onClick={() => handleClick(7)} value={State[7]} />
            <Square onClick={() => handleClick(8)} value={State[8]} />
          </div>
        </>
      )}
    </div>
  );
};
export default Board;
