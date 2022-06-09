import React from 'react';

interface BtnProps {
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const ButtonBack = ({ onClick }: BtnProps) => {
  return (
    <button onClick={ onClick }>zurück</button>
  )
}

export default ButtonBack