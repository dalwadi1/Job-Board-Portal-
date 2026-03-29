import { Search } from 'lucide-react'
import React from 'react'

const Hero = () => {
    return (
        <div className='flex flex-col gap-3 items-center justify-center bg-gradient-to-br from-[#6C47FF] to-[#FF6B9D] p-2'>
            <h3 className='text-2xl text-white font-bold'>Find your dream job today</h3>
            <p className='text-gray-300'>1,200+ jobs from India's top companies. Apply in minutes.</p>
            <div className="py-2 px-4 w-full flex items-center justify-center">

                <div className="relative w-full sm:w-[80%] md:w-[60%] lg:w-[40%] xl:w-[30%]">

                    <input
                        type="text"
                        placeholder="job title, company, skills"
                        className="w-full bg-white px-10 py-2 border rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#6C47FF]"
                    />

                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />

                </div>

            </div>

            <div className='flex items-center justify-between gap-4 py-1'>
                <div className='p-2 text-center text-white'>
                    <h3>1.2k+</h3>
                    <p>live jobs</p>
                </div>
                <div className='p-2 text-center text-white'>
                    <h3>480+</h3>
                    <p>Companies</p>
                </div>
                <div className='p-2 text-center text-white'>
                    <h3>8.3k+</h3>
                    <p>Hired this month</p>
                </div>
            </div>
        </div>
    )
}

export default Hero
