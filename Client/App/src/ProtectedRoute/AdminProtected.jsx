import React from 'react'
import { Navigate, Outlet } from 'react-router-dom';
import { token } from '../App';

export default function AdminProtected() {


    return (
        token ? <Outlet /> : <Navigate to={"/auth"} />
    )
}
