import React from 'react';

import * as S from './styles';

export interface SpinnerProps {
  size?: number; // Size of the spinner in pixels
  color?: string; // Color of the spinner
}

const Spinner: React.FC<SpinnerProps> = ({ size = 40, color }) => {
  return (
      <S.SpinnerContainer  className={'loading'} >
        <S.Spinner size={size} color={color} />
      </S.SpinnerContainer>
    )
};

export default Spinner;