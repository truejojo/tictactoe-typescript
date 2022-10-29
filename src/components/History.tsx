import React from "react";
import { IAppState } from "../App";

interface IHistoryProps {
  history: IAppState[];
  moveTo: (move: number) => void;
  currentMove: number;
}

const History = ({ history, moveTo, currentMove }: IHistoryProps) => {
  return (
    <div className="history-wrapper">
      <ul className="history">
        {history.map((_, move) => {
          return (
            <li key={move}>
              <button
                className={`btn-move ${move === currentMove ? 'active' : ''}`}
                type="button"
                onClick={() => moveTo(move)}
              >
                {move === 0 ? "Go to game start" : `Go to move #${move}`}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default History;
