import { createSlice } from "@reduxjs/toolkit";
// redux slice used for login authentication
const slice = createSlice({
    name: "auth",
    initialState:{
        admin: false,
        LoggedIn: false,
    },
    // reducer functions for slice
    reducers: {
        signIn:(state, action) => {
            const {name, password} = action.payload;
            state.LoggedIn = true;
            state.admin = true;
        },
        signOut:(state) => {
            state.LoggedIn = false;
            state.admin = false;
        },
        createUser:(state, action) => {

        }
    }
})

export default slice.reducer;

export const {signIn, signOut, createUser} = slice.actions;