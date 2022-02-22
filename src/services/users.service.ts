import {client} from './axios';
import {UserItem} from '../utils/types';
import {AxiosResponse} from 'axios';

class Users {
  load(count: number = 10): Promise<AxiosResponse<Array<UserItem>>> {
    return client.get<Array<UserItem>>(`https://jsonplaceholder.typicode.com/users`);
    // return client.get<UsersResponseType>(`https://randomuser.me/api/?results=${count}`);
  }
}

export default new Users();
