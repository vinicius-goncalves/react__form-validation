import { useCallback, useEffect } from 'react';
import { getUser, setAuthStatus } from '../store/slices/authSlice';
import { useAppDispatch } from './useAppDispatch';
import { useAppSelector } from './useAppSelector';

export function useAuth() {
    const dispatch = useAppDispatch();
    const user = useAppSelector((state) => state.authSlice.user);

    const login = useCallback(() => {
        dispatch(setAuthStatus(true));
    }, [dispatch]);

    const logout = useCallback(() => {
        dispatch(setAuthStatus(false));
    }, [dispatch]);

    useEffect(() => {
        dispatch(getUser(null));
    }, [dispatch]);

    return {
        user,
        login,
        logout,
    };
}

export default useAuth;
