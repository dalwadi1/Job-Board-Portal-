import React from 'react'
import { Outlet } from 'react-router'
import { Navigate } from 'react-router'

const AuthGaurad = () => {
    const userToken = localStorage.getItem('token') || null

    if (userToken) {
        return <Navigate to={'/'} replace />
    } else {
        return <Outlet />
    }
}

export default AuthGaurad
