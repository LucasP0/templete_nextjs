import * as React from 'react';
import * as Styled from './styles';

export interface ICloneMeProps {
  text: string;
}

export const CloneMe = ({ text = 'CloneMe' }: ICloneMeProps) => {
  return (
    <Styled.Wrapper>
      <h1>{text}</h1>
    </Styled.Wrapper>
  );
};
