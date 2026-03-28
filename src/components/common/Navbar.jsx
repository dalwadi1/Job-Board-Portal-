import { CircleUserRound } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router'

const Navbar = () => {
    return (
        <div className='max-w-[91vw] mx-auto py-4 sticky top-0 z-10'>
            <div className='flex items-center justify-between'>
                <h4 className="text-2xl font-bold bg-gradient-to-br from-[#6C47FF] to-[#FF6B9D] bg-clip-text text-transparent">
                    JobBoard
                </h4>
                <ul className='flex gap-4 items-center justify-between'>
                    <li className='cursor-pointer'>
                        <Link to={'/'}>Home</Link>
                    </li>
                    <li className='cursor-pointer'>
                        <Link to={'/jobs'}>Jobs</Link>
                    </li>
                    <li className='cursor-pointer'>
                        <Link to={'/companies'}>Companies</Link>
                    </li>
                    <li className='px-5 cursor-pointer'>
                        <Link to={'/login'}>
                            <CircleUserRound size={35} className='' color='#6C47FF' />
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar
