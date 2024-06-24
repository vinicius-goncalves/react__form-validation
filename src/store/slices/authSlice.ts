import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { AppDispatch, RootState } from '..';

// const userExists = localStorage.getItem('user')
//     ? (JSON.parse(localStorage.getItem('user') as string) as boolean)
//     : false;
export const getUser = createAsyncThunk<
    boolean,
    null,
    { dispatch: AppDispatch; state: RootState }
>('auth/getUser', () => {
    const user = localStorage.getItem('user');
    const v = user ? JSON.parse(user) : false;
    return v;
});

export const setAuthStatus = createAsyncThunk<
    boolean,
    boolean,
    { dispatch: AppDispatch }
>('auth/setAuthStatus', (status: boolean) => {
    try {
        localStorage.setItem('user', JSON.stringify(status));
        return status;
    } catch (err) {
        console.warn(err);
        return false;
    }
});

const initialState = {
    user: false,
};

const authSlice = createSlice({
    name: 'authSlice',
    initialState,
    reducers: {},
    // reducers: {
    //     setAuthStatus(state, action) {
    //         state.user = action.payload;
    //     },
    // },,
    extraReducers: (builder) => {
        builder.addCase(getUser.fulfilled, (state, action) => {
            state.user = action.payload;
        });

        builder.addCase(setAuthStatus.fulfilled, (state, action) => {
            state.user = action.payload;
        });
    },
});

export const authActions = authSlice.actions;

export default authSlice;
