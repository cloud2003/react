import {UserStateType} from './users/types';
import {LikesStateType} from './likes/types';

export interface AppState {
  users: UserStateType;
  likes: LikesStateType;
};
