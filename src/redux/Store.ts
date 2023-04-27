import {reduxBatch} from '@manaflair/redux-batch';
import {configureStore, getDefaultMiddleware} from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import {rootReducer} from './reducers/index';

const sagaMiddleware = createSagaMiddleware();

const middleware = [
  ...getDefaultMiddleware({
    immutableCheck: false,
    serializableCheck: false,
    thunk: true,
  }),
  sagaMiddleware,
];

const store = configureStore({
  reducer: rootReducer,
  middleware,
  enhancers: [reduxBatch],
});

export default store;
