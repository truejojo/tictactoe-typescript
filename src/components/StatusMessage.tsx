import React from "react";
import { IAppState } from "../App";

interface IStatusMessageProps {
  winner: string | null;
  current: IAppState;
}

const StatusMessage = ({ winner, current }: IStatusMessageProps) => {
  const noMovesLeft = current.board.every((el) => el !== null);

  return (
    <div className="status-message">
      {winner && (
        <>
          Winner is{' '}
          <span className={winner === "X" ? 'text-green' : 'text-orange'}>
            {winner}
          </span>
        </>
      )}
      {!winner &&  !noMovesLeft && (
        <>
          Next player is{' '}
          <span className={current.isXNext ? 'text-green' : 'text-orange'}>
            {current.isXNext ? 'X' : '0'}{' '}
          </span>
        </>
      )}
      {!winner && noMovesLeft && (
        <>
          <span className="text-green">X</span> and {' '}
          <span className="text-orange">0</span>
        </>
      )}     
    </div>
  );
};

export default StatusMessage;
