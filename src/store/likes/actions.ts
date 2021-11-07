// ACTION CREATORS
import {LikeActions, LikeActionType} from './types';

export const setUserLike = (email: string, flag: boolean): LikeActionType => ({
  type: LikeActions.SET_USERS_LIKES,
  email,
  flag,
});
