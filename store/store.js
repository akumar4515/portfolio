import { configureStore } from "@reduxjs/toolkit";
import clickedReducer from './slices/clickedSlice';

export const store =configureStore({
    reducer:{
        isClicked:clickedReducer,

    },
});