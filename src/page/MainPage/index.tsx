import * as React from 'react';
import {MainBox, H1Box} from './styles';
import {client} from '../../services/axios';
import {AxiosResponse} from 'axios';
import {UsersListView} from '../../components/UserList';
import {UsersResponseType, UserItem} from '../../utils/types';

interface IProps {
}

interface IState {
  persons: Array<UserItem>
}

export class MainPageView extends React.Component<IProps, IState> {
  state = {
    persons: []
  }

  async getUsers(): Promise<AxiosResponse<UsersResponseType>> {
    return await client.get<UsersResponseType>(`https://randomuser.me/api/?results=10`)
  }

  componentDidMount() {
    this.getUsers()
        .then(persons => {
          this.setState({persons: persons.data.results});
        });
  }

  render() {
    return (<>
      <MainBox>
        <H1Box>Записная книжка</H1Box>

        <UsersListView userData={this.state.persons}/>
      </MainBox>
    </>);
  }
}
