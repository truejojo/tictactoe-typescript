import React from 'react'

interface ISquareProps {
  value: string;
}

const Square = ({value}: ISquareProps) => {
  return (
    <button type="button">{value}</button>
  )
}

export default Square