import React from "react";
import { IAppState } from "../App";

interface IStatusMessageProps {
  winner: string | null;
  current: IAppState;
}

const StatusMessage = ({ winner, current }: IStatusMessageProps) => {
  const noMovesLeft = current.board.every((el) => el !== null);

  return (
    <h2>
      {winner && `Winner is ${winner}`}
      {!winner &&  !noMovesLeft && `Next Player is ${current.isXNext ? "X" : "0"}`}
      {!winner && noMovesLeft && 'X and 0 tied'}     
    </h2>
  );
};

export default StatusMessage;
