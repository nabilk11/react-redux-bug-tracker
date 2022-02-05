import { createSlice } from "@reduxjs/toolkit";
import {retrieveBugs} from '../bugController';

const slice = createSlice({
    name: "bug",
    initialState:[],
    reducers:{
        // whatever is taken from the retrieve bugs will set the state
        getBugs:state => retrieveBugs(),

        
        createBugs:(state, actions) => {

        },
        updateBugs:(state, actions) => {

        },
        markComplete:(state, action) => {
            
        },
    }
})

export default slice.reducer;

export const {getBugs, createBugs, markComplete} = slice.actions;