import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
    name:"counter",
    initialState:{
        count : 0
    },
    reducers:{
        increment: (state)=> {
             state.count += 1;
        },
        decrement: (state)=>{
            state.count -= 1;
        },
        incremenrByAmount: (state, action)=>{
           state += action.payload;
        }
    },
});

export const { increment, decrement, incremenrByAmount } = counterSlice.actions; 
export default counterSlice.reducer;