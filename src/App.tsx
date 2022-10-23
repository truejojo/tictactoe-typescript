import { useState } from "react";
import Board from "./components/Board";
import { calculateWinner } from "./utils/helper";
import "./styles/index.scss";

const initialBoardState = Array(9).fill("");

const App = () => {
  const [history, setHistory] = useState([
    {
      board: initialBoardState,
      isXNext: true,
    },
  ]);
  const [currentMove, setCurrentMove] = useState(0);
  const current = history[currentMove];

  const winner = calculateWinner(current.board);
  console.log(`winner ${winner}`);
  const message = winner
    ? `Winner is ${winner}`
    : `Next Player is ${current.isXNext ? "X" : "0"}`;

  const handleSquareClick = (position: number) => {
    if (current.board[position] || winner) return;

    setHistory((prevHistory) => {
      const last = prevHistory[prevHistory.length - 1];

      const newBoard = last.board.map((square, index) => {
        if (index === position) {
          return last.isXNext ? "X" : "0";
        }

        return square;
      });
      return prevHistory.concat({ board: newBoard, isXNext: !last.isXNext});
    });
    setCurrentMove(prevCurrentMove => prevCurrentMove + 1);
  };

  return (
    <div className="app">
      <h1>Tic Tac Toe</h1>
      <h2>{message}</h2>
      <Board board={current.board} handleSquareClick={handleSquareClick} />
    </div>
  );
};

export default App;
