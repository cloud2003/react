import * as React from 'react';
import {Line, Wrapper} from './styles';


class Loader extends React.Component {
  render(): JSX.Element {
    return (
      <>
        <Wrapper>
          <Line long={true} />
          <Line />
        </Wrapper>
      </>
    );
  }
}

export default Loader;
