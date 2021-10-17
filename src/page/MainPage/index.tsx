import * as React from 'react';
import {MainBox, H1Box} from './styles';
import {UsersListView} from '../../components/UserList';
import axios from 'axios';
import {ResponseType, UsersListItem} from "../../utils/types";

interface IProps {}
interface IState {
  persons: Array<UsersListItem>
}

export class MainPageView extends React.Component<IProps, IState> {
  state = {
    persons: []
  }
  componentDidMount() {
    axios.get<ResponseType>(`https://randomuser.me/api/?results=10`)
         .then(response => {
           const persons: Array<UsersListItem> = response.data.results;
           this.setState({ persons });
         })
  }
  render() {
    return (<>
      <MainBox>
        <H1Box>Записная книжка</H1Box>

        <UsersListView userData={this.state.persons} />
      </MainBox>
    </>);
  }
}
