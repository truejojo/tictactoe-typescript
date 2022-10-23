import { useState } from "react";
import Board from "./components/Board";
import { calculateWinner } from "./utils/helper";
import "./styles/index.scss";

const initialBoardState = Array(9).fill("");

const App = () => {
  const [board, setBoard] = useState<string[]>(initialBoardState);
  const [isXNext, setIsXNext] = useState(false);

  const winner = calculateWinner(board);
  console.log(`winner ${winner}`);
  const message = winner
    ? `Winner is ${winner}`
    : `Next Player is ${isXNext ? "X" : "0"}`;

  const handleSquareClick = (position: number) => {
    if (board[position] || winner) return;

    setBoard((prevBoard) => {
      return prevBoard.map((square, index) => {
        if (index === position) {
          return isXNext ? "X" : "0";
        }

        return square;
      });
    });
    setIsXNext((prevIsXNext) => !prevIsXNext);
  };

  return (
    <div className="app">
      <h1>Tic Tac Toe</h1>
      <h2>{message}</h2>
      <Board board={board} handleSquareClick={handleSquareClick} />
    </div>
  );
};

export default App;
