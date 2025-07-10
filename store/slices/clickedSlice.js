import { createSlice } from "@reduxjs/toolkit";

const initialState={
    value:false,
};

export const clickedSlice=createSlice({
    name:'isClicked',
    initialState,
    reducers:{
        toggle:state=>{
            state.value=!state.value;
        },
        setTrue:state=>{
            state.value=true;
        },
        setFalse:state=>{
            state.value=false;
        },

    },
});

export const {toggle,setTrue,setFalse}=clickedSlice.actions;
export default clickedSlice.reducer