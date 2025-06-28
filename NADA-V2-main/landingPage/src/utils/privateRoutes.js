import React from 'react';
import { Navigate } from 'react-router-dom';
import { getAuth } from './auth';

const PrivateRoute = ({ component: Component, allowedRoles, ...rest }) => {
    const { token, role } = getAuth();

    if (!token) {
        return <Navigate to="/login" />;
    }

    if (!allowedRoles.includes(role)) {
        return <Navigate to="/" />;
    }

    return <Component {...rest} />;
};

export default PrivateRoute;
