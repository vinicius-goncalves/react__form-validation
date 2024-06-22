import { createSlice } from '@reduxjs/toolkit';

const userExists = localStorage.getItem('user')
    ? (JSON.parse(localStorage.getItem('user') as string) as boolean)
    : false;

const initialState = {
    user: userExists,
};

const authSlice = createSlice({
    name: 'authSlice',
    reducers: {
        setAuthState(state, action) {
            state.user = action.payload;
        },
    },
    initialState,
});

export const authActions = authSlice.actions;

export default authSlice;
