import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: null,
    access_token: null
};

export const AuthSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        login(state, action) {
            state.user = action.payload.user;
            state.access_token = action.payload.token;
        },
        setUser(state, action) {
            state.user = action.payload;
        }
    }
});

export default AuthSlice.reducer;