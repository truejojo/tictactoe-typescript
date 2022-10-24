interface ISquareProps {
  value: string;
  onClick: () => void;
  isWinnigSquare: boolean;
}

const Square = ({ value, onClick, isWinnigSquare }: ISquareProps) => {
  return (
    <button
      type="button"
      className="square"
      onClick={onClick}
      style={{ fontWeight: isWinnigSquare ? "900" : "100" }}
    >
      {value}
    </button>
  );
};

export default Square;
