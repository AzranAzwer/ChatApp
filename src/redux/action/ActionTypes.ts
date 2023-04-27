export default interface I_BaseActionType<T> {
  type: T;
};

export enum T_UserActionTypes {
  USER_LOGIN_EXECUTE = '@@USER_LOGIN_EXECUTE@@',
  USER_LOGIN_SUCCESS = '@@USER_LOGIN_SUCCESS@@',
  USER_LOGIN_FAILED = '@@USER_LOGIN_FAILED@@',
}

export interface I_UserPayloadType {
  username: string;
  password: string;
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

export type UserDispatchTypes =
  | DT_UserLoginExecute
  | DT_UserLoginSuccess
  | DT_UserLoginFailed;
