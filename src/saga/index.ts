import {SagaIterator} from 'redux-saga';
import {takeLatest} from 'redux-saga/effects';
import {UserAction} from '../store/users/types';
import UserInfo from './userInfo';

export default function* main(): SagaIterator {
  yield takeLatest(UserAction.USER_INFO_INIT, UserInfo);
};
