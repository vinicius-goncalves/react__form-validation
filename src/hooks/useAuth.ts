import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { authActions } from '../store/slices/authSlice';
import { useAppSelector } from './useAppSelector';

export function useAuth() {
    const dispatch = useDispatch();
    const user = useAppSelector((state) => state.authSlice.user);

    const login = useCallback(() => {
        dispatch(authActions.setAuthState(true));
    }, [dispatch]);

    const logout = useCallback(() => {
        dispatch(authActions.setAuthState(false));
    }, [dispatch]);

    const getUser = useCallback(() => {
        return user;
    }, [user]);

    return {
        login,
        logout,
        getUser,
    };
}

export default useAuth;
