import {T_UserActionTypes, UserDispatchTypes} from '../action/ActionTypes';

export interface I_UserState {
  isLoading: boolean;
  username?: string;
  password?: string;
}

const defaultState: I_UserState = {
  isLoading: false,
};

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
        isLoading: false,
      };
    }

    default:
      return state;
  }
};

export default reducer;
