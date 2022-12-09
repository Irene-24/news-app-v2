import { configureStore, ThunkAction, Middleware } from "@reduxjs/toolkit";
import { combineReducers, Action } from "redux";
import { createWrapper } from "next-redux-wrapper";

import { newsApi } from "@/services/newsApi";
import { jokesApi } from "@/services/jokesApi";

const middlewares: Middleware[] = [newsApi.middleware, jokesApi.middleware];

const rootReducer = combineReducers({
  [newsApi.reducerPath]: newsApi.reducer,
  [jokesApi.reducerPath]: jokesApi.reducer,
});

const makeStore = () =>
  configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(middlewares),
  });

export type AppStore = ReturnType<typeof makeStore>;
export type AppState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  AppState,
  unknown,
  Action
>;
export type AppReducerType = ReturnType<typeof rootReducer>;

export const wrapper = createWrapper<AppStore>(makeStore, { debug: true });
