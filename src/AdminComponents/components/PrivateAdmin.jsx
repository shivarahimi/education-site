import React from 'react';
import { Navigate, Outlet } from 'react-router';

const PrivateAdmin = () => {
    const adminStoToken = localStorage.getItem("admin-token")
    return ( 
        adminStoToken ? <Outlet/> : <Navigate to="/"/>
     );
}
 
export default PrivateAdmin;