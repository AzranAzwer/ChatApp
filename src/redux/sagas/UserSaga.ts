import {put, takeLatest} from 'redux-saga/effects';
import {T_UserActionTypes} from '../action/ActionTypes';
import {UserLoginRepositoryExecute} from './repository/UserRepository';

export function* UserLoginExecuteEffect() {
  try {
    yield takeLatest(
      T_UserActionTypes.USER_LOGIN_EXECUTE,
      UserLoginRepositoryExecute,
    );
  } catch (error) {
    yield put({type: T_UserActionTypes.USER_LOGIN_FAILED});
  }
}
