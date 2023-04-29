import {put} from 'redux-saga/effects';
import {T_UserActionTypes} from '../../action/ActionTypes';

export function* MessageSendRepositoryExecute(action: any) {
  const {payload} = action;
  try {
    /**
     * api calls if we need
     */

    yield put({
      type: T_UserActionTypes.SEND_MESSAGE_SUCCESS,
      payload,
    });
  } catch (error) {
    yield put({type: T_UserActionTypes.SEND_MESSAGE_FAILED});
  }
}
