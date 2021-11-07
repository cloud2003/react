import {LikeActions, LikeActionType, LikesStateType} from './types';

const initState: LikesStateType = {
  likes: [],
};

export default (state = initState, action: LikeActionType): LikesStateType => {
  switch (action.type) {
    case LikeActions.SET_USERS_LIKES:
      if (action.flag) {
        return {
          ...state,
          likes: [...state.likes, action.email],
        };
      }
      return {
        ...state,
        likes: state.likes.filter((i) => i !== action.email),
      };
    default:
      return state;
  }
};
