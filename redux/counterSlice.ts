import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import type { AppState } from './store';

interface CounterState
{
    value: number;
}

const initialState: CounterState = {
    value: 0,
};

const getGroupsBySchoolId = createAsyncThunk( "counterTest", async ( id: number, thunkApi ) =>
{
    return Promise.resolve( id );
} );

export const counterSlice = createSlice( {
    name: 'counter',
    initialState,
    reducers: {
        increment: ( state ) =>
        {
            state.value += 1;
        },
        decrement: ( state ) =>
        {
            state.value -= 1;
        },
        // Use the PayloadAction type to declare the contents of `action.payload`
        incrementByAmount: ( state, action: PayloadAction<number> ) =>
        {
            state.value += action.payload;
        },
    },
    extraReducers: ( builder ) =>
    {


        builder.addCase( getGroupsBySchoolId.fulfilled, ( state, action ) =>
        {
            console.log( action.meta );

            state.value = 1;
        } );
    },
} );

export const { increment, decrement, incrementByAmount } = counterSlice.actions;

export const selectCount = ( state: AppState ) => state.counter.value;
