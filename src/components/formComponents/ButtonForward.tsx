import React from 'react';

interface BTNProps {
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const ButtonForward = ({ onClick }: BTNProps ) => {
  return (
    <button onClick={ onClick }>weiter</button>
  )
}

export default ButtonForward