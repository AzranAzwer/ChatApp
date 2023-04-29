import {createSelector} from '@reduxjs/toolkit';
import {RootState} from '../Store';
import {I_MessageState} from '../reducers/MessageReducer';

export const GetMessages = () =>
  createSelector(
    (state: RootState) => state.user.messages,
    (messages: I_MessageState) => messages.messages,
  );
