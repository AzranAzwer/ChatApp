import {T_UserActionTypes, UserDispatchTypes} from '../action/ActionTypes';

export interface I_UserState {
  isLoading?: boolean;
  username?: string;
  password?: string;
}

const defaultState: I_UserState | null = {};

const reducer = (
  state: I_UserState = defaultState,
  action: UserDispatchTypes,
): I_UserState => {
  switch (action.type) {
    case T_UserActionTypes.USER_LOGIN_EXECUTE: {
      return {...state, isLoading: true};
    }

    case T_UserActionTypes.USER_LOGIN_SUCCESS: {
      const {payload} = action;
      return {
        ...state,
        isLoading: false,
        username: payload?.username,
        password: payload?.password,
      };
    }

    case T_UserActionTypes.USER_LOGIN_FAILED: {
      return {
        ...state,
      };
    }

    case T_UserActionTypes.USER_LOGOUT_SUCCESS: {
      return {
        username: undefined,
        password: undefined,
      };
    }

    case T_UserActionTypes.USER_LOGOUT_FAILED: {
      return {
        ...state,
      };
    }

    default:
      return state;
  }
};

export default reducer;
