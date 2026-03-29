import React from 'react'
import Navbar from '../../common/Navbar'
import { Outlet } from 'react-router'

const MainLayout = () => {
    return (
        <div className='h-screen flex flex-col overflow-hidden'>
            <div className='flex-shrink-0'>
                <div className='max-w-[91vw] mx-auto'>
                    <Navbar />
                </div>
            </div>

            <div className='flex-1 overflow-hidden'>
                <Outlet />
            </div>

        </div>
    )
}

export default MainLayout
