import {client} from './axios';
import {UsersResponseType} from '../utils/types';
import {AxiosResponse} from 'axios';

class Users {
  load(count: number = 10): Promise<AxiosResponse<UsersResponseType>> {
    return client.get<UsersResponseType>(`https://randomuser.me/api/?results=${count}`);
  }
}

export default new Users();
