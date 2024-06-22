import { Outlet } from 'react-router-dom';

function ProtectedRoute(): JSX.Element {
    return (
        <div>
            <Outlet />
        </div>
    );
}

export default ProtectedRoute;
