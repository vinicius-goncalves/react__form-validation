import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import {
    RouterProvider,
    createBrowserRouter,
    createRoutesFromElements,
} from 'react-router-dom';
import './index.css';
import LoginPage from './pages/LoginPage';
import ProtectedRoutes from './pages/ProtectedRoute';
import { loginAction } from './router/actions/login-action';
import store from './store';

createRoutesFromElements;
const router = createBrowserRouter([
    { path: '/login', element: <LoginPage />, action: loginAction },
    {
        path: '/',
        element: <ProtectedRoutes />,
    },
]);

const children = (
    <React.StrictMode>
        <Provider store={store}>
            <RouterProvider router={router} />
        </Provider>
    </React.StrictMode>
);

const root = createRoot(document.getElementById('root') as HTMLDivElement);
root.render(children);
