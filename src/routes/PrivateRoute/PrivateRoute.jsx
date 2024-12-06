import React, { useContext } from 'react';

import { Navigate, useLocation } from 'react-router-dom';

import { AuthContext } from '../../component/AuthProvider/AuthProvider';
import Loading from '../../component/AuthProvider/Loading/Loading';

const PrivateRoute = ({ children }) => {
    const location = useLocation()
    const { user, loading } = useContext(AuthContext)
    if (loading) {
        return <Loading></Loading>
    }

    if (user) {
        return children
    }
    return <Navigate to="/login" state={location.pathname}></Navigate>

};

export default PrivateRoute;