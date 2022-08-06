import { configureStore, ThunkAction } from '@reduxjs/toolkit';
import { combineReducers, Action } from "redux";

import { counterSlice } from './counterSlice';


const rootReducer = combineReducers( {
    [ counterSlice.name ]: counterSlice.reducer,
} );


export type AppState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, AppState, unknown, Action>;
export type AppReducerType = ReturnType<typeof rootReducer>;


let store = configureStore( {
    reducer: rootReducer,
    middleware: ( getDefaultMiddleware ) => getDefaultMiddleware()
} );



export { store };
