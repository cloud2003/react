import {UserAction, UserActionType} from './types';
import {UserItem} from '../../utils/types';

// ACTION CREATORS
export const initUsersLoading = (count: number): UserActionType => ({
  type: UserAction.USERS_LOADING_INIT,
  count,
});

export const successUsersLoading = (list: Array<UserItem>): UserActionType => ({
  type: UserAction.USERS_LOADING_SUCCESS,
  userList: list,
});

export const failUsersLoading = (): UserActionType => ({
  type: UserAction.USERS_LOADING_FAIL,
});

export const getUserInfoInit = (id: number): UserActionType => ({
  type: UserAction.USER_INFO_INIT,
  id,
});

export const getUserInfoSuccess = (userInfo:UserItem): UserActionType => ({
  type: UserAction.USER_INFO_SUCCESS,
  userInfo,
});
