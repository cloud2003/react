import * as React from 'react';
import {MainBox, H1Box} from './styles';
import {UsersListContainer} from '../../components/UsersListContainer';

interface IProps {
}

interface IState {
  count: number
}

export class MainPageView extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      count: 10,
    };
    this.onChangeCount = this.onChangeCount.bind(this);
  };

  componentDidMount() {
    console.log('SECOND load'); // SECOND
  }

  onChangeCount(event: React.ChangeEvent<HTMLInputElement>): void {
    const value = event.target.value;
    this.setState({count: +value});
  };

  render() {
    // TODO: добавить LOADER
    return (
      <>
        <MainBox>
          <H1Box>Записная книжка</H1Box>
          <input type="text" value={this.state.count} onChange={this.onChangeCount} />
          <UsersListContainer count={this.state.count} />
        </MainBox>
      </>
    );
  }
}
