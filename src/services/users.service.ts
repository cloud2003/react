import {client} from './axios';
import {UserItem} from '../utils/types';
import {AxiosResponse} from 'axios';

class Users {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  load(count: number = 10): Promise<AxiosResponse<Array<UserItem>>> {
    return client.get<Array<UserItem>>(`https://jsonplaceholder.typicode.com/users`);
    // return client.get<UsersResponseType>(`https://randomuser.me/api/?results=${count}`);
  }
  getUserInfo(id: number): Promise<AxiosResponse<UserItem>> {
    return client.get<UserItem>(`https://jsonplaceholder.typicode.com/users/${id}`);
  }
}

export default new Users();
