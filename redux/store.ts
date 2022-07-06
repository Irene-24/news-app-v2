import { configureStore, ThunkAction } from '@reduxjs/toolkit';
import { combineReducers, Action } from "redux";

import
{
    persistStore,
    createMigrate,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
    Persistor,
} from "redux-persist";


import { counterSlice } from './counterSlice';

const isClient = typeof window !== 'undefined';

let persistor: Persistor;


const rootReducer = combineReducers( {
    [ counterSlice.name ]: counterSlice.reducer,
} );

const initialState = {
    [ counterSlice.name ]: counterSlice.getInitialState()
};


export type AppState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, AppState, unknown, Action>;
export type AppReducerType = ReturnType<typeof rootReducer>;


let store = configureStore( {
    reducer: rootReducer,
    middleware: ( getDefaultMiddleware ) => getDefaultMiddleware()
} );


//do local storage import on client, else it breaks 
if ( isClient )
{
    const { persistReducer } = require( 'redux-persist' );
    const storage = require( 'redux-persist/lib/storage' ).default;
    const autoMergeLevel2 = require( "redux-persist/es/stateReconciler/autoMergeLevel2" ).default;
    const expireIn = require( "redux-persist-transform-expire-in" ).default;

    const expires = 4 * 60 * 60 * 1000; // expire in 6h
    const expirationKey = "expirationKey";

    const migrations = {
    };

    const persistConfig = {
        key: "root",
        storage: storage,
        stateReconciler: autoMergeLevel2,
        migrate: createMigrate( migrations, { debug: false } ),
        transforms: [ expireIn( expires, expirationKey, initialState ) ]
    };

    const persistedReducer = persistReducer( persistConfig, rootReducer );

    store = configureStore( {
        reducer: persistedReducer,
        middleware: ( getDefaultMiddleware ) => getDefaultMiddleware( {
            serializableCheck: {
                ignoredActions: [ FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER ],
            },
        } )
    } );

    persistor = persistStore( store );

}

export { store, persistor };
