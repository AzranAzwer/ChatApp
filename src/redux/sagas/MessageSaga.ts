import {put, takeLatest} from 'redux-saga/effects';
import {T_UserActionTypes} from '../action/ActionTypes';
import {MessageSendRepositoryExecute} from './repository/MessageRepository';

export function* SendMessageExecuteEffect() {
  try {
    yield takeLatest(
      T_UserActionTypes.SEND_MESSAGE_EXECUTE,
      MessageSendRepositoryExecute,
    );
  } catch (error) {
    yield put({type: T_UserActionTypes.SEND_MESSAGE_FAILED});
  }
}
