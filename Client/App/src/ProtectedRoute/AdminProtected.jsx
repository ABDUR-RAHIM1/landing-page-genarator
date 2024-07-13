import React from 'react'
import { Navigate, Outlet } from 'react-router-dom';

export default function AdminProtected() {

    const login = - true;
    return (
        login ? <Outlet /> : <Navigate to={"/auth"} />
    )
}
