import { useState } from "react";
import Board from "./components/Board";
import History from "./components/History";
import StatusMessage from "./components/StatusMessage";
import calculateWinner from "./utils/helper";
import "./styles/root.scss";
import "./styles/index.scss";

const INITIAL_GAME_STATE = [{ board: Array(9).fill(null), isXNext: true }];

export interface IAppState {
  board: string[];
  isXNext: boolean;
}

const App = () => {
  const [history, setHistory] = useState<IAppState[]>(INITIAL_GAME_STATE);
  const [currentMove, setCurrentMove] = useState<number>(0);
  const current = history[currentMove];

  const { winner, winningSquares } = calculateWinner(current.board);

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
      return prevHistory.concat({ board: newBoard, isXNext: !last.isXNext });
    });
    setCurrentMove((prevCurrentMove) => prevCurrentMove + 1);
  };

  const moveTo = (move: number) => {
    setCurrentMove(move);
  };

  const onNewGame = () => {
    setHistory(INITIAL_GAME_STATE);
    setCurrentMove(0);
  };

  return (
    <div className="app">
      <h1>
        Tic <span className="text-green">Tac</span> Toe
      </h1>
      <StatusMessage winner={winner} current={current} />
      <Board
        board={current.board}
        handleSquareClick={handleSquareClick}
        winningSquares={winningSquares}
      />
      <button
        type="button"
        onClick={onNewGame}
        className={`btn-reset ${winner ? "active" : ""}`}
      >
        Start new game
      </button>
      <h2 style={{fontWeight: 'normal'}}>Current game history</h2>
      <History history={history} moveTo={moveTo} currentMove={currentMove} />
      <div className="bg-balls" />
    </div>
  );
};

export default App;
