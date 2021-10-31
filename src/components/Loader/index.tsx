import * as React from 'react';
import {Line, Wrapper} from './styles';

interface IProps {}

export const Loader: React.FC<IProps> = () => {
  return (<>
    <Wrapper>
      <Line long={true} />
      <Line />
    </Wrapper>
  </>);
};
