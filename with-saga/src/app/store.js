import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import createSagaMiddleware from "redux-saga";
import sagas from "../features/counter/sagas";


let sagaMiddleware = createSagaMiddleware();
const middleware = [...getDefaultMiddleware({ thunk: false }), sagaMiddleware];

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
  middleware
});

sagaMiddleware.run(sagas);