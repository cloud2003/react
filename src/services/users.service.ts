import {client} from './axios';
import {UsersResponseType} from '../utils/types';

class Users {
  load(count: number = 10) {
    return client.get<UsersResponseType>(`https://randomuser.me/api/?results=${count}`);
  }
}

export default new Users();
