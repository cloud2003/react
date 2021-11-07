// STATE
export interface LikesStateType {
  likes: Array<string>
}

// ACTIONS
export enum LikeActions {
  // eslint-disable-next-line no-unused-vars
  SET_USERS_LIKES = 'SET_USERS_LIKES',
}

interface SetLikeAction {
  type: LikeActions.SET_USERS_LIKES;
  email: string;
  flag: boolean;
};

export type LikeActionType = SetLikeAction;


