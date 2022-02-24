// REDUCERS
import {UserAction, UserActionType, UserStateType} from './types';

const initState: UserStateType = {
  isLoading: false,
  isLoadingUserInfo: false,
  userList: [],
};

export default (state = initState, action: UserActionType): UserStateType => {
  switch (action.type) {
    case UserAction.USERS_LOADING_INIT:
      return {
        ...state,
        isLoading: true,
      };
    case UserAction.USERS_LOADING_SUCCESS:
      return {
        ...state,
        isLoading: false,
        userList: action.userList,
      };
    case UserAction.USERS_LOADING_FAIL:
      return {
        ...state,
        isLoading: false,
      };
    case UserAction.USER_INFO_INIT:
      return {
        ...state,
        isLoadingUserInfo: true,
        userInfo: undefined,
      };
    case UserAction.USER_INFO_SUCCESS:
      return {
        ...state,
        userInfo: action.userInfo,
        isLoadingUserInfo: false,
      };
    default:
      return state;
  }
};

// вызывается каждый раз, когда делается диспатч(событие)
