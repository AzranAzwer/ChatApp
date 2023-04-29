import {Dispatch} from 'redux';
import {
  T_ChatDataType,
  T_UserActionTypes,
  UserDispatchTypes,
} from './ActionTypes';

export const sendMesage =
  (payload: T_ChatDataType) => (dispatch: Dispatch<UserDispatchTypes>) => {
    dispatch({
      type: T_UserActionTypes.SEND_MESSAGE_EXECUTE,
      payload,
    });
  };
