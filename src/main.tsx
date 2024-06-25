import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import {
    RouterProvider,
    createBrowserRouter,
    createRoutesFromElements,
} from 'react-router-dom';
import './index.css';
import ContactUsPage from './pages/ContactUsPage';
import LoginPage from './pages/LoginPage';
import ProtectedPage from './pages/ProtectedRoute';
import { contactUsAction } from './router/actions/contact-us.action';
import { loginAction } from './router/actions/login.action';
import store from './store';

createRoutesFromElements;
const router = createBrowserRouter([
    { path: '/login', element: <LoginPage />, action: loginAction },
    {
        path: '/',
        element: <ProtectedPage />,
        children: [
            {
                path: 'contactUs',
                element: <ContactUsPage />,
                action: contactUsAction,
            },
        ],
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
