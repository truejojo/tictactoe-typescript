interface ISquareProps {
  value: string;
}

const Square = ({value}: ISquareProps) => {
  return (
    <button type="button" className="square">{value}</button>
  )
}

export default Square