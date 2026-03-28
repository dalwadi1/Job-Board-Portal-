import React from 'react'
import Navbar from '../../common/Navbar'
import { Outlet } from 'react-router'

const MainLayout = () => {
    return (
        <div className='w-full min-h-screen'>
            <div className='max-w-[91vw] mx-auto'>
                <Navbar />
            </div>
            <Outlet />
        </div>
    )
}

export default MainLayout
