import React from 'react';

import * as S from './styles'

type ButtonProps = {
  text: string;
  onClick: () => void;
}

const Button: React.FC<ButtonProps> = ({ text, onClick }) => {
  return (
    <S.Button onClick={onClick}>
      {text}
    </S.Button>
  );
};

export default Button;