import {combineReducers} from 'redux';
import UserReducer from './UserReducer';
import MessageReducer from './MessageReducer';

export const userReducer = combineReducers({
  user: UserReducer,
  messages: MessageReducer,
});
