import { NavLink, Navigate, Outlet } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

function ProtectedRoute(): JSX.Element {
    const { user } = useAuth();

    if (!user) {
        return <Navigate to="login" />;
    }

    return (
        <div className="bg-c-gray">
            <header className="min-w-full p-2 fixed">
                <nav className="flex justify-between">
                    <ul>
                        <li>
                            <NavLink
                                to="contactUs"
                                className={({ isActive }) =>
                                    isActive ? 'font-bold' : 'hover:underline'
                                }>
                                Contact Us
                            </NavLink>
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <button className="hover:opacity-80 bg-black text-white px-3.5 py-1.5 rounded-md">
                                Logout
                            </button>
                        </li>
                    </ul>
                </nav>
            </header>
            <main className="min-h-screen bg-c-gray">
                <Outlet />
            </main>
        </div>
    );
}

export default ProtectedRoute;
