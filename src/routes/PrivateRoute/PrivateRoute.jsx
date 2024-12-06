import React, { useContext } from 'react';

import { Navigate, useLocation } from 'react-router-dom';
import Loading from '../Loading/Loading';
import { AuthContext } from '../../component/AuthProvider/AuthProvider';

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