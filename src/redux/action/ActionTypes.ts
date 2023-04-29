export default interface I_BaseActionType<T> {
  type: T;
}

export enum T_UserActionTypes {
  USER_LOGIN_EXECUTE = '@@USER_LOGIN_EXECUTE@@',
  USER_LOGIN_SUCCESS = '@@USER_LOGIN_SUCCESS@@',
  USER_LOGIN_FAILED = '@@USER_LOGIN_FAILED@@',
  SEND_MESSAGE_EXECUTE = '@@SEND_MESSAGE_EXECUTE@@',
  SEND_MESSAGE_SUCCESS = '@@SEND_MESSAGE_SUCCESS@@',
  SEND_MESSAGE_FAILED = '@@SEND_MESSAGE_FAILED@@',
  USER_LOGOUT_SUCCESS = '@@USER_LOGOUT_SUCCESS@@',
  USER_LOGOUT_FAILED = '@@USER_LOGOUT_FAILED@@',
}

export interface I_UserPayloadType {
  username: string;
  password: string;
}

export interface T_ChatDataType {
  message: string;
  sender: string;
  time: string;
}

interface DT_UserLoginExecute
  extends I_BaseActionType<T_UserActionTypes.USER_LOGIN_EXECUTE> {
  payload?: I_UserPayloadType;
}
interface DT_UserLoginSuccess
  extends I_BaseActionType<T_UserActionTypes.USER_LOGIN_SUCCESS> {
  payload?: I_UserPayloadType;
}

interface DT_UserLoginFailed
  extends I_BaseActionType<T_UserActionTypes.USER_LOGIN_FAILED> {}

interface DT_SendMessageExecute
  extends I_BaseActionType<T_UserActionTypes.SEND_MESSAGE_EXECUTE> {
  payload: T_ChatDataType;
}
interface DT_SendMessageSuccess
  extends I_BaseActionType<T_UserActionTypes.SEND_MESSAGE_SUCCESS> {
  payload: T_ChatDataType;
}

interface DT_SendMessageFailed
  extends I_BaseActionType<T_UserActionTypes.SEND_MESSAGE_FAILED> {}

interface DT_UserLogoutSuccess
  extends I_BaseActionType<T_UserActionTypes.USER_LOGOUT_SUCCESS> {}

interface DT_UserLogoutFailed
  extends I_BaseActionType<T_UserActionTypes.USER_LOGOUT_FAILED> {}

export type UserDispatchTypes =
  | DT_UserLoginExecute
  | DT_UserLoginSuccess
  | DT_UserLoginFailed
  | DT_SendMessageExecute
  | DT_SendMessageSuccess
  | DT_SendMessageFailed
  | DT_UserLogoutSuccess
  | DT_UserLogoutFailed;
