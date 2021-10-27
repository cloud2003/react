import * as React from 'react';
import {UsersListView} from '../UserList';
import {UserItem} from '../../utils/types';
import users from '../../services/users.service';
import Loader from '../Loader';

interface IProps {
  count: number
}

interface IState {
  persons: Array<UserItem>;
  isLoading: boolean
}

export class UsersListContainer extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      persons: [],
      isLoading: false,
    };
  }

  updateUsers(n: number) {
    this.setState({
      isLoading: true,
    });
    users.load(n).then((data) => {
      this.setState({
        persons: data.data.results,
        isLoading: false,
      });
    });
  }

  componentDidMount() {
    this.updateUsers(+this.props.count);
  }

  componentDidUpdate(prevProps: IProps, prevState: IState): void {
    if (this.props.count !== prevProps.count) {
      this.updateUsers(+this.props.count);
    }
  }

  render() {
    return (<>
      {this.state.isLoading && <Loader />}
      <UsersListView userData={this.state.persons} />
    </>);
  }
}
