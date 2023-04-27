import {fork} from 'redux-saga/effects';
import {UserLoginExecuteEffect} from './UserSaga';

export default [fork(UserLoginExecuteEffect)];
