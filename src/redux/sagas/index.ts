import {fork} from 'redux-saga/effects';
import {UserLoginExecuteEffect} from './UserSaga';
import {SendMessageExecuteEffect} from './MessageSaga';

export default [fork(UserLoginExecuteEffect), fork(SendMessageExecuteEffect)];
