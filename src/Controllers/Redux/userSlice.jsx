import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
    name:"user",
    initialState:[{}],
    reducers:{
        getUser:(state) => {
            state.push({name:"Nabil Khan"})
            state.push({name:"Afsana Miji"})
        }
    }
})

export default slice.reducers;

export const {getUser} = slice.actions;