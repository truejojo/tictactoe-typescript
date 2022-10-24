import Square from "./Square";

interface IBoardProps {
  board: string[];
  handleSquareClick: (position: number) => void;
  winningSquares: number[];
}

const Board = ({ board, handleSquareClick, winningSquares }: IBoardProps) => {
  const renderSquare = (position: number) => {
    const isWinnigSquare = winningSquares.includes(position)

    return <Square
      value={board[position]}
      onClick={() => handleSquareClick(position)}
      isWinnigSquare={isWinnigSquare}
    />
  };

  return (
    <div className="board">
      <div className="board-row">
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className="board-row">
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div className="board-row">
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
    </div>
  );
};

export default Board;
