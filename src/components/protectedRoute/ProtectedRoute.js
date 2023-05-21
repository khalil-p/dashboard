import { Navigate, Route } from 'react-router-dom';
const ProtectedRoute = ({ element: Component, ...rest }) => {
    const isAuthenticated = !!localStorage.getItem('token');
    if (isAuthenticated) {
        return <Route {...rest} element={<Component />} />;
    } else {
        return <Navigate to="/login" />;
    }
}
export default ProtectedRoute;
