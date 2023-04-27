import {put, takeLatest} from 'redux-saga/effects';
import {T_UserActionTypes} from '../action/ActionTypes';

export function* UserSearchExecuteEffect() {
  try {
    yield takeLatest(
      T_UserActionTypes.USER_LOGIN_EXECUTE,
      UserRepositoryExecute,
    );
  } catch (error) {
    yield put({type: T_UserActionTypes.USER_LOGIN_FAILED});
  }
}
