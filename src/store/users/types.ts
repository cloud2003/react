import {UserItem} from '../../utils/types';

// ACTIONS
export enum UserAction {
  // eslint-disable-next-line no-unused-vars
  USERS_LOADING_INIT = 'USERS_LOADING_INIT',
  // eslint-disable-next-line no-unused-vars
  USERS_LOADING_SUCCESS = 'USERS_LOADING_SUCCESS',
  // eslint-disable-next-line no-unused-vars
  USERS_LOADING_FAIL = 'USERS_LOADING_FAIL',
}

export interface UserStateType {
  isLoading: boolean,
  userList: Array<UserItem>
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

export type UserActionType = InitUsersLoadingAction | SuccessUsersLoadingAction | FailUsersLoadingAction;
