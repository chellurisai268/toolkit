import {createSlice} from "@reduxjs/toolkit";
const initialState={
    count:0,
}
export const counterSlice=createSlice({
    name:"counter",
    initialState,
    reducers:{
        incCount:(state)=>{state.count++},
           decCount:(state)=>{state.count--},
            recCount:(state)=>{state.count=initialState.count}
    }
})
export const {incCount,decCount,recCount}=counterSlice.actions;

const counterReducer = counterSlice.reducer;
export default counterReducer;