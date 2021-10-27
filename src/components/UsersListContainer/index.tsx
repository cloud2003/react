import * as React from 'react';
import {UsersListView} from '../UserList';
import {UserItem} from '../../utils/types';
import users from '../../services/users.service';

interface IProps {
  count: number
}

interface IState {
  persons: Array<UserItem>
}

export class UsersListContainer extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      persons: [],
    };
  }

  updateUsers(n: number) {
    users.load(n).then((data) => {
      this.setState({persons: data.data.results});
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
      <UsersListView userData={this.state.persons} />
    </>);
  }
}
