import React from "react";
import { IAppState } from "../App";

interface IHistoryProps {
  history: IAppState[];
  moveTo: (move: number) => void;
  currentMove: number;
}

const History = ({ history, moveTo, currentMove }: IHistoryProps) => {
  return (
    <ul>
      {history.map((_, move) => {
        return (
          <li key={move}>
            <button
              style={{
                fontWeight: move === currentMove ? "bold" : "normal",
              }}
              type="button"
              onClick={() => moveTo(move)}
            >
              {move === 0 ? "Go to game start" : `Go to move #${move}`}
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default History;
