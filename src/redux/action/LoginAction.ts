import {Dispatch} from 'redux';
import {
  I_UserPayloadType,
  T_UserActionTypes,
  UserDispatchTypes,
} from './ActionTypes';

export const userLogin =
  (payload: I_UserPayloadType) => (dispatch: Dispatch<UserDispatchTypes>) => {
    dispatch({
      type: T_UserActionTypes.USER_LOGIN_EXECUTE,
      payload,
    });
  };

export const userLogout = () => (dispatch: Dispatch<UserDispatchTypes>) => {
  dispatch({
    type: T_UserActionTypes.USER_LOGOUT_SUCCESS,
  });
};
