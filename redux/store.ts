import { configureStore, ThunkAction, Middleware } from "@reduxjs/toolkit";
import { combineReducers, Action } from "redux";

import { counterSlice } from "./counterSlice";

import { newsApi } from "./apiSlices/newsApi";
import { jokesApi } from "./apiSlices/jokesApi";

const middlewares: Middleware[] = [newsApi.middleware];

const rootReducer = combineReducers({
  [counterSlice.name]: counterSlice.reducer,
  [newsApi.reducerPath]: newsApi.reducer,
  [jokesApi.reducerPath]: jokesApi.reducer,
});

export type AppState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  AppState,
  unknown,
  Action
>;
export type AppReducerType = ReturnType<typeof rootReducer>;

let store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(middlewares),
});

export { store };
