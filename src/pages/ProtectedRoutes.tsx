import { Outlet } from 'react-router-dom';

function ProtectedRoutes(): JSX.Element {
    return (
        <div>
            <Outlet />
        </div>
    );
}

export default ProtectedRoutes;
