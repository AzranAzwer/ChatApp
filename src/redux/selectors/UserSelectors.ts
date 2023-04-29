import {createSelector} from '@reduxjs/toolkit';
import {RootState} from '../Store';
import {I_UserState} from '../reducers/UserReducer';

export const GetCurrentUser = () =>
  createSelector(
    (state: RootState) => state.user.user,
    (user: I_UserState) => user,
  );
