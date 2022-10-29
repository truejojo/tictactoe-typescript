interface ISquareProps {
  value: string;
  onClick: () => void;
  isWinnigSquare: boolean;
}

const Square = ({ value, onClick, isWinnigSquare }: ISquareProps) => {
  return (
    <button
      type="button"
      className={`square ${isWinnigSquare ? "winning" : ""} ${
        value === "X" ? "text-green" : "text-orange"
      }`}
      onClick={onClick}
    >
      {value}
    </button>
  );
};

export default Square;

