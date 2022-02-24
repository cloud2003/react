import {UserItem} from '../../utils/types';

// ACTIONS
export enum UserAction {
  USERS_LOADING_INIT = 'USERS_LOADING_INIT',
  USERS_LOADING_SUCCESS = 'USERS_LOADING_SUCCESS',
  USERS_LOADING_FAIL = 'USERS_LOADING_FAIL',
  USER_INFO_INIT = 'USER_INFO_INIT',
  USER_INFO_SUCCESS = 'USER_INFO_SUCCESS',
}

export interface UserStateType {
  isLoading: boolean,
  isLoadingUserInfo: boolean,
  userList: Array<UserItem>
  userInfo?: UserItem,
  selectedId?: number,
};

interface InitUsersLoadingAction {
  type: UserAction.USERS_LOADING_INIT,
  count: number,
};
interface SuccessUsersLoadingAction {
  type: UserAction.USERS_LOADING_SUCCESS;
  userList: Array<UserItem>,
};
interface FailUsersLoadingAction {
  type: UserAction.USERS_LOADING_FAIL
};
interface UserInfoInitAction {
  type: UserAction.USER_INFO_INIT,
  id: number,
};
interface UserInfoSuccessAction {
  type: UserAction.USER_INFO_SUCCESS,
  userInfo: UserItem,
};

export type UserActionType = InitUsersLoadingAction |
  SuccessUsersLoadingAction |
  FailUsersLoadingAction |
  UserInfoInitAction |
  UserInfoSuccessAction;
