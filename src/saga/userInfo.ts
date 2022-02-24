import {SagaIterator} from 'redux-saga';
import {call, put} from 'redux-saga/effects';
import users from '../services/users.service';
import {getUserInfoSuccess} from '../store/users/actions';
import {UserActionType} from '../store/users/types';

export default function* UserInfo(payload: UserActionType & {id: number}): SagaIterator {
  try {
    const response = yield call(() => users.getUserInfo(payload.id));
    yield put(getUserInfoSuccess(response.data));
  } catch (e) {
    // yield put({type: "USER_FETCH_FAILED", message: e.message});
  }
}
