interface ISquareProps {
  value: string;
  onClick: () => void;
}

const Square = ({ value, onClick }: ISquareProps) => {
  return (
    <button type="button" className="square" onClick={onClick}>
      {value}
    </button>
  );
};

export default Square;
