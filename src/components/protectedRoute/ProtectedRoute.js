import { useEffect } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';

const ProtectedRoute = (props) => {
    const navigate = useNavigate();
    useEffect(() => {
        if (!localStorage.getItem("token")) {
            navigate('/login');
        }
    }, [navigate]);

    if (!localStorage.getItem("token")) {
        return <Navigate to="/login" />;
    }
    return props.component;
};

export default ProtectedRoute;
