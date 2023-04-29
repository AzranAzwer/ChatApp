import {combineReducers} from 'redux';
import {userReducer} from './reducers';
import {all} from 'redux-saga/effects';
import AppSagas from './sagas/index';

export const rootReducer = combineReducers({
  user: userReducer,
});

export function* rootSaga() {
  yield all([...AppSagas]);
}
