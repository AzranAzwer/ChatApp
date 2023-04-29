import {put} from 'redux-saga/effects';
import {T_UserActionTypes} from '../../action/ActionTypes';
import AsyncStorage from '@react-native-async-storage/async-storage';

export function* UserLoginRepositoryExecute(action: any) {
  const {payload} = action;
  try {
    /**
     * api calls if we need
     */
    const jsonValue = JSON.stringify(payload);
    yield AsyncStorage.setItem('@user_Data', jsonValue);

    yield put({
      type: T_UserActionTypes.USER_LOGIN_SUCCESS,
      payload,
    });
  } catch (error) {
    yield put({type: T_UserActionTypes.USER_LOGIN_FAILED});
  }
}
