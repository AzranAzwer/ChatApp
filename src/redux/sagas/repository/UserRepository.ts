import {put} from 'redux-saga/effects';
import {T_UserActionTypes} from '../../action/ActionTypes';

export function* UserLoginRepositoryExecute(action: {
  payload: {username: string; password: string};
}) {
  const {payload} = action;
  try {
    /**
     * api calls if we need
     */

    yield put({
      type: T_UserActionTypes.USER_LOGIN_SUCCESS,
      payload,
    });
  } catch (error) {
    yield put({type: T_UserActionTypes.USER_LOGIN_FAILED});
  }
}
