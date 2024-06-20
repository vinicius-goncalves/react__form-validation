import React from 'react';
import { createRoot } from 'react-dom/client';
import {
    RouterProvider,
    createBrowserRouter,
    createRoutesFromElements,
} from 'react-router-dom';
import './index.css';
import Login, { loginAction } from './pages/Login';
import ProtectedRoutes from './pages/ProtectedRoutes';

createRoutesFromElements;
const router = createBrowserRouter([
    { path: '/login', element: <Login />, action: loginAction },
    {
        path: '/',
        element: <ProtectedRoutes />,
    },
]);

const children = (
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);

const root = createRoot(document.getElementById('root') as HTMLDivElement);
root.render(children);
